function updateTime() {
  // Get the current time
  const now = new Date();

  // Get the hours, minutes, and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the time
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Update the clock display
  const clock = document.getElementById("clock");
  clock.textContent = formattedTime;
}

// Update the clock every second
setInterval(updateTime, 1000);
