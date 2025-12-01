document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.border = "2px solid darkblue";
    });
    card.addEventListener("mouseout", () => {
        card.style.border = "none";
    });
});