import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import "./home.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame (1).png";
import Frame2 from "../assets/Frame (2).png";
import Gr1 from "../assets/Rectangle 64.png";
import Gr2 from "../assets/Rectangle 64 (1).png";
import Gr3 from "../assets/Rectangle 64 (2).png";
import Gr4 from "../assets/Logo 5.png";
import ic from "../assets/Icon.png";
import ic2 from "../assets/Icon (1).png";
import ic3 from "../assets/Icon (2).png";

const Home = () => {
  return (
    <div>
      <div className="home_content">
        <div className="content">
          <div className="arrow">
            <IoArrowBackOutline size={30} />
          </div>
          <div className="contentt">
            <h1>American Auditing</h1>
            <p>
              American Auditing (AA) activities throughout Viet Nam, with head
              office in Ho Chi Minh, Hanoi Branch and offices in Da Nang and Can
              Tho
            </p>
            <span className="more">Xem Thêm</span>
          </div>
        </div>
      </div>
      <div className="vode">
        <div className="vode_content">
          <img className="pic1" src={pic1} alt="" />
          <p>
            Our business philosophy in Vietnam is simple - We want to be the
            market leader in terms of client service
          </p>
          <img className="pic2" src={pic2} alt="" />
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
      <div className="doanh_nghiep">
        <div className="news_doanhnghiep">
          <span>News</span>
          <h1>tư vấn doanh nghiệp</h1>
        </div>
        <div className="group_tuvann">
          <div className="group_tuvan">
            <img src={Gr1} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr2} alt="" />
            <p>October 12, 2024</p>
            <h3>Thúc đẩy tăng trưởng</h3>
            <span>
              Tại Việt Nam, chúng tôi được công nhận là công ty hàng đầu trong
              việc cung cấp các dịch vụ tư vấn ch...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr3} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr1} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr1} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr1} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr1} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
          <div className="group_tuvan">
            <img src={Gr1} alt="" />
            <p>October 12, 2024</p>
            <h3>Tư vấn DNNN</h3>
            <span>
              Tư vấn Doanh nghiệp Việt Nam và Doanh nghiệp Nhà nước AA có một
              đội ngũ tư vấn dành riêng cho Doanh n...
            </span>
          </div>
        </div>
      </div>
      <div className="logo_mid">
        <img src={Gr4} alt="" />
        <img src={Gr4} alt="" />
        <img src={Gr4} alt="" />
        <img src={Gr4} alt="" />
        <img src={Gr4} alt="" />
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
  );
};

export default Home;
