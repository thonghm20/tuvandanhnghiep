import React from 'react'
import logofooter from '../assets/Logo (1).png'
import './footer.css'
const Footer = () => {
  return (
    <div className='footerr'>
      <div className='footer'>
        <div className='group_footer_one'>
        <img src={logofooter} alt="" />
        <p className='width'>Our business philosophy in Vietnam is simple - We want to be the market leader in terms of client service</p>
        </div>
        <div className='footer_gr2'>
            <h2>Navigation</h2>
            <p>Về chúng tôi</p>
            <p>Dịch vụ và giải pháp</p>
            <p>Tư vấn doanh nghiệp</p>
            <p>Thuế</p>
        </div>
        <div>
            <h2>Subscribe Us</h2>
            <input className='footer_input' type="text" placeholder='Enter Your Email' />
            <button className='button'>Subscribe Now</button>
        </div>
        
        </div>
        <div className="end_footer">
            <p>Copyright © 2023 AAA</p>
        </div>
    </div>
  )
}

export default Footer