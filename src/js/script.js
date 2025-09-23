
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mv",
      start: "top top",
      end: "+=200%",     // 1画面分で切り替え
      scrub: true,
      pin: ".mv__container", // コンテナを固定
      anticipatePin: 1
    }
  });

  // 左カラムと右タイトルを消す
  tl.to(".mv-detail, .mv-main__title, .mv-main__description", {
    opacity: 0,
    duration: 0.5,
    ease: "none"
  }, 0);

  // 中央の mv-main をブラー
  tl.to(".mv-main", {
    filter: "blur(10px)",
    duration: 1,
    ease: "none"
  }, 1);

  // テキストをふわっと表示
  tl.to(".mv-lead__text", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out"
  }, 2);
});
