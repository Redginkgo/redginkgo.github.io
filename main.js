document.addEventListener('DOMContentLoaded', () => {
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
        })
        .catch(error => {
            console.error('Footer 로딩 중 오류 발생:', error);
        });
} 