import React, { useState } from "react";
import styled from "styled-components";

const Forms = ({ setIsModalOpen, thisTotalData, id, data, setData }) => {
  const formData = {};
  const [prevMonthData, setPrevMonthData] = useState(null);
  const [currentMonthData, setCurrentMonthData] = useState(null);
  const [isBothFormsEmpty, setIsBothFormsEmpty] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    const formattedData = takeOldDataAndReplaceWithNewData();
    const [gain, gainOrLoss] = calculateGrowthThisMonth();
    const percentageFormat = `${gainOrLoss}%`;
// refactor
    const currentCard = data.cards[id];
    currentCard.totalData = formattedData;
    currentCard.growthRate.growthGain = gain;
    currentCard.growthRate.growthData = percentageFormat;

    setData(prevState => {
      let newState = prevState;
      // maybe set to variable 
       let cards = newState.cards.splice(id, 1, currentCard);
       //copy 
      // let cards = newState.cards;
      return { ...prevState, cards }
    });
    if (gain) {
      
      
    }
    // setIsModalOpen(false)
  };

  const handleOnChange = e => {
    const { value, name } = e.target;
    formData[name] = value;
  };

  const takeOldDataAndReplaceWithNewData = () => {
    const truncatedDataFormat = transformNewInputIntoSpecialFormat(
      formData.currentMonth
    );
    if (truncatedDataFormat) {
      console.log(truncatedDataFormat);
      
      setIsModalOpen(false);
      return(truncatedDataFormat);
    } else {
      setIsBothFormsEmpty(true);
    }
  };

  const transformNewInputIntoSpecialFormat = string => {
    // function that's the current money value and formats it to UI
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

  const calculateGrowthThisMonth = () => {
    const prevMonth = formData.previousMonth;
    const currentMonth = formData.currentMonth;
    let gain;

    const gainOrLoss = ((currentMonth - prevMonth) / prevMonth) * 100;
    if (gainOrLoss > 0) {
      gain = true;
    } else if (gainOrLoss < 0) {
      gain = false;
    }
    return [gain, gainOrLoss];
  };

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
      {/* {isBothFormsEmpty && <div>Both Forms are empty, add something </div>} */}
    </form>
  );
};

export default Forms;
