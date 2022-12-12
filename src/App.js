import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/authProvider';

import insertDoctorPage from './pages/doctors/insertDoctor';
import HomePage from './pages/HomePage';
import doctorsPage from './pages/doctors/viewAllDoctors';
import doctorPage from './pages/doctors/doctor'
import SigninPage from './pages/auth/SigninPage';
import SignupPage from './pages/auth/SignupPage';
import Layout from './UI/layout/Layout';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<doctorsPage />} />
            <Route path="/doctors/:doctorId" element={<doctorPage />} />
            <Route path="/doctors/insert" element={<insertDoctorPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;