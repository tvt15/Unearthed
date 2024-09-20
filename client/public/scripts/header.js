document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    if (!header) {
        console.error('Header element not found');
        return;
    }

    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'header-left';
    headerContainer.appendChild(headerLeft);

    const h1 = document.createElement('h1');
    h1.textContent = 'UnEarthed';
    headerContainer.appendChild(h1);

    const logo = document.createElement('img');
    logo.src = 'logo.png';

    const headerButton = document.createElement('button');
    headerButton.textContent = 'Home';
    headerButton.addEventListener('click', function handleClick() {
        window.location = '/';
    });

    headerLeft.appendChild(headerButton);
    headerLeft.appendChild(logo);
    headerLeft.appendChild(h1);

    const headerRight = document.createElement('div');
    headerRight.className = 'header-right';
    headerContainer.appendChild(headerRight);

    const headerRightButton = document.createElement('button');
    headerRightButton.textContent = 'Home';
    headerRightButton.addEventListener('click', function handleClick() {
        window.location = '/';
    });

    headerRight.appendChild(headerRightButton);
    headerContainer.appendChild(headerLeft);
    headerContainer.appendChild(headerRight);

    header.appendChild(headerContainer);
});