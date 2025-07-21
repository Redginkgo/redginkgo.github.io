document.addEventListener('DOMContentLoaded', () => {
    setFavicons();
    loadFooter();
});

function setFavicons() {
    const head = document.head;
    const sizes = [16, 32, 64, 128];
    
    sizes.forEach(size => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = `${size}x${size}`;
        link.href = `/www/icon_${size}.png`;
        head.appendChild(link);
    });
}

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