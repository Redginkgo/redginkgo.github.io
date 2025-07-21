document.addEventListener('DOMContentLoaded', () => {
    setFavicons();
    loadFooter();
});

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        });
} 