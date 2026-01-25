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
    }
  });
});

// Form submission handling
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect all form data
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      doctor: document.getElementById("doctor").value || "Any Available Doctor",
      service: document.getElementById("service").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      message: document.getElementById("message").value,
      termsAccepted: document.getElementById("terms").checked,
    };

    //  Print data to console
    console.log("Appointment Form Data:");
    console.table(formData);

    // Show success message
    const formMessage = document.getElementById("formMessage");
    formMessage.innerHTML = `
      <div class="alert alert-success" role="alert">
        <h5 class="alert-heading">Thank you, ${formData.firstName}!</h5>
        <p>
          Your appointment request for 
          <strong>${formData.service}</strong> 
          has been submitted successfully.
        </p>
        <hr>
        <p class="mb-0">
          We will contact you at <strong>${formData.phone}</strong> 
          or <strong>${formData.email}</strong>.
        </p>
      </div>
    `;
    formMessage.style.display = "block";

    // Scroll to message
    formMessage.scrollIntoView({ behavior: "smooth" });

    // Reset form after 8 seconds
    setTimeout(() => {
      this.reset();
      formMessage.style.display = "none";
    }, 8000);
  });

// Set minimum date for appointment to today
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").min = today;

// Scroll animation
const fadeElements = document.querySelectorAll(
  ".service-card, .doctor-card, .testimonial-card",
);

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
};

// Set initial state and check on scroll
fadeElements.forEach((element) => {
  element.classList.add("fade-in");
});

window.addEventListener("scroll", fadeInOnScroll);
// Initial check
fadeInOnScroll();

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-sm");
  } else {
    navbar.classList.remove("bg-white", "shadow-sm");
  }
});

// Initialize with navbar background
const navbar = document.querySelector(".navbar");
if (window.scrollY > 50) {
  navbar.classList.add("bg-white", "shadow-sm");
}
