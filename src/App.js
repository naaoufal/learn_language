import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeScreen} /> {/* 👈 Renders at /app/ */}
          {/* tested pages for google analytics */}
          {/* <Route path="/comment" Component={CommentScreen} />
          <Route path="/product" Component={ProductScreen} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
