import React from 'react'
import './Detail.css'
import pic from '../assets/Rectangle 73.png'

const DetailServices = () => {
  return (
    <div>
       <div className='services'>
            <div className='services_content'>
            <h1>Services details</h1>
            <div className='group_content_sv'>
              <span className='border_sv'>Home</span>
              <span className='border_sv'>Our Services</span> 
              <span >service Details</span>
            </div>
            </div>
          </div>
          <div className="detaill">
            <div className="detail_group">
              <div className="detail_gr1">
                <p className='text_transform'>Dịch vụ và giải pháp</p>
                <h1>Dịch vụ Tư vấn & Đảm bảo</h1>
                <p>28-11-2022</p>
                <p>Dịch vụ đảm bảo chuyên nghiệp của AA cung cấp các phương pháp luận đồng nhất, tiếp cận kiến thức phong phú từ các chuyên gia tại công ty.</p>
              </div>
              <div className="detail_gr2">
                    <img src={pic} alt="" />
              </div>
            </div>
            <div className="detail_group_2">
              <div className="content1">
                <span>Dịch vụ đảm bảo chuyên nghiệp của AA cung cấp các phương pháp luận đồng nhất, tiếp cận kiến thức phong phú từ các chuyên gia tại công ty, kết hợp với thực tiễn thông qua cơ sở kĩ thuật toàn cầu.</span>
                <p>Đội ngũ nhân viên trên toàn quốc và tổ chức của Công ty chúng tôi cung cấp cho khách hàng dịch vụ kiểm toán hiệu quả về tình hình doanh nghiệp cho dù phạm vi quốc gia của khách hàng rộng khắp đến đâu. Các kĩ thuật kiểm toán tinh vi giúp chúng tôi đưa ra các ý kiến thiết thực, khách quan và đáng quan tâm dựa trên chất lượng của thông tin tài chính. Nhưng khi tình hình kinh doanh trở nên phức tạp và sự thay đổi diễn ra nhanh chóng, khách hàng của chúng tôi mong đợi nhiều hơn về các chuyên viên tư vấn của họ. Đó chính là lý do chúng tôi đã phát triển hơn nữa dịch vụ kiểm toán & đảm bảo để đáp ứng nhu cầu kinh doanh ngày càng đa dạng của khách hàng.</p>
                <p>Là những chuyên gia kiểm toán hàng đầu, chúng tôi kết hợp đồng nhất giữa cái nhìn độc đáo dựa trên tình hình thực tế của khách hàng, kết hợp với kiến thức chuyên môn và hiểu biết về nền kinh tế đã mang đến sự đảm bảo cao nhất cho báo cáo tài chính. Điều này có nghĩa là chúng tôi mang đến cho khách hàng cái nhìn cụ thể về tình hình kinh doanh thực tế của doanh nghiệp, và đưa ra ý kiến về các rủi ro tài chính và rủi ro kinh doanh dựa trên nguyên tắc liên tục.</p>
              </div>
              <div className="content2">
                <span>Dịch Vụ Tư Vấn & Đảm bảo</span>
                <span>Các dịch vụ thuế Việt Nam</span>
                <span>Các dịch vụ Kiểm Toán</span>

              </div>
            </div>
          </div>
    </div>
  )
}

export default DetailServices