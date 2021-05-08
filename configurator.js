import $ from "jquery";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (
  window.navigator.platform != "mac68k" ||
  window.navigator.platform != "MacPPC" ||
  window.navigator.platform != "MacIntel" ||
  window.navigator.platform != "iPhone" ||
  window.navigator.platform != "IPad"
) {
  if (window.innerWidth >= 1024) {
    $(".material").css({ marginLeft: "-4px" });
  }
}

//material steps arr

let initialSteps = [
  "Wood",
  "Size",
  "Shape",
  "Wood-Color",
  "Legs",
  "Legs-Material",
];

//material steps arr

let initialState = {
  material: [
    {
      id: 1,
      name: "Walnayt",
      img: "images/1.png",
      price: "30",
    },
    {
      id: 2,
      name: "Oak",
      img: "images/2.png",
      price: "40",
    },
    {
      id: 3,
      name: "Maple",
      img: "images/3.png",
      price: "10",
    },
    {
      id: 4,
      name: "Maple",
      img: "images/3.png",
      price: "10",
    },
    {
      id: 5,
      name: "Oak",
      img: "images/2.png",
      price: "40",
    },
    {
      id: 6,
      name: "Walnayt",
      img: "images/1.png",
      price: "30",
    },
  ],
  size: [
    {
      id: 1,
      name: "Type1",
      value: "100х50х50 (cm) / 39х19х19 (in)",
      price: "10",
    },
    {
      id: 2,
      name: "Type2",
      value: "130х50х50 (cm) / 51х19х19 (in)",
      price: "10",
    },
    {
      id: 3,
      name: "Type3",
      value: "120х60х50 (cm) / 47х23х19 (in)",
      price: "230",
    },
    {
      id: 4,
      name: "Type4",
      value: "150х60х50 (cm) / 50х34х21 (in)",
      price: "230",
    },
  ],
  shape: [
    {
      id: 1,
      name: "Round",
      img: "images/circle.svg",
      price: "10",
    },
    {
      id: 2,
      name: "Square",
      img: "images/squre.svg",
      price: "10",
    },
    {
      id: 3,
      name: "Rectangle",
      img: "images/rectangel.svg",
      price: "230",
    },
  ],
  color: [
    {
      id: 1,
      name: "Navy",
      img: "images/color1.png",
      price: "10",
    },
    {
      id: 2,
      name: "Azure",
      img: "images/color2.png",
      price: "10",
    },
    {
      id: 3,
      name: "Black",
      img: "images/color3.png",
      price: "230",
    },
    {
      id: 4,
      name: "Emerald",
      img: "images/color4.png",
      price: "230",
    },
  ],
  legs: [
    {
      id: 1,
      name: "Legs 1",
      img: "images/legs.png",
      price: "10",
    },
    {
      id: 2,
      name: "Legs 2",
      img: "images/legs2.png",
      price: "10",
    },
    {
      id: 3,
      name: "Legs 3",
      img: "images/legs3.png",
      price: "230",
    },
    {
      id: 4,
      name: "Legs 4",
      img: "images/legs4.png",
      price: "230",
    },
    {
      id: 5,
      name: "Legs 5",
      img: "images/legs5.png",
      price: "230",
    },
    {
      id: 6,
      name: "Legs 6",
      img: "images/legs6.png",
      price: "230",
    },
    {
      id: 7,
      name: "Legs 7",
      img: "images/legs7.png",
      price: "230",
    },
    {
      id: 8,
      name: "Legs 8",
      img: "images/legs8.png",
      price: "230",
    },
  ],
  legs_material: [
    {
      id: 1,
      name: "Steel",
      img: "images/gv1.png",
      price: "10",
    },
    {
      id: 2,
      name: "Stainless steel",
      img: "images/gv2.png",
      price: "10",
    },
  ],
};

if (document.querySelector(".constructor")) {
  $.each(initialSteps, function (index, step) {
    prefixName(step, index);
  });

  function prefixName(step, index) {
    new Swiper(`.${step}-swiper-container`, {
      slidesPerView: "auto",
      watchSlidesVisibility: true,
      loop: false,
      speed: 700,
      direction: "horizontal",

      navigation: {
        nextEl: `.material__prev-${step}`,
        prevEl: `.material__next-${step}`,
      },
      breakpoints: {
        375: {
          slidesOffsetAfter: 80,
          slidesPerView: "auto",
        },
        414: {
          slidesOffsetAfter: 80,
          slidesPerView: "auto",
        },

        768: {
          slidesOffsetAfter: 80,
          slidesPerView: "auto",
        },
        1025: {
          slidesPerView: "auto",
          slidesOffsetAfter: 80,
        },
      },
    });
  }

  $(".stage").each(function (index) {
    let ch_step = `<div class="constructor__choice" data-number=${
      index + 1
    }></div>`;
    $(ch_step).appendTo(".chosen-wrapper");
  });

  $(".material__item").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).css("pointer-events", "none");
      setTimeout(() => {
        $(this).css("pointer-events", "all");
      }, 600);
      $(this)
        .parent(".material__inner")
        .find(".material__item")
        .removeClass("active");
      $(this).addClass("active");
      $(this)
        .parent(".material__inner")
        .find(".current-flag")
        .removeClass("active");

      let numCont = $(this).parents(".material__wrapper")[0].dataset.mat;
      $(this).find(".current-flag").addClass("active");
      let matName = $(this).find(".material__item-name")[0].dataset.mat_name;
      let matVar = $(".stage.active").find(".stage__material")[0].dataset
        .number_name;
      let matNumber = $(".stage.active").find(".stage__number")[0].dataset
        .stage_number;

      let id = $(this).data("id");
      let matPrice = $(this).find(".configurate-price")[0].dataset.price;

      lastStage(numCont);
      makeConfig(matVar, matName, matPrice, matNumber, id);
    });
  });

  function lastStage(num) {
    let newNum = +num - 1;
    let stages = document.querySelectorAll(".stage");

    stages.forEach((el, i) => {
      if (i == newNum) {
        el.classList.add("activeStage");
      }
    });
    if (stages.length == num) {
      gsap.to($(".last_circle"), {
        duration: 0.5,
        fill: "rgba(255, 255, 255, 1)",
      });
      gsap.to($(".last_number"), {
        duration: 0.5,
        opacity: 1,
        color: "rgba(0, 0, 0, 1)",
        delay: 0.3,
      });
    }
  }

  let matNum = null;
  let flag_p = true;
  function makeConfig(mat, name, price, number, id) {
    if (matNum != number) {
      $(".constructor__choice").each(function (index) {
        if ($(this).data("number") == number) {
          if ($(this).hasClass("create_c")) {
            flag_p = false;
            sumPrice(price, id, flag_p, number);
            $(".constructor__choice").each(function (index) {
              if ($(this).data("number") == number) {
                $(this).find(".choice-name").text(name);
              }
            });
          } else {
            flag_p = true;
            sumPrice(price, id, flag_p, number);
            $(this).removeClass("choice-error");
            $(this).addClass("create_c");
            let conf = `<div class="choice-category" data-flag_id="${id}">${mat}</div> :
       <span class="choice-name">${name}</span><div class="button-choice">(x)</div>`;
            $(this).html(conf);
          }

          setTimeout(function () {
            moveNext(number);
          }, 400);
        }
      });

      matNum = number;
    } else if (matNum == number) {
      $(".constructor__choice").each(function (index) {
        if ($(this).data("number") == number) {
          if ($(this).hasClass("create_c")) {
            flag_p = false;
            sumPrice(price, id, flag_p, number);

            $(this).find(".choice-name").text(name);
          } else {
            flag_p = true;
            sumPrice(price, id, flag_p, number);
            $(this).removeClass("choice-error");
            $(this).addClass("create_c");
            let conf = `<div class="choice-category" data-flag_id="${id}">${mat}</div> :
         <span class="choice-name">${name}</span><div class="button-choice">(x)</div>`;
            $(this).html(conf);
          }
        }
      });

      setTimeout(function () {
        moveNext(number);
      }, 400);
    }
  }

  let new_costs = 0;
  let new_price = 0;
  let arr_costs = [
    { id_el: null, price: 0 },
    { id_el: null, price: 0 },
    { id_el: null, price: 0 },
    { id_el: null, price: 0 },
    { id_el: null, price: 0 },
    { id_el: null, price: 0 },
  ];
  let oldPrice = 0;

  function sumPrice(price, id, flag_p, number_st) {
    if (flag_p == true) {
      let total = $(".currency-cost").html();
      new_price = +price;
      let el = {
        id_el: id,
        price: new_price,
      };
      let parseNum = +number_st;
      let newNum = parseNum - 1;

      arr_costs[newNum] = el;
    } else if (flag_p == false) {
      new_price = +price;
      let el = {
        id_el: id,
        price: new_price,
      };
      let parseNum = +number_st;
      let newNum = parseNum - 1;

      arr_costs[newNum] = el;
    }

    writeSum();

    let numNull = 0;
    arr_costs.filter((el, i) => {
      if (el.id_el == null) {
        numNull += 1;
      }
    });
    if (numNull == 0) {
      $(".constructor__add-cart").addClass("activeButton");

      let topHeight =
        $(".main").outerHeight() +
        $(".media").outerHeight() +
        $(".constructor").outerHeight() / 3;

      window.scrollTo({ top: topHeight, behavior: "smooth" });
    }
  }

  function writeSum() {
    oldPrice = 0;

    let newp = arr_costs.filter((el, i) => {
      return (oldPrice = oldPrice + el.price);
    });
    $(".currency-cost").html(oldPrice);
  }

  $(".stage-move").each(function (index) {
    $(this).on("click", function () {
      let trLeftStages = 0;

      if (window.innerWidth <= 414) {
        trLeftStages = index * -263;
      } else {
        if (window.innerWidth <= 1280 && window.innerWidth > 1024) {
          trLeftStages = index * -297;
        } else {
          trLeftStages = index * -332;
        }
      }

      if (window.innerWidth > 540) {
        translateStage(trLeftStages);
      }
    });
  });

  $(".stage-start").on("click", function () {
    let trLeftStages = 0;
    if (window.innerWidth > 540) {
      translateStage(trLeftStages);
    }
  });

  function translateStage(move) {
    let trStage = gsap.to(".constructor__inner", {
      duration: 0.7,
      x: move,
    });
  }

  function moveNext(index) {
    let stageLength = $(".stage").length;
    if (index != stageLength) {
      let width_container =
        $(".material__wrapper").outerWidth() * index + 128 * index;
      translateContainer(width_container);
      let trLeftStages = 0;

      let newIndex = 0;
      if (index == 0) {
        newIndex = 0;
      } else {
        newIndex = index - 1;
      }

      if (window.innerWidth <= 414) {
        trLeftStages = index * -263;
      } else {
        if (window.innerWidth <= 1280 && window.innerWidth > 1024) {
          trLeftStages = newIndex * -297;
        } else {
          trLeftStages = newIndex * -332;
        }
      }
      translateStage(trLeftStages);
    }

    $(".stage").each(function (i, fame) {
      if (i == index) {
        $(".stage").removeClass("active");
        $(this).addClass("active");
        $(".stage").each(function (index) {
          if ($(this).hasClass("active")) {
            let arrMaterial = document.querySelectorAll(".material__wrapper");
            activateContainer();
            $(".material__wrapper").removeClass("activeC");
            arrMaterial.forEach((mat_i, mat) => {
              if (index == mat) {
                mat_i.classList.add("activeC");
              }
            });
          }
        });

        animateConfig();
      }
    });
  }

  $(".stage").each(function (index) {
    $(this).on("click", function () {
      gsap.to($(".stage").find(".white-circle"), {
        duration: 0.5,
        fill: "rgba(255, 255, 255, 0)",
      });

      if ($(this).hasClass("activeStage")) {
        gsap.to($(this).find(".white-circle"), {
          duration: 0.5,
          fill: "rgba(255, 255, 255, 1)",
        });
        gsap.to($(this).find(".stage__number"), {
          duration: 0.5,
          opacity: 1,
          color: "rgba(0, 0, 0, 1)",
          delay: 0.3,
        });
      }
      let arrMaterial = document.querySelectorAll(".material__wrapper");
      activateContainer();
      $(".material__wrapper").removeClass("activeC");
      arrMaterial.forEach((mat_i, mat) => {
        if (index == mat) {
          mat_i.classList.add("activeC");
        }
      });
      $(".stage").removeClass("active");
      $(this).addClass("active");

      translateContainer();

      animateConfig();
    });
  });
  function translateContainer() {
    let trStage = gsap.to(".constructor__material", {
      duration: 1.5,
      x: "",
    });
  }
  let SlideWAll = $(".material__wrapper");
  SlideWAll.find(".swiper-slide-visible");
  gsap.set(SlideWAll, { y: 0, rotate: "0deg" });
  function activateContainer() {
    let activeW = $(".constructor__material").find(".activeC");
    let arrActive = activeW.find(".swiper-slide-visible");

    const tl = gsap.timeline();

    tl.to(arrActive, 0.5, {
      y: 150,
      rotate: "-25deg",
      opacity: 0,
      stagger: { each: 0.1, from: "start" },
    });
    tl.set(arrActive, {
      y: 0,
      rotate: "0deg",
      onComplete: () => {
        activateContainerUp();
      },
    });
    tl.kill;
  }

  function activateContainerUp() {
    $(".material__wrapper").css({ zIndex: "-1", opacity: "0" });
    let activeW = $(".constructor__material").find(".activeC");
    activeW.css({ zIndex: "1" });
    let arrActive = activeW.find(".swiper-slide-visible");
    gsap.set(arrActive, { opacity: 0 });
    activeW.css("opacity", "1");

    const tl = gsap.timeline();
    tl.to(
      arrActive,
      0.3,
      { opacity: 1, stagger: { each: 0.2, from: "start" } },
      0.2
    );
  }

  $(".chosen-wrapper").on("click", ".button-choice", function () {
    $(".constructor__add-cart").removeClass("activeButton");

    let el = {
      id_el: null,
      price: 0,
    };

    $(this).parent(".constructor__choice").removeClass("choice-error");
    let numRem = $(this).parent(".constructor__choice").data("number");
    $(this).parent(".constructor__choice").removeClass("create_c");
    let numNumber = +numRem;
    let newNumrem = numNumber - 1;
    arr_costs[newNumrem] = el;
    writeSum();

    $(this).parent(".constructor__choice").html(" ");
    $(".stage").each(function (index) {
      if (newNumrem == index) {
        $(this).removeClass("activeStage");
      }
      if ($(this).hasClass("active")) {
        let stNum = $(this).find(".stage__number").text();

        moveTo(stNum, numRem - 1);
      }
    });
    $(".material__wrapper").each(function () {
      if ($(this).data("mat") == numRem) {
        $(this).find(".material__item").removeClass("active");
        $(this).find(".current-flag").removeClass("active");
      }
    });
  });

  function moveTo(i, w) {
    let width_container = $(".material__wrapper").outerWidth() * w + 128 * w;

    translateContainer(width_container);
    moveSt(w);
  }

  function moveSt(w) {
    let trLeftStages = 0;
    let newIndex = 0;
    if (w == 0) {
      newIndex = 0;
    } else {
      newIndex = w - 1;
    }
    if (window.innerWidth <= 414) {
      trLeftStages = w * -263;
    } else {
      if (window.innerWidth <= 1280 && window.innerWidth > 1024) {
        trLeftStages = newIndex * -297;
      } else {
        trLeftStages = newIndex * -332;
      }
    }

    translateStage(trLeftStages);

    $(".stage").each(function (i, fame) {
      if (i == w) {
        $(".stage").removeClass("active");
        $(this).addClass("active");
        let arrMaterial = document.querySelectorAll(".material__wrapper");
        activateContainer();
        $(".material__wrapper").removeClass("activeC");
        arrMaterial.forEach((mat_i, mat) => {
          if (i == mat) {
            mat_i.classList.add("activeC");
          }
        });

        animateConfig();
      }
    });
  }

  gsap.registerPlugin(ScrollTrigger);

  let tl_constructor = gsap.timeline({
    scrollTrigger: {
      trigger: ".constructor",
      start: "50% 60%",
      toggleActions: "play none none none",
      onEnter: () => {
        animFirst();
        animateSlider();
      },
    },
  });

  function animFirst() {
    $(".stage").each(function (index) {
      if ($(this).hasClass("active")) {
        gsap.to($(this).find(".white-circle"), {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: Power3.easeOut,
        });
        gsap.to($(this).find(".stage__number"), {
          autoAlpha: 1,
          duration: 1.5,
          delay: 0.5,
        });
        gsap.to($(this).find(".stage__progress-line"), {
          width: "100%",
          duration: 1,
          delay: 0.7,
        });
        gsap.to($(this).find(".stage__material"), {
          autoAlpha: 1,
          duration: 1.5,
          delay: 1.5,
        });
      }
    });
  }

  function animateConfig() {
    $(".stage").each(function (index) {
      gsap.to($(this).find(".white-circle"), {
        strokeDashoffset: 397.84,
        duration: 1.5,
        ease: Power3.easeOut,
      });
      if (!$(this).hasClass("active")) {
        gsap.to($(this).find(".stage__number"), {
          autoAlpha: 0.4,
          duration: 1.5,
          delay: 0.5,
          color: "#ffffff",
        });
        gsap.to($(this).find(".white-circle"), {
          fill: "",
          duration: 0.5,
        });
      }

      gsap.to($(this).find(".stage__progress-line"), {
        width: "0%",
        duration: 1,
        delay: 0.7,
        onComplete: () => {
          tl_constructor.kill();
        },
      });
      gsap.to($(this).find(".stage__material"), {
        autoAlpha: 0.4,
        duration: 1.5,
        delay: 0.6,
      });

      if ($(this).hasClass("active")) {
        if (!$(this).hasClass("activeStage")) {
          gsap.to($(this).find(".stage__number"), {
            autoAlpha: 1,
            duration: 1.5,
            delay: 0.5,
          });
        }
        gsap.to($(this).find(".white-circle"), {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: Power3.easeOut,
        });

        gsap.to($(this).find(".stage__progress-line"), {
          width: "100%",
          duration: 1,
          delay: 0.7,
        });
        gsap.to($(this).find(".stage__material"), {
          autoAlpha: 1,
          duration: 1.5,
          delay: 1.5,
        });
      }
    });
  }
  $(".material__wrapper").each(function () {
    if ($(this).data("mat") == 1) {
      let arrSlide = $(this).find(".swiper-slide-visible");
      gsap.set(arrSlide, { x: 1000, duration: 1, delay: 0.7, autoAlpha: 0 });
    }
  });

  function animateSlider() {
    $(".material__wrapper").each(function () {
      if ($(this).data("mat") == 1) {
        let arrSlide = gsap.utils.toArray(
          $(this).find(".swiper-slide-visible")
        );

        let nm = 0.7;
        let nw = 0;
        for (let i = 0; i < arrSlide.length; i++) {
          nw += 0.3;
          nm = nm + 0.1;
          gsap.to(arrSlide[i], {
            x: 0,
            autoAlpha: 1,
            duration: 1.8,
            delay: nw,
            ease: "Power4.easeOut",
          });
        }
      }
    });
  }

  $(".material__wrapper").each(function () {
    if ($(this).data("mat") == 1) {
      $(this).addClass("activeC");
    }
  });

  let id_arr = [];
  let button = document
    .querySelector(".constructor__add-cart")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let numNull = 0;

      arr_costs.filter((el, i) => {
        if (el.id_el == null) {
          numNull += 1;
        }
      });
      if (numNull != 0) {
        arr_costs.filter((el, i) => {
          if (el.id_el == null) {
            makeEmpty(i);
          }
        });
        console.log("добавте товар");
      } else {
        console.log(arr_costs);
        arr_costs.forEach((id) => {
          id_arr.push(id.id_el);
        });

        sendId(id_arr);
      }
    });

  function makeEmpty(num) {
    let mat = $(".stage__material")[num].dataset.number_name;
    $(".constructor__choice").each(function (index) {
      let ch = $(this).data("number") - 1;
      if (ch == num) {
        $(this).addClass("choice-error");
        let conf = `<div class="choice-category">${mat}</div> :
            <span class="choice-name"> -- </span><div class="button-choice">(x)</div>`;
        $(this).html(conf);
      }
    });
  }
  async function sendId(id_all) {
    const _url = document.querySelector("body").dataset.action;
    console.log("товар собран и добавлен");
    let newid = JSON.stringify(id_all);
    let urlNext = $(".constructor__add-cart").data("cart-link");

    $(".constructor__add-cart").addClass("hidden");
    $(".loader-btn").addClass("visible");
    $(".constructor__add-cart").css("pointer-events", "none");

    $.ajax({
      url: _url,
      dataType: "json",
      timeout: 2000,
      type: "POST",
      data: {
        action: "products_add_to_card",
        products_ids: newid,
      },
      success: function (data) {
        window.location.href = urlNext;
        setTimeout(() => {
          $(".constructor__add-cart").css("pointer-events", "all");
        }, 200);
        console.log("success");
        $(".btn-error-req").removeClass("visible");
        $(".constructor__add-cart").removeClass("hidden");
        $(".loader-btn").removeClass("visible");
      },
      error: function (error) {
        console.log(eval(error));
        $(".btn-error-req").addClass("visible");
        $(".constructor__add-cart").css("pointer-events", "all");
        $(".constructor__add-cart").removeClass("hidden");
        $(".loader-btn").removeClass("visible");
      },
    });

    id_arr = [];
  }
}
