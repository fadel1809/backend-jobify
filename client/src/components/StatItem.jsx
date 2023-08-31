/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Wrapper from "../assets/wrappers/StatItem.js";
const StatItem = ({ count, color, bcg, title, icon }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count} </span>
        <span className="icon">{icon} </span>
      </header>
      <h5 className="title">{title} </h5>
    </Wrapper>
  );
};
export default StatItem;
