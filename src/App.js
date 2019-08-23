import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import Card from "./Components/Card";
import NextButton from "./Components/NextButton";
import PrevButton from "./Components/PrevButton";

import { colorPalette, Fonts } from "./Theme/Theme";

const SiteWrapper = styled.div`
  width: 960px;
  margin: 4rem auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  const [rightBtnScale, setRightBtnScale] = useState(false);
  const [data, setData] = useState({
    activeCard: {
      id: 1,
      svg:
        "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
      title: "Total Fans",
      data: "21.2k",
      growthRate: "112.71%"
    },
    cards: [
      {
        id: 1,
        svg:
          "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        title: "Total Fans",
        data: "21.2k",
        growthRate: "112.71%"
      },
      {
        id: 2,
        svg:
          "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        title: "Total Events",
        data: "15",
        growthRate: null
      },
      {
        id: 3,
        svg:
          "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        title: "Total Sales",
        data: "38.6k",
        growthRate: "34.47%"
      },
      {
        id: 4,
        svg:
          "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        title: "Active Tickets",
        data: "958",
        growthRate: "23.59%"
      }
    ]
  });

  const runPrevButton = () => {
    //  get the zero-th index of the activeCard object - which should always be the index of the current card
    const index = data.activeCard.id - 1;
    // calculate the length of the cards array
    const length = data.cards.length - 1;
    // set the activeCard variable
    let activeCard;

    // if index is 0 (at the beginning of the array) - which is true at the start of the app
    index === 0
      ? // activeCard = last card in the array
        (activeCard = data.cards[length])
      : //  else activeCard = previous card in the array
        (activeCard = data.cards[index - 1]);

    // set state based on the conditional
    setData(prevData => {
      return { ...prevData, activeCard };
    });
  };

  const runNextButton = () => {
    setRightBtnScale(!rightBtnScale);

    //  get the zero-th index of the activeCard object - which should always be the index of the current card
    const index = data.activeCard.id;
    // set the activeCard variable to the card in data with the index of the activeCard
    // (the next card after the activeCard in the data array)
    let activeCard = data.cards[index];

    // if activeCard is the last card in the array the next index will return undefined
    if (activeCard === undefined) {
      // then set activeCard to the first index of the array
      activeCard = data.cards[0];
    }
    // set state based on the conditional
    setData(prevData => {
      return { ...prevData, activeCard };
    });
  };

  const { id, title, svg, growthRate } = data.activeCard;

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper>
          <PrevButton handlePrevButton={runPrevButton} />
          <Card
            isScaled={rightBtnScale}
            key={id}
            title={title}
            svg={svg}
            data={data.activeCard.data}
            growthRate={growthRate}
          />
          <NextButton handleNextButton={runNextButton} />
        </SiteWrapper>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
