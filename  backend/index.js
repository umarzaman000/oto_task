const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const hardcodedOtp = '1234';

app.post('/', (req, res) => {
  const { phone } = req.body;
  console.log(`OTP ${hardcodedOtp} ${phone} `);
  res.status(200).send({ message: 'OTP sent successfully' });
});

app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  if (otp === hardcodedOtp) {
    res.status(200).send({ message:" succesed" });
  } else {
    res.status(400).send({ message: "wrong" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
