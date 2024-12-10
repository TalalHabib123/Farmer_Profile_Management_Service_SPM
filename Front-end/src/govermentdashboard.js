import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GovernmentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Added government official details as per schema
  const governmentDetails = {
    user: "GOV123",
    department: "Agricultural Subsidies Department",
    role: "Subsidy Manager"
  };

  // Department-specific data
  const subsidyData = {
    subsidyApplications: [
      { id: 1, farmer: "John Doe", type: "Crop Insurance", amount: "$5,000", status: "Pending", date: "2024-12-01" },
      { id: 2, farmer: "Jane Smith", type: "Equipment", amount: "$10,000", status: "Approved", date: "2024-11-28" },
      { id: 3, farmer: "Mike Johnson", type: "Organic Farming", amount: "$7,500", status: "Under Review", date: "2024-11-25" }
    ],
    subsidyPrograms: [
      { name: "Crop Insurance", allocated: 500000, used: 350000, applications: 125 },
      { name: "Equipment Modernization", allocated: 750000, used: 500000, applications: 89 },
      { name: "Organic Transition", allocated: 300000, used: 150000, applications: 45 }
    ],
    departmentStats: {
      totalBudget: 1500000,
      activeFarmers: 1234,
      pendingApplications: 45,
      approvedThisMonth: 89
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <span className="text-xl font-bold text-green-600">AgriLink</span>
            <p className="text-sm text-gray-600">{governmentDetails.department}</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">×</button>
        </div>
        <nav className="p-4 space-y-2">
          {['Overview', 'Applications', 'Programs', 'Reports', 'Settings'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item.toLowerCase())}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === item.toLowerCase()
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Department Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              👤
            </div>
            <div>
              <p className="text-sm font-medium">{governmentDetails.role}</p>
              <p className="text-xs text-gray-500">ID: {governmentDetails.user}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2">☰</button>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search applications..."
                  className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="p-2 relative">
                🔔
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
          
          {/* Department Banner */}
          <div className="bg-green-50 px-6 py-3 flex justify-between items-center">
            <div>
              <h2 className="text-sm font-medium text-green-800">{governmentDetails.department}</h2>
              <p className="text-xs text-green-600">Managing Agricultural Subsidies and Support Programs</p>
            </div>
            <div className="text-sm text-green-700">
              Fiscal Year 2024
            </div>
          </div>
        </header>

        {/* Rest of your existing dashboard content, now department-specific */}
        <main className="p-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Your existing stats cards */}
          </div>

          {/* Subsidy Programs Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Your existing subsidy programs cards */}
          </div>

          {/* Actions and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Your existing actions and alerts sections */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GovernmentDashboard;