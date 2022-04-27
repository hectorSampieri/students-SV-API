const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Student Visual Thinking Api welcome!"});
});

app.listen(port, () => {
    console.log(`Student Visual Thinking  API in localhost:${port}`);
});
