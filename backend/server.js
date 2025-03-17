const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Helper function to calculate age from DOB
const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // Adjust age if birthdate has not occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// Ensure user.json exists
const userFilePath = path.join(__dirname, "user.json");
if (!fs.existsSync(userFilePath)) {
  fs.writeFileSync(userFilePath, "[]");
  console.log("user.json created successfully.");
}

// Register Endpoint
app.post("/register", (req, res) => {
  const { username, number, dob, email, password } = req.body;

  if (!username || !number || !dob || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const users = fs.existsSync(userFilePath)
      ? JSON.parse(fs.readFileSync(userFilePath, "utf8"))
      : [];

    // Check if email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered." });
    }

    const newUser = {
      id: users.length + 1,
      username,
      number,
      dob,
      age: calculateAge(dob),
      email,
      password,
    };

    users.push(newUser);
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));

    console.log("User registered:", newUser);
    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    console.error("Error writing to file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Login Endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const users = fs.existsSync(userFilePath)
      ? JSON.parse(fs.readFileSync(userFilePath, "utf8"))
      : [];

    // Check if user exists
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    console.log("User logged in:", user);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error reading from file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
