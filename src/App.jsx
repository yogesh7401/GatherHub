import Header from './component/Header';
import LandingPage from './component/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import FormBuilder from './component/FormBuilder/FormBuilder';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/form-builder" element={<FormBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
