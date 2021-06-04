import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname); 

const App = () => {
  return (
    <>
      <h1 className="heading_style"> List of top 5 Netflix Series in 2020 </h1>

      <Card
        sname={Sdata[0].sname}
        imgscr={Sdata[0].imgscr}
        title={Sdata[0].title}
        links={Sdata[0].links}
      />
      <Card
        sname={Sdata[1].sname}
        imgscr={Sdata[1].imgscr}
        title={Sdata[1].title}
        links={Sdata[1].links}
      />
      <Card
        sname={Sdata[2].sname}
        imgscr={Sdata[2].imgscr}
        title={Sdata[2].title}
        links={Sdata[2].links}
      />
      <Card
        sname={Sdata[3].sname}
        imgscr={Sdata[3].imgscr}
        title={Sdata[3].title}
        links={Sdata[3].links}
      />
      <Card
        sname={Sdata[4].sname}
        imgscr={Sdata[4].imgscr}
        title={Sdata[4].title}
        links={Sdata[4].links}
      />
    </>
  );
};

export default App;