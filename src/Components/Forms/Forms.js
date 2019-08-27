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

import {  calculateGrowthThisMonth, takeOldDataAndReplaceWithNewData } from "./Forms.logic";

const Forms = ({ setIsModalOpen, id, data, setData }) => {
  const formData = {};
  const [isBothFormsEmpty, setIsBothFormsEmpty] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    const formattedData = takeOldDataAndReplaceWithNewData(formData, setIsModalOpen);
    const [gain, gainOrLoss] = calculateGrowthThisMonth(formData);
    const percentageFormat = `${gainOrLoss.toFixed()}%`;

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
