document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuItems = dropdownMenu.querySelectorAll('a'); 

    if (menuButton && dropdownMenu) {
        menuButton.addEventListener('click', () => {
            const isVisible = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isVisible ? 'none' : 'block';
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                dropdownMenu.style.display = 'none';
            });
        });
    }
});
