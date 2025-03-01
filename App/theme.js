function toggle() {
    document.body.classList.add('light-theme');
    setTimeout(() => {
        document.body.classList.remove('light-theme');
    }, 100);
}

setInterval(toggle, 200);