import React, { useState } from 'react';

const SubsidyManagement = () => {
  const [activeTab, setActiveTab] = useState('available');
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedSubsidy, setSelectedSubsidy] = useState(null);

  const subsidies = [
    {
      id: 1,
      title: "Crop Insurance Premium Support",
      amount: "Up to $5,000",
      provider: "Agricultural Department",
      deadline: "Dec 30, 2024",
      eligibility: "Small and Medium Farmers",
      description: "50% support on crop insurance premiums for eligible farmers",
      documents: ["Land ownership proof", "Previous year tax returns", "Farm registration"],
      status: "Available"
    },
    {
      id: 2,
      title: "Organic Farming Transition",
      amount: "$10,000",
      provider: "Green Agriculture Initiative",
      deadline: "Jan 15, 2025",
      eligibility: "All Farmers",
      description: "Support for transitioning to organic farming practices",
      documents: ["Current farming practices document", "Transition plan", "Land analysis report"],
      status: "Available"
    }
  ];

  const myApplications = [
    {
      id: 101,
      title: "Irrigation System Upgrade",
      appliedDate: "Nov 15, 2024",
      status: "Under Review",
      amount: "$7,500",
      documents: ["Application.pdf", "Farm_Details.pdf"],
      comments: "Additional documentation requested"
    },
    {
      id: 102,
      title: "Solar Power Installation",
      appliedDate: "Oct 5, 2024",
      status: "Approved",
      amount: "$15,000",
      documents: ["Proposal.pdf", "Quote.pdf"],
      comments: "Approved for full amount"
    }
  ];

  const SubsidyModal = ({ subsidy, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">{subsidy.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Subsidy Details */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Subsidy Details</h4>
              <p className="text-gray-600">{subsidy.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">{subsidy.amount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Deadline</p>
                <p className="font-medium">{subsidy.deadline}</p>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h4 className="font-medium mb-2">Required Documents</h4>
            <ul className="space-y-2">
              {subsidy.documents.map((doc, index) => (
                <li key={index} className="flex items-center text-sm">
                  <span className="mr-2">📄</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Upload Section */}
          <div>
            <h4 className="font-medium mb-2">Upload Documents</h4>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Upload Files
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: PDF, JPG, PNG (Max 10MB each)
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Subsidy Management</h1>
          <p className="text-gray-600">View and apply for available subsidies</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b px-4">
            <div className="flex space-x-8">
              {['available', 'my-applications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-medium relative ${
                    activeTab === tab
                      ? 'text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'available' ? 'Available Subsidies' : 'My Applications'}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Available Subsidies */}
        <div className={activeTab === 'available' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidies.map((subsidy) => (
              <div key={subsidy.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{subsidy.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {subsidy.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{subsidy.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-medium">{subsidy.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="font-medium">{subsidy.deadline}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedSubsidy(subsidy);
                    setShowApplicationModal(true);
                  }}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* My Applications */}
        <div className={activeTab === 'my-applications' ? 'block' : 'hidden'}>
          <div className="space-y-6">
            {myApplications.map((application) => (
              <div key={application.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{application.title}</h3>
                    <p className="text-sm text-gray-500">Applied on: {application.appliedDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    application.status === 'Approved' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {application.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-medium">{application.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Comments</p>
                    <p className="font-medium">{application.comments}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Submitted Documents</p>
                  <div className="flex flex-wrap gap-2">
                    {application.documents.map((doc, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        📄 {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {showApplicationModal && selectedSubsidy && (
          <SubsidyModal
            subsidy={selectedSubsidy}
            onClose={() => {
              setShowApplicationModal(false);
              setSelectedSubsidy(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SubsidyManagement;