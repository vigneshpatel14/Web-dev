import { useState } from 'react'
import { Link } from 'react-router';
import { ToastContainer , toast } from 'react-toastify';

function Formlu() {

  const [userData , SetUserData] = useState({
    fname: '',
    phone: '',
    email: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    toast("Sucess");
    toast.warning("warn")
    toast.error("Err")
  }
  return (
    <>
    <Link to={'/'}>Go to home</Link>
      <div className="p-10 flex justify-center h-[100%] mt-[10%]">
        <ToastContainer/>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" id='fname' name='fname' className='border-black border-2 m-2' value={userData.fname} onChange={(e) => { SetUserData({...userData , fname: e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id='email' name='email' className='border-black border-2 m-2' value={userData.email} onChange={(e) => {SetUserData({...userData , email:e.target.value})}}/>
            </div>
            <div>
                <label htmlFor="phone">Phono</label>
                <input type="tel" id='phono' name='phono' className='border-black border-2 m-2'value={userData.phone} onChange={(e) => {SetUserData({...userData , phone:e.target.value})}}/>
            </div>
            <button className='bg-green-400 border-2 border-black'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Formlu
