import React from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import GithubaApi from './Components/GithubApi/GithubaApi'

const App = () => {
  return (
    <div>
      <Header/>
      <Card/>
      <GithubaApi/>
      <Footer/>
    </div>
  )
}

export default App

