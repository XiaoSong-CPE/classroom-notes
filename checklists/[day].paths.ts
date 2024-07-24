import xlsx from "xlsx";
import path from "path";
import getAttendInfo from "./ts/getAttendInfo";
import submitAttend from "./ts/submitAttend";

// import the xlsx file
let workbook = xlsx.readFile(path.join(__dirname, "[day].xlsx"));
let students_info = (
  xlsx.utils.sheet_to_json(workbook.Sheets["students"]) as {
    name_zh: string;
    name_en: string;
    studentID: string | undefined;
    startFrom: number;
    paid_number_of_courses: number;
    level: "beginner" | "advanced";
    class_time: "9:00" | "10:45" | "16:15";
    attendance: string | undefined;
    homework: string | undefined;
    note: string | undefined;
  }[]
).map((item) => {
  return {
    name_zh: item.name_zh,
    name_en: item.name_en,
    studentID: item.studentID ? new String(item.studentID).trim() : undefined,
    startFrom: new Number(item.startFrom).valueOf(),
    paid_number_of_courses: item.paid_number_of_courses,
    level: item.level,
    class_time: item.class_time,
    attendance: item.attendance?.split(",").map(Number),
    homework: item.homework?.split(",").map(Number),
    note: item.note,
  };
});
type LessonChecklist = {
  name_zh: string;
  name_en: string;
  attendance: boolean;
  homework: boolean;
};
type DailyChecklist = {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  "9:00": LessonChecklist[];
  "10:45": LessonChecklist[];
  "16:15": LessonChecklist[];
};

let daily_checklists: DailyChecklist[] = await (async () => {
  let res: DailyChecklist[] = [];

  // loop 12 days
  for (let index = 0; index < 12; index++) {
    let day = (index + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    let classes: DailyChecklist = {
      day: day,
      "9:00": [],
      "10:45": [],
      "16:15": [],
    };
    // loop students
    for (let student of students_info) {
      // if the biggest attendance day is smaller than `day`, and the number of attendance day is larger than `paid_number_of_courses`
      // then the student should not be ignore (as they don't have more lessons to attend)
      if (
        student.attendance &&
        student.attendance.length >= student.paid_number_of_courses &&
        Math.max(...student.attendance) < day
      ) {
        continue;
      }
      // if current `day` is smaller than `startFrom`, then the student should not be ignore
      if (student.startFrom > day) {
        continue;
      }
      // push info
      classes[student.class_time].push({
        name_zh: student.name_zh,
        name_en: student.name_en,
        attendance: student.attendance?.includes(day) || false,
        homework: student.homework?.includes(day) || false,
      });
      // sync attendance to skyedu system
      if (student.studentID === undefined) {
        continue;
      }
      let attendInfoList = await getAttendInfo(student.studentID);
      let attendInfo = attendInfoList.find((item) => item.classNo === day);
      if (attendInfo === undefined) {
        console.log(`Student ${student.name_en} ${student.name_zh} (${student.studentID}) not found in day ${day}`);
        continue
      }
      // if (attendInfo.attendanceStatus === 1) {
      //   continue;
      // }
      if (student.attendance && student.attendance?.includes(day)) {
        let result = await submitAttend({
          attendanceId: attendInfo.attendanceId.toString(),
          studAttId: attendInfo.studAttId.toString(),
          attendanceStatus: 1,
        });
        console.log(result);
      } else {
        let result = await submitAttend({
          attendanceId: attendInfo.attendanceId.toString(),
          studAttId: attendInfo.studAttId.toString(),
          attendanceStatus: 2,
        });
        console.log(result);
      }
    }
    res.push(classes);
  }
  return res;
})();

/*
example of students_info
    {
    name_zh: '路一凡',
    name_en: 'Lucas',
    studentID: '294592',
    startFrom: '1',
    paid_number_of_courses: 12,
    level: 'beginner',
    class_time: 0.6979166666666666,
    attendance: '1,2,3,4,5,6',
    homework: '1,2,3,4,5,6',
    note: 'Aa,Ee,Gg,Nn,Rr,Vv'
  }[]
*/

export default {
  paths() {
    return daily_checklists.map((item) => {
      // console.log(item);
      return {
        params: item,
      };
    });
  },
};
