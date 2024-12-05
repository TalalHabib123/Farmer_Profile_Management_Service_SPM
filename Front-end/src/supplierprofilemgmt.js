import React, { useState } from 'react';

const SupplierProfile = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isEditing, setIsEditing] = useState(false);
  const [newDeliveryArea, setNewDeliveryArea] = useState('');

  const [formData, setFormData] = useState({
    user: "USER123",
    supplierDetails: {
      logistics: {
        deliveryAreas: ["North Region", "South Region", "East Region"],
        averageDeliveryTime: 48
      },
      companyName: "Green Agriculture Solutions",
      businessType: "Agricultural Supplies",
      established: "2020",
      taxId: "TAX123456789",
      website: "www.greenagri.com",
      description: "Leading supplier of organic farming products and agricultural solutions",
      employeeCount: "50-100",
      annualRevenue: "$1M - $5M",
      certifications: ["Organic Certified", "ISO 9001", "Fair Trade"]
    },
    contactInfo: {
      email: "contact@greenagri.com",
      phone: "+1 234 567 8900",
      address: "123 Farm Street",
      city: "Agritown",
      state: "ST",
      zipCode: "12345"
    },
    financialInfo: {
      bankName: "AgriBank",
      accountNumber: "****4321",
      routingNumber: "****9876"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const handleInputChange = (e, section = null) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [section ? section : name]: section 
        ? { ...prev[section], [name]: value }
        : value,
      updatedAt: new Date().toISOString()
    }));
  };

  const handleLogisticsChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      supplierDetails: {
        ...prev.supplierDetails,
        logistics: {
          ...prev.supplierDetails.logistics,
          [name]: value
        }
      },
      updatedAt: new Date().toISOString()
    }));
  };

  const addDeliveryArea = () => {
    if (newDeliveryArea.trim()) {
      setFormData(prev => ({
        ...prev,
        supplierDetails: {
          ...prev.supplierDetails,
          logistics: {
            ...prev.supplierDetails.logistics,
            deliveryAreas: [...prev.supplierDetails.logistics.deliveryAreas, newDeliveryArea.trim()]
          }
        }
      }));
      setNewDeliveryArea('');
    }
  };

  const removeDeliveryArea = (index) => {
    setFormData(prev => ({
      ...prev,
      supplierDetails: {
        ...prev.supplierDetails,
        logistics: {
          ...prev.supplierDetails.logistics,
          deliveryAreas: prev.supplierDetails.logistics.deliveryAreas.filter((_, i) => i !== index)
        }
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Profile Management</h1>
            <p className="text-gray-600">Manage your supplier profile and business information</p>
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

        {/* Profile Header Card */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-6">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-4xl">🏢</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{formData.supplierDetails.companyName}</h2>
              <p className="text-gray-600">{formData.supplierDetails.businessType}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.supplierDetails.certifications.map((cert, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6 border-b">
          {['general', 'logistics', 'contact', 'business', 'financial'].map((tab) => (
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
          {/* Logistics Information */}
          <div className={`p-6 ${activeTab === 'logistics' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">Logistics Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Delivery Time (hours)
                </label>
                <input
                  type="number"
                  name="averageDeliveryTime"
                  value={formData.supplierDetails.logistics.averageDeliveryTime}
                  onChange={handleLogisticsChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Areas
                </label>
                <div className="space-y-2">
                  {formData.supplierDetails.logistics.deliveryAreas.map((area, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                      <span>{area}</span>
                      {isEditing && (
                        <button
                          onClick={() => removeDeliveryArea(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {isEditing && (
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={newDeliveryArea}
                      onChange={(e) => setNewDeliveryArea(e.target.value)}
                      placeholder="Add new delivery area"
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      onClick={addDeliveryArea}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Add
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rest of the existing tabs... */}
          {/* General Information */}
          <div className={`p-6 ${activeTab === 'general' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.supplierDetails.companyName}
                  onChange={(e) => handleInputChange(e, 'supplierDetails')}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Add other general fields similarly */}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`p-6 ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => handleInputChange(e, 'contactInfo')}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Add other contact fields similarly */}
            </div>
          </div>

          {/* Add timestamps display */}
          <div className="p-6 border-t">
            <div className="text-sm text-gray-500">
              <p>Created: {new Date(formData.createdAt).toLocaleString()}</p>
              <p>Last Updated: {new Date(formData.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;