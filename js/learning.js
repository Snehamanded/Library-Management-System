document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const courseSelect = document.getElementById('courseSelect');
    const selectedCourse = courseSelect.options[courseSelect.selectedIndex].value;
    const learningLinks = document.querySelectorAll('#learnings a');
    learningLinks.forEach(function(link) {
        if (link.textContent === selectedCourse) {
            window.open(link.href, '_blank');
        }
    });
});