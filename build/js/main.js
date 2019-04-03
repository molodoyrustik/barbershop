(function() {
  'use strict';

  var link = document.querySelector(".user-block__login");
  var popup = document.querySelector(".modal");
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

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYmxvY2tfX2xvZ2luXCIpO1xyXG4gIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgdmFyIGNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgdmFyIGZvcm0gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICB2YXIgbG9naW4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiW25hbWU9bG9naW5dXCIpO1xyXG4gIHZhciBwYXNzd29yZCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT1wYXNzd29yZF1cIik7XHJcbiAgdmFyIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luXCIpO1xyXG5cclxuICB2YXIgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcCcpO1xyXG4gIHZhciBtYXBDbG9zZSA9IG1hcC5xdWVyeVNlbGVjdG9yKCcubWFwX19jbG9zZScpO1xyXG4gIHZhciBtYXBMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtaW5mb19fbGluaycpO1xyXG5cclxuICBtYXBMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcF9fc2hvdycpO1xyXG4gIH0pXHJcblxyXG4gIG1hcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWFwLmNsYXNzTGlzdC5yZW1vdmUoJ21hcF9fc2hvdycpO1xyXG4gIH0pXHJcblxyXG5cclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2hvd1wiKTtcclxuICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgIGxvZ2luLnZhbHVlID0gc3RvcmFnZTtcclxuICAgICAgcGFzc3dvcmQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ2luLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19zaG93XCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19lcnJvclwiKTtcclxuICB9KTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWxvZ2luLnZhbHVlIHx8ICFwYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Vycm9yXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpblwiLCBsb2dpbi52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fc2hvd1wiKSkge1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9fc2hvd1wiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfX2Vycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KSgpOyJdfQ==
