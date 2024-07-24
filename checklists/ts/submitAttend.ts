import token from "./token";

interface SubmitAttendParams {
  attendanceId: string;
  studAttId: string;
  // attendanceStatus 0: unknown, 1: attended, 2: absent
  attendanceStatus: 0 | 1 | 2;
}

async function submitAttend(params: SubmitAttendParams): Promise<{
  code: number;
  info: string;
  data: string;
}> {
  let { attendanceId, studAttId, attendanceStatus } = params;

  let options = {
    method: "POST",
    hostname: "api.tmwcc.cn",
    path: "/attendance/att/eduCourseAttendance/submit/1/911864/2024-07-15",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language":
        "de-DE,de;q=0.9,zh-CN;q=0.8,zh;q=0.7,en-GB;q=0.6,en;q=0.5",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Content-Type": "application/json;charset=UTF-8",
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
  let postData = JSON.stringify([
    {
      attendanceId: attendanceId,
      studAttId: studAttId,
      attendanceStatus: attendanceStatus,
      studMakeupId: null,
      attendanceType: 0,
    },
  ]);
  let response = await fetch(
    "https://api.tmwcc.cn/attendance/att/eduCourseAttendance/submit/1/911864/2024-07-15",
    {
      ...options,
      body: postData,
    }
  );
  let data = (await response.json()) as {
    code: number;
    info: string;
    data: string;
  };
  //   console.log(data);
  return data;
}

export default submitAttend;
