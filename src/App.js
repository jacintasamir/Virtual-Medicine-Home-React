import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';

import insertDoctorPage from './pages/doctors/insertDoctor';
import HomePage from './pages/HomePage';
import doctorsPage from './pages/doctors/viewAllDoctors';
import doctorPage from './pages/doctors/doctor'
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';
import ProdutPage from './pages/ProdutPage';

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