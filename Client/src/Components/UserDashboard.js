import React from 'react'

function UserDashboard() {
  return (
    <>
    <div className='Navbar'>
    <div className='dashboard'>
        <h1>User Dashboard</h1>
    </div>
    <div className='information'>
        <div className='mail'>
        <h3>Email:</h3> <span style={{color: "#241571"}}>anjanikumar@gmail.com</span>

        </div>
        <div className='name'>
        <h3>Name: </h3> <span style={{color: "#241571"}}>Shubham Kumar</span>
        </div>
        
        <button className='logout'>LOGOUT</button>
    </div>

</div>
</>
  )
}

export default UserDashboard