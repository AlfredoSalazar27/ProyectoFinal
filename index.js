function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cellphone = document.getElementById('cellphone').value;
    const passwd = document.getElementById('passwd').value;

    fetch('http://localhost:5001/interested', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, cellphone, passwd })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        localStorage.setItem('token', data.data.interested.token);
        alert('User registered successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to register user.');
    });
}

function updateUser() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('No user token found. Please register first.');
        return;
    }

    const name = document.getElementById('updateName').value;
    const email = document.getElementById('updateEmail').value;
    const cellphone = document.getElementById('updateCellphone').value;

    fetch(`http://localhost:5001/interested/${token}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, cellphone })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('User updated successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to update user.');
    });
}

//hasta aqui

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Authentication failed.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Aquí puedes guardar los datos del usuario en el localStorage o en una sesión
        localStorage.setItem('userData', JSON.stringify(data));
        alert('Login successful!');
        // Redireccionar a la página de inicio o a cualquier otra página deseada
        window.location.href = 'publicaciones.html'; // Cambia 'index.html' por la ruta de tu página de inicio
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Authentication failed. Please check your credentials.');
    });
}


