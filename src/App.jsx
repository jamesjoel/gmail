import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Drafts from "./pages/Drafts";
import SentItems from "./pages/SentItems";
import Trash from "./pages/Trash";
import Sidebar from "./components/Sidebar";
import ShowMail from "./components/ShowMail";
import Test from "./components/test";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Routes>
          <Route path="" element={<Inbox />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="sentitems" element={<SentItems />} />
          <Route path="trash" element={<Trash />} />
          <Route path="show" element={<ShowMail/>} />
          <Route path="test" element={<Test/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
