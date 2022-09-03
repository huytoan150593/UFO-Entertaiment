import React from "react";
import "./Producer.css";

const Producer = () => {
  return (
    <div id="producer">
      <div className="page-header section-dark">
        <div className="filter"></div>
        <div className="myTeam-container">
          <div id="producer-img">
            <img src="/assets/producer.jpg" alt="" />
          </div>
          <div className="producer-detail">
            <h1>
              Director - Producer:
              <br />
              &#8608; Luan Minh
            </h1>
            <p>
              Sáng lập UFO Entertainment. Đam mê theo đuổi con đường nghệ thuật
              từ năm 2013. Đến 2021 đã tham gia rất nhiều dự án film, TVC, viral
              trong và ngoài nước ( Siêu Trộm, Truy Sát, Song Lang, Mắt Biếc,
              This is Us, Artemis Fowl,...) với nhiều vị trí (PM,AD, Producer,
              Camera man...) Không ngừng sáng tạo, tiếp thu hướng tới những cái
              mới để tạo ra những sản phẩm tuyệt vời.
            </p>
          </div>
        </div>
        <div className="moving-clouds"></div>
      </div>
    </div>
  );
};

export default Producer;
