document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const revealItems = document.querySelectorAll(".reveal");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Replace the placeholder number below with the real WhatsApp business number before launch.
  const whatsappNumber = "2348000000000";

  document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.product || "perfume";
      const message = encodeURIComponent(
        `Hello LUXE SCENTS NG, I would like to order ${productName}. Please share availability and delivery details.`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
    });
  });

  const whatsappLink = document.querySelector(".whatsapp-link");
  if (whatsappLink) {
    whatsappLink.addEventListener("click", (event) => {
      if (!whatsappLink.href || whatsappLink.href.includes("2348000000000")) {
        return true;
      }
      event.preventDefault();
      const message = encodeURIComponent(
        "Hello LUXE SCENTS NG, I would like to place an order. Please share your available scents and delivery details."
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
    });
  }
});
