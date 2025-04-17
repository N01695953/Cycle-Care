import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const CycleInfo = lazy(() => import('./pages/CycleInfo'));
const TrackCare = lazy(() => import('./pages/TrackCare'));
const MoodTracker = lazy(() => import('./pages/MoodTracker')); // Make sure this matches the filename
const Resources = lazy(() => import('./pages/Resources'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cycle-info" element={<CycleInfo />} />
          <Route path="/track-care" element={<TrackCare />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
