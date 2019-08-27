import React, { useState } from "react";

import {
  Header,
  HeaderWrapper,
  Exit,
  Form,
  InputWrapper,
  FormInput,
  FormSubmitButton,
  FormLabel
} from "./Forms.style";

const Forms = ({ setIsModalOpen, id, data, setData }) => {
  const formData = {};
  const [isBothFormsEmpty, setIsBothFormsEmpty] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    const formattedData = takeOldDataAndReplaceWithNewData();
    const [gain, gainOrLoss] = calculateGrowthThisMonth();
    const percentageFormat = `${gainOrLoss.toFixed()}%`;

    // refactor

    if (gain && formattedData) {
      const currentCard = data.cards[id];
      currentCard.totalData = formattedData;
      currentCard.growthRate.growthGain = gain;
      currentCard.growthRate.growthData = percentageFormat;

      setData(prevState => {
        let newState = prevState;
        // let cards = newState.cards.splice(id, 1, currentCard);
        //copy of state
        return { ...prevState, newState };
      });
    } else {
      setIsBothFormsEmpty(true);
      return;
    }
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
      setIsModalOpen(false);
      return truncatedDataFormat;
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
        } else {
          formatted = `${numArray[0]}.${numArray[1]}mil`;
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
    <Form>
      <HeaderWrapper>
        <Header>Enter new values below</Header>
        <Exit onClick={() => setIsModalOpen(false)}>x</Exit>
      </HeaderWrapper>
      <InputWrapper>
        <FormLabel>Previous Month (numbers only)</FormLabel>
        <FormInput
          type="text"
          name="previousMonth"
          onChange={handleOnChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <FormLabel>Current Month (numbers only)</FormLabel>
        <FormInput
          type="text"
          name="currentMonth"
          onChange={handleOnChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <FormSubmitButton
          type="submit"
          onClick={e => {
            handleFormSubmit(e);
          }}
        />
      </InputWrapper>
      {isBothFormsEmpty && <div>One or more inputs is empty!</div>}
    </Form>
  );
};

export default Forms;
