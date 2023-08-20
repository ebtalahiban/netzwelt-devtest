const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
      username,
      password,
    });

    const token = response.data.token;

    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Login failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
