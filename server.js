
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    application: "Stellantis Agentic Employee Lease Update System",
    status: "Backend running",
    monitoringFrequency: "Once daily",
    emailPolicy: "Automatic routine updates; approval for sensitive updates",
    integrations: {
      orixMicrosoftForms: "Not connected",
      microsoftOutlook: "Not connected"
    }
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`Lease Update System running on port ${PORT}`);
});
