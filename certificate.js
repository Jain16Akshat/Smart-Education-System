


// Get all enroll buttons
const enrollButtons = document.querySelectorAll('.enroll-btn');

// Get the modal and dashboard info element
const modal = document.getElementById('course-dashboard');
const dashboardInfo = document.getElementById('dashboard-info');
const closeBtn = document.querySelector('.close-btn');

// Loop through each enroll button and add a click event
enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the course card related to the clicked enroll button
        const courseCard = this.closest('.course-card');

        // Extract the course details from the data attributes
        const courseName = courseCard.getAttribute('data-course');
        const coursePeriod = courseCard.getAttribute('data-period');
        const courseCertificate = courseCard.getAttribute('data-certificate');

        // Set the content inside the modal
        dashboardInfo.innerHTML = `
            <h2>${courseName}</h2>
            <p><strong>Course Duration:</strong> ${coursePeriod}</p>
            <p><strong>Certificate Provided:</strong> ${courseCertificate}</p>
            <button class="certificate-btn">Get Certificate</button>
        `;

        // Show the modal
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
// Countdown Timer Script
let timers = [
    { id: "timer1", offerEndDate: new Date("October 25, 2024 23:59:59").getTime() },
    { id: "timer2", offerEndDate: new Date("October 15, 2024 23:59:59").getTime() },
    { id: "timer3", offerEndDate: new Date("October 20, 2024 23:59:59").getTime() },
    { id: "timer4", offerEndDate: new Date("October 25, 2024 23:59:59").getTime() }
];

timers.forEach(timer => {
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = timer.offerEndDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(timer.id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(timer.id).innerHTML = "Offer expired!";
        }
    }, 1000);
});
window.onscroll = function() {
    let scrollButton = document.querySelector(".scroll-top-btn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
}
AOS.init();
