import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

const app = express();

// Load environment variables
dotenv.config();
const port = process.env.PORT || 5175;

// const port = 5174;

app.use(bodyParser.json());

app.listen(port, () => console.log(`Server Running on port : http://localhost:${port}`));

app.get("/",(req,res) => {
    console.log("Get request received on port: ", port);
    res.send("Hello World!");
});

app.use("/users", userRoutes);
//Final Step: Run the server using the command: node index.js