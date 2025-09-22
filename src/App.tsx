import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/layout/footer';
import { Preloader } from '@/components/ui/preloader';
import { Toaster } from '@/components/ui/sonner';
import { HomePage } from '@/pages/home';
import { WorkPage } from '@/pages/work';
import { ProjectDetailPage } from '@/pages/project-detail';
import { AboutPageWrapper as AboutPage } from '@/pages/about';
import { ContactPageWrapper as ContactPage } from '@/pages/contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </Router>
      )}
    </div>
  );
}

export default App;