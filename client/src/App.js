import React from 'react'

import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'


import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/chat' exact component={Chat} />
    </Router>
  )
}

export default App