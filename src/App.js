import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import CoursesScreen from './screens/CoursesScreen';

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import ResponsiveBar from './components/ResponsiveBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <header class="header"> */}
        <TopBar />
        <NavBar />
        {/* responsive menu */}
        <ResponsiveBar />
      {/* </header> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomeScreen} /> {/* 👈 Renders at /app/ */}
            {/* <Route path="/comment" Component={CommentScreen} />
            <Route path="/product" Component={ProductScreen} /> */}
            <Route path="/courses" Component={CoursesScreen} />
            <Route path="/logIn" Component={RegisterScreen} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
  );
}

export default App;
