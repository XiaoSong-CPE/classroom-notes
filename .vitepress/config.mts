import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Classroom Notes",
  description: "The lessons I met at Skyedu",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Notes",
        items: [
          // 25. Mai - 1精学 - Yuki.md
          {
            text: "25. Mai - 1精学 - Yuki ⭐",
            link: "/25. Mai - 1精学 - Yuki",
          },
          // 25. Mai - 3精学 - Aven.md
          {
            text: "25. Mai - 3精学 - Aven",
            link: "/25. Mai - 3精学 - Aven",
          },
          // 25. Mai - 3素养 - Doris.md
          {
            text: "25. Mai - 3素养 - Doris",
            link: "/25. Mai - 3素养 - Doris",
          },
          // 26. Mai - 3精学 - Charline.md
          {
            text: "26. Mai - 3精学 - Charline",
            link: "/26. Mai - 3精学 - Charline",
          },
          // 26. Mai - 3精学 - Cindy.md
          {
            text: "26. Mai - 3精学 - Cindy",
            link: "/26. Mai - 3精学 - Cindy",
          },
          // 26. Mai - 3精学 - Doris.md
          {
            text: "26. Mai - 3精学 - Doris",
            link: "/26. Mai - 3精学 - Doris",
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
