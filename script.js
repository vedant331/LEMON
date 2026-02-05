document.addEventListener("DOMContentLoaded", function () {

    /* ================= SLIDER ================= */

    const needs = [
        {
            title: "Clean Water",
            text: "Access to safe drinking water remains a challenge for many families.",
            image: "img/water.jpg",
            link: "water.html"
        },
        {
            title: "Education",
            text: "Children lack learning resources and academic support.",
            image: "img/education.jpg",
            link: "education.html"
        },
        {
            title: "Waste Management",
            text: "Poor waste disposal affects health and environment.",
            image: "img/waste.jpg",
            link: "waste.html"
        },
        {
            title: "Health & Hygiene",
            text: "Preventable illnesses due to lack of awareness.",
            image: "img/health.jpg",
            link: "health.html"
        }
    ];

    let currentIndex = 0;

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % needs.length;
        updateSlide();
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + needs.length) % needs.length;
        updateSlide();
    };

    function updateSlide() {
        const image = document.getElementById("needImage");
        const content = document.querySelector(".slider-content");

        image.classList.add("fade-out");
        content.classList.add("fade-out");

        setTimeout(() => {
            document.getElementById("needTitle").innerText = needs[currentIndex].title;
            document.getElementById("needText").innerText = needs[currentIndex].text;
            image.src = needs[currentIndex].image;
            document.getElementById("needLink").href = needs[currentIndex].link;

            image.classList.remove("fade-out");
            content.classList.remove("fade-out");
        }, 400);
    }

    /* ================= DONATE MODAL ================= */

    const openDonateBtn = document.getElementById("openDonateModal");
    const donateModal = document.getElementById("donateModal");
    const closeDonateBtn = document.getElementById("closeDonateModal");

    if (openDonateBtn && donateModal && closeDonateBtn) {

        openDonateBtn.addEventListener("click", function (e) {
            e.preventDefault();
            donateModal.style.display = "flex";
        });

        closeDonateBtn.addEventListener("click", function () {
            donateModal.style.display = "none";
        });

        window.addEventListener("click", function (e) {
            if (e.target === donateModal) {
                donateModal.style.display = "none";
            }
        });
    }

});
const openReport = document.getElementById("openReport");
const reportModal = document.getElementById("reportModal");
const closeReport = document.getElementById("closeReport");

// Open modal ONLY on click
openReport.addEventListener("click", () => {
    reportModal.style.display = "flex";
});

// Close modal
closeReport.addEventListener("click", () => {
    reportModal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === reportModal) {
        reportModal.style.display = "none";
    }
});

