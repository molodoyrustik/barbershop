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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLWJsb2NrX19sb2dpblwiKTtcclxuICB2YXIgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xyXG4gIGlmIChwb3B1cCkge1xyXG4gICAgdmFyIGNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICB2YXIgZm9ybSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgdmFyIGxvZ2luID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIltuYW1lPWxvZ2luXVwiKTtcclxuICAgIHZhciBwYXNzd29yZCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT1wYXNzd29yZF1cIik7XHJcbiAgICB2YXIgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5cIik7XHJcblxyXG4gICAgdmFyIG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAnKTtcclxuICAgIHZhciBtYXBDbG9zZSA9IG1hcC5xdWVyeVNlbGVjdG9yKCcubWFwX19jbG9zZScpO1xyXG4gICAgdmFyIG1hcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1pbmZvX19saW5rJyk7XHJcblxyXG4gICAgbWFwTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtYXAuY2xhc3NMaXN0LmFkZCgnbWFwX19zaG93Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgIG1hcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG1hcC5jbGFzc0xpc3QucmVtb3ZlKCdtYXBfX3Nob3cnKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2hvd1wiKTtcclxuICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICBsb2dpbi52YWx1ZSA9IHN0b3JhZ2U7XHJcbiAgICAgICAgcGFzc3dvcmQuZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dpbi5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9fc2hvd1wiKTtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19lcnJvclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoIWxvZ2luLnZhbHVlIHx8ICFwYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19lcnJvclwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIGxvZ2luLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fc2hvd1wiKSkge1xyXG4gICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19zaG93XCIpO1xyXG4gICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19lcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0pKCk7Il19
