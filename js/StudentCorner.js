// Add an event listener to the dashboard link
document.getElementById('dashboard-link').addEventListener('click', function(e) {
    // Prevent the default link behavior
    e.preventDefault();
  
    // Toggle the dashboard options
    var dashboardOptions = document.getElementById('dashboard-options');
    if (dashboardOptions.style.display === 'none' || dashboardOptions.style.display === '') {
      dashboardOptions.style.display = 'block';
    } else {
      dashboardOptions.style.display = 'none';
    }
  });
  