document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-button');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchResults = document.querySelectorAll('.searchable');
            
            searchResults.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Version switcher functionality
    const visionButton = document.querySelector('.vision-button');
    if (visionButton) {
        visionButton.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            const isHighContrast = document.body.classList.contains('high-contrast');
            visionButton.textContent = isHighContrast ? 'Версия сайта по умолчанию' : 'Версия сайта для слабовидящих';
        });
    }
});