import React from 'react'
import '../Assets/Css/Progress.css'
import user4 from '../Assets/Images/user4.png'
import user2 from '../Assets/Images/user2.png'

const Progress = () => {
  return (
    <div>
      <div className="middlecontent">
        <div className="topheader mb-3">
          <div className="row">
            <div className="col-md-10">
              <div className="searchbar">
                <input type="search" placeholder='Tap here to search' />
              </div>
            </div>
            <div className="col-md-1">
              <div className="topicon">
                <i class="fa-regular fa-envelope"></i>
              </div>
            </div>
            <div className="col-md-1">
              <div className="topicon">
                <i class="fa-regular fa-bell"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="topsection mb-4">
          <div className="row">
            <div className="col-md-6">
              <div className="total">
                <div className="totalcontent">
                  <h2>Total Finance</h2>
                  <p>9,900k</p>
                </div>
                <div className="totalchat">
                  <div class="progress-bar">
                    <progress value="75" min="28" max="90" style={{ visibility: "hidden", height: 0, width: 0 }}>75%</progress>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="total2">
                <div className="totalcontent">
                  <h2>Total Expense</h2>
                  <p>8,240k</p>
                </div>
                <div className="totalchat">
                  <div class="progress-bar">
                    <progress value="75" min="28" max="90" style={{ visibility: "hidden", height: 0, width: 0 }}>75%</progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middlesection">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 ps-0 ms-0">
              <div className="chartcontent">
                <div className="text my-3 me-auto ms-auto">
                  <h2>Monday, 28 December 2021</h2>
                </div>
                <svg class="chart" width="360" height="170">
                  <g transform="translate(40, 10)">
                    <path
                      class="line"
                      d="M30,130 C100,80 200,0 300,100 C400,240 400,80 600,0"
                    ></path>


                    <text x="-5" y="0" dy="2" fill="white">350</text>
                    <text x="-5" y="40" dy="2" fill="white">300</text>
                    <text x="-5" y="80" dy="2" fill="white">250</text>
                    <text x="-5" y="120" dy="2" fill="white">200</text>


                    <text x="-10" y="155" dy="1" fill="white">Mon</text>
                    <text x="40" y="155" dy="1" fill="white">Tue</text>
                    <text x="90" y="155" dy="1" fill="white">Wen</text>
                    <text x="140" y="155" dy="1" fill="white">Thu</text>
                    <text x="190" y="155" dy="1" fill="white">Fri</text>
                    <text x="240" y="155" dy="1" fill="white">Sat</text>
                    <text x="290" y="155" dy="1" fill="white">Sun</text>
                  </g>
                </svg>
              </div>


            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="target">
                <div className="text my-3 me-auto ms-auto">
                  <h2>Your Finance Target</h2>
                </div>
                <div class="progress-bar1 my-4 me-auto ms-auto">
                  <progress value="75" min="28" max="90" style={{ visibility: "hidden", height: 0, width: 0 }}>75%</progress>
                </div>
                <div className="result d-flex justify-content-around">
                <div className="text1">
                  <p >
                    <i class="fa-solid fa-circle-dot pe-1"></i>Result Achieved

                  </p>
                  <p>
                  Achieved well and <br/>smoothly

                  </p>
                  </div>
                  <div className="text2">
                  <p >
                    <i class="fa-solid fa-circle-dot pe-1"></i>In The Process
                  </p>
                  <p>Waiting in target <br/> process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tablecontent">
          <div className="row">
            <div className="col-sm-12">
              <h2>Projects Finance</h2>
              <table style={{ width: 800, height: 100 }}>
                <tr>
                  <td style={{padding:10, }}>Name</td>
                  <td>Progress</td>
                  <td>Achieved</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <img style={{padding:10, width: 50, height: 50 }} src={user4} alt="user1" />Darby Day
                  <td>Meet the target</td>
                  <td>$145,000</td>
                  <td>Financial Officer</td>
                </tr>
                <tr>
                  <img style={{padding:10, width: 50, height: 50 }} src={user2} alt="user1" />Helt Diven
                  <td>On Going</td>
                  <td>$299,000</td>
                  <td>Project Manager</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Progress
