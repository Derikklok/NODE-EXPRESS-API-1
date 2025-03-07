import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();

const port = 5174;

app.use(bodyParser.json());

app.listen(port, () => console.log(`Server Running on port : http://localhost:${port}`));

app.get("/",(req,res) => {
    console.log("Get request received on port: ", port);
    res.send("Hello World!");
});

app.use("/users", userRoutes);