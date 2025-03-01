function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

// Initial call to display the clock immediately
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);