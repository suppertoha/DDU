$(document).ready(function () {

  // ! меню
  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $(".header__mobile").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header__burger, .header__mobile").length) {
      $(".header__mobile").removeClass("active");
      $(".header__burger").removeClass("active");
    }
    e.stopPropagation();
  });

  // ! Таймер

  var show = true;
  var countbox = ".timer__hed";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".timer__num").css("opacity", "1");
      $(".timer__num").spincrement({
        thousandSeparator: "",
        duration: 2000,
      });

      show = false;
    }
  });

  // ! Плавная прокрутка

  $(document).ready(function () {
    var margin = -10; // переменная для контроля докрутки
    $("a").click(function () {
      // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top + margin + "px", // .top+margin - ставьте минус, если хотите увеличить отступ
        },
        {
          duration: 800, // тут можно контролировать скорость
          easing: "swing",
        }
      );
      return false;
    });
  });

  // ! Questions__body

  $(".accordion__trigger").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });

});

// Модальное окно

//(function ($) {
//  $(function () {
//    $(".popup-modal").magnificPopup({
//      type: "inline",
//      preloader: false,
//      focus: "#username",
//      modal: false,
//      showCloseBtn: true,
//    });
//    $(document).on("click", ".popup-modal-dismiss", function (e) {
//      e.preventDefault();
//      $.magnificPopup.close();
//    });
//  });

//  $('input[name="phone"]').mask("+7 (999) 999-99-99");
//  //E-mail Ajax Send

//  $("#form").submit(function (e) {
//    //Change
//    var error = false;

//    var phone = $(".tel input").val();
//    var name_text = $(".name input").val().trim();

//    if (phone.length < 1) {
//      $(".tel").addClass("error");
//      error = true;
//    } else {
//      $(".tel").removeClass("error");
//    }

//    if (name_text.length < 1) {
//      $(".name").addClass("error");
//      error = true;
//    } else {
//      $(".name").removeClass("error");
//    }

//    if (error) return false;

//    var th = $(this);
//    $.ajax({
//      type: "POST",
//      url: "mail.php",
//      data: th.serialize(),
//    }).done(function () {
//      alert("Success");
//    });
//    return false;
//  });
//})(jQuery);
