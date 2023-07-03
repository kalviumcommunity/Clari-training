import React from 'react'
import img2 from "../Assets/img2.webp"

function RegistrationForm() {
  return (
    <div className='registration_container'>
        <div className='register_img_cont'>
        <img src={img2} alt=""  className='register_img'/>
        </div>
        <div className='register_details_cont'>
            <div className='heading2_cont'>
                <h1 className='heading2'>Registration Form</h1>
            </div>
            <div className='register_detail_cont'>
            <div className="name2 input_cont">
                <div className="name_head"><h3 className='abc'>Name</h3></div>
                <div className='input_box_container'>
                    <input className="name_input input_boxes" placeholder='Your Name'></input>
                </div>
                </div>

                <div className="email input_cont">
                <div className="email_head"><h3 className='abc'>Email</h3></div>
                <div className='input_box_container'>
                    <input className="email_input input_boxes" placeholder='Please Provide your Email'></input>
                    </div>
                </div>
                <div className="password input_cont">
                <div className="password_head"><h3 className='abc'>Password</h3></div>
                <div className='input_box_container'>
                    <input className="password_input input_boxes" placeholder='Please Enter Your Password'></input>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RegistrationForm