      const menuBtn = document.querySelector(".mobile-menu-btn");
      const nav = document.querySelector("nav");

      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            nav.classList.remove("active");
          }
        });
      });

      // Multi-step form functionality
      function nextStep(step) {
        document.querySelector(".form-step.active").classList.remove("active");
        document.getElementById(`step-${step}`).classList.add("active");
      }

      function prevStep(step) {
        document.querySelector(".form-step.active").classList.remove("active");
        document.getElementById(`step-${step}`).classList.add("active");
      }

      // File upload preview
      function previewImage(input, previewId) {
        const preview = document.getElementById(previewId);
        const file = input.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
          };

          reader.readAsDataURL(file);
        }
      }

      // Form submission
      document
        .getElementById("loan-application")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert(
            "Thank you for your application! We will review your information and contact you shortly."
          );
          this.reset();
          document
            .querySelectorAll(".form-step")
            .forEach((step) => step.classList.remove("active"));
          document.getElementById("step-1").classList.add("active");
          document.getElementById("front-preview").style.display = "none";
          document.getElementById("back-preview").style.display = "none";
        });