function updateTime() {
    const now = new Date();
    const dateStr = now.getFullYear() + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + String(now.getDate()).padStart(2, '0');
    const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    const dateEl = document.getElementById('date');
    const timeEl = document.getElementById('time');
    if (dateEl) dateEl.textContent = dateStr;
    if (timeEl) timeEl.textContent = timeStr;
}
updateTime();
setInterval(updateTime, 1000);
