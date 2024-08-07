document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (menuButton && dropdownMenu) {
        menuButton.addEventListener('click', () => {
            const isVisible = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isVisible ? 'none' : 'block';
        });
    }
});


