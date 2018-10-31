import React from "react";
import { withRouter } from "react-router-dom";

const HomeMainButton2 = ({ history }) => {
  return (
    <span className="Home-main-button2">
      <button
        onClick={() => {
          history.push("/search");
        }}
      >
        버튼2
      </button>
    </span>
  );
};

export default withRouter(HomeMainButton2);
