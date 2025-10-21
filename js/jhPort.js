$(function () {
  var swiperWeb = new Swiper(".projectWeb", {
    spaceBetween: 0,
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".web-next",
      prevEl: ".web-prev",
    },
  });

  /* tab */
  const tabBtns = document.querySelectorAll("#design .tabMenu .tab-btn");
  const tabItems = document.querySelectorAll("#design .tabList > li");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.dataset.target;

      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabItems.forEach((item) => {
        item.classList.toggle("active", item.dataset.group === target);
      });
    });
  });

  /* 탭 이미지 슬라이더*/
  var swiper = new Swiper(".tabSwiper", {
    slidesPerView: 5.5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-buttonNext",
      prevEl: ".swiper-buttonPrev",
    },
  });

  // SKILLS 애니메이션
  const circle = document.querySelector(".skills-track");
  const articles = circle.querySelectorAll(".aboutText");
  //console.log(articles)

  /* 
    style.animationPlayState
    - css 애니메이션을 재생하거나 멈추는 상태를 제어하는 속성
    - 멈춤 : paused / 재생 : running
  */

  for (let article of articles) {
    article.addEventListener("mouseenter", function (e) {
      circle.style.animationPlayState = "paused";
    });

    article.addEventListener("mouseleave", function (e) {
      circle.style.animationPlayState = "running";
    });
  }

  // 순서대로 나타나는 태그
  const tags = document.querySelectorAll(".aboutTag li");

  for (let i = 0; i < tags.length; i++) {
    const keyframes = {
      opacity: [0, 1],
    };
    const options = {
      duration: 1800,
      delay: i * 600,
      fill: "forwards", //애니메이션 끝난 상태를 유지
    };
    tags[i].animate(keyframes, options);
  }

  // AOS
  AOS.init();
});

/* 디자인 모달창 */
$(function () {
  $('.swiper-slide > a[data-target]').on('click', function (e) {
    e.preventDefault();
    const targetPopup = $(this).data('target');
    if (!targetPopup) return;

    $('.popup_base').hide().css('height', $(document).height());
    $(targetPopup).css('display','flex');
  });

  // dim 클릭 → 닫기
  $('.popup_base').on('click', function () {
    $(this).hide();
  });

  // 내용 클릭 → 닫힘 방지
  $('.popup_base .pop_container').on('click', function (e) {
    e.stopPropagation();
  });

  // 닫기 버튼
  $('.popup_base .btn_x a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.popup_base').hide();
  });
});