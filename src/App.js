import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftSlider from "./components/LeftSlider";
import UserProvider from "./components/Providers/UserProvider";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <LeftSlider />
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
            <MainDashboard />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
