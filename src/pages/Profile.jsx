import React from 'react'
import '../Assets/Css/Profile.css'
import user1 from '../Assets/Images/user1.png'
import user2 from '../Assets/Images/user2.png'
import user3 from '../Assets/Images/user3.png'
import user4 from '../Assets/Images/user4.png'
const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="user">
          <span className='userimage'>
            <img src={user1} alt="user1" />
          </span>
          <h2>Emmy Dansom</h2>
          <p>CEO</p>
        </div>
        <div className="userinfo">
          <ul>
            <li>
              <a href=""><i class="fa-solid fa-users-line"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-facebook-messenger"></i></a>
            </li>
            <li>
              <a href=""> <i class="fa-solid fa-file-lines"></i></a>
            </li>
          </ul>
          <hr />

        </div>
        <div className="userabout">
          <h2>About</h2>
          <p>Organized activities to make money and  sell goods and services for a profit</p>
          <div className="otheruser">
            <ul>
              <li>
                <a href=""><div className="otheruserimg">
                <img src={user2} alt="user1" />
                  </div>
                  <div className="otheruserinfo">
                    <h2>Jonie Juger</h2>
                    <p>Project Manager</p>
                  </div>
                  </a>
              </li>
            </ul>
          </div>
          <div className="otheruser">
            <ul>
              <li>
                <a href=""><div className="otheruserimg">
                <img src={user3} alt="user1" />
                  </div>
                  <div className="otheruserinfo">
                    <h2>Sarah Hosten</h2>
                    <p>Graphic Designer</p>
                  </div>
                  </a>
              </li>
            </ul>
          </div>
          <div className="otheruser">
            <ul>
              <li>
                <a href=""><div className="otheruserimg">
                <img src={user4} alt="user1" />
                  </div>
                  <div className="otheruserinfo">
                    <h2>Deckrad Anne</h2>
                    <p>Financial Treasurer</p>
                  </div>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sendmoney d-flex justify-content-between align-items-center">
        <div className="money">
        <h3>Send Money</h3>
        <a href="">
            <i class="fa-solid fa-circle-dot pe-3"></i>Your Card
            </a>
        </div>
       <div className="icon">
       <h2>$145,000</h2>
       </div>
      </div>
    </div>
  )
}

export default Profile
