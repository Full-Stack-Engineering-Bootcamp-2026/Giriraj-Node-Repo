

const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/get-data', (req, res) => {
  const { name, message } = req.query; // Extract data from query parameters

  
  if (!name || !message) {
    return res.status(400).json({
      message: "Both 'name' and 'message' are required in query parameters"
    });
  }

 
  res.json({
    message: "GET request received",
    data: { name, message }
  });
});


app.post('/post-data', (req, res) => {
  const { name, message } = req.body; 


  if (!name || !message) {
    return res.status(400).json({
      message: "Both 'name' and 'message' are required in the request body"
    });
  }


  res.json({
    message: "POST request received",
    data: { name, message }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});