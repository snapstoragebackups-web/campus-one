import React, { useState } from 'react';
import { useCampus } from './context/CampusContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { AttendanceModule } from './components/attendance/AttendanceModule';
import { TimetableModule } from './components/timetable/TimetableModule';
import { HostelComplaintModule } from './components/hostel/HostelComplaintModule';
import { GatePassModule } from './components/gatepass/GatePassModule';
import { CertificateModule } from './components/certificates/CertificateModule';
import { MessModule } from './components/mess/MessModule';
import { NoticeModule } from './components/notices/NoticeModule';
import { FeeModule } from './components/fees/FeeModule';
import { AiAssistantModule } from './components/assistant/AiAssistantModule';
import { EmergencyModule } from './components/emergency/EmergencyModule';
import { AdminPortal } from './components/admin/AdminPortal';
import { LoginPage } from './components/auth/LoginPage';
import { Bot, CheckCircle2, AlertTriangle, Info, ShieldAlert } from 'lucide-react';

export const MainApp = () => {
  const { activeTab, setActiveTab, toast, role, isAuthenticated } = useCampus();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // If not authenticated, show modern Student & Admin Login Portal
  if (!isAuthenticated) {
    return (
      <>
        {toast && (
          <div className="fixed top-20 right-4 z-50 max-w-sm w-full animate-slide-up shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
            <div className={`p-4 flex items-start gap-3 ${
              toast.type === 'danger'
                ? 'bg-rose-600 text-white'
                : toast.type === 'success'
                ? 'bg-emerald-600 text-white'
                : toast.type === 'warning'
                ? 'bg-amber-500 text-white'
                : 'bg-slate-900 text-white'
            }`}>
              <div className="mt-0.5 shrink-0">
                {toast.type === 'danger' && <ShieldAlert className="w-5 h-5 text-white" />}
                {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-white" />}
                {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-white" />}
                {toast.type === 'info' && <Info className="w-5 h-5 text-campus-300" />}
              </div>
              <div className="flex-1 text-xs">
                <div className="font-extrabold">{toast.title}</div>
                <p className="mt-0.5 opacity-90 leading-relaxed">{toast.message}</p>
              </div>
            </div>
          </div>
        )}
        <LoginPage />
      </>
    );
  }

  const renderActiveModule = () => {
    switch (activeTab) {
      case 'dashboard':
        return role === 'admin' ? <AdminPortal /> : <StudentDashboard />;
      case 'attendance':
        return <AttendanceModule />;
      case 'timetable':
        return <TimetableModule />;
      case 'hostel':
        return <HostelComplaintModule />;
      case 'gatepass':
        return <GatePassModule />;
      case 'certificates':
        return <CertificateModule />;
      case 'mess':
        return <MessModule />;
      case 'notices':
        return <NoticeModule />;
      case 'fees':
        return <FeeModule />;
      case 'ai-assistant':
        return <AiAssistantModule />;
      case 'emergency':
        return <EmergencyModule />;
      case 'analytics':
        return <AdminPortal />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Toast Notification Alert */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 max-w-sm w-full animate-slide-up shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
          <div className={`p-4 flex items-start gap-3 ${
            toast.type === 'danger'
              ? 'bg-rose-600 text-white'
              : toast.type === 'success'
              ? 'bg-emerald-600 text-white'
              : toast.type === 'warning'
              ? 'bg-amber-500 text-white'
              : 'bg-slate-900 text-white'
          }`}>
            <div className="mt-0.5 shrink-0">
              {toast.type === 'danger' && <ShieldAlert className="w-5 h-5 text-white" />}
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-white" />}
              {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-white" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-campus-300" />}
            </div>
            <div className="flex-1 text-xs">
              <div className="font-extrabold">{toast.title}</div>
              <p className="mt-0.5 opacity-90 leading-relaxed">{toast.message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-64 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            {renderActiveModule()}
          </div>
        </main>
      </div>

      {/* Floating AI Assistant Trigger (visible if not already on AI tab) */}
      {activeTab !== 'ai-assistant' && (
        <button
          onClick={() => setActiveTab('ai-assistant')}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-campus-600 to-indigo-600 hover:from-campus-500 hover:to-indigo-500 text-white shadow-glow flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 group"
          title="Open AI Campus Assistant"
        >
          <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold hidden sm:inline">Ask Campus AI</span>
        </button>
      )}

    </div>
  );
};
