import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./screens/Home/Home.jsx";
import Layout from "./layouts/Layout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Layout>
          <Home />
      </Layout>
  </React.StrictMode>,
)
