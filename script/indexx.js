window.addEventListener('offline',() =>
    {
        alert("Sorry!Your internet connection has droped out..");
    });
    window.addEventListener('online', () =>
    {
        alert("Back Online");
    });
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.getElementById('moreddetail');

    toggleButton.addEventListener('click', () => {
        if (moredetail.classList.contains('hidden')) {
            moredetail.classList.remove('hidden');
            toggleButton.textContent = 'Learn Less';
        } else {
            moredetail.classList.add('hidden');
            toggleButton.textContent = 'Learn More';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuicon');
    const menuList = document.getElementById('menu--list');

    menuIcon.addEventListener('click', () => {
        // Toggle the menu visibility
        menuList.classList.toggle('show');

        // Toggle the active state for the menu icon
        menuIcon.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton2');
    const moreContent = document.getElementById('moreddetail2');

    toggleButton.addEventListener('click', () => {
        if (moredetail2.classList.contains('hidden')) {
            moredetail2.classList.remove('hidden');
            toggleButton.textContent = 'Learn Less';
        } else {
            moredetail2.classList.add('hidden');
            toggleButton.textContent = 'Learn More';
        }
    });
});
