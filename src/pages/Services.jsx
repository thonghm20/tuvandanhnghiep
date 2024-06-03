import React from 'react'
import './services.css'
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame (1).png";
import Frame2 from "../assets/Frame (2).png";
import ic from "../assets/Icon.png";
import ic2 from "../assets/Icon (1).png";
import ic3 from "../assets/Icon (2).png";
const Services = () => {
  return (
    <div >
        <div>
          <div className='services'>
            <div className='services_content'>
            <h1>Our Services</h1>
            <div className='group_content_sv'>
              <span className='border_sv'>Home</span>
              <span >Our Services</span>
            </div>
            </div>
          </div>
        </div>
        <div className="out_services">
        <div className="out_services_content">
          <span>Our Services</span>
          <h1>dịch vụ và giải pháp</h1>
        </div>
        <div className="out_services_group">
          <div className="group_one">
            <img src={Frame} alt="" />
            <h3>Các dịch vụ thuế Việt Nam</h3>
            <p>
              Tất cả các vấn đề về thuế của khách hàng thuộc AA đều được chuyên
              gia thuế giàu kinh nghiệm của chúng
            </p>
          </div>
          <div className="group_one">
            <img src={Frame1} alt="" />
            <h3>Các Dịch Vụ Kiểm Toán</h3>
            <p>
              Kiểm toán và thẩm định là một bộ phận chủ yếu trong hoạt động của
              chúng tôi.Nguyên lý kiểm toán của...
            </p>
          </div>
          <div className="group_one">
            <img src={Frame2} alt="" />
            <h3>Dịch Vụ Tư Vấn & Đảm bảo</h3>
            <p>
              Dịch vụ đảm bảo chuyên nghiệp của AA cung cấp các phương pháp luận
              đồng nhất, tiếp cận kiến thức pho...
            </p>
          </div>
          <div className="group_one">
            <img src={Frame2} alt="" />
            <h3>Các dịch vụ thuế Việt Nam</h3>
            <p>
              Tất cả các vấn đề về thuế của khách hàng thuộc AA đều được chuyên
              gia thuế giàu kinh nghiệm của chúng
            </p>
          </div>
          <div className="group_one">
            <img src={Frame1} alt="" />
            <h3>Các Dịch Vụ Kiểm Toán</h3>
            <p>
              Kiểm toán và thẩm định là một bộ phận chủ yếu trong hoạt động của
              chúng tôi.Nguyên lý kiểm toán của...
            </p>
          </div>
          <div className="group_one">
            <img src={Frame} alt="" />
            <h3>Các dịch vụ thuế Việt Nam</h3>
            <p>
              Tất cả các vấn đề về thuế của khách hàng thuộc AA đều được chuyên
              gia thuế giàu kinh nghiệm của chúng
            </p>
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
    </div>
  )
}

export default Services