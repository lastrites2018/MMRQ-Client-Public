import React from 'react';

const Main = ({match}) => {
  return (
    <div>
      {match.params.username}의 소개
    </div>
  );
};

export default Main;