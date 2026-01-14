// Imports
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

// Vars
const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;
// import.meta.url gives URL of current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Express Server
const app = express();

// serves static files from public dir
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Routes
app.get('/', (req, res) => {
    const title = "Welcome Home";
    res.render('home', { title });
});

app.get('/about', (req, res) => {
    const title = 'About Me';
    res.render('about', { title });
});
app.get('/products', (req, res) => {
    const title = 'Our Products';
    res.render('products', { title });
});


// Start Server
app.get('/', (req, res) => {
    res.send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});