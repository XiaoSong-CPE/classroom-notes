import token from "./token";

interface AttendanceInfo {
  studAttId: number;
  attendanceId: number;
  studentName: string;
  studentCode: string;
  periodName: string;
  courseName: string;
  teacherNames: string;
  academicStaffName: string;
  classNo: number;
  shouldClassTime: string;
  realClassTime: string;
  studentRealClassTime: string;
  beginMinute: number;
  endMinute: number;
  classTime: string;
  classState: number;
  classStateName: string;
  attendanceStatus: number;
  attendanceStatusName: string;
  courseAttendanceStatus: number;
  studMakeupId: null | number;
  makeUpType: number;
  otherTitle: string;
  attendanceTime: null | string;
  operator: string;
  canAttOperate: boolean;
}

interface AttendanceResponse {
  code: number;
  info: string;
  data: {
    rows: AttendanceInfo[];
    total: number;
    page: number;
    records: number;
  };
}

async function getAttendInfo(studentId: string): Promise<AttendanceInfo[]> {
  let options = {
    method: "GET",
    hostname: "api.tmwcc.cn",
    path: `/attendance/att/eduStudentAttendance/page?businessCompanyId=4&studentId=${studentId}&page=1&rows=999&attendanceStatus=&shouldClassTimeQRange=2024-07-15%2520-%25202024-08-10&selSource=2`,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language":
        "de-DE,de;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en;q=0.5",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      DNT: "1",
      Origin: "https://crm.tmwcc.cn",
      Pragma: "no-cache",
      Referer: "https://crm.tmwcc.cn/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Edg/126.0.0.0",
      "sec-ch-ua":
        '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": '"Android"',
      token: token,
    },
    maxRedirects: 20,
  };
  let response = await fetch(
    `https://api.tmwcc.cn/attendance/att/eduStudentAttendance/page?businessCompanyId=4&studentId=${studentId}&page=1&rows=999&attendanceStatus=&shouldClassTimeQRange=2024-07-15%2520-%25202024-08-10&selSource=2`,
    options
  );
  let data = (await response.json()) as AttendanceResponse;
  // if failed, provide the error message
  if (data.code !== 200) {
    throw new Error(data.info);
  }
  return data.data.rows;
}

export default getAttendInfo;
