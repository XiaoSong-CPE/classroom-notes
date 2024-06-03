import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Classroom Notes",
  description: "The lessons I met at Skyedu",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
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
            link: "/10 - 2. Jun. - 3睿学 - Kat"
          },
          // 11 - 2. Jun. - 2精学 - Icey.md
          {
            text: "11 - 2. Jun. - 2精学 - Icey",
            link: "/11 - 2. Jun. - 2精学 - Icey"
          },
          // 12 - 2. Jun. - 2睿学 - Ariana.md
          {
            text: "12 - 2. Jun. - 2睿学 - Ariana",
            link: "/12 - 2. Jun. - 2睿学 - Ariana"
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
