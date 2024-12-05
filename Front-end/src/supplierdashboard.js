import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SimpleChart = ({ data }) => (
    <div className="flex items-end h-32 gap-2 mt-4">
        {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-gradient-to-t from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 rounded-t transition-all duration-300 cursor-pointer"
                    style={{ height: `${(item.value / 100) * 100}%` }}>
                </div>
                <span className="text-xs text-gray-600">{item.label}</span>
            </div>
        ))}
    </div>
);

const ProgressRing = ({ progress, size = 120, strokeWidth = 12 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width={size} height={size} className="transform -rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none"/>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#22c55e" strokeWidth={strokeWidth} fill="none"
                    strokeDasharray={circumference} strokeDashoffset={offset} className="transition-all duration-500 ease-out"/>
            </svg>
            <span className="absolute text-xl font-bold text-gray-700">{progress}%</span>
        </div>
    );
};

const SupplierDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Updated supplier-specific stats
    const stats = [
        { label: 'Total Revenue', value: '$24,500', change: '+12.5%' },
        { label: 'Active Orders', value: '48', change: '+8.2%' },
        { label: 'Delivery Success Rate', value: '95%', change: '+2.3%' },
        { label: 'Product Listings', value: '125', change: '+5.8%' },
    ];

    // Updated for supplier orders
    const recentOrders = [
        { id: 'ORD-001', farmer: 'John Doe', product: 'Organic Fertilizer', amount: '$520', delivery: '2 days', status: 'In Transit' },
        { id: 'ORD-002', farmer: 'Jane Smith', product: 'Seeds Pack', amount: '$350', delivery: '1 day', status: 'Processing' },
        { id: 'ORD-003', farmer: 'Mike Johnson', product: 'Pesticides', amount: '$420', delivery: 'Today', status: 'Delivered' },
    ];

    // Delivery performance data
    const deliveryPerformance = [
        { area: 'North Region', success: 95, orders: 48 },
        { area: 'South Region', success: 92, orders: 36 },
        { area: 'East Region', success: 88, orders: 27 },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-xl font-bold text-green-600">AgriLink Supply</span>
                    <button onClick={() => setIsMenuOpen(false)} className="lg:hidden">×</button>
                </div>
                <nav className="p-4 space-y-2">
                    {['Products','Profile'].map((item) => (
                        <Link
                        key={item}
                        to={
                            item === 'Products' ? '/products' :
                                item === 'Profile' ? '/supplierprofile' :
                                    '#'
                        }
                        className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors ${item === 'Dashboard' ? 'bg-green-50 text-green-600' : ''
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
                        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">☰</button>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search orders, products..."
                                    className="w-64 px-4 py-2 pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <span className="absolute left-3 top-2.5">🔍</span>
                            </div>
                            <button className="p-2 relative">
                                🔔
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <Link to="/supplierprofile" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    👤
                                </div>
                                <span className="text-sm font-medium text-gray-700">Green Agriculture Solutions</span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-gray-500 mb-1">{stat.label}</p>
                                        <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                                    </div>
                                    <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Delivery Performance */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Delivery Performance</h2>
                            <div className="space-y-4">
                                {deliveryPerformance.map((area, index) => (
                                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{area.area}</span>
                                            <span className="text-sm text-gray-600">{area.orders} orders</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-green-600 h-2.5 rounded-full" 
                                                style={{ width: `${area.success}%` }}></div>
                                        </div>
                                        <span className="text-sm text-gray-600">{area.success}% success rate</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Performance Metrics</h2>
                            <div className="flex justify-around items-center">
                                <div className="text-center">
                                    <ProgressRing progress={92} />
                                    <p className="mt-2 text-sm text-gray-600">Order Fulfillment</p>
                                </div>
                                <div className="text-center">
                                    <ProgressRing progress={88} />
                                    <p className="mt-2 text-sm text-gray-600">On-time Delivery</p>
                                </div>
                                <div className="text-center">
                                    <ProgressRing progress={95} />
                                    <p className="mt-2 text-sm text-gray-600">Customer Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Orders</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b">
                                        <th className="pb-3 font-semibold text-gray-600">Order ID</th>
                                        <th className="pb-3 font-semibold text-gray-600">Farmer</th>
                                        <th className="pb-3 font-semibold text-gray-600">Product</th>
                                        <th className="pb-3 font-semibold text-gray-600">Amount</th>
                                        <th className="pb-3 font-semibold text-gray-600">Delivery</th>
                                        <th className="pb-3 font-semibold text-gray-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="border-b last:border-b-0">
                                            <td className="py-4">{order.id}</td>
                                            <td className="py-4">{order.farmer}</td>
                                            <td className="py-4">{order.product}</td>
                                            <td className="py-4">{order.amount}</td>
                                            <td className="py-4">{order.delivery}</td>
                                            <td className="py-4">
                                                <span className={`px-3 py-1 rounded-full text-sm ${
                                                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                    order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SupplierDashboard;