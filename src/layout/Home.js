import React from 'react';

const baseUrl = process.env.REACT_APP_Server_IP;
    console.log("baseUrl" + baseUrl)

const Home = () => {
  return (
    <div>
      홈 화면 입니다.
    </div>
  );
};

export default Home;