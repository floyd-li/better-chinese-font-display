// ==UserScript==
// @name        更好的中文字体显示
// @name:en     Better Chinese Font Display
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Floyd Li
// @license     MIT
// @description 将网页上的中文字体默认展示为非衬线字体，匹配各平台上最优字体，为您带来最优的中文显示效果。
// @description:en Change the font on the page is to display as non-serif font, matching the best font on each platform to bring you the best Chinese display experience.
// ==/UserScript==
(function() {
    const styles = `
<style>
  *{
      font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }
</style>
`
    document.head.insertAdjacentHTML("beforeend", styles)
})()
