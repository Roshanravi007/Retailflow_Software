// App.jsx
// Main application file for RetailFlow SaaS platform
// Built with React, Tailwind CSS, react-router-dom, and Recharts
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

/* ---------------- Navigation Bar ---------------- */
// Provides top-level navigation links for the app
function Navigation() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex gap-4">
      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>
      <Link to="/workflows" className="hover:underline">
        Workflows
      </Link>
      <Link to="/workflows/saved" className="hover:underline">
        Saved Workflows
      </Link>
      <Link to="/integrations" className="hover:underline">
        Integrations
      </Link>
      <Link to="/analytics" className="hover:underline">
        Analytics
      </Link>
      <Link to="/settings" className="hover:underline">
        Settings
      </Link>
    </nav>
  );
}

/* ---------------- Login Page ---------------- */
// Handles user login flow, simple simulated authentication with redirect
export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On form submission, navigate to dashboard (mock login logic)
 const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">RetailFlow</h1>
        <p className="text-center text-lg mb-6">Welcome back</p>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Sign in to your account
        </p>

        {/* Login form with controlled inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

           {/* Password input */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>

        {/* Social login options */}
        <div className="my-6 flex items-center justify-center text-sm text-gray-500">
          <span className="border-t w-full"></span>
          <span className="px-4">OR CONTINUE WITH</span>
          <span className="border-t w-full"></span>
        </div>

        <div className="space-y-2">
          <button className="w-full border px-4 py-2 rounded flex items-center justify-center gap-2">
            <span role="img" aria-label="google">
              🔍
            </span>{" "}
            Continue with Google
          </button>
          <button className="w-full border px-4 py-2 rounded flex items-center justify-center gap-2">
            <span role="img" aria-label="github">
              🌸
            </span>{" "}
            Continue with GitHub
          </button>
          <button className="w-full border px-4 py-2 rounded flex items-center justify-center gap-2">
            <span role="img" aria-label="microsoft">
              📄
            </span>{" "}
            Continue with Microsoft
          </button>
        </div>
        
        {/* Extra login links */}
        <div className="text-center mt-4 text-sm">
          <p className="text-blue-600 cursor-pointer">Forgot your password?</p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Placeholder Component ---------------- */
// Used as a generic placeholder for pages not yet implemented
function Placeholder({ title }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">[ UI for {title} goes here ]</p>
    </div>
  );
}

/* ---------------- Recharts Imports ---------------- */
// Chart components used in Dashboard and Analytics
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

/* ---------------- Sample Chart Data ---------------- */
const data = [
  { name: "Mon", success: 140, failed: 5 },
  { name: "Tue", success: 135, failed: 7 },
  { name: "Wed", success: 160, failed: 10 },
  { name: "Thu", success: 150, failed: 5 },
  { name: "Fri", success: 175, failed: 6 },
  { name: "Sat", success: 120, failed: 3 },
  { name: "Sun", success: 130, failed: 4 },
];

/* ---------------- Dashboard ---------------- */
// Displays key stats, workflow activity, connected apps, and quick actions
function Dashboard() {
  const navigate = useNavigate(); 
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button 
        onClick={() => navigate("/workflows")}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Create New Workflow
        </button>
      </header>

      {/* Statistic summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Active Workflows"
          value="12"
          subtitle="+2 from last week"
        />
        <StatCard
          title="Connected Apps"
          value="3"
          subtitle="1 pending connection"
        />
        <StatCard
          title="Success Rate"
          value="98.2%"
          subtitle="+0.5% from yesterday"
        />
        <StatCard
          title="Data Processed"
          value="1.2M"
          subtitle="records this month"
        />
      </div>
      
      {/* Workflow activity chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">
            Recent Workflow Activity
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Daily workflow execution results
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="success" fill="#22c55e" />
              <Bar dataKey="failed" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
      </div>

      {/* Connected Apps summary */}
      <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Connected Apps</h2>
          <p className="text-sm text-gray-500 mb-4">
            Your integrated platforms
          </p>
          {[
            { name: "Shopify", status: "connected" },
            { name: "NetSuite", status: "connected" },
            { name: "WooCommerce", status: "connected" },
            { name: "Salesforce", status: "pending" },
          ].map((app) => (
            <div
              key={app.name}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-800">{app.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    app.status === "connected"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {app.status}
                </span>
              </div>
              <button 
                className="text-sm text-blue-600 hover:underline"
                onClick={() => navigate("/integrations")} 
              >
                {app.status === "connected" ? "Manage" : "Connect"}
              </button>
            </div>
          ))}
      </div> 
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
        <p className="text-sm text-gray-500 mb-4">
          Common tasks to get you started
        </p>

        {/* Quick Actions section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {[
            { title: "Create New Workflow", icon: "⚡", to: "/workflows" },
            { title: "Add New Integration", icon: "🔗", to: "/integrations" },
            { title: "View Analytics", icon: "📊", to: "/analytics"  },
            
          ].map((action) => (
            <div
              key={action.title}
              onClick={() => navigate(action.to)} 
              className="flex flex-col items-center justify-center border p-4 rounded hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-2xl mb-2">{action.icon}</span>
              <span className="text-sm text-center">{action.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Stat Card ---------------- */
// Small reusable card for dashboard stats
export function StatCard({ title, value, subtitle }) {
  
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
}
  
/* ---------------- Integrations ---------------- */
// Displays a catalog of available/connected integrations (apps).
// Allows users to connect new apps or manage existing ones via a modal popup. 
function Integrations() {
  const [modalApp, setModalApp] = React.useState(null);
  const [connectMode, setConnectMode] = React.useState(false);
  
  // Static list of integrations with metadata
  const integrations = [
    {
      name: "Shopify",
      category: "E-commerce",
      description: "E-commerce platform for online stores",
      status: "connected",
      icon: "🛍️",
    },
    {
      name: "NetSuite",
      category: "ERP",
      description: "Cloud-based ERP and CRM system",
      status: "connected",
      icon: "💼",
    },
    {
      name: "WooCommerce",
      category: "E-commerce",
      description: "WordPress e-commerce plugin",
      status: "available",
      icon: "🛒",
    },
    {
      name: "Salesforce",
      category: "CRM",
      description: "Customer relationship management platform",
      status: "available",
      icon: "☁️",
    },
    {
      name: "Magento",
      category: "E-commerce",
      description: "Open-source e-commerce platform",
      status: "available",
      icon: "🎯",
    },
    {
      name: "QuickBooks",
      category: "Accounting",
      description: "Accounting software for small businesses",
      status: "available",
      icon: "📊",
    },
  ];
  
  // Handlers for connecting / managing apps
  const handleConnect = (app) => {
    setModalApp(app);
    setConnectMode(true);
  };

  const handleManage = (app) => {
    setModalApp(app);
    setConnectMode(false);
  };

  const closeModal = () => {
    setModalApp(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Integrations</h2>
      <input
        type="text"
        placeholder="Search for apps (e.g., 'Shopify', 'NetSuite')"
        className="mb-6 p-2 border rounded w-full"
      />

      {/* App Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((app) => (
          <div
            key={app.name}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xl font-semibold flex items-center gap-2">
                  <span>{app.icon}</span> {app.name}
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mt-1 inline-block">
                  {app.category}
                </span>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  app.status === "connected"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {app.status}
              </span>
            </div>

            {/* Card Body */}
            <p className="mt-2 text-sm text-gray-600">{app.description}</p>
            <button
              className={`mt-4 w-full rounded border px-4 py-2 ${
                app.status === "connected"
                  ? "border-gray-300 text-gray-700"
                  : "bg-black text-white"
              }`}
              onClick={() =>
                app.status === "connected"
                  ? handleManage(app)
                  : handleConnect(app)
              }
            >
              {app.status === "connected" ? "Manage" : "Connect"}
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Connect/Manage Integration */}
      {modalApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {connectMode
                  ? `Connect to ${modalApp.name}`
                  : `Manage ${modalApp.name}`}
              </h3>
              <button
                onClick={closeModal}
                className="text-xl font-bold text-gray-500"
              >
                &times;
              </button>
            </div>

            {/* Conditional modal content */}
            {connectMode ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {modalApp.name} Store URL
                  </label>
                  <input
                    type="text"
                    placeholder={`https://your-store.${modalApp.name.toLowerCase()}.com`}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    API Access Token
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your API access token"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    Connect
                  </button>
                </div>
              </form>
            ) : (

              // Manage view
              <div>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
                  <strong>● Connected successfully</strong>
                  <p className="text-sm mt-1">
                    Your {modalApp.name} integration is active and working
                    properly.
                  </p>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border rounded"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded">
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Workflow Builder ---------------- */
// Allows users to design workflows by selecting triggers and actions from integrated apps.
// Supports multi-step configuration: (1) Select Trigger → (2) Select Actions → (3) Save workflow
export function WorkflowBuilder({ setSavedWorkflows }) {
  const [step, setStep] = useState("trigger");
  const [selectedTriggerApp, setSelectedTriggerApp] = useState(null);
  const [selectedTrigger, setSelectedTrigger] = useState(null);
  const [selectedActionApp, setSelectedActionApp] = useState(null);
  const [selectedActions, setSelectedActions] = useState({});
  
  // Map of trigger events per app
  const triggerOptions = {
    Shopify: [
      "New Order Created",
      "Product Updated",
      "Customer Account Created",
      "Order Cancelled",
      "Inventory Level Updated",
      "New Product Added",
    ],
    NetSuite: ["Sales Order Created", "Inventory Updated", "Customer Modified"],
    WooCommerce: [
      "Order Placed",
      "Product Stock Changed",
      "Customer Registered",
    ],
    Salesforce: [
      "Lead Created",
      "Opportunity Created",
      "Contact Updated",
      "Account Updated",
      "Case Created",
      "Task Created",
    ],
  };
  
  
  // Map of available actions per app
  const actionOptions = {
    NetSuite: [
      "Create Sales Order",
      "Update Inventory Item",
      "Add Customer",
      "Create Invoice",
      "Find and Update Sales Order",
      "Item Record",
    ],
    Salesforce: [
      "Create Lead",
      "Update Contact",
      "Create Opportunity",
      "Send Email",
    ],
    Magento: [
      "Update Product",
      "Create Customer",
      "Process Order",
      "Update Inventory",
    ],
    QuickBooks: [
      "Create Invoice",
      "Add Customer",
      "Record Payment",
      "Update Item",
    ],
    Slack: [
      "Send Channel Message",
      "Send Direct Message",
      "Create Channel",
      "Invite User To Channel",
    ],
    SendGrid: [
      "Send Email",
      "Add or Update Contact in a list",
      "Unsubscribe User",
    ],
  };

  const triggerApps = Object.keys(triggerOptions);
  const actionApps = Object.keys(actionOptions);

  // V V V PASTE THE FUNCTION LOGIC RIGHT HERE V V V
  // Save workflow to parent state (and localStorage via App.js)
  const handleSaveWorkflow = async () => {
    const workflowData = {
      trigger: {
        app: selectedTriggerApp,
        event: selectedTrigger,
      },
      actions: selectedActions,
    };

    try {
      console.log("Mock saving workflow...", workflowData); // Optional debug
      // Simulate a short delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSavedWorkflows((prev) => [...prev, workflowData]);
      alert("Workflow saved successfully!");
    } catch (error) {
      console.error("Error saving workflow:", error);
      alert("An error occurred.");
    }
  };
  // ^ ^ ^ END OF THE FUNCTION LOGIC ^ ^ ^

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Workflow Builder</h1>

      {/* Step switch buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${
            step === "trigger" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setStep("trigger")}
        >
          Workflow Trigger
        </button>
        <button
          className={`px-4 py-2 rounded ${
            step === "action" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setStep("action")}
        >
          Workflow Action
        </button>
      </div>

      {/* Trigger Selection */}
      {step === "trigger" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">Connected Apps</h2>
            <p className="text-sm text-gray-500 mb-4">
              Select an app to see available triggers
            </p>
            {triggerApps.map((app) => (
              <div
                key={app}
                className={`border p-3 rounded-xl mb-2 cursor-pointer flex items-center gap-3 ${
                  selectedTriggerApp === app
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setSelectedTriggerApp(app);
                  setSelectedTrigger(null);
                }}
              >
                <div className="text-lg font-medium">{app}</div>
              </div>
            ))}
          </div>

          <div>
            {selectedTriggerApp ? (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedTriggerApp} Triggers
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Choose a trigger to start your workflow
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {triggerOptions[selectedTriggerApp].map((trigger) => (
                    <div
                      key={trigger}
                      className={`border rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer ${
                        selectedTrigger === trigger ? "ring-2 ring-black" : ""
                      }`}
                      onClick={() => setSelectedTrigger(trigger)}
                    >
                      <div className="font-medium">{trigger}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Event Trigger
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-gray-500">
                <div>
                  <div className="text-4xl mb-2">⚡</div>
                  <p>Select a connected app to view available triggers</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {step === "trigger" && selectedTrigger && (
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="text-gray-700">
            <strong>Next Step: Configure Action</strong>
          </p>
          <p className="text-sm mt-1">
            You’ve selected “{selectedTrigger}” from {selectedTriggerApp}. Now
            choose what action(s) to perform.
          </p>
          <button
            className="mt-3 bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800"
            onClick={() => setStep("action")}
          >
            Continue to Action Setup
          </button>
        </div>
      )}

      {/* Action Configuration */}
      {step === "action" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Configure Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Choose Action App</h3>
              <p className="text-sm text-gray-500 mb-4">
                Select an app to perform actions
              </p>
              {actionApps.map((app) => (
                <div
                  key={app}
                  className={`border p-3 rounded-xl mb-2 cursor-pointer flex items-center gap-3 ${
                    selectedActionApp === app
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedActionApp(app)}
                >
                  <div className="text-lg font-medium">{app}</div>
                </div>
              ))}
            </div>

            <div>
              {selectedActionApp ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedActionApp} Actions
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Choose one or more actions to perform
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {actionOptions[selectedActionApp].map((action) => (
                      <label
                        key={action}
                        className="flex items-center gap-3 border rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-blue-600"
                          checked={
                            selectedActions[selectedActionApp]?.includes(
                              action
                            ) || false
                          }
                          onChange={(e) => {
                            setSelectedActions((prev) => {
                              const current = new Set(
                                prev[selectedActionApp] || []
                              );
                              if (e.target.checked) {
                                current.add(action);
                              } else {
                                current.delete(action);
                              }
                              return {
                                ...prev,
                                [selectedActionApp]: Array.from(current),
                              };
                            });
                          }}
                        />
                        <span className="font-medium">{action}</span>
                      </label>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-center text-gray-500">
                  <div>
                    <div className="text-4xl mb-2">⚙️</div>
                    <p>Select an app to view available actions</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* V V V PASTE THE SAVE BUTTON JSX RIGHT HERE V V V */}
      {step === "action" && selectedActionApp && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSaveWorkflow}
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
          >
            Save Workflow
          </button>
        </div>
      )}
      {/* ^ ^ ^ END OF THE SAVE BUTTON JSX ^ ^ ^ */}
    </div>
  );
}

/* ---------------- Saved Workflows ---------------- */
// Displays list of workflows that have been saved by the user.
// Provides option to clear all saved workflows
export function SavedWorkflows({ savedWorkflows, setSavedWorkflows }) {
  const clearAll = () => {
    setSavedWorkflows([]);
    localStorage.removeItem("savedWorkflows");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Workflows</h1>
      {savedWorkflows.length === 0 ? (
        <p className="text-gray-500">No workflows saved yet.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {savedWorkflows.map((workflow, index) => (
              <li key={index} className="border p-4 rounded-lg shadow-sm">
                <h2 className="font-semibold">
                  Trigger: {workflow.trigger.event} ({workflow.trigger.app})
                </h2>
                <div className="text-sm mt-2">
                  Actions:
                  <ul className="list-disc list-inside ml-4">
                    {Object.entries(workflow.actions).map(([app, actions]) => (
                      <li key={app}>
                        {app}: {actions.join(", ")}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
            onClick={clearAll}
          >
            Clear All Workflows
          </button>
        </>
      )}
    </div>
  );
}

//const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];
const timeRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "Last year"];
const channels = ["All Channels", "Shopify", "Amazon", "WooCommerce"];
const reportTypes = [
  "Sales Performance",
  "Inventory Performance",
  "Customer & Marketing",
];

/* ---------------- Analytics ---------------- */
// Multi-tab analytics dashboard with report types:
// (1) Sales Performance, (2) Inventory Performance, (3) Customer & Marketing.
// Each report shows different charts/tables using Recharts.
function Analytics() {
  const [selectedTime, setSelectedTime] = useState("Last 30 days");
  const [selectedChannel, setSelectedChannel] = useState("All Channels");
  const [reportType, setReportType] = useState("Sales Performance");
  
  // Demo datasets for charts
  const salesData = [
    { date: "Jul 1", sales: 30000 },
    { date: "Jul 2", sales: 40000 },
    { date: "Jul 3", sales: 35000 },
    { date: "Jul 4", sales: 50000 },
    { date: "Jul 5", sales: 45000 },
  ];

  const channelData = [
    { name: "Shopify", value: 400 },
    { name: "Amazon", value: 300 },
    { name: "WooCommerce", value: 300 },
  ];

  const categorySales = [
    { name: "Clothing", revenue: 130000 },
    { name: "Sports", revenue: 90000 },
    { name: "Books", revenue: 30000 },
  ];

  const topProducts = [
    {
      name: "Wireless Headphones",
      sku: "WH-001",
      category: "Electronics",
      units: 245,
      revenue: "$24,500",
    },
    {
      name: "Smart Watch",
      sku: "SW-002",
      category: "Electronics",
      units: 189,
      revenue: "$37,800",
    },
    {
      name: "Laptop Stand",
      sku: "LS-003",
      category: "Electronics",
      units: 156,
      revenue: "$7,800",
    },
    {
      name: "Phone Case",
      sku: "PC-004",
      category: "Electronics",
      units: 134,
      revenue: "$2,680",
    },
    {
      name: "Bluetooth Speaker",
      sku: "BS-005",
      category: "Electronics",
      units: 98,
      revenue: "$9,800",
    },
    {
      name: "Running Shoes",
      sku: "RS-006",
      category: "Sports",
      units: 87,
      revenue: "$8,700",
    },
    {
      name: "Office Chair",
      sku: "OC-007",
      category: "Home & Garden",
      units: 76,
      revenue: "$15,200",
    },
    {
      name: "T-Shirt",
      sku: "TS-008",
      category: "Clothing",
      units: 65,
      revenue: "$1,300",
    },
    {
      name: "Cookbook",
      sku: "CB-009",
      category: "Books",
      units: 54,
      revenue: "$810",
    },
    {
      name: "Yoga Mat",
      sku: "YM-010",
      category: "Sports",
      units: 43,
      revenue: "$1,290",
    },
  ];

  const funnelData = [
    { stage: "Website Visits", value: 10000 },
    { stage: "Product Views", value: 6500 },
    { stage: "Added to Cart", value: 2800 },
    { stage: "Initiated Checkout", value: 1650 },
    { stage: "Completed Purchase", value: 980 },
  ];

  const profitabilityData = [
    { month: "Jan", clv: 450, cac: 130 },
    { month: "Feb", clv: 480, cac: 125 },
    { month: "Mar", clv: 530, cac: 140 },
    { month: "Apr", clv: 590, cac: 130 },
    { month: "May", clv: 630, cac: 120 },
    { month: "Jun", clv: 670, cac: 150 },
  ];

  const inventoryTurnover = [
    { category: "Books", ratio: 1.2 },
    { category: "Sports", ratio: 2.1 },
    { category: "Home & Garden", ratio: 3.8 },
    { category: "Clothing", ratio: 5.1 },
    { category: "Electronics", ratio: 6.4 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <select
          className="border rounded px-3 py-1"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          {reportTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      {reportType === "Sales Performance" && (
        <>
          <div className="flex gap-4">
            <select
              className="border rounded px-3 py-1"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {timeRanges.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            <select
              className="border rounded px-3 py-1"
              value={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
            >
              {channels.map((channel) => (
                <option key={channel}>{channel}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Total Sales Over Time</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={salesData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="sales" stroke="#4f46e5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Sales by Channel</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={channelData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                  >
                    {channelData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={["#6366f1", "#f59e0b", "#10b981"][index % 3]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Sales by Product Category</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={categorySales}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#4ade80" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded shadow overflow-x-auto">
              <h3 className="font-semibold mb-2">Top 10 Selling Products</h3>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th>Product</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Units Sold</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((p, i) => (
                    <tr key={i} className="border-t">
                      <td>{p.name}</td>
                      <td>{p.sku}</td>
                      <td>{p.category}</td>
                      <td>{p.units}</td>
                      <td>{p.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {reportType === "Inventory Performance" && (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-sm">Total Items in Stock</h3>
            <p className="text-3xl font-bold mt-2">8,247</p>
            <p className="text-green-500 text-sm">+2.1% from last month</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-sm">Average Days to Sell</h3>
            <p className="text-3xl font-bold mt-2">12.4</p>
            <p className="text-red-500 text-sm">-1.3 days from last month</p>
          </div>

          <div className="col-span-2 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">
              Inventory Turnover Ratio by Product Category
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart layout="vertical" data={inventoryTurnover}>
                <XAxis type="number" />
                <YAxis type="category" dataKey="category" />
                <Tooltip />
                <Bar dataKey="ratio" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {reportType === "Customer & Marketing" && (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Customer Profitability</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={profitabilityData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="clv"
                  stroke="#4f46e5"
                  name="CLV"
                />
                <Line
                  type="monotone"
                  dataKey="cac"
                  stroke="#f59e0b"
                  name="CAC"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Sales Funnel</h3>
            <div className="space-y-2">
              {funnelData.map((f, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm">
                    <span>{f.stage}</span>
                    <span>{f.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-indigo-500 h-2 rounded"
                      style={{
                        width: `${(f.value / funnelData[0].value) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Settings ---------------- */
// Centralized settings page with three tabs:
// (1) API Keys management, (2) User Management (Team + Roles), (3) Compliance & GDPR tools.
function Settings() {
  const tabs = [
    "API Keys",
    "User Management",
    "Compliance & GDPR",
    //"Tenant Management",
    //"Anomalies",
    //"Templates",
    // "RBAC",
    //"Data Mapping"
  ];
  
  // API keys list and management
  const [activeTab, setActiveTab] = useState("API Keys");

   // Team members & roles data
  const [activeSubTab, setActiveSubTab] = useState("Team Members");
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "Production API",
      key: "rf_prod_...k7j2",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
    },
    {
      id: 2,
      name: "Development API",
      key: "rf_dev_...m8n3",
      created: "2024-01-10",
      lastUsed: "1 day ago",
    },
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      role: "Admin",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@company.com",
      role: "Workflow Editor",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@company.com",
      role: "Analytics Viewer",
      lastActive: "3 days ago",
    },
  ]);

  const [roles, setRoles] = useState([
    {
      name: "Admin",
      permissions: {
        workflows: [
          "View Workflows",
          "Create/Edit Workflows",
          "Delete Workflows",
        ],
        analytics: ["View Analytics", "Export Reports"],
      },
    },
    {
      name: "Workflow Editor",
      permissions: {
        workflows: ["View Workflows", "Create/Edit Workflows"],
        analytics: ["View Analytics"],
      },
    },
    {
      name: "Analytics Viewer",
      permissions: {
        workflows: ["View Workflows", "Create/Edit Workflows"],
        analytics: ["View Analytics"],
      },
    },
  ]);

  const generateKey = () => {
    const newKey = {
      id: apiKeys.length + 1,
      name: `New Key ${apiKeys.length + 1}`,
      key: `rf_new_...${Math.random().toString(36).substr(2, 4)}`,
      created: new Date().toISOString().split("T")[0],
      lastUsed: "just now",
    };
    setApiKeys([...apiKeys, newKey]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="flex space-x-4 mb-6">
        {["API Keys", "User Management", "Compliance & GDPR"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-white shadow" : "bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "API Keys" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">API Key Management</h2>
            <button
              onClick={generateKey}
              className="bg-gray-900 text-white px-4 py-2 rounded"
            >
              Generate New Key
            </button>
          </div>
          {apiKeys.map((key) => (
            <div key={key.id} className="bg-red-50 p-4 border rounded">
              <p className="font-semibold">{key.name}</p>
              <p>{key.key}</p>
              <p className="text-sm text-gray-600">
                Created: {key.created} • Last used: {key.lastUsed}
              </p>
              <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded">
                Revoke
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "User Management" && (
        <>
          <div className="flex space-x-4 mb-4">
            {["Team Members", "Roles & Permissions"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${
                  activeSubTab === tab ? "bg-white shadow" : "bg-gray-100"
                }`}
                onClick={() => setActiveSubTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeSubTab === "Team Members" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Manage Team Access</h2>
                <button className="bg-gray-900 text-white px-4 py-2 rounded">
                  Invite Member
                </button>
              </div>
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="border-b">
                      <td>{member.name}</td>
                      <td>{member.email}</td>
                      <td>
                        <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {member.role}
                        </span>
                      </td>
                      <td>{member.lastActive}</td>
                      <td>
                        <button className="text-gray-500">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSubTab === "Roles & Permissions" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Roles & Permissions</h2>
                <button className="bg-gray-900 text-white px-4 py-2 rounded">
                  Create Custom Role
                </button>
              </div>
              {roles.map((role, index) => (
                <div key={index} className="border rounded p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{role.name}</h3>
                    <button className="text-sm text-gray-600">Edit</button>
                  </div>
                  <div className="mt-2 grid grid-cols-2">
                    <div>
                      <h4 className="font-semibold">Workflows</h4>
                      <ul className="list-disc ml-6">
                        {role.permissions.workflows.map((perm, i) => (
                          <li key={i}>{perm}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Analytics</h4>
                      <ul className="list-disc ml-6">
                        {role.permissions.analytics.map((perm, i) => (
                          <li key={i}>{perm}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === "Compliance & GDPR" && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              GDPR & Data Compliance Center
            </h2>
            <div className="flex space-x-4">
              <div className="flex-1 bg-white border rounded p-4">
                <h4 className="font-semibold mb-2">
                  Data Subject Requests (DSR)
                </h4>
                <input
                  type="text"
                  placeholder="customer@example.com"
                  className="w-full mb-2 border p-2 rounded"
                />
                <div className="space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Export Data
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Initiate Erasure Request
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-white border rounded p-4">
                <h4 className="font-semibold mb-2">Personal Data Inventory</h4>
                {[
                  "email_address",
                  "billing_address",
                  "phone_number",
                  "customer_name",
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b py-1">
                    <span>{item}</span>
                    <button className="text-blue-600">View Usage</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border rounded p-4">
            <h4 className="font-semibold mb-2">
              Data Processing Activities Log
            </h4>
            <input
              type="text"
              placeholder="Search activities..."
              className="w-full mb-4 border p-2 rounded"
            />
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Activity</th>
                  <th>Workflow</th>
                  <th>Source</th>
                  <th>Destination</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-01-15 10:30</td>
                  <td>Order Sync</td>
                  <td>Shopify to NetSuite</td>
                  <td>Shopify</td>
                  <td>NetSuite</td>
                </tr>
                <tr>
                  <td>2024-01-15 10:25</td>
                  <td>Customer Update</td>
                  <td>Customer Data Sync</td>
                  <td>WooCommerce</td>
                  <td>Salesforce</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border rounded p-4">
            <h4 className="font-semibold mb-2">Compliance Documentation</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-600">
                  View our Data Processing Agreement (DPA)
                </button>
              </li>
              <li>
                <button className="text-blue-600">
                  Read our Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-blue-600">
                  Review our Security Measures
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Main App ---------------- */
// Root component that initializes state, loads from localStorage, and sets up routes
export default function App() {
  const [savedWorkflows, setSavedWorkflows] = useState([]);
  
  // Load workflows from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("savedWorkflows");
    if (stored) setSavedWorkflows(JSON.parse(stored));
    document.title="Retailflow";
  }, []);
  
  // Persist workflows whenever they change
  useEffect(() => {
    localStorage.setItem("savedWorkflows", JSON.stringify(savedWorkflows));
  }, [savedWorkflows]);

  // Define app routes
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route
          path="/workflows"
          element={<WorkflowBuilder setSavedWorkflows={setSavedWorkflows} />}
        />
        <Route
          path="/workflows/saved"
          element={
            <SavedWorkflows
              savedWorkflows={savedWorkflows}
              setSavedWorkflows={setSavedWorkflows}
            />
          }
        />
        <Route path="/analytics" element={<Analytics Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
