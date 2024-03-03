import React from "react";
import Banner from "./Banner.jsx";
import DemoHeader from "./DemoHeader.jsx";
import Content from "../../components/Content.jsx";

const Demo = () => {
  return (
    <>
      <DemoHeader/>
      <main>
        <Banner/>
        <Content />
      </main>
    </>
  );
};

export default Demo;