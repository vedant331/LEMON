// Volunteer form
document.getElementById("volunteerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for joining! We will contact you soon.");
    this.reset();
});

// Donate modal (ONLY Get in Touch)
const modal = document.getElementById("donateModal");
const openBtn = document.getElementById("openDonateModal");
const closeBtn = document.getElementById("closeDonateModal");

openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("donateForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your support! We will contact you soon.");
    modal.style.display = "none";
    this.reset();
});
