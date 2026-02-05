// Backend Branch: Logic for the click event
document.getElementById('complete-btn').addEventListener('click', function() {
    
    // The requested alert
    alert("Task completed! Notification sent.");

    // Bonus: Updating the placeholder div to show it worked on the page too
    const display = document.getElementById('message-display');
    display.textContent = "Status: Task finished successfully!";
});
