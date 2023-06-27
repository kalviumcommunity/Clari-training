import React from 'react'

function AdminDashboard() {
  return (
    <>
    <div className='Admin_Navbar'>
    <div className='Admin_dashboard'>
        <h1>Admin Dashboard</h1>
    </div>
    <div className='Admin_information'>
        <div className='mail'>
        <h3>Email:</h3> <span style={{color: "#241571"}}>anjanikumar@gmail.com</span>

        </div>
        <div className='name'>
        <h3>Name: </h3> <span style={{color: "#241571"}}>Shubham Kumar</span>
        </div>
        
        <button className='logout'>LOGOUT</button>
    </div>

</div>
<div className='task_dashboard' >
    <div className='assignedTask'>
        <span>Assigned Tasks</span>
    </div>
    <div className='assignedTo'>
      <span>Assigned To: Shubham</span>  
    </div>
</div>
</>
  )
}

export default AdminDashboard