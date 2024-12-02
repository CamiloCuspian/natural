// Generar enlaces de WhatsApp dinámicos según el dispositivo
document.addEventListener("DOMContentLoaded", function () {
  const isMobile =
    /iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(
      navigator.userAgent
    );
  const pageUrl = window.location.href;
  const whatsappLinks = document.querySelectorAll("a#lead_whatsapp");

  whatsappLinks.forEach((link) => {
    const message = encodeURIComponent(
      `Hola! Me gustaría recibir más asesoría sobre esta información: ${pageUrl}`
    );
    const mobileUrl = `https://wa.me/573202492786?text=${message}`;
    const desktopUrl = `https://web.whatsapp.com/send?phone=573202492786&text=${message}`;
    link.setAttribute("href", isMobile ? mobileUrl : desktopUrl);
  });
});

// Manejo de submenús con flechas (`toggle-arrow`)
document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".toggle-arrow");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const submenuWrapper = arrow.nextElementSibling;

      if (submenuWrapper && submenuWrapper.querySelector(".submenu")) {
        const submenu = submenuWrapper.querySelector(".submenu");
        submenu.classList.toggle("open"); // Alterna la clase "open" en el submenú

        // Rotar la flecha cuando el submenú esté abierto
        arrow.classList.toggle("rotated");
      }
    });
  });
});

// Mostrar información del horario y estado abierto/cerrado
document.addEventListener("DOMContentLoaded", function () {
  const dayElement = document.getElementById("current-day");

  // Datos para formatear la fecha
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const currentDayName = daysOfWeek[currentDate.getDay()];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentHour = currentDate.getHours();

  // Horario de trabajo
  const openHour = 8;
  const closeHour = 17;

  // Formatear la fecha
  const formattedDate = `${currentMonth} ${currentDay}, ${currentYear}`;

  // Iconos de estado
  const closedIcon = `<svg xmlns="http://www.w3.org/2000/svg" ...></svg>`; // Icono para cerrado
  const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" ...></svg>`; // Icono para abierto

  let message;

  if (
    currentDayName !== "Sunday" &&
    currentHour >= openHour &&
    currentHour < closeHour
  ) {
    message = `${formattedDate} ${openIcon} - ${openHour}:00 - ${closeHour}:00`;
  } else if (currentDayName !== "Sunday") {
    message = `${formattedDate} ${closedIcon} - Today we relax`;
  } else {
    message = `${formattedDate} ${closedIcon} - Now we're relax`;
  }

  if (dayElement) {
    dayElement.innerHTML = message;
  }
});

const dropdownSpans = document.querySelectorAll(".dropdown > span");
dropdownSpans.forEach((span) => {
  span.addEventListener("click", function () {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });
});
