import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const Mypage = () => {
  return (
    <div>
      {
        !logged && <Redirect to="/login"/>
      }
    </div>
  );
};

export default Mypage;