import React from 'react'
import "../App.css"
import homeImage from "../Assets/img1.png"

function HomePage() {
  return (
    <div className='home_container'>
      <div className="home_image">
    <img src={homeImage} alt=""  className='img1'/>
      </div>

      <div className="home_content">
        <div className='welcome_heading'>
          <h1>Welcome To Task Ninja</h1>
        </div>
        <div className='login_role'>
        <div className='login_role2'>Choose Your Login Role</div>
        <div className='button_container'>
        <button className='register_buttons'>Admin Login</button>
        <button className='register_buttons'>Register Now</button>
        <button className='register_buttons' style={{color: "#C4A2F0", backgroundColor:"#F7F7F7"}}>User Login</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage