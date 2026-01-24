const services = [
  {
    id: "sealing",
    title: "Usuwanie i uszczelnianie dylatacji",
    description: "Profesjonalne zabezpieczenie dylatacji i pęknięć.",
    details: [
      "Usuwanie starych uszczelnień",
      "Przygotowanie podłoża",
      "Aplikacja nowego uszczelnienia",
      "Zabezpieczenie przed wilgocią",
    ],
    icon: "../images/svg/pistol.svg",
    alt: "ikona pistoletu do uszczelniania dylatacji",
    loading: "lazy",
  },
  {
    id: "facade",
    title: "Prace elewacyjne",
    description: "Kompleksowe prace na elewacjach budynków.",
    details: [
      "Czyszczenie elewacji",
      "Naprawa uszkodzeń",
      "Zabezpieczenie powierzchni",
    ],
    icon: "../images/svg/painter.svg",
    alt: "ikona malarza dla prac elewacyjnych",
    loading: "lazy",
  },
  {
    id: "assembly",
    title: "Montaż / Demontaż",
    description:
      "Bezpieczny montaż i demontaż elementów elewacyjnych na wysokości.",
    details: [
      "Montaż i demontaż elewacji",
      "Instalacja konstrukcji reklamowych i technicznych",
      "Prace zgodne z zasadami BHP",
    ],
    icon: "../images/svg/drill.svg",
    alt: "ikona wiertarki dla montażu i demontażu",
    loading: "lazy",
  },
  {
    id: "hard-to-reach",
    title: "Prace w trudno dostępnych miejscach",
    description: "Profesjonalne prace na wysokości i w wymagających warunkach.",
    details: [
      "Prace bez rusztowań",
      "Dostęp alpinistyczny",
      "Zabezpieczenie trudno dostępnych elementów",
      "Zgodność z BHP",
    ],
    icon: "/images/svg/alpinist1-removebg-preview.svg",
    alt: "ikona alpinisty dla prac w trudno dostępnych miejscach",
    loading: "lazy",
  },
];

// Рендер карточок
// document.querySelectorAll(".service-card").forEach((card) => {
//   const service = services.find((s) => s.id === card.dataset.id);
//   if (!service) return;

//   card.querySelector("h3").textContent = service.title;
//   card.querySelector("p").textContent = service.description;

//   const iconEl = card.querySelector(".service-icon");
//   if (iconEl) {
//     const img = document.createElement("img");
//     img.src = service.icon;
//     img.alt = service.alt;
//     img.loading = service.loading;

//     img.classList.add("icon");
//     iconEl.appendChild(img);
//   }
// });
