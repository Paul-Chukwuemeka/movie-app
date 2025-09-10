import React from "react";
import Card from "./card";

const Roll = ({ data }) => {
    console.log(data)
  return (
    <div className="w-full movies flex gap-4 overflow-y-hidden overflow-x-scroll p-4 py-1">
    
      {data.map((item, i) => {
        return <Card
          image={item.poster_path}
          key={i}
          title={item.title ? item.title : item.name}
          id={item.id}
        />;
      })}
    </div>
  );
};

export default Roll;
