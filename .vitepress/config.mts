import { defineConfig } from "vitepress";

import fs from "fs";
import path from "path";

function listGen(dir: string) {
  return fs
    .readdirSync(path.resolve(__dirname, dir))
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      let title = file.substring(0, file.length - 3);
      return {
        text: title,
        link: `/${dir}/${title}`,
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
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Notes",
        items: classroomNotesList,
      },
      {
        text: "Lesson Plans",
        items: lessonPlansList,
      },
      {
        text: "Lectures",
        items: lectureNotesList,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
