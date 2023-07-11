const express = require('express')
const app = express();
const port = 3001;
app.use(express.json());
const cors = require("cors");
app.use(cors());

const USERS = [{
    email: "charan@gmail.com",
    password: "1234"
}];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}, {
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}, {
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];

app.get("/", (req, res) => {
    res.send("hello server");
});

app.post("/sigin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    if (USERS.find((x) => x.email === email)) {
      return res.status(403).json({ msg: "Email already exists" });
    }
    USERS.push({
      email,
      password,
    });
  
    return res.json({
      msg: "Success",
    });
  });

app.get("/login", (req, res) => {
    // const email = req.body.email;
    // const password = req.body.password;
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ message: "email and password required" })
    }
    const existingUser = USERS.find(
        (obj) => obj.hasOwnProperty("email") && obj.email === email && obj.password === password
    );
    if (existingUser) {
        return res.status(200).json({ message: "You are logged in" });
    } else {
        return res.status(401).json({ message: "Invalid email or password" });
    }
});

app.get("/questions", (req, res) => {
    return res.status(200).json(QUESTIONS);
})


app.listen(port, () => {
    console.log(`Backend server running ${port}`)
});