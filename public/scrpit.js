document.addEventListener('DOMContentLoaded', function() {
    const monthLabel = document.getElementById('monthLabel');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    let currentMonth = 1; // February (0 is January)
    let currentYear = 2024;
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const populateCalendar = (month, year) => {
      const calendarContainer = document.getElementById('calendar');
      calendarContainer.innerHTML = ''; // Clear the calendar
      monthLabel.textContent = `${months[month]} ${year}`; // Set the label
  
      // Generate a fixed 30-day calendar for simplicity
      for (let day = 1; day <= 30; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('border', 'p-4', 'rounded', 'hover:bg-gray-100', 'cursor-pointer');
        dayElement.innerText = day;
        calendarContainer.appendChild(dayElement);
      }
  
      // Add events decreasing as months go by
      const numberOfEvents = Math.max(3 - (month - 1), 0); // Decrease events by month
      for (let i = 0; i < numberOfEvents; i++) {
        const eventDay = calendarContainer.children[i * 10]; // Arbitrary day for the event
        const eventElement = document.createElement('div');
        eventElement.textContent = `Event ${i + 1}`;
        eventElement.classList.add('bg-blue-500', 'text-white', 'p-1', 'mt-2', 'rounded');
        eventDay.appendChild(eventElement);
      }
    };
  
    // Initialize the calendar with February
    populateCalendar(currentMonth, currentYear);
  
    prevMonthBtn.addEventListener('click', () => {
      currentMonth = (currentMonth - 1 + 12) % 12; // Wrap around to December if going back from January
      populateCalendar(currentMonth, currentYear);
    });
  
    nextMonthBtn.addEventListener('click', () => {
      currentMonth = (currentMonth + 1) % 12; // Wrap around to January if going forward from December
      populateCalendar(currentMonth, currentYear);
    });
  });