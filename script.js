
// SELECT ANNOUNCEMENT ELEMENTS
const filterButtons = document.querySelectorAll(
    ".announcement-categories button"
);

const announcementCards = document.querySelectorAll(
    ".announcement-card"
);


// FILTER ANNOUNCEMENTS
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get selected category
        const selectedCategory = button.textContent.trim().toLowerCase();

        // Check every announcement card
        announcementCards.forEach(card => {

            const category = card.querySelector(".category")
                .textContent.trim().toLowerCase();

            // Display or hide cards
            if (selectedCategory === "all" || category === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        // Highlight active button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});
