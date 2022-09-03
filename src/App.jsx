import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import WorksPage from './components/WorksPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;
