/**
 * @Author       : Pancake
 * @Date         : 2022-04-05 19:20:15
 * @LastEditTime : 2022-04-10 02:13:40
 * @LastEditors  : Pancake
 * @FilePath     : \Pancake-Q\docs\.vuepress\config.js
 * @Description  : config 文件
 */
module.exports = {
  base: "/",
  title: "Pancake-Q",
  description: "Pancake-Q 知识沉淀",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Pancake-Q 的 JavaScript 博客",
        items: [
          { text: "Github", link: "" },
          { text: "掘金", link: "" },
        ],
      },
    ],
    sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
  },
};
