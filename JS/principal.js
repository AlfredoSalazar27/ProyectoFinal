document.addEventListener('DOMContentLoaded', function() {
    displayJobOffers();
});

function displayJobOffers() {
    const jobs = [
        {
            enterprise: 'Google',
            title: 'Software Developer',
            description: 'Develop cutting-edge web applications.',
            requirements: '3+ years experience in web development.',
            salary: '$3000 per month',
            duration: 'Full-time'
        },
        {
            enterprise: 'IMicrosoft',
            title: 'Project Manager',
            description: 'Manage projects and coordinate teams.',
            requirements: '5+ years in project management.',
            salary: '$4500 per month',
            duration: 'Contract, 12 months'
        },
        {
            enterprise: 'IBM',
            title: 'Environmental Engineer',
            description: 'Design sustainable environmental solutions.',
            requirements: 'Bachelor\'s in environmental engineering.',
            salary: '$3500 per month',
            duration: 'Part-time'
        }
    ];

    const jobContainer = document.getElementById('jobOffers');
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-offer';
        jobCard.innerHTML = `
            <h3>${job.title} at ${job.enterprise}</h3>
            <p><strong>Description:</strong> ${job.description}</p>
            <p><strong>Requirements:</strong> ${job.requirements}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Duration:</strong> ${job.duration}</p>
            <button onclick="applyForJob()">Apply Now</button>
        `;
        jobContainer.appendChild(jobCard);
    });
}
