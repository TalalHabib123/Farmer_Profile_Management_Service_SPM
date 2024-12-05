import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FarmerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Updated to match schema's farm details and thresholds
  const farmData = {
    farmDetails: {
      farmLocation: {
        latitude: 40.7128,
        longitude: -74.0060,
        address: "123 Farm Road"
      },
      farmSize: 100,
      cropsGrown: ["Wheat", "Rice", "Cotton"]
    },
    thresholds: {
      temperature: { heat: 35, frost: 0 },
      precipitation: { droughtDays: 7, flood: 50 },
      humidity: { 
        pestRiskHumidity: 80,
        pestRiskTempRange: [15, 30]
      },
      wind: { strongWind: 40 },
      uv: { highUV: 8 }
    }
  };

  // Weather data with threshold warnings
  const weatherData = {
    current: {
      temperature: 32,
      humidity: 75,
      wind: 35,
      uv: 7,
      precipitation: 0
    },
    forecast: [
      { day: 'Today', temp: 32, humidity: 75, condition: '☀️', rainfall: 0 },
      { day: 'Tomorrow', temp: 34, humidity: 85, condition: '🌤️', rainfall: 20 },
      { day: 'Wed', temp: 30, humidity: 90, condition: '🌧️', rainfall: 70 }
    ]
  };

  // Alerts based on thresholds
  const getWeatherAlerts = () => {
    const alerts = [];
    if (weatherData.current.temperature > farmData.thresholds.temperature.heat) {
      alerts.push("High temperature alert: Protect crops from heat stress");
    }
    if (weatherData.current.humidity > farmData.thresholds.humidity.pestRiskHumidity) {
      alerts.push("High humidity alert: Increased pest risk");
    }
    if (weatherData.current.wind > farmData.thresholds.wind.strongWind) {
      alerts.push("Strong wind alert: Secure equipment and check crop support structures");
    }
    return alerts;
  };

  const cropStats = farmData.farmDetails.cropsGrown.map(crop => ({
    name: crop,
    area: Math.floor(farmData.farmDetails.farmSize / farmData.farmDetails.cropsGrown.length),
    status: 'Growing',
    health: 'Good'
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-green-600">AgriLink Farm</span>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2">×</button>
        </div>
        <nav className="p-4 space-y-2">
          {['Profile', 'Weather Alerts', 'Crop Management'].map((item) => (
            <Link
            key={item}
            to={
                    item === 'Profile' ? '/farmerprofile' :
                        '#'
            }
              className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors ${
                item === 'Dashboard' ? 'bg-green-50 text-green-600' : ''
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2">≡</button>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Farm Location: {farmData.farmDetails.address}
              </div>
              <button className="p-2 relative">
                🔔
                {getWeatherAlerts().length > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              <Link to="/profile" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  👨‍🌾
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Weather Alerts */}
          {getWeatherAlerts().map((alert, index) => (
            <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
              <div className="flex">
                <div className="flex-shrink-0">⚠️</div>
                <div className="ml-3">
                  <p className="text-yellow-700">{alert}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Farm Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">Total Farm Area</p>
                  <h3 className="text-2xl font-bold text-gray-800">{farmData.farmDetails.farmSize} acres</h3>
                </div>
                <span className="text-green-500">🌾</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">Active Crops</p>
                  <h3 className="text-2xl font-bold text-gray-800">{farmData.farmDetails.cropsGrown.length}</h3>
                </div>
                <span className="text-green-500">🌱</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">Current Temperature</p>
                  <h3 className="text-2xl font-bold text-gray-800">{weatherData.current.temperature}°C</h3>
                  <p className="text-sm text-gray-500">Threshold: {farmData.thresholds.temperature.heat}°C</p>
                </div>
                <span className="text-green-500">🌡️</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">Humidity</p>
                  <h3 className="text-2xl font-bold text-gray-800">{weatherData.current.humidity}%</h3>
                  <p className="text-sm text-gray-500">Risk at: {farmData.thresholds.humidity.pestRiskHumidity}%</p>
                </div>
                <span className="text-green-500">💧</span>
              </div>
            </div>
          </div>

          {/* Crop Status and Weather */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Crop Status</h2>
              <div className="space-y-4">
                {cropStats.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">{crop.name}</h3>
                      <p className="text-sm text-gray-600">{crop.area} acres</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        crop.health === 'Good' ? 'bg-green-100 text-green-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {crop.health}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Weather Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Wind Speed</p>
                  <p className="text-lg font-bold text-gray-800">{weatherData.current.wind} km/h</p>
                  <p className="text-xs text-gray-500">Threshold: {farmData.thresholds.wind.strongWind} km/h</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">UV Index</p>
                  <p className="text-lg font-bold text-gray-800">{weatherData.current.uv}</p>
                  <p className="text-xs text-gray-500">High UV at: {farmData.thresholds.uv.highUV}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg col-span-2">
                  <p className="text-sm text-gray-600">Pest Risk Conditions</p>
                  <p className="text-lg font-bold text-gray-800">
                    {weatherData.current.humidity > farmData.thresholds.humidity.pestRiskHumidity ? 'High' : 'Low'}
                  </p>
                  <p className="text-xs text-gray-500">
                    Risk when humidity {farmData.thresholds.humidity.pestRiskHumidity}% and temp between{' '}
                    {farmData.thresholds.humidity.pestRiskTempRange[0]}-{farmData.thresholds.humidity.pestRiskTempRange[1]}°C
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Forecasts and Recommendations */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">3-Day Forecast</h2>
            <div className="grid grid-cols-3 gap-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-800">{day.day}</p>
                  <div className="text-3xl my-2">{day.condition}</div>
                  <p className="text-lg font-bold text-gray-800">{day.temp}°C</p>
                  <p className="text-sm text-gray-600">Humidity: {day.humidity}%</p>
                  <p className="text-sm text-gray-600">Rain: {day.rainfall}%</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerDashboard;