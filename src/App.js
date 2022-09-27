import './App.css';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar'
import Home from './components/Home';
import BestSelling from './components/BestSelling';
import Genres from './components/Genres';
import TopRated from './components/TopRated';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  const [returnedData, setReturnedData] = useState()

  const fetchData = async () => {
    const newData = await fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
    setReturnedData(newData)
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div className="App">
    <NavbarComp />
      <h1>Bookstore Library & Stock keeping app</h1>
      <h4>coming soon . . .</h4>
      <br />
      <br />
      <h3>Tavoy Walls / Alex Mizak / Quenton Powell</h3>
      <br />
      <br />
          <Router>
            <Routes>
              <Route path="/Home" element={<Home/>}></Route>
              <Route path="/BestSelling" element={<BestSelling/>}></Route>
              <Route path="/Genres" element={<Genres/>}></Route>
              <Route path="/TopRated" element={<TopRated/>}></Route>
            </Routes>
              </Router>
      </div>
  );
}

export default App;
