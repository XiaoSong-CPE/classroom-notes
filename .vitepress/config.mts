import { defineConfig } from "vitepress";

import fs from "fs";
import path from "path";

function listGen(dir: string) {
  return fs
    .readdirSync(path.resolve(__dirname, dir))
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      let fileNameWithoutExt = file.substring(0, file.length - 3);
      // remove date prefix if exists
      // e.g. `20240614 家长常见问题沙盘演练 ⭐` => `家长常见问题沙盘演练 ⭐`
      let text = fileNameWithoutExt.match(/^\d{8} /)
        ? fileNameWithoutExt.substring(9)
        : fileNameWithoutExt;
      return {
        text: text,
        link: `/${dir}/${fileNameWithoutExt}`,
      };
    });
}

// list all notes files in src/classroom-notes
const classroomNotesList = listGen("../src/classroom-notes");

// list all notes files in src/lecture-notes
const lectureNotesList = listGen("../src/lecture-notes");

// list all notes files in src/lesson-plans
const lessonPlansList = listGen("../src/lesson-plans");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/classroom-notes/",
  title: "Classroom Notes",
  description: "The lessons I met at Skyedu",
  cleanUrls: true,
  // lastUpdated: true,
  // rewrites: {
  //   "src/:path/:file": ":path/:file",
  // },
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Classroom Notes",
        items: classroomNotesList,
      },
      {
        text: "Lectures",
        items: lectureNotesList,
      },
      {
        text: "Lesson Plans",
        items: lessonPlansList,
      },
    ],
    sidebar: {
      "/classroom-notes/": [
        {
          text: "Classroom Notes",
          items: classroomNotesList,
        },
      ],
      "/lecture-notes/": [
        {
          text: "Lectures",
          items: lectureNotesList,
        },
      ],
      "/lesson-plans/": [
        {
          text: "Lesson Plans",
          items: lessonPlansList,
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
