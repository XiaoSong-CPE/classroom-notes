import xlsx from "xlsx";
import path from "path";
import getAttendInfo from "./ts/getAttendInfo";
import submitAttend from "./ts/submitAttend";
import dayjs from "dayjs";

// import the xlsx file
let workbook = xlsx.readFile(path.join(__dirname, "[day].xlsx"));
let studentsInfo = (
  xlsx.utils.sheet_to_json(workbook.Sheets["students"]) as {
    // basic info
    nameZh: string;
    nameEn: string;
    studentID: string | undefined;
    // phase 1 info
    p1_startFrom: number | undefined;
    p1_paidNumberOfCourses: number | undefined;
    p1_level: "beginner" | "advanced" | undefined;
    p1_classTime: "9:00" | "10:45" | "14:30" | "16:15" | undefined;
    p1_attendance: number | string | undefined;
    p1_homework: number | string | undefined;
    p1_note: string | undefined;
    // phase 2 info
    p2_startFrom: number | undefined;
    p2_paidNumberOfCourses: number | undefined;
    p2_level: "beginner" | "advanced" | undefined;
    p2_classTime: "9:00" | "10:45" | "14:30" | "16:15" | undefined;
    p2_attendance: number | string | undefined;
    p2_homework: number | string | undefined;
    p2_note: string | undefined;
  }[]
).map((item) => {
  return {
    nameZh: item.nameZh,
    nameEn: item.nameEn,
    studentID: item.studentID ? new String(item.studentID).trim() : undefined,
    p1: {
      startFrom: item.p1_startFrom
        ? new Number(item.p1_startFrom).valueOf()
        : undefined,
      paidNumberOfCourses: item.p1_paidNumberOfCourses,
      level: item.p1_level,
      classTime: item.p1_classTime,
      attendance: item.p1_attendance
        ? String(item.p1_attendance).split(",").map(Number)
        : undefined,
      homework: item.p1_homework
        ? String(item.p1_homework).split(",").map(Number)
        : undefined,
      note: item.p1_note,
    },
    p2: {
      startFrom: item.p2_startFrom
        ? new Number(item.p2_startFrom).valueOf()
        : undefined,
      paidNumberOfCourses: item.p2_paidNumberOfCourses,
      level: item.p2_level,
      classTime: item.p2_classTime,
      attendance: item.p2_attendance
        ? String(item.p2_attendance).split(",").map(Number)
        : undefined,
      homework: item.p2_homework
        ? String(item.p2_homework).split(",").map(Number)
        : undefined,
      note: item.p2_note,
    },
  };
});
console.log(studentsInfo);
type LessonChecklist = {
  nameZh: string;
  nameEn: string;
  attendance: boolean;
  homework: boolean;
  homeworkTimes: number;
};
type DailyChecklist = {
  phase: 1 | 2;
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  "9:00": LessonChecklist[];
  "10:45": LessonChecklist[];
  "14:30": LessonChecklist[];
  "16:15": LessonChecklist[];
};

let dailyChecklists: DailyChecklist[] = await (async () => {
  let res: DailyChecklist[] = [];

  // loop 2 phases
  for (const phase of [1, 2] as const) {
    // loop 12 days
    for (let index = 0; index < 12; index++) {
      let day = (index + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
      let classes: DailyChecklist = {
        phase: phase,
        day: day,
        "9:00": [],
        "10:45": [],
        "14:30": [],
        "16:15": [],
      };
      // loop students
      for (let student of studentsInfo) {
        console.log(
          `Phase ${phase} Day ${day} Student ${student.nameEn} ${student.nameZh}`
        );
        // if no `paidNumberOfCourses`, then the student should not be ignore
        if (student["p" + phase].paidNumberOfCourses === undefined) {
          continue;
        }
        // if the biggest attendance day is smaller than `day`, and the number of attendance day is larger than `paidNumberOfCourses`
        // then the student should not be ignore (as they don't have more lessons to attend)
        if (
          student["p" + phase].attendance &&
          student["p" + phase].attendance.length >=
            student["p" + phase].paidNumberOfCourses &&
          Math.max(...student["p" + phase].attendance) < day
        ) {
          console.log("ignored because of no more lessons to attend");
          continue;
        }
        // if current `day` is smaller than `startFrom`, then the student should not be ignore
        if (student["p" + phase].startFrom > day) {
          console.log("ignored because of waiting for start");
          continue;
        }
        // push info
        classes[student["p" + phase].classTime].push({
          nameZh: student.nameZh,
          nameEn: student.nameEn,
          attendance: student["p" + phase].attendance?.includes(day) || false,
          homework: student["p" + phase].homework?.includes(day) || false,
          homeworkTimes: student["p" + phase].homework?.length || 0,
        });
        // sync attendance to skyedu system
        if (student.studentID === undefined) {
          console.log("Student ID not found");
          continue;
        }
        let attendInfoList = await getAttendInfo(student.studentID);
        let attendInfo = attendInfoList.find((item) => {
          let courseNameList = {
            p1: {
              "9:00": "E3-7X1",
              "10:45": "E5-7Y1",
              "14:30": "",
              "16:15": "E5-7Y2",
            },
            p2: {
              "9:00": "E3-7X5",
              "10:45": "",
              "14:30": "",
              "16:15": "",
            },
          };
          let courseName =
            courseNameList["p" + phase][student["p" + phase].classTime];
          return item.classNo === day && item.courseName === courseName;
        });
        if (attendInfo === undefined) {
          console.log(
            `Student ${student.nameEn} ${student.nameZh} (${student.studentID}) not found in day ${day}`
          );
          continue;
        }
        if (
          student["p" + phase].attendance &&
          student["p" + phase].attendance?.includes(day) &&
          // `shouldClassTime` is a date and should be earlier or equal to current date
          !dayjs(attendInfo.shouldClassTime).isAfter(dayjs())
        ) {
          // confirm attendance
          console.log("confirm attendance");
          if (attendInfo.attendanceStatus !== 1) {
            let result = await submitAttend({
              attendanceId: attendInfo.attendanceId.toString(),
              studAttId: attendInfo.studAttId.toString(),
              attendanceStatus: 1,
            });
            console.log(result);
          }
        } else if (
          // if `shouldClassTime` is a date that is after current date
          dayjs(attendInfo.shouldClassTime).isAfter(dayjs())
        ) {
          // confirm waiting
          console.log("confirm waiting");
          if (attendInfo.attendanceStatus !== 0) {
            let result = await submitAttend({
              attendanceId: attendInfo.attendanceId.toString(),
              studAttId: attendInfo.studAttId.toString(),
              attendanceStatus: 0,
            });
            console.log(result);
          }
        } else {
          // confirm absent
          console.log("confirm absent");
          if (attendInfo.attendanceStatus !== 2) {
            let result = await submitAttend({
              attendanceId: attendInfo.attendanceId.toString(),
              studAttId: attendInfo.studAttId.toString(),
              attendanceStatus: 2,
            });
            console.log(result);
          }
        }
      }

      // sort by name
      classes["9:00"].sort((a, b) => a.nameEn.localeCompare(b.nameEn));
      classes["10:45"].sort((a, b) => a.nameEn.localeCompare(b.nameEn));
      classes["14:30"].sort((a, b) => a.nameEn.localeCompare(b.nameEn));
      classes["16:15"].sort((a, b) => a.nameEn.localeCompare(b.nameEn));
      res.push(classes);
    }
  }

  return res;
})();
// console.log(dailyChecklists);

export default {
  paths() {
    return dailyChecklists.map((item) => {
      // console.log(item);
      return {
        params: item,
      };
    });
  },
};
