import React from "react";
import PropTypes from "prop-types";
import Star from "../Star";
import uuid from "react-uuid";

export default function Stars({ count }) {
  let arr = [];

  function countLoop() {
    while (count > 0) {
      arr.push("star");
      count--;
    }
  }

  return (
    <div className="container">
      {countLoop()}
      <ul className="row" style={{ display: "flex" }}>
        {arr.map((item) => (
          <li style={{ listStyle: "none" }} key={uuid()} className="col">
            <Star />
          </li>
        ))}
      </ul>
    </div>
  );
}

Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 1,
};
