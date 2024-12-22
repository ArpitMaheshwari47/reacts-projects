import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Soccer",
  "Monks",
  "ReadingBook",
  "Awesomw",
  "akshay Saini",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
