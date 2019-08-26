import React, { useState } from "react";
import styled from "styled-components";

const Forms = ({ setIsModalOpen, dataToEdit, setdataToEdit }) => {
  const [prevMonthData, setPrevMonthData] = useState();
  const [currentMonthData, setCurrentMonthData] = useState();
  const [isBothFormsEmpty, setIsBothFormsEmpty] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (prevMonthData || currentMonthData === "") {
      return;
    }
    takeOldDataAndReplaceWithNewData();
  };

  const handleOnChange = e => {
    const { value, name } = e.target;
    name === "previousMonth"
      ? setPrevMonthData(value)
      : setCurrentMonthData(value);
  };

  const takeOldDataAndReplaceWithNewData = () => {
    const truncatedDataFormat = transformNewInputIntoSpecialFormat(
      currentMonthData
    );
    if(truncatedDataFormat){
        setdataToEdit(prevState => (prevState[0].totalData = truncatedDataFormat));
        setIsModalOpen(false);
    } else {
        setIsBothFormsEmpty(true);
    }
  };

  const transformNewInputIntoSpecialFormat = string => {
    if (string) {
      const array = string.split("");
      const numArray = [];
      array.forEach(string => numArray.push(parseInt(string)));
      let formatted = "";

      if (numArray.length === 7) {
        if (numArray[1] < 1) {
          formatted = `${numArray[0]}mil`;
          console.log("hit length of 7 if");
        } else {
          formatted = `${numArray[0]}.${numArray[1]}mil`;
          console.log("hit length of 7 else");
        }
      } else if (numArray.length === 6) {
        if (numArray[3] < 1) {
          formatted = `${numArray[0]}${numArray[1]}${numArray[2]}k`;
        } else {
          formatted = `${numArray[0]}${numArray[1]}${numArray[2]}.${
            numArray[3]
          }k`;
        }
      } else if (numArray.length === 5) {
        if (numArray[2] < 1) {
          formatted = `${numArray[0]}${numArray[1]}k`;
        } else {
          formatted = `${numArray[0]}${numArray[1]}.${numArray[2]}k`;
        }
      } else if (numArray.length === 4) {
        if (numArray[1] < 1) {
          formatted = `${numArray[0]}k`;
        } else {
          formatted = `${numArray[0]}.${numArray[1]}k`;
        }
      } else {
        formatted = `${numArray.join("")}`;
      }

      return formatted;
    } 
  };

//   const calculateGrowthThisMonth = () => {};

  return (
    <form>
      <div>
        <label>Previous Month</label>
        <input
          type="text"
          name="previousMonth"
          onChange={handleOnChange}
          placeholder="numbers only, no commas"
        />
      </div>
      <div>
        <label>Current Month</label>
        <input
          type="text"
          name="currentMonth"
          onChange={handleOnChange}
          placeholder="numbers only, no commas"
        />
      </div>
      <input
        type="submit"
        onClick={e => {
          handleFormSubmit(e);
        }}
      />
      {isBothFormsEmpty && (
          <div>Both Forms are empty, add something </div>
      )}
    </form>
  );
};

export default Forms;
