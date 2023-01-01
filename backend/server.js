import  express  from "express";
import cors from "cors";

const app = express();

//  Create an Express application
app.use(cors());
app.use(express.json());


// Create a GET route
app.get('/message', (req, res) => {
    res.json({ });
});

// Start the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});