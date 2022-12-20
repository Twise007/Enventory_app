import React from 'react';
import  {MdPassword} from "react-icons/md"
import Card from '../../component/card/Card';
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <div>
    <Card>
      <div>
        <MdPassword size={25} color="#999"/>
      </div>
      <h2>Reset Password</h2>

      <form>
        <input type="password" placeholder='New Password' required name='password'/>
        <input type="password" placeholder='Confirm new password' required name='password'/>
        <button type='password' className='--btn --btn-primary --btn-block'>Get reset email</button>
        <div>
        <p><Link to="/">- Home</Link></p>
        <p><Link to="/register">- Login</Link></p>
      </div>
      </form>
    </Card>
  </div>
  )
}

export default Reset