document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop form from refreshing the page

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // You can replace this alert with any logic (e.g., sending to server)
      alert(`Thanks, ${name}! Your message has been sent.`);

      // Clear the form
      form.reset();
    });
  });