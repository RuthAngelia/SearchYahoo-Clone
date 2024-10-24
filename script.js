function displayCurrentDate() {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = today.toLocaleDateString(undefined, options);

    document.getElementById("current-date").innerText = "Hari ini, " + dateString;
}

window.onload = displayCurrentDate;