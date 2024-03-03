import React from 'react'
import HomeHeader from "./header/HomeHeader.jsx";
import Content from "../../components/Content.jsx";

const Home = () => {

  return (
    <>
      <HomeHeader />
      <main>
        <Content />
      </main>
    </>
  )
}

export default Home;