function addCertification() {
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const studycenter = document.getElementById('studycenter').value;
    const year = parseInt(document.getElementById('year').value);

    const token = localStorage.getItem('token');
    if (!token) {
        alert('No user token found. Please login first.');
        return;
    }

    fetch(`http://localhost:5001/${token}/certification`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, category, studycenter, year })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.customer && data.customer.data && data.customer.data.id) {
            alert('Certification added successfully!');
            localStorage.setItem('certificationId', data.customer.data.id); // Store certification ID
        } else {
            console.log('Data received:', data);
            alert('Failed to add certification. The response structure does not match.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to add certification.');
    });
}

function showCertificationId() {
    const certificationId = localStorage.getItem('certificationId');
    if (certificationId) {
        alert(`Certification ID: ${certificationId}`);
    } else {
        alert('No certification ID found. Please add a certification.');
    }
}
function updateCertification() {
    const token = localStorage.getItem('token');
    const certificationId = localStorage.getItem('certificationId');
    if (!token || !certificationId) {
        alert('Token or certification ID not found. Please check your login and certification details.');
        return;
    }

    const description = document.getElementById('updateDescription').value;
    const category = document.getElementById('updateCategory').value;
    const studycenter = document.getElementById('updateStudyCenter').value;
    const year = parseInt(document.getElementById('updateYear').value);

    fetch(`http://localhost:5001/${token}/certification/${certificationId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, category, studycenter, year })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Certification updated successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to update certification.');
    });
}
function deleteCertification() {
    const token = localStorage.getItem('token');
    const certificationId = localStorage.getItem('certificationId');
    if (!token || !certificationId) {
        alert('Token or certification ID not found. Please check your login and certification details.');
        return;
    }

    fetch(`http://localhost:5001/${token}/certification/${certificationId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json().then(data => {
                console.log('Certification deleted successfully:', data);
                alert('Certification deleted successfully!');
                localStorage.removeItem('certificationId');  // Remove the certification ID from localStorage after successful deletion
            });
        } else {
            response.json().then(data => {
                console.log('Failed to delete certification:', data);
                alert('Failed to delete certification. Please try again.');
            });
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to delete certification.');
    });
}

