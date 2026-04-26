import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../Navbar";
import { 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ChevronRight,
  Database,
  MapPin,
  ArrowRight,
  Lock,
  Mail
} from "lucide-react";

// CONFIG: URLs for your sheets
const ENROLL_URL = "https://script.google.com/macros/s/AKfycbzaB_sYHzuT7DyGHBFDU7C1Or7N7XSSUlT_Z3dJy1wjS241xSzXx3AQhwuesPJJiARs/exec";
const CONTACT_URL = "https://script.google.com/macros/s/AKfycbw44Z6wh2WRujRvh36WnoYhXUrDN1AvcZxByIGb4gSOL6IIGznhqw06Qj8wkdda7CacNQ/exec";

// Login Credentials
const ADMIN_EMAIL = "admin@apexedge.com";
const ADMIN_PASSWORD = "apexedgeadmin123";

export function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const [activeTab, setActiveTab] = useState<"enrollments" | "inquiries">("enrollments");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === ADMIN_EMAIL && loginPass === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Access Denied.");
    }
  };

  const getField = (item: any, possibleKeys: string[]) => {
    const keys = Object.keys(item);
    for (const pk of possibleKeys) {
      const foundKey = keys.find(k => k.trim().toLowerCase() === pk.toLowerCase());
      if (foundKey && item[foundKey]) return item[foundKey];
    }
    return null;
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = activeTab === "enrollments" ? ENROLL_URL : CONTACT_URL;
      const res = await fetch(url);
      const json = await res.json();
      setData(json.reverse()); // Latest first
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (rowId: number, newStatus: string) => {
    const url = activeTab === "enrollments" ? ENROLL_URL : CONTACT_URL;
    const params = new URLSearchParams();
    params.append("action", "updateStatus");
    params.append("rowId", rowId.toString());
    params.append("status", newStatus);

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: params
      });
      // Update local state
      setData(prev => prev.map(item => item.rowId === rowId ? { ...item, Status: newStatus } : item));
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, activeTab]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
        >
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#d90f40] rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
              <Lock className="w-10 h-10 text-white -rotate-3" />
            </div>
            <h1 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tighter">Admin Login</h1>
            <p className="text-gray-500 font-medium mt-2">Access restricted to Apex Edge staff</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#d90f40] pl-12 outline-none transition-all font-medium"
                  placeholder="admin@apexedge.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-full h-14 bg-gray-50 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#d90f40] pl-12 outline-none transition-all font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {loginError && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 text-[#d90f40] p-4 rounded-xl text-sm font-bold flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5" />
                {loginError}
              </motion.div>
            )}

            <button 
              type="submit"
              className="w-full h-14 bg-[#1a1a1a] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#d90f40] transition-all flex items-center justify-center gap-3 group"
            >
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-[#1a1a1a]">
      <Navbar />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 text-[#d90f40] font-black uppercase tracking-[0.2em] text-sm mb-2">
                <Database className="w-5 h-5" />
                Apex Edge Database
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
                Admin <span className="text-[#d90f40]">Dashboard</span>
              </h1>
            </div>
            
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="h-14 px-8 bg-white border border-gray-100 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-red-50 hover:text-[#d90f40] transition-all shadow-sm"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-gray-200/50 border border-gray-50 mb-8 flex flex-col lg:flex-row items-center gap-4">
            <div className="flex p-1.5 bg-gray-50 rounded-2xl w-full lg:w-auto">
              <button 
                onClick={() => setActiveTab("enrollments")}
                className={`flex-1 lg:flex-none px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'enrollments' ? 'bg-[#d90f40] text-white shadow-lg' : 'text-gray-500 hover:bg-white'}`}
              >
                <Users className="w-4 h-4" />
                Enrollments
              </button>
              <button 
                onClick={() => setActiveTab("inquiries")}
                className={`flex-1 lg:flex-none px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'inquiries' ? 'bg-[#d90f40] text-white shadow-lg' : 'text-gray-500 hover:bg-white'}`}
              >
                <MessageSquare className="w-4 h-4" />
                Inquiries
              </button>
            </div>

            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search leads, names, or emails..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-14 bg-gray-50 rounded-2xl pl-14 pr-6 outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-[#d90f40] transition-all font-medium"
              />
            </div>

            <button 
              onClick={fetchData}
              className="w-full lg:w-auto h-14 px-8 rounded-2xl bg-[#1a1a1a] text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#d90f40] transition-all"
            >
              Refresh Data
            </button>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-50">
            {loading ? (
              <div className="py-40 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-gray-100 border-t-[#d90f40] rounded-full animate-spin mb-6" />
                <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Fetching latest records...</p>
              </div>
            ) : filteredData.length === 0 ? (
              <div className="py-40 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-black uppercase">No records found</h3>
                <p className="text-gray-400 font-medium">Try a different search or refresh the page</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="px-8 py-6 text-left text-xs font-black text-gray-400 uppercase tracking-widest">Lead Info</th>
                      <th className="px-8 py-6 text-left text-xs font-black text-gray-400 uppercase tracking-widest">{activeTab === 'enrollments' ? 'Course' : 'Subject'}</th>
                      <th className="px-8 py-6 text-left text-xs font-black text-gray-400 uppercase tracking-widest">Location</th>
                      <th className="px-8 py-6 text-left text-xs font-black text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-right text-xs font-black text-gray-400 uppercase tracking-widest">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredData.map((item, idx) => (
                      <motion.tr 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        className="hover:bg-gray-50/30 transition-colors group"
                      >
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            {/* Timestamp */}
                            <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                              <Clock className="w-3 h-3" />
                              {getField(item, ['timestamp', 'date', 'time', 'added_on']) ? new Date(getField(item, ['timestamp', 'date', 'time', 'added_on'])).toLocaleString('en-IN', { 
                                day: '2-digit', 
                                month: 'short', 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              }) : 'Recent'}
                            </div>

                            <span className="font-black text-[#1a1a1a] uppercase tracking-tight text-lg leading-tight">
                              {getField(item, ['Name', 'Full Name', 'Customer', 'name']) || 'Anonymous'}
                            </span>
                            <span className="text-gray-400 font-medium text-xs mt-1">
                              {getField(item, ['Email', 'E-mail', 'Email Address', 'email'])}
                            </span>
                            <span className="text-[#d90f40] font-bold text-sm mt-1">
                              {getField(item, ['Phone no', 'WhatsApp', 'Phone', 'WhatsApp_Number', 'WhatsApp Number', 'phone'])}
                            </span>
                            
                            {/* Extra Lead Details */}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {getField(item, ['Qualification', 'qualification']) && <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">{getField(item, ['Qualification', 'qualification'])}</span>}
                              {getField(item, ['Reason', 'reason']) && <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">{getField(item, ['Reason', 'reason'])}</span>}
                              {getField(item, ['English Level', 'English_Level', 'english_level']) && <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">{getField(item, ['English Level', 'English_Level', 'english_level'])}</span>}
                              {getField(item, ['Batch', 'batch']) && <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">Batch: {getField(item, ['Batch', 'batch'])}</span>}
                              {getField(item, ['Contact_Method']) && <span className="text-[10px] bg-red-50 px-2 py-0.5 rounded font-bold text-[#d90f40] uppercase">Contact: {getField(item, ['Contact_Method'])}</span>}
                            </div>

                            {/* Message/Suggestion Display */}
                            {(getField(item, ['Message', 'Suggestion', 'Suggestions'])) && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <p className="text-xs text-gray-500 font-medium italic leading-relaxed">
                                  "{getField(item, ['Message', 'Suggestion', 'Suggestions'])}"
                                </p>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-flex px-4 py-2 rounded-xl bg-blue-50 text-blue-600 font-black text-xs uppercase tracking-widest border border-blue-100">
                            {getField(item, ['Selected Course', 'Selected_Course', 'Subject', 'Course']) || 'General'}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                            <MapPin className="w-4 h-4 text-[#d90f40]" />
                            {getField(item, ['city', 'location', 'place', 'city_name', 'location_name']) || 'N/A'}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${
                            item.Status === 'Contacted' ? 'bg-green-50 text-green-600 border border-green-100' :
                            item.Status === 'Busy' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                            'bg-gray-100 text-gray-400 border border-gray-200'
                          }`}>
                            {item.Status === 'Contacted' ? <CheckCircle className="w-3.5 h-3.5" /> :
                             item.Status === 'Busy' ? <Clock className="w-3.5 h-3.5" /> :
                             <AlertCircle className="w-3.5 h-3.5" />}
                            {item.Status || 'New'}
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex flex-col items-end gap-2">
                            <button 
                              onClick={() => updateStatus(item.rowId, "Contacted")}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 text-xs font-black uppercase tracking-widest hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all shadow-sm w-full lg:w-auto justify-center"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Contacted
                            </button>
                            <button 
                              onClick={() => updateStatus(item.rowId, "Busy")}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 text-xs font-black uppercase tracking-widest hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm w-full lg:w-auto justify-center"
                            >
                              <Clock className="w-4 h-4" />
                              Busy
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
