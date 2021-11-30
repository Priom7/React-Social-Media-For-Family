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
            backgroundImage: `url("https://i.pinimg.com/564x/0f/7c/55/0f7c55d655a049c80032552267343613.jpg")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">Family</h1>

            <h1 className="banner_description">
              Family
            </h1>
          </div>
          {/* <div className="banner_fadeBottom"></div> */}
        </header>
      </div>
    );
  }
}

export default Banner;
