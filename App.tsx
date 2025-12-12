import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Editor from './pages/Editor';
import Guide from './pages/Guide';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isEditor = location.pathname === '/editor';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Only show global header if NOT in editor mode */}
      {!isEditor && <Header />}
      
      <main className={`flex-grow ${isEditor ? 'h-screen overflow-hidden' : ''}`}>
        {children}
      </main>
      
      {!isEditor && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;