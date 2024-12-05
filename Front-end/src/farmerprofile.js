import React, { useState } from 'react';

const FarmerProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    user: "507f1f77bcf86cd799439011", // MongoDB ObjectId format
    
    farmDetails: {
      farmLocation: {
        latitude: 40.7128,
        longitude: -74.0060,
        address: "123 Farm Road, Farmville, AG 12345"
      },
      farmSize: 100,
      cropsGrown: ["Wheat", "Rice", "Corn"],
      licenseCertifications: ["Organic Farming", "Sustainable Agriculture"]
    },

    creditScore: {
      score: 750,
      lastUpdated: new Date().toISOString()
    },

    bankDetails: {
      accountNumber: "****4321",
      bankName: "AgriBank",
      accountHolder: "John Doe"
    },

    contributionStats: {
      numContributed: 45,
      numLabeled: 30,
      numValidated: 15
    },

    thresholds: {
      temperature: {
        heat: 35,
        frost: 0
      },
      precipitation: {
        droughtDays: 7,
        flood: 50
      },
      humidity: {
        pestRiskHumidity: 80,
        pestRiskTempRange: [15, 30]
      },
      wind: {
        strongWind: 40
      },
      uv: {
        highUV: 8
      }
    },

    // Additional personal info (not in schema but useful for UI)
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 234 567 8900",

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const handleInputChange = (e, section = null, subsection = null) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev };
      if (section && subsection) {
        newData[section][subsection][name] = value;
      } else if (section) {
        newData[section][name] = value;
      } else {
        newData[name] = value;
      }
      newData.updatedAt = new Date().toISOString();
      return newData;
    });
  };

  const handleArrayUpdate = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: Array.isArray(value) ? value : [value]
      },
      updatedAt: new Date().toISOString()
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Farmer Profile</h1>
            <p className="text-gray-600">Manage your farm and personal information</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-lg ${
              isEditing 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700'
            }`}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6 border-b">
          {['personal', 'farm', 'thresholds', 'financial', 'stats'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === tab
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm">
          {/* Farm Location and Details */}
          <div className={`p-6 ${activeTab === 'farm' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">Farm Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Latitude
                </label>
                <input
                  type="number"
                  name="latitude"
                  value={formData.farmDetails.farmLocation.latitude}
                  onChange={(e) => handleInputChange(e, 'farmDetails', 'farmLocation')}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Longitude
                </label>
                <input
                  type="number"
                  name="longitude"
                  value={formData.farmDetails.farmLocation.longitude}
                  onChange={(e) => handleInputChange(e, 'farmDetails', 'farmLocation')}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.farmDetails.farmLocation.address}
                  onChange={(e) => handleInputChange(e, 'farmDetails', 'farmLocation')}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Size (acres)
                </label>
                <input
                  type="number"
                  name="farmSize"
                  value={formData.farmDetails.farmSize}
                  onChange={(e) => handleInputChange(e, 'farmDetails')}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Crops Grown */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Crops Grown
              </label>
              <div className="flex flex-wrap gap-2">
                {formData.farmDetails.cropsGrown.map((crop, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {crop}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Thresholds */}
          <div className={`p-6 ${activeTab === 'thresholds' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">Weather Thresholds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Temperature</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600">Heat Threshold (°C)</label>
                    <input
                      type="number"
                      name="heat"
                      value={formData.thresholds.temperature.heat}
                      onChange={(e) => handleInputChange(e, 'thresholds', 'temperature')}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Frost Threshold (°C)</label>
                    <input
                      type="number"
                      name="frost"
                      value={formData.thresholds.temperature.frost}
                      onChange={(e) => handleInputChange(e, 'thresholds', 'temperature')}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Precipitation</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600">Drought Days</label>
                    <input
                      type="number"
                      name="droughtDays"
                      value={formData.thresholds.precipitation.droughtDays}
                      onChange={(e) => handleInputChange(e, 'thresholds', 'precipitation')}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Flood Level (mm)</label>
                    <input
                      type="number"
                      name="flood"
                      value={formData.thresholds.precipitation.flood}
                      onChange={(e) => handleInputChange(e, 'thresholds', 'precipitation')}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className={`p-6 ${activeTab === 'financial' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Score
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    name="score"
                    value={formData.creditScore.score}
                    onChange={(e) => handleInputChange(e, 'creditScore')}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <span className="text-sm text-gray-500">
                    Last updated: {new Date(formData.creditScore.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankDetails.bankName}
                    onChange={(e) => handleInputChange(e, 'bankDetails')}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.bankDetails.accountNumber}
                    onChange={(e) => handleInputChange(e, 'bankDetails')}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`p-6 ${activeTab === 'stats' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">Contribution Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Contributed</p>
                <p className="text-2xl font-bold text-gray-800">{formData.contributionStats.numContributed}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Labeled</p>
                <p className="text-2xl font-bold text-gray-800">{formData.contributionStats.numLabeled}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Validated</p>
                <p className="text-2xl font-bold text-gray-800">{formData.contributionStats.numValidated}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timestamps */}
        <div className="mt-4 text-sm text-gray-500">
          <p>Created: {new Date(formData.createdAt).toLocaleString()}</p>
          <p>Last Updated: {new Date(formData.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;