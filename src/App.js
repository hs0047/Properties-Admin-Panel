import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from "./components/Pages/adminPages/AdminHome";
import Login from "./components/Pages/Login";
import UserManagement from "./components/Pages/adminPages/UserManagement";
import PropertyManagement from "./components/Pages/adminPages/PropertyManagement";
import MasterManagement from "./components/Pages/adminPages/MasterManagement";
import Home from "./components/Pages/Home";
import DetailedView from "./components/Pages/DetailedView";
import SearchResult from "./components/Pages/SearchResult";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/builderFloorDetails" element={<DetailedView />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/user" element={<UserManagement />} />
          <Route path="/admin/property" element={<PropertyManagement />} />
          <Route path="/admin/master" element={<MasterManagement />} />
          <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/user" element={<UserManagement />} />
          <Route path="/admin/property" element={<PropertyManagement />} />
          <Route path="/admin/master" element={<MasterManagement />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
