const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for single-page apps (optional)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(3000, () => {
    console.log(`Server running at http://localhost: 3000`);
});
