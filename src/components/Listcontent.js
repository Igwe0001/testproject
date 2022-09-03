import React from "react";
import List from "../subcomponents/List";
import ayo from "../assets/ayo.svg";
import toke from "../assets/toke.svg";
import david from "../assets/david.svg";
import ebube from "../assets/ebube.svg";
import falz2 from "../assets/falz-2.svg";

const Listcontent = () => {
  return (
    <div className="overflow-hidden">
      <ul className="flex justify-between min-w-[1215px]">
        <List
          src={toke}
          h1="Toke Makinwa"
          p="Actor and influencer"
          span={`${"\u20A6"}20+`}
        />
        <List
          src={ayo}
          h1="Ayodeji Balogun"
          p="Musician"
          span={`${"\u20A6"}50+`}
        />
        <List
          src={david}
          h1="David Adeleke"
          p="Musician"
          span={`${"\u20A6"}50+`}
        />
        <List
          src={ebube}
          h1="Ebuka Obi-Uchendu"
          p="Influencer"
          span={`${"\u20A6"}20+`}
        />
        <List
          src={falz2}
          h1="Folarin Falana"
          p="Influencer"
          span={`${"\u20A6"}20+`}
        />
      </ul>
    </div>
  );
};

export default Listcontent;
