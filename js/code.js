document.addEventListener("DOMContentLoaded",function(){var e=/iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent),t=window.location.href,o=document.querySelectorAll("a#lead_whatsapp");o.forEach(function(o){var n="Hola! Me gustaría recibir más asesoría sobre esta información: "+encodeURIComponent(t),a="https://wa.me/573202492786?text="+n,r="https://web.whatsapp.com/send?phone=573202492786&text="+n;e?o.setAttribute("href",a):o.setAttribute("href",r)})});

document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.toggle-arrow');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const submenuWrapper = arrow.nextElementSibling;

      // Verifica si submenuWrapper contiene un .submenu
      if (submenuWrapper && submenuWrapper.querySelector('.submenu')) {
        const submenu = submenuWrapper.querySelector('.submenu');
        submenu.classList.toggle('open');

        // Rotar la flecha cuando el submenú esté abierto
        arrow.classList.toggle('rotated');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const dayElement = document.getElementById("current-day");

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const currentDate = new Date();
  const currentDayName = daysOfWeek[currentDate.getDay()];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentHour = currentDate.getHours();

  const openHour = 8;
  const closeHour = 17;

  const formattedDate = `${currentMonth} ${currentDay}, ${currentYear}`;
  const closedIcon = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" width="40" height="40" fill="#000" version="1.1" viewBox="0 0 120 120"><g id="SVGRepo_iconCarrier"><style>.st3{fill:#fff}</style><path d="M100.4 97.2H19.6c-2.3 0-4.1-1.8-4.1-4.1V57.5c0-2.3 1.8-4.1 4.1-4.1h80.7c2.3 0 4.1 1.8 4.1 4.1v35.6c.1 2.2-1.8 4.1-4 4.1z" style="fill:#ff5462"/><path d="M102.5 96.2h-80c-2.5 0-4.5-2-4.5-4.5V56.8c0-1.4.7-2.6 1.7-3.5-2.3.1-4.2 2.1-4.2 4.5v34.9c0 2.5 2 4.5 4.5 4.5h80c1.1 0 2.1-.4 2.8-1h-.3z" style="opacity:.1"/><path d="M57 33.5 37.1 53.4h4.6L60 35.1l18.3 18.3h4.6L63 33.5c1.6-1 2.8-2.8 2.8-4.9 0-3.2-2.6-5.8-5.8-5.8-3.2 0-5.8 2.6-5.8 5.8 0 2.1 1.1 3.9 2.8 4.9zm3-7.4c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z" style="fill:#c44151"/><path d="M28.9 73c.2-.3.5-.5.9-.6.3-.1.7-.2 1.1-.2.5 0 1 .1 1.4.4.4.3.8.6 1.1 1.1l2.5-2.4c-.6-.8-1.3-1.4-2.2-1.9-.9-.4-1.9-.7-3-.7-.9 0-1.8.2-2.6.5s-1.5.8-2.1 1.4c-.6.6-1 1.3-1.4 2.1-.3.8-.5 1.7-.5 2.7 0 1 .2 1.9.5 2.7.3.8.8 1.5 1.4 2.1.6.6 1.3 1 2.1 1.4.8.3 1.7.5 2.6.5 1.1 0 2.2-.2 3-.7.9-.4 1.6-1.1 2.2-1.9L33.5 77c-.3.5-.7.8-1.1 1.1-.4.3-.9.4-1.4.4-.4 0-.8-.1-1.1-.2-.3-.1-.6-.4-.9-.6-.2-.3-.4-.6-.6-1-.1-.4-.2-.8-.2-1.3s.1-.9.2-1.3c.1-.5.3-.9.5-1.1zM41 68.9h-3.9v12.7h9.2v-3.3H41zM58 70.5c-.6-.6-1.3-1.1-2.1-1.4-.8-.3-1.7-.5-2.6-.5-.9 0-1.8.2-2.6.5s-1.5.8-2.1 1.4c-.6.6-1 1.3-1.4 2.1-.3.8-.5 1.7-.5 2.6 0 1 .2 1.8.5 2.6s.8 1.5 1.4 2.1c.6.6 1.3 1.1 2.1 1.4.8.3 1.7.5 2.6.5.9 0 1.8-.2 2.6-.5s1.5-.8 2.1-1.4c.6-.6 1-1.3 1.4-2.1.3-.8.5-1.7.5-2.6 0-1-.2-1.8-.5-2.6s-.8-1.5-1.4-2.1zm-2.3 6.1c-.1.4-.3.7-.6 1-.2.3-.5.5-.8.6-.3.1-.7.2-1 .2s-.7-.1-1-.2c-.3-.1-.6-.4-.8-.6-.2-.3-.4-.6-.6-1-.1-.4-.2-.8-.2-1.3s.1-.9.2-1.3.3-.7.6-1c.2-.3.5-.5.8-.6.3-.1.7-.2 1-.2s.7.1 1 .2c.3.1.6.4.8.6.2.3.4.6.6 1s.2.8.2 1.3-.1.9-.2 1.3zM69.8 74.9c-.4-.3-.8-.5-1.3-.7-.5-.2-.9-.3-1.4-.4-.5-.1-.9-.2-1.3-.3-.4-.1-.7-.2-.9-.3-.2-.1-.3-.3-.3-.5 0-.1 0-.3.1-.4s.3-.2.5-.3.5-.1.9-.1c.5 0 1 .1 1.6.2.5.2 1.1.4 1.7.7l1.2-3.1c-.6-.4-1.3-.7-2.1-.8-.8-.2-1.5-.3-2.3-.3-1.2 0-2.2.2-3 .6-.8.4-1.4.9-1.8 1.5-.4.6-.6 1.4-.6 2.1 0 .7.1 1.2.4 1.7.2.5.5.8.9 1.1.4.3.8.5 1.3.7.5.2.9.3 1.4.4.5.1.9.2 1.3.3.4.1.7.2.9.3.2.1.3.3.3.5 0 .1 0 .3-.1.4-.1.1-.3.2-.5.2-.2.1-.5.1-.9.1-.6 0-1.3-.1-2-.3-.7-.2-1.3-.5-1.9-.8l-1.3 3.1c.6.4 1.3.7 2.2.9.9.2 1.9.4 2.8.4 1.2 0 2.2-.2 3-.6.8-.4 1.4-.9 1.8-1.6.4-.6.6-1.4.6-2.1 0-.7-.1-1.2-.4-1.7s-.4-.6-.8-.9zM76.1 76.7H81v-3.1h-4.9v-1.4h5.6v-3.3h-9.5v12.7h9.7v-3.2h-5.8zM94.9 71.9c-.6-.9-1.3-1.7-2.3-2.2-1-.5-2.1-.8-3.4-.8h-5.7v12.7h5.7c1.3 0 2.4-.3 3.4-.8s1.8-1.2 2.3-2.2c.6-.9.8-2.1.8-3.4.1-1.2-.2-2.4-.8-3.3zm-3.4 5c-.2.5-.6.8-1 1-.4.2-.9.3-1.5.3h-1.6v-6H89c.6 0 1 .1 1.5.3.4.2.7.6 1 1 .2.4.4 1 .4 1.6-.1.8-.2 1.4-.4 1.8z" class="st3"/></g></svg>`;
  const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" width="40" height="40" fill="#000" version="1.1" viewBox="0 0 120 120"><g id="SVGRepo_iconCarrier"><style>.st3{fill:#fff}</style><path d="M100.4 97.2H19.6c-2.3 0-4.1-1.8-4.1-4.1V57.5c0-2.3 1.8-4.1 4.1-4.1h80.7c2.3 0 4.1 1.8 4.1 4.1v35.6c.1 2.2-1.8 4.1-4 4.1z" style="fill:#008037"/><path d="M102.5 96.2h-80c-2.5 0-4.5-2-4.5-4.5V56.8c0-1.4.7-2.6 1.7-3.5-2.3.1-4.2 2.1-4.2 4.5v34.9c0 2.5 2 4.5 4.5 4.5h80c1.1 0 2.1-.4 2.8-1h-.3z" style="opacity:.1"/><path d="M57 33.5 37.1 53.4h4.6L60 35.1l18.3 18.3h4.6L63 33.5c1.6-1 2.8-2.8 2.8-4.9 0-3.2-2.6-5.8-5.8-5.8-3.2 0-5.8 2.6-5.8 5.8 0 2.1 1.1 3.9 2.8 4.9zm3-7.4c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z" style="fill:#005123"/><path d="M41.6 69.3c-.8-.8-1.8-1.3-2.9-1.7-1.1-.4-2.3-.6-3.6-.6-1.3 0-2.5.2-3.6.6-1.1.4-2.1 1-2.9 1.7-.8.8-1.4 1.6-1.9 2.6-.4 1-.7 2.1-.7 3.3 0 1.2.2 2.3.7 3.3.4 1 1.1 1.9 1.9 2.7.8.8 1.8 1.3 2.9 1.7 1.1.4 2.3.6 3.6.6 1.3 0 2.5-.2 3.6-.6 1.1-.4 2-1 2.9-1.7.8-.8 1.4-1.6 1.9-2.7.4-1 .7-2.1.7-3.3 0-1.2-.2-2.3-.7-3.3-.5-1-1.1-1.9-1.9-2.6zm-3.2 7.6c-.2.5-.4.9-.8 1.3-.3.3-.7.6-1.1.8-.4.2-.9.3-1.4.3-.5 0-1-.1-1.4-.3-.4-.2-.8-.4-1.1-.8-.3-.3-.6-.8-.8-1.3-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.2.3-1.7.2-.5.4-.9.8-1.3.3-.3.7-.6 1.1-.8.4-.2.9-.3 1.4-.3.5 0 1 .1 1.4.3.4.2.8.4 1.1.8.3.3.6.8.8 1.3.2.5.3 1.1.3 1.7 0 .7-.1 1.3-.3 1.7zM57.6 68c-1.1-.5-2.4-.7-3.9-.7H46v16h5.4v-3.9h2.3c1.5 0 2.8-.2 3.9-.7 1.1-.5 1.9-1.2 2.5-2.1.6-.9.9-2 .9-3.2 0-1.2-.3-2.3-.9-3.2-.5-1-1.4-1.7-2.5-2.2zm-2.5 6.7c-.4.3-.9.5-1.7.5h-2v-3.7h2c.7 0 1.3.2 1.7.5.4.3.5.8.5 1.4 0 .5-.2.9-.5 1.3zM68.1 77.1h6.8v-3.9h-6.8v-1.9h7.7v-4h-13v16h13.3v-4.1h-8zM88.7 67.3v7.2l-6.1-7.2h-4.4v16h5.2V76l6.1 7.3h4.4v-16z" class="st3"/></g></svg>`;
  
  let message;

  if (currentDayName !== "Sunday" && currentHour >= openHour && currentHour < closeHour) {
      message = `${formattedDate} ${openIcon} - ${openHour}:00 - ${closeHour}:00`;
  } else if (currentDayName !== "Sunday") {
      message = `${formattedDate} ${closedIcon} - Today we relax`;
  } else {
      message = `${formattedDate} ${closedIcon} - Now we're relax`;
  }

  dayElement.innerHTML = message;
});
