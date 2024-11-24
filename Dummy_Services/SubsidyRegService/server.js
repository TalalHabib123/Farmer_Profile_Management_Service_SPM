const express = require("express");
const app = express();
const PORT = 4001;

const dummyLoanApplications = [
    {
      _id: "63f1a7f1b3b5c63f1a7f1b3d",
      applicant: "63f1a7f1b3b5c63f1a7f1c2a",
      amountRequested: 50000,
      purpose: "Buy new farming equipment",
      interestRate: 5,
      status: "approved",
      documents: ["63f1a7f1b3b5c63f1a7f1d1"],
      createdAt: "2024-11-20T10:00:00Z",
      updatedAt: "2024-11-21T10:00:00Z",
    },
  ];
  
  const dummyRegulations = [
    {
      _id: "63f1a7f1b3b5c63f1a7f1b3e",
      title: "Pesticide Usage Limits",
      description: "Regulation on the maximum allowed pesticide usage per hectare.",
      effectiveDate: "2024-01-01T00:00:00Z",
      category: "pesticide",
      type: "Mandatory",
      bookmarkedBy: ["63f1a7f1b3b5c63f1a7f1c2a"],
      createdAt: "2024-11-15T10:00:00Z",
      updatedAt: "2024-11-16T10:00:00Z",
    },
  ];
  
  const dummySubsidies = [
    {
      _id: "63f1a7f1b3b5c63f1a7f1b3f",
      title: "Irrigation Subsidy",
      category: "Irrigation",
      region: "Midwest",
      description: "Provides funding for advanced irrigation systems.",
      applicationDeadline: "2024-12-31T23:59:59Z",
      amount: 100000,
      createdBy: "63f1a7f1b3b5c63f1a7f1c2b",
      createdAt: "2024-11-14T10:00:00Z",
      updatedAt: "2024-11-15T10:00:00Z",
    },
  ];
  
  const dummySubsidyApplications = [
    {
      _id: "63f1a7f1b3b5c63f1a7f1b40",
      farmer: "63f1a7f1b3b5c63f1a7f1c2a",
      subsidy: "63f1a7f1b3b5c63f1a7f1b3f",
      applicationDate: "2024-11-22T10:00:00Z",
      status: "pending",
      supportingDocuments: ["63f1a7f1b3b5c63f1a7f1d2"],
      createdAt: "2024-11-22T10:00:00Z",
      updatedAt: "2024-11-23T10:00:00Z",
    },
  ];
  

// Dummy data
const loanApplications = dummyLoanApplications;
const regulations = dummyRegulations;
const subsidies = dummySubsidies;
const subsidyApplications = dummySubsidyApplications;

// Routes for Loan Applications
app.get("/loanapplications/:farmerId/all", (req, res) => {
  const farmerId = req.params.farmerId;
  const filteredLoans = loanApplications.filter(
    (loan) => loan.applicant === farmerId
  );
  res.json(filteredLoans);
});

app.get("/loanapplications/:loanApplicationId", (req, res) => {
  const loanId = req.params.loanApplicationId;
  const loan = loanApplications.find((loan) => loan._id === loanId);
  if (loan) res.json(loan);
  else res.status(404).json({ error: "Loan application not found" });
});

// Routes for Regulations
app.get("/regulations/:farmerId/all", (req, res) => {
  res.json(regulations); // For simplicity, return all regulations
});

app.get("/regulations/:regulationId", (req, res) => {
  const regulationId = req.params.regulationId;
  const regulation = regulations.find((reg) => reg._id === regulationId);
  if (regulation) res.json(regulation);
  else res.status(404).json({ error: "Regulation not found" });
});

// Routes for Subsidies
app.get("/subsidies/:govOffId/all", (req, res) => {
  res.json(subsidies); // For simplicity, return all subsidies
});

app.get("/subsidies/:subsidyId", (req, res) => {
  const subsidyId = req.params.subsidyId;
  const subsidy = subsidies.find((sub) => sub._id === subsidyId);
  if (subsidy) res.json(subsidy);
  else res.status(404).json({ error: "Subsidy not found" });
});

// Routes for Subsidy Applications
app.get("/subsidyapplications/:farmerId/all", (req, res) => {
  const farmerId = req.params.farmerId;
  const filteredApplications = subsidyApplications.filter(
    (app) => app.farmer === farmerId
  );
  res.json(filteredApplications);
});

app.get("/subsidyapplications/:subsidyApplicationId", (req, res) => {
  const appId = req.params.subsidyApplicationId;
  const application = subsidyApplications.find((app) => app._id === appId);
  if (application) res.json(application);
  else res.status(404).json({ error: "Subsidy application not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Dummy microservice running on port ${PORT}`);
});
