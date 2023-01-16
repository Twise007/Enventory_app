import axios from 'axios'
import React, { useState } from 'react'
import { FaPhoneAlt, FaTwitter, FaEnvelope} from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { toast } from 'react-toastify'
import { BACKEND_URL } from '../../services/authService'


const Contact = () => {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const data = {
        subject,
        message
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            const response =await axios.post(`${BACKEND_URL}/api/contactus`, data)
            setSubject("")
            setMessage("")
            toast.success(response.data.message);
        } catch (error) {
            toast.error.apply(error.message)
        }
    }

  return (
    <div>
        <div className="navbar bg-primary-content">
            <div className="flex-1" style={{color:"var(--color-black)", fontSize:"25px", borderBottom:"2px solid var(--color-green)"}}>Contact Us:</div>
        </div>

        <div className='pl-5'>       
            <form onSubmit={sendEmail}>
                <label className="input-group pt-3">
                    <span style={{background:"var(--color-green)", color:"var(--color-white)", textTransform:"capitalize"}}>Subject</span>
                    <input type="text" name='subject' value={subject} placeholder='Subject' required onChange={(e) => setSubject (e.target.value)} className="input w-full max-w-xs" style={{background:"var(--color-l-green)", width:"100%", color:"var(--color-black)", textTransform:"capitalize"}}/>
                </label>

                <label className="label mt-2" >
                    <span className="label-text p-1" style={{color:"var(--color-black)", borderBottom:'2px solid var(--color-green)'}}>Product Price:</span>
                </label>

                <label className="input-group">
                    <textarea placeholder='Write here...' name='message' value={message} required onChange={(e) => setMessage (e.target.value)}
                    className="input input-bordered p-2 shadow-2xl w-full max-w-xs " style={{background:"var(--color-l-green)", color:"var(--color-black)", minHeight:"15pc", borderRadius:"10px"}}></textarea>
                </label>

                <button type='submit' className="btn mt-3" style={{background:"var(--color-green)", color:"var(--color-l-green)"}}>send message</button>
            </form>

            <div className='mt-10 mb-10' style={{border:"2px solid var(--color-green)", background:"var(--color-green)"}}></div>

            <div className='p-3 w-full max-w-xs' style={{background:"var(--color-green)", color:"var(--color-white)", borderRadius:"10px"}}>
                <h3 className='mb-2' style={{fontSize:'24px', borderBottom:"2px solid var(--color-white)"}}>Our Contact Information:</h3>
                <p >Fill the form or contat us via other channel listed below</p>
                <div>
                    <div className="alert" style={{background:'var(--color-green)', border:'none', color:"var(--color-white)"}}>
                        <div>    
                            <FaPhoneAlt className="h-6 w-6"/>
                            <span>+2348102904585</span>
                        </div>
                    </div>
                    <div className="alert" style={{background:'var(--color-green)', border:'none', color:"var(--color-white)"}}>
                        <div>    
                            <FaEnvelope className="h-6 w-6"/>
                            <span>Tundeoke@gmail.com</span>
                        </div>
                    </div>
                    <div className="alert" style={{background:'var(--color-green)', border:'none', color:"var(--color-white)"}}>
                        <div>    
                            <GoLocation className="h-6 w-6"/>
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>
                    <div className="alert" style={{background:'var(--color-green)', border:'none', color:"var(--color-white)"}}>
                        <div>    
                            <FaTwitter className="h-6 w-6"/>
                            <span>@Tunde007</span>
                        </div>
                    </div>
                </div>
            </div>

        </div> 


    </div>
  )
}

export default Contact