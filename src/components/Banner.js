import React from "react";
import "./banner.css";

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: "Data",
    };
  }
  render() {
    const { banners } = this.state;
    return (
      <div>
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "auto",
            backgroundImage: `url("https://imaginary.barta24.com/resize?width=800&quality=75&path=uploads/news/2018/Aug/28/1535473082647.jpg")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">Family</h1>

            <h1 className="banner_description">
              Messenger of Allah (peace and blessings upon him) said, “The bond
              of relationship is suspending from the Throne, and says: ‘He who
              keeps good relations with me, Allah will keep connection with him,
              but whosoever severs relations with me, Allah will sever
              connection with him.” [Al-Bukhari and Muslim]
            </h1>
          </div>
          {/* <div className="banner_fadeBottom"></div> */}
        </header>
      </div>
    );
  }
}

export default Banner;
