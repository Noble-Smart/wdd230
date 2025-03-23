
document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");
    const currentMonth = document.getElementById("currentMonth");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    let date = new Date();

    function renderCalendar() {
        calendarBody.innerHTML = "";
        const month = date.getMonth();
        const year = date.getFullYear();
        currentMonth.textContent = date.toLocaleString("en-US", { month: "long", year: "numeric" });

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        let row = document.createElement("tr");

        for (let i = 0; i < firstDay; i++) {
            let emptyCell = document.createElement("td");
            row.appendChild(emptyCell);
        }

        for (let day = 1; day <= lastDate; day++) {
            let cell = document.createElement("td");
            cell.textContent = day;

            if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                cell.style.backgroundColor = "#005f73";
                cell.style.color = "white";
                cell.style.borderRadius = "50%";
            }

            row.appendChild(cell);

            if ((firstDay + day) % 7 === 0) {
                calendarBody.appendChild(row);
                row = document.createElement("tr");
            }
        }

        if (row.children.length > 0) {
            calendarBody.appendChild(row);
        }
    }

    prevMonthBtn.addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();

    function updateClock() {
        const options = { timeZone: "Africa/Lagos", hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" };
        document.getElementById("clock").textContent = new Date().toLocaleTimeString("en-US", options);
    }

    setInterval(updateClock, 1000);
    updateClock();
});

