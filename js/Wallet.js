// Function to toggle visibility
function toggleVisibility(arrow, content) {
    if (content.classList == 'down') {
        // Display the content and change arrow direction
        content.classList.add('up');
        content.classList.remove('down');
        arrow.innerHTML = "&#11161;";
    
    } else {
        // Hide the content and change arrow direction
        content.classList.add('down');
        content.classList.remove('up');
        arrow.innerHTML = "&#11163;";
    }

}

document.addEventListener("DOMContentLoaded", function() {

    const togglePending = document.getElementById("toggle-pending");
    const pendingContent = document.getElementById("pending");
    
    togglePending.addEventListener("click", function() {
        toggleVisibility(togglePending, pendingContent);
    });
    
    const togglePaid = document.getElementById("toggle-paid");
    const paidContent = document.getElementById("paid");
    
    togglePaid.addEventListener("click", function() {
        toggleVisibility(togglePaid, paidContent);
    });
        
    
    const toggleHistory = document.getElementById("toggle-history");
    const historyContent = document.getElementById("history");
    
    toggleHistory.addEventListener("click", function() {
        toggleVisibility(toggleHistory, historyContent);
    });
});