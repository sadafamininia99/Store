import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Layout from './layout/MainLayout'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
)
