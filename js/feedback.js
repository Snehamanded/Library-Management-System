document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const feedback = {
        name: formData.get('name'),
        email: formData.get('email'),
        rating: formData.get('rating'),
        comments: formData.get('comments')
    };
    console.log('Feedback submitted:', feedback);
    alert("Thank you for the feedback.");
    window.location.href = '../../html/StudentCorner.html';
});