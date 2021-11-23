import React from "react";
import CountUp from "react-countup";
import "./MemberCount.css";

class MemberCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_count: 10000,
    };
  }
  render() {
    const { customer_count } = this.state;

    return (
      <div className="customer">
        <div className="customer__total">
          <h1 className="customer__totalTitle">Family Members</h1>
          <h3 className="customer__totalNumber">
            <CountUp start={0} end={10000} duration={2}></CountUp>
          </h3>
        </div>
      </div>
    );
  }
}

export default MemberCount;
