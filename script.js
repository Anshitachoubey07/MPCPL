// Placeholder for future JavaScript functionality
// Example: Scroll to sections on menu click

// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('nav ul li a');
  
//     links.forEach(link => {
//       link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const targetId = link.getAttribute('href').replace('.html', '').replace('#', '');
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//           window.scrollTo({
//             top: targetElement.offsetTop - 50, // Adjust for header height
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   });
  
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_d0r6hmq";
  const templateID = "template_w6e46af";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}