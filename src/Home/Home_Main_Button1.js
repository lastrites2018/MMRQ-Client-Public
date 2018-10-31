import React from "react";
import { withRouter } from "react-router-dom";

const HomeMainButton1 = ({ history }) => {
  return (
    <span className="Home-main-button1">
      <button
        onClick={() => {
          console.log(history);
          history.push("/posts");
        }}
      >
        버튼1
      </button>
    </span>
  );
};

export default withRouter(HomeMainButton1);
