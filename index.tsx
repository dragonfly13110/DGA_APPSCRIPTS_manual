
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Icons } from './components';

// Import Pages
import { Introduction } from './pages/Introduction';
import { DatabaseSetup } from './pages/DatabaseSetup';
import { Installation } from './pages/Installation';
import { Customization } from './pages/Customization';
import { ApiSetup } from './pages/ApiSetup';
import { Deployment } from './pages/Deployment';
import { LookerSetup } from './pages/LookerSetup';
import { Troubleshooting } from './pages/Troubleshooting';
import { Credits } from './pages/Credits';

// Define the navigation structure
const SECTIONS = [
  { id: 'intro', title: 'บทนำ & ภาพรวม', icon: Icons.Book, component: Introduction },
  { id: 'db', title: '1. เตรียมฐานข้อมูล', icon: Icons.Database, component: DatabaseSetup },
  { id: 'install', title: '2. ติดตั้งโค้ด', icon: Icons.Code, component: Installation },
  { id: 'customize', title: '3. ปรับแต่งระบบ', icon: Icons.Settings, component: Customization },
  { id: 'api', title: '4. ขอ API Key', icon: Icons.Key, component: ApiSetup },
  { id: 'deploy', title: '5. เริ่มใช้งานจริง', icon: Icons.Rocket, component: Deployment },
  { id: 'looker', title: '6. สร้าง Dashboard', icon: Icons.Chart, component: LookerSetup },
  { id: 'faq', title: 'การแก้ปัญหา', icon: Icons.Bug, component: Troubleshooting },
  { id: 'credits', title: 'คณะผู้จัดทำ', icon: Icons.Users, component: Credits },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find the active component based on state
  const ActiveComponent = SECTIONS.find(s => s.id === activeTab)?.component || Introduction;

  // Close sidebar on window resize (desktop mode)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans text-slate-900">
      
      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-30 shadow-sm">
        <div className="font-bold text-slate-800 flex items-center gap-2 text-lg">
           <span className="text-blue-600"><Icons.Book /></span> คู่มือติดตั้งระบบ
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          <Icons.Menu />
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-20 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:block shadow-2xl md:shadow-none flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-slate-100 hidden md:block">
          <h1 className="text-lg font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="text-blue-600"><Icons.Database /></span> 
            ระบบข้อมูลครบวงจร
          </h1>
          <div className="flex items-center gap-2 mt-2 pl-1">
             <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
               Manual V2.0
             </span>
             <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Web • Sheet • Looker</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="p-4 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
          {SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => {
                setActiveTab(section.id);
                setIsSidebarOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group relative overflow-hidden text-left
                ${activeTab === section.id 
                  ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              {activeTab === section.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg"></div>
              )}
              <span className={`transition-transform duration-200 flex-shrink-0 ${activeTab === section.id ? 'scale-110 text-blue-600' : 'text-slate-400 group-hover:text-slate-600 group-hover:scale-110'}`}>
                <section.icon />
              </span>
              <span>{section.title}</span>
            </button>
          ))}
          
          <div className="mt-8 px-4 pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-4 font-bold uppercase tracking-wider">แหล่งข้อมูลอ้างอิง</p>
            <div className="space-y-3">
              <a href="https://lookerstudio.google.com/" target="_blank" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                Looker Studio
              </a>
              <a href="https://aistudio.google.com/" target="_blank" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                Google AI Studio
              </a>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full min-w-0 bg-slate-50/50">
        <div className="max-w-5xl mx-auto p-4 md:p-10 lg:p-12">
          
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12 min-h-[85vh] animate-fade-in">
            <ActiveComponent />
          </div>
          
          {/* Footer */}
          <footer className="max-w-4xl mx-auto mt-12 text-center border-t border-slate-200/60 pt-8 pb-8">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Integrated Data Collection System. <br className="md:hidden"/> Open Source for Government & Community.
            </p>
          </footer>
        </div>
      </main>

      {/* Mobile Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-10 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

// Add a simple fade-in animation style
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 5px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
  }
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
