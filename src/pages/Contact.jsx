import React from "react";
import ic from "../assets/Icon.png";
import ic2 from "../assets/Icon (1).png";
import ic3 from "../assets/Icon (2).png";
import map from '../assets/image 9.png'
import './contact.css'
const Contact = () => {
  return (
    <div>
      <div className="services">
        <div className="services_content">
          <h1>contact</h1>
          <div className="group_content_sv">
            <span className="border_sv">Home</span>
            <span>contact</span>
          </div>
        </div>
      </div>
      <div className="contact_us">
        <div className="contactt_group">
          <div className="contact_group_content">
            <span>Contact Us</span>
            <h1>AAA luôn mong muốn được kết nối với Quý Nhà đầu tư</h1>
          </div>
          <div className="contact_small">
            <img src={ic} alt="" />
            <div className="small_content">
              <span>Hãy gọi cho chúng tôi</span>
              <h2>+84 999 000-000</h2>
            </div>
          </div>
          <div className="contact_small">
            <img src={ic2} alt="" />
            <div className="small_content">
              <span>Email</span>
              <h2>AAA@gmail.com</h2>
            </div>
          </div>
          <div className="contact_smalll">
            <img src={ic3} alt="" />
            <div className="small_content">
              <span>Office</span>
              <h2>Hồ Chí Minh</h2>
            </div>
          </div>
        </div>
        <div className="form_contact">
          <h3>Liên hệ với chúng tôi</h3>
          <form className="formm" action="">
            <div className="thuoctinh_form">
              <p>Họ và tên</p>
              <input type="text" placeholder="Ex: AAA" />
            </div>
            <div className="thuoctinh_form">
              <p>Email</p>
              <input type="text" placeholder="Ex: aaa@gmail.com" />
            </div>
            <div className="thuoctinh_form">
              <p>Điện thoại</p>
              <input type="text" placeholder="Ex: +84 999 000-000" />
            </div>
            <div className="thuoctinh_form">
              <p>tin nhắn</p>
              <input type="text" placeholder="Viết tin nhắn cho chúng tôi..." />
            </div>
            <button className="send">Gủi thông tin</button>
          </form>
        </div>
      </div>
      <div className="map">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Contact;
