const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');

const app = express();
const port = 3001;

app.use(express.json()); // Use built-in middleware to parse JSON bodies
app.use(cors());

app.post('/subscribe', async (req, res) => {
  try {
    // Validate request body
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const data = req.body;
    const url = 'https://us21.api.mailchimp.com/3.0/lists/c11ffe20a7';
    const fetch = (await import('node-fetch')).default;

    const response = await fetch(url, {
      method: 'POST',
      auth: `harshith:${process.env.KEY}`,
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      res.status(200).json(responseData);
    } else {
      // Handle MailChimp API errors
      const errorMessage = responseData.title || 'Unknown MailChimp API error';
      console.error(`MailChimp API error: ${errorMessage}`);
      res.status(response.status).json({ error: errorMessage });
    }
  } catch (error) {
    console.log('Error occurred:', error);

    // Handle unexpected errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
