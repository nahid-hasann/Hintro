import React from 'react';
import { PieChart, Clock, Sparkles, Calendar } from 'lucide-react';
import StatCard from './components/StatCard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmptyState from './components/EmptyState';
import CallListItem from './components/CallListItem';
import HowItWorks from './components/HowItWorks';
import LogoutModal from './components/LogoutModal';
import FeedbackForm from './components/FeedbackForm';
import FeedbackHistory from './components/FeedbackHistory';
import { fetchDashboardSummary } from './services/api';

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [activeTab, setActiveTabState] = React.useState(() => {
    return localStorage.getItem('activeTab') || 'dashboard';
  });

  const setActiveTab = (tab) => {
    setActiveTabState(tab);
    localStorage.setItem('activeTab', tab);
  };
  const [isLogoutModalOpen, setIsLogoutModalOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('userId') || 'u2';
      try {
        const response = await fetchDashboardSummary(userId);
        setData(response);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (isLoggedIn) fetchData();
    else setLoading(false);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    window.location.reload();
  };

  if (!isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-12 rounded-[32px] shadow-xl text-center max-w-md border border-slate-100">
          <h1 className="text-3xl font-bold mb-6 text-slate-800">Hintro Dashboard</h1>
          <p className="text-slate-500 mb-10">Select a persona to explore the dashboard</p>
          <div className="grid gap-4">
            <button
              onClick={() => {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userId', 'u1');
                window.location.reload();
              }}
              className="p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group"
            >
              <div className="font-bold text-slate-800 group-hover:text-indigo-600">New User (Empty State)</div>
              <div className="text-sm text-slate-500">No previous calls or sessions</div>
            </button>
            <button
              onClick={() => {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userId', 'u2');
                window.location.reload();
              }}
              className="p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group"
            >
              <div className="font-bold text-slate-800 group-hover:text-indigo-600">Active User (Full State)</div>
              <div className="text-sm text-slate-500">View recent calls and insights</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const groupCallsByDate = (calls) => {
    const groups = {};
    const callArray = Array.isArray(calls) ? calls : (calls?.callSessions || []);
    if (callArray.length === 0) return groups;
    callArray.forEach(call => {
      const dateObj = new Date(call.started_at || call.startTime);
      const month = dateObj.toLocaleString('en-US', { month: 'long' });
      const day = dateObj.getDate();
      const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : (day === 2 || day === 22) ? 'nd' : (day === 3 || day === 23) ? 'rd' : 'th';
      const dateKey = `${month.toLowerCase()}${day} ${suffix}`;

      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(call);
    });
    return groups;
  };

  const renderDashboard = () => {
    const groupedCalls = groupCallsByDate(data?.history);

    return (
      <div className="max-w-[1032px] mx-auto px-4 sm:px-0">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1
              className="font-medium text-[#000000] mb-1"
              style={{
                fontFamily: 'Inter',
                fontSize: 'var(--welcome-size)',
                fontWeight: 500,
                lineHeight: '121%',
                letterSpacing: '0.3px',
                width: 'var(--welcome-width)',
                height: 'var(--welcome-height)',
              }}
            >
              Hi, {data?.profile?.firstName || 'Name'} 👋 Welcome to Hintro
            </h1>
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: 'var(--sub-size)',
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '0.3px',
                width: 'var(--sub-width)',
                height: 'var(--sub-height)',
                color: '#000000'
              }}
            >
              Ready to make your next call smarter?
            </p>
          </div>
          <button
            className="bg-black text-white hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center shrink-0"
            style={{
              width: 'var(--btn-width)',
              height: 'var(--btn-height)',
              borderRadius: '4px',
              padding: '0 16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--btn-font)',
                fontSize: 'var(--btn-text-size)',
                fontWeight: 'var(--btn-weight)',
                lineHeight: '100%',
                letterSpacing: '0.3px',
                color: '#FFFFFF',
                whiteSpace: 'nowrap'
              }}
            >
              Start Call
            </span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            icon={PieChart}
            label="Total Sessions"
            value={data?.stats?.totalSessions || 0}
            iconBg="#ffe0e0"
            iconColor="#e6584e"
          />
          <StatCard
            icon={Clock}
            label="Average Duration"
            value={data?.stats?.averageDuration ? `${Math.round(data.stats.averageDuration / 60)}m ${data.stats.averageDuration % 60}sec` : '0'}
            iconBg="#e0fcff"
            iconColor="#4c9da6"
          />
          <StatCard
            icon={Sparkles}
            label="AI Used"
            value={data?.stats?.totalAIInteractions ? `${data.stats.totalAIInteractions} times` : '0'}
            iconBg="#e0ffe3"
            iconColor="#499955"
          />
          <StatCard
            icon={Calendar}
            label="Last Session"
            value={data?.history?.[0] ? '2 days ago' : '-'}
            iconBg="#ebe0ff"
            iconColor="#7b57c2"
          />
        </div>

        <HowItWorks />

        {/* Recent Calls Section */}
        <div className="mt-12 mb-20 px-2 sm:px-0 flex flex-col items-center">
          <h3
            style={{
              fontFamily: 'Inter',
              fontSize: 'var(--recent-title-size)',
              fontWeight: 500,
              lineHeight: '100%',
              letterSpacing: '0px',
              color: '#000000',
              marginBottom: '32px',
              width: 'var(--recent-title-width)',
              textAlign: 'center'
            }}
          >
            Recent calls
          </h3>

          {Object.keys(groupedCalls).length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-10 w-full">
              {Object.entries(groupedCalls).map(([date, calls]) => (
                <div key={date}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-2 sm:px-4">{date}</p>
                  <div className="space-y-1">
                    {calls.map(call => (
                      <CallListItem key={call._id} call={call} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'feedback': return <FeedbackForm onFeedbackSaved={() => setActiveTab('feedback-history')} />;
      case 'feedback-history': return <FeedbackHistory />;
      default: return <div className="flex items-center justify-center h-full text-slate-400 font-medium">Coming Soon</div>;
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* Logout Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onLogout={handleLogout}
      />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-[2px]"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar
          activeTab={activeTab}
          subscription={data?.subscription}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden w-full max-w-full">
        <Header
          profile={data?.profile}
          onMenuClick={() => setIsSidebarOpen(true)}
          onProfileClick={() => setIsLogoutModalOpen(true)}
        />

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 lg:px-12 bg-white w-full max-w-full">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App;
