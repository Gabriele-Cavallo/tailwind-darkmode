const bottone = document.getElementById('btn');
bottone.addEventListener('click', () => {
    const theme = document.documentElement.classList[0];
    if ( theme == 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        bottone.innerText = 'Light theme';
    }else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        bottone.innerText = 'Dark theme';
    }
})

if (localStorage.getItem('theme') && localStorage.getItem('theme') == 'dark') {
    document.documentElement.classList.add('dark')
    bottone.innerText = 'Dark theme';
}else {
    bottone.innerText = 'Light theme';
}