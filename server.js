const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Serve lexicon data
app.get('/api/data', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'latest-state.json'), 'utf8'));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'No data available' });
  }
});

app.listen(PORT, () => console.log(`Lexicon Mortality running on port ${PORT}`));
