document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    const scheduleGrid = document.getElementById('schedule-grid-container');

    const scheduleData = [
        { day: 'Monday', time: '09-10', subject: 'Math' },
        { day: 'Monday', time: '10-11', subject: 'FREE' },
        { day: 'Monday', time: '11-12', subject: 'AI' },
        { day: 'Monday', time: '12-01', subject: 'FREE' },
        { day: 'Monday', time: '02-03', subject: 'DSA' },
        { day: 'Monday', time: '03-04', subject: 'FREE' },
        { day: 'Tuesday', time: '09-10', subject: 'OS' },
        { day: 'Tuesday', time: '10-11', subject: 'FREE' },
        { day: 'Tuesday', time: '11-12', subject: 'DBMS' },
        { day: 'Tuesday', time: '12-01', subject: 'FREE' },
        { day: 'Tuesday', time: '02-03', subject: 'Mini Project' },
        { day: 'Tuesday', time: '03-04', subject: 'FREE' },
        { day: 'Wednesday', time: '09-10', subject: 'AI' },
        { day: 'Wednesday', time: '10-11', subject: 'Math' },
        { day: 'Wednesday', time: '11-12', subject: 'FREE' },
        { day: 'Wednesday', time: '12-01', subject: 'FREE' },
        { day: 'Wednesday', time: '02-03', subject: 'DSA' },
        { day: 'Wednesday', time: '03-04', subject: 'Soft Skills' },
        { day: 'Thursday', time: '09-10', subject: 'DBMS' },
        { day: 'Thursday', time: '10-11', subject: 'FREE' },
        { day: 'Thursday', time: '11-12', subject: 'OS' },
        { day: 'Thursday', time: '12-01', subject: 'FREE' },
        { day: 'Thursday', time: '02-03', subject: 'Mini Project' },
        { day: 'Thursday', time: '03-04', subject: 'FREE' },
        { day: 'Friday', time: '09-10', subject: 'Math' },
        { day: 'Friday', time: '10-11', subject: 'AI' },
        { day: 'Friday', time: '11-12', subject: 'FREE' },
        { day: 'Friday', time: '12-01', subject: 'FREE' },
        { day: 'Friday', time: '02-03', subject: 'Coding Practice' },
        { day: 'Friday', time: '03-04', subject: 'FREE' },
    ];

    let html = '<div class="schedule-time"></div>';
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = ['09-10', '10-11', '11-12', '12-01', '02-03', '03-04'];

    days.forEach(day => {
        html += `<div class="schedule-day">${day}</div>`;
    });

    timeSlots.forEach(time => {
        html += `<div class="schedule-time">${time.replace('-', '–')}</div>`;
        days.forEach(day => {
            const slot = scheduleData.find(s => s.day === day && s.time === time);
            if (slot) {
                const isFree = slot.subject === 'FREE';
                const slotClass = isFree ? 'schedule-slot free' : 'schedule-slot';
                let slotContent = `<span>${slot.subject}</span>`;
                if (isFree) {
                    slotContent += '<div class="badge">Recommended Activity Available</div>';
                    slotContent += '<div class="tooltip">DSA Practice – 45 mins</div>';
                }
                html += `<div class="${slotClass}">${slotContent}</div>`;
            } else {
                html += '<div class="schedule-slot"></div>';
            }
        });
    });

    scheduleGrid.innerHTML = html;
});