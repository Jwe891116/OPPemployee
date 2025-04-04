import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employeeRoutes';
import path from 'path';  // Import path module to resolve directory paths

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(path.join(process.cwd(), 'public'))));

// Use employee routes
app.use('/api', employeeRoutes);

// Route to serve index.html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
