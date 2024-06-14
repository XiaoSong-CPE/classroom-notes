import { defineConfig } from "vitepress";

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
        items: [
          // 01 - 25. Mai. - 1精学 - Yuki.md
          {
            text: "01 - 25. Mai. - 1精学 - Yuki ⭐",
            link: "/01 - 25. Mai. - 1精学 - Yuki",
          },
          // 02 - 25. Mai. - 3素养 - Doris.md
          {
            text: "02 - 25. Mai. - 3素养 - Doris",
            link: "/02 - 25. Mai. - 3素养 - Doris",
          },
          // 03 - 25. Mai. - 3精学 - Aven.md
          {
            text: "03 - 25. Mai. - 3精学 - Aven",
            link: "/03 - 25. Mai. - 3精学 - Aven",
          },
          // 04 - 26. Mai. - 3精学 - Doris.md
          {
            text: "04 - 26. Mai. - 3精学 - Doris",
            link: "/04 - 26. Mai. - 3精学 - Doris",
          },
          // 05 - 26. Mai. - 3精学 - Cindy.md
          {
            text: "05 - 26. Mai. - 3精学 - Cindy",
            link: "/05 - 26. Mai. - 3精学 - Cindy",
          },
          // 06 - 26. Mai. - 3精学 - Charline.md
          {
            text: "06 - 26. Mai. - 3精学 - Charline",
            link: "/06 - 26. Mai. - 3精学 - Charline",
          },
          // 07 - 1. Jun. - 3睿学 - Rick.md
          {
            text: "07 - 1. Jun. - 3睿学 - Rick",
            link: "/07 - 1. Jun. - 3睿学 - Rick",
          },
          // 08 - 1. Jun. - 1好学 - Miriam.md
          {
            text: "08 - 1. Jun. - 1好学 - Miriam ⭐",
            link: "/08 - 1. Jun. - 1好学 - Miriam",
          },
          // 09 - 1. Jun. - 2睿学 - Jackie.md
          {
            text: "09 - 1. Jun. - 2睿学 - Jackie",
            link: "/09 - 1. Jun. - 2睿学 - Jackie",
          },
          // 10 - 2. Jun. - 3睿学 - Kat.md
          {
            text: "10 - 2. Jun. - 3睿学 - Kat",
            link: "/10 - 2. Jun. - 3睿学 - Kat",
          },
          // 11 - 2. Jun. - 2精学 - Icey.md
          {
            text: "11 - 2. Jun. - 2精学 - Icey",
            link: "/11 - 2. Jun. - 2精学 - Icey",
          },
          // 12 - 2. Jun. - 2睿学 - Ariana.md
          {
            text: "12 - 2. Jun. - 2睿学 - Ariana",
            link: "/12 - 2. Jun. - 2睿学 - Ariana",
          },
          // 13 - 8. Jun. - 1精学 - Miriam.md
          {
            text: "13 - 8. Jun. - 1精学 - Miriam ⭐",
            link: "/13 - 8. Jun. - 1精学 - Miriam",
          },
          // 14 - 8. Jun. - 2精学 - Jackie.md
          {
            text: "14 - 8. Jun. - 2精学 - Jackie",
            link: "/14 - 8. Jun. - 2精学 - Jackie",
          },
          // 15 - 8. Jun. - 3好学 - Charline.md
          {
            text: "15 - 8. Jun. - 3好学 - Charline",
            link: "/15 - 8. Jun. - 3好学 - Charline",
          },
          // 16 - 9. Jun. - 3精学 - Doris.md
          {
            text: "16 - 9. Jun. - 3精学 - Doris",
            link: "/16 - 9. Jun. - 3精学 - Doris",
          },
          // 17 - 9. Jun. - 1精学 - Karrie.md
          {
            text: "17 - 9. Jun. - 1精学 - Karrie",
            link: "/17 - 9. Jun. - 1精学 - Karrie",
          },
          // 18 - 9. Jun. - 1好学 - Icey.md
          {
            text: "18 - 9. Jun. - 1好学 - Icey",
            link: "/18 - 9. Jun. - 1好学 - Icey",
          },
        ],
      },
      {
        text: "Lectures",
        items: [
          // 家长常见问题沙盘演练.md
          {
            text: "家长常见问题沙盘演练",
            link: "/家长常见问题沙盘演练",
          },
          // 小学英语课程体系.md
          {
            text: "小学英语课程体系",
            link: "/小学英语课程体系",
          },
          // 新生转化指引.md
          {
            text: "新生转化指引",
            link: "/新生转化指引",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
