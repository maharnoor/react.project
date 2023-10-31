import React from 'react'
import "../Assets/Css/Dashboard.css"

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="pannel">
        <ul>
          <li>
            <a href="">
            <i class="fa-solid fa-house pe-3"></i>Dashboard
              </a>   
          </li>
          <li>
            <a href="">
            <i class="fa-solid fa-file-lines pe-3"></i>Documents
              </a>   
          </li>
          <li>
            <a href="">
            <i class="fa-regular fa-credit-card pe-3"></i>Payments
              </a>   
          </li>
          <li>
            <a href="">
            <i class="fa-regular fa-calendar-days pe-3"></i>Calendar
              </a>   
          </li>
          <li>
            <a href="">
            <i class="fa-regular fa-user pe-3"></i>Profile
              </a>   
          </li>
          </ul>
          </div>
          <div className="setting">
            <ul>
            <li>
            <a href="">
            <i class="fa-solid fa-toggle-off pe-3"></i>Darkmode
              </a>   
          </li>
          <li>
            <a href="">
            <i class="fa-solid fa-gear pe-3"></i>Settings
              </a>   
          </li>
          <li>
            <a href="">
            <i class="fa-solid fa-arrow-right-from-bracket pe-3 "></i>Logout
              </a>   
          </li>
            </ul>
          </div>
      </div>
      <div className="upgarde mt-3">
        <div className="upgarde-items">
          <span className='upgarge-icons'><i class="fa-solid fa-rocket"></i></span>
          <h2>Upgrade to Pro</h2>
          <p>Check your magic on this <br /> Pro Dashboard</p>
        </div>
      </div>
    </div>
   
  )
}

export default Dashboard
