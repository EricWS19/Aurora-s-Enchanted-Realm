document.addEventListener("DOMContentLoaded", function() {
    // Example 1: Add a hover effect to the gallery images.
    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach(img => {
      img.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
      });
      img.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
      });
    });
  
    // Example 2: Simple form validation (client-side).
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function(event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
  
        if (!nameInput.value.trim()) {
          alert("Please enter your name.");
          nameInput.focus();
          event.preventDefault(); // Prevent form submission
          return;
        }
  
        if (!emailInput.value.trim()) {
          alert("Please enter your email.");
          emailInput.focus();
          event.preventDefault();
          return;
        }
  
        if (!messageInput.value.trim()) {
          alert("Please enter your message.");
          messageInput.focus();
          event.preventDefault();
          return;
        }
  
        // Basic email validation (you might want a more robust solution).
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          alert("Please enter a valid email address.");
          emailInput.focus();
          event.preventDefault();
          return;
        }
  
        // Optionally, you could add code here to send the form data to a server.
        // For this example, we'll just log the data to the console.
        console.log("Form submitted:", {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        });
  
        alert("Enchanted message sent!"); //or display a message in the page instead of an alert.
        form.reset(); //clear form.
        event.preventDefault(); //prevents actual submit, as there is no backend to catch it in this example.
      });
    }
  
      //Example 3: Adding a click event to the navigation links to smoothly scroll to the sections.
      const navLinks = document.querySelectorAll('nav a');
  
      navLinks.forEach(link => {
          link.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default anchor behavior
  
              const targetId = this.getAttribute('href').substring(1); // Get the section ID
              const targetSection = document.getElementById(targetId);
  
              if (targetSection) {
                  targetSection.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
          });
      });
  
  });