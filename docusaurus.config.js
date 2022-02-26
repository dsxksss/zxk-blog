// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ZXK的个人技术博客",
  url: "https://zxk-blog.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dsxksss", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        blog: {
          showReadingTime: true,
          postsPerPage: 10, //一页最多允许多少篇博客
          blogSidebarCount: 5, //侧边栏显示个数
          // Please change this to your repo.
          routeBasePath: "/",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "🐱ZXK的博客网站🐱",
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/dsxksss",
            label: "我的GitHub主页",
            position: "right",
          },
        ],
      },
      // announcementBar: {
      //   id: "support_us",
      //   content: "此博客是利用docusaurusV2框架搭建",
      //   backgroundColor: "#29d5b0",
      //   textColor: "white",
      //   isCloseable: true,
      // },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} ZXKBLOG`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
