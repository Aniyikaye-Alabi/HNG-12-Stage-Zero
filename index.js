const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define the route for the API
app.get('/api/info', (req, res) => {
    const email = 'alabianiyikaye6@gmail.com'; // Replace with your registered email
    const currentDateTime = new Date().toISOString();
    const githubUrl = 'https://github.com'; // Replace with your GitHub URL

    const response = {
        email: email,
        currentDateTime: currentDateTime,
        githubUrl: githubUrl
    };

    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});