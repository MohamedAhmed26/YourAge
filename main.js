function calculateAndPrintDate() {
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);

    let today = new Date();
    let dob = new Date(year, month - 1, day);

    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
        monthDiff += 12;
    }

    if (dayDiff < 0) {
        monthDiff--;
        let lastMonthDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        dayDiff = lastMonthDate + dayDiff;
    }

    document.getElementById("age").textContent = age;
    document.getElementById("monthDiff").textContent = monthDiff;
    document.getElementById("dayDiff").textContent = dayDiff;
}