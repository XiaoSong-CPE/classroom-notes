import { defineConfig } from "vitepress";

import fs from "fs";
import path from "path";

// list all notes files in src/classroom-notes
const classroomNotesDir = path.resolve(__dirname, "../src/classroom-notes");
const classroomNotesFiles = fs.readdirSync(classroomNotesDir);
const classroomNotesList = classroomNotesFiles.map((file) => {
  let title = file.substring(0, file.length - 3);
  return {
    text: title,
    link: `/src/classroom-notes/${title}`,
  };
});

// list all notes files in src/lecture-notes
const lectureNotesDir = path.resolve(__dirname, "../src/lecture-notes");
const lectureNotesFiles = fs.readdirSync(lectureNotesDir);
const lectureNotesList = lectureNotesFiles.map((file) => {
  let title = file.substring(0, file.length - 3);
  return {
    text: title,
    link: `/src/lecture-notes/${title}`,
  };
});

// list all notes files in src/lesson-plans
const lessonPlansDir = path.resolve(__dirname, "../src/lesson-plans");
const lessonPlansFiles = fs.readdirSync(lessonPlansDir);
const lessonPlansList = lessonPlansFiles.map((file) => {
  let title = file.substring(0, file.length - 3);
  return {
    text: title,
    link: `/src/lesson-plans/${title}`,
  };
});

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
