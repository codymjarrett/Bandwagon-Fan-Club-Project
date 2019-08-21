import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import Card from "./Components/Card";
import NextButton from "./Components/NextButton";
import PrevButton from "./Components/PrevButton";

const colorPalette = {
  $Primary: "#FF5800",
  $PrimaryVariant: "#FF9B66",
  $Black: "101010",
  $Blue: "#00A6FF",
  $White: "#fff",
  $Grey: "#929292",
  $Green: "#24DA24"
};

const Fonts = {
  $Futura: "Futura",
  $SourceSansPro: "Source Sans Pro"
};

const SiteWrapper = styled.div`
  width: 960px; 
  margin: auto;
  position: relative;
`;

const WidgetWrapper = styled.div`
position: relative;
height: 500px;
`;
function App() {
  const [current, setCurrent] = useState(true);
  let cardsRef = useRef();

  // const [notCurrent, setNotCurrent] = useState("notCurrent");

  const runPrevButton = () => {
    console.log(cardsRef.current.children)

    // grab all the cards 
    // get card with class name of current
    const current = document.querySelector('.current');
    // remove that class name
    current.classList.remove('current');
    // check for next card
    if(current.previousElementSibling){
      // add current class to next sibling
      current.previousElementSibling.classList.add('current')
    } else {
      // if at the last card, add current class to the first card to start over
      cardsRef.current.children[cardsRef.current.children.length - 1 ].classList.add('current');
    }
  }

  const runNextButton = () => {
    console.log(cardsRef.current.children)

    // grab all the cards 
    // get card with class name of current
    const current = document.querySelector('.current');
    // remove that class name
    current.classList.remove('current');
    // check for next card
    if(current.nextElementSibling){
      // add current class to next sibling
      current.nextElementSibling.classList.add('current')
    } else {
      // if at the last card, add current class to the first card to start over
      cardsRef.current.children[0].classList.add('current');
    }

  }

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper >
          <WidgetWrapper className="widget-slider" ref={cardsRef}>
            <Card title={'Total Fans'} current={current} />
            <Card title={'Total Sales'} current={false} />
            <Card title={'Total Events'} current={false} />
            <Card title={'Active Tickets'} current={false} />
          </WidgetWrapper>

          <PrevButton handlePrevButton={runPrevButton}/>
          <NextButton handleNextButton={runNextButton}/>
        </SiteWrapper>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
