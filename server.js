const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Faayilota static (index.html, css, js) tajaajiluuf
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
