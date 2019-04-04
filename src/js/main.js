(function() {
  'use strict';

  var link = document.querySelector(".user-block__login");
  var popup = document.querySelector(".modal");
  if (popup) {
    var close = popup.querySelector(".modal__close");
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    var storage = localStorage.getItem("login");

    var map = document.querySelector('.map');
    var mapClose = map.querySelector('.map__close');
    var mapLink = document.querySelector('.contact-info__link');

    mapLink.addEventListener('click', (event) => {
      event.preventDefault();
      map.classList.add('map__show');
    })

    mapClose.addEventListener('click', (event) => {
      event.preventDefault();
      map.classList.remove('map__show');
    })


    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal__show");
      if (storage) {
        login.value = storage;
        password.focus();
      } else {
        login.focus();
      }
    });
    
    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
    });

    form.addEventListener("submit", function(event) {
      if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal__error");
      } else {
        localStorage.setItem("login", login.value);
      }
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("modal__show")) {
          popup.classList.remove("modal__show");
          popup.classList.remove("modal__error");
        }
      }
    });
  }

})();