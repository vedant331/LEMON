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

/* OPEN MODAL */
if (openDonateBtn) {
    openDonateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        donateModal.style.display = "flex";
    });
}

/* CLOSE BY X BUTTON */
if (closeDonateBtn) {
    closeDonateBtn.addEventListener("click", () => {
        donateModal.style.display = "none";
    });
}

/* CLOSE BY CLICKING OUTSIDE */
window.addEventListener("click", (e) => {
    if (e.target === donateModal) {
        donateModal.style.display = "none";
    }
});

/* CLOSE BY ESC KEY (PRO LEVEL UX) */
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        donateModal.style.display = "none";
    }
});


    /* ================= REPORT MODAL ================= */

    const openReport = document.getElementById("openReport");
    const reportModal = document.getElementById("reportModal");
    const closeReport = document.getElementById("closeReport");

    if (openReport && reportModal && closeReport) {
        openReport.addEventListener("click", () => {
            reportModal.style.display = "flex";
        });

        closeReport.addEventListener("click", () => {
            reportModal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === reportModal) {
                reportModal.style.display = "none";
            }
        });
    }

    /* ================= REPORT FORM SUBMIT ================= */

    const reportForm = document.getElementById("reportForm");

if (reportForm) {
    reportForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            location: document.getElementById("location").value,
            issueType: document.getElementById("issueType").value,
            description: document.getElementById("description").value
        };

        try {
            const res = await fetch("http://localhost:5000/api/report", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            alert(result.message);

            reportForm.reset();
            document.getElementById("reportModal").style.display = "none";

        } catch (error) {
            alert("❌ Failed to submit report. Try again.");
        }
    });
}
/* ================= VOLUNTEER FORM ================= */

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
    volunteerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById("volName").value,
            email: document.getElementById("volEmail").value,
            skills: document.getElementById("volSkills").value
        };

        try {
            const res = await fetch("http://localhost:5000/api/volunteer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            alert(result.message);

            volunteerForm.reset();

        } catch (error) {
            alert("❌ Failed to register. Try again.");
        }
    });
}
 const contactForm = document.getElementById("contactForm");

    if (!contactForm) return; // prevents errors on other pages

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById("contactName").value.trim(),
            email: document.getElementById("contactEmail").value.trim(),
            mobile: document.getElementById("contactMobile").value.trim(),
            donationType: document.getElementById("donationType").value,
            message: document.getElementById("contactMessage").value.trim()
        };

        console.log("Sending contact data:", data); // 🔍 DEBUG

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message || "Something went wrong");
                return;
            }

            alert(result.message);
            contactForm.reset();
            document.getElementById("donateModal").style.display = "none";

        } catch (err) {
            console.error(err);
            alert("❌ Failed to submit");
        }
    });
    function animateCounter(id, target, speed = 20) {
    const el = document.getElementById(id);
    let count = 0;

    const interval = setInterval(() => {
        count++;
        el.innerText = count + (id === "peopleReached" ? "+" : "");
        if (count >= target) clearInterval(interval);
    }, speed);
}

// Run when page loads
window.addEventListener("DOMContentLoaded", () => {
    animateCounter("peopleReached", 4, 15);
    animateCounter("volunteers", 3, 40);
    animateCounter("cleanUps", 2, 200);
    animateCounter("children", 6, 30);
});

});
