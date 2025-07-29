// File: Dashboard.jsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { year: "2010", value: 100 },
  { year: "2012", value: 75 },
  { year: "2014", value: 100 },
  { year: "2016", value: 75 },
];

const emailData = [
  { year: "2010", value: 50 },
  { year: "2012", value: 80 },
  { year: "2014", value: 120 },
  { year: "2016", value: 160 },
];

const pieData = [
  { name: "Marketplace", value: 3654 },
  { name: "Last week", value: 954 },
  { name: "Last month", value: 8462 },
];

const topProducts = [
  { name: "Product A", sales: 420 },
  { name: "Product B", sales: 318 },
  { name: "Product C", sales: 275 },
];

const recentActivities = [
  "User John placed an order",
  "New product uploaded by Admin",
  "Subscription plan updated",
  "Email campaign launched",
];

const mailOrderStats = [
  { label: "Total", value: 13070 },
  { label: "Last Month", value: 8462 },
  { label: "Last Week", value: 954 },
  { label: "Today", value: 210 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[length:300%_300%] animate-gradient bg-gradient-to-r from-red-300 via-yellow-300 via-40% via-green-300 via-60% via-blue-400 to-purple-500 text-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
          <div className="text-2xl italic font-bold mb-6 hover:text-yellow-300 cursor-pointer transition duration-300 ease-in-out">
            Sharowar's Code 
          </div>
          <nav>
            <ul>
              <li className="mb-4 flex items-center justify-between hover:bg-gray-700 p-2 rounded cursor-pointer transition duration-300 ease-in-out">
                <span>Dashboard</span>
                <span className="bg-green-500 rounded-full px-2 text-sm">3</span>
              </li>
              <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Analytics</li>
              <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">User Reports</li>
              <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Sales Overview</li>
              <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Revenue Charts</li>
              <li className="mb-2 hover:bg-gray-700 p-2 rounded cursor-pointer">Performance</li>
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              Dashboard
            </h1>
            <div className="space-x-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">Export</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all">Add Data</button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[{ title: "Total Subscription", value: "8952", change: "48%", trend: "down", subtitle: "From Last 24 Hours" }, { title: "Order Status", value: "6521", change: "42%", trend: "up", subtitle: "Orders in Last 10 months" }, { title: "Unique Visitors", value: "452", change: "22%", trend: "up", subtitle: "From Last 24 Hours" }, { title: "Monthly Earnings", value: "5621", change: "35%", trend: "down", subtitle: "From Last 1 Month" }].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded shadow hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
                <div className="text-sm text-gray-500">{item.title}</div>
                <div className="text-2xl font-bold flex items-center">
                  {item.trend === "up" ? <span className="text-green-500">↑</span> : <span className="text-red-500">↓</span>}
                  <span className="ml-2">{item.value}</span>
                </div>
                <div className="text-xs text-gray-400">{item.change} {item.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="font-semibold mb-4">Mail-Order Sales</h3>
                <PieChart width={250} height={250}>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#00C49F", "#FF8042", "#ccc"][index % 3]} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="mt-6 md:mt-0 md:ml-6 space-y-2 text-sm text-gray-700">
                {mailOrderStats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between border-b pb-1">
                    <span>{stat.label}</span>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
              <h3 className="font-semibold mb-4">Revenue</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3490dc" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded shadow hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
              <h3 className="font-semibold mb-4">Email Sent</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={emailData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#38b2ac" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
              <h3 className="font-semibold mb-4">Top Products</h3>
              <ul className="space-y-2">
                {topProducts.map((product, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-2 hover:text-blue-500">
                    <span>{product.name}</span>
                    <span className="font-semibold">{product.sales}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                {recentActivities.map((activity, idx) => (
                  <li key={idx} className="hover:text-purple-600">{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
