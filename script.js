// Scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(
      "Thank you for contacting us, " + name + "! We will get back to you soon."
    );
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields.");
  }
}