import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;

  // apiKey ="cde7652e3bb24d6db052b4a77391c693"
  apiKey = process.env.REACT_APP_NEWS_API
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route exact path="/" element={<News key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology" />} />
            <Route exact path="/general" element={<News key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" />} />

          </Routes>
        </BrowserRouter>




      </div>
    )
  }
}

