import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SupplierDashboard from './supplierdashboard';
import SupplierProfile from './supplierprofilemgmt';
import ProductManagement from './productmgmt';
import FarmerDashboard from './farmerdashboard';
import FarmerProfile from './farmerprofile';
import SubsidyManagement from './subsidy';
import GovernmentDashboard from './govermentdashboard';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SupplierDashboard />} />
          <Route path="/supplierprofile" element={<SupplierProfile />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/farmerDashboard" element={<FarmerDashboard />} />
          <Route path="/farmerprofile" element={<FarmerProfile />} />
          <Route path="/subsidy" element={<SubsidyManagement />} />
          <Route path="/governmentDashboard" element={<GovernmentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;