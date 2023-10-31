import React from 'react'
import Dashboard from './Dashboard.jsx'
import "../Assets/Css/Home.css"
import Profile from './Profile.jsx'
import Progress from './Progress.jsx'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="p-4">
       
            <div className="row">
                <div className="col-sm-2"><Dashboard/></div>
                <div className="col-sm-7"><Progress/></div>
                <div className="col-sm-3"><Profile/></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
