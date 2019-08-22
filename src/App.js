import React, { useState, useEffect } from "react";
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
  const [activeCard, setActiveCard] = useState([]);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      svg:
        "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
      title: "Total Fans",
      data: "21.2k",
      growthRate: "112.71%",
      // isCurrent: !isCardCurrent
    },
    {
      id: 2,
      svg:
        "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
      title: "Total Events",
      data: "15",
      growthRate: null,
      // isCurrent: isCardCurrent
    },
    {
      id: 3,
      svg:
        "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
      title: "Total Sales",
      data: "38.6k",
      growthRate: "34.47%",
      // isCurrent: isCardCurrent
    },
    {
      id: 4,
      svg:
        "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
      title: "Active Tickets",
      data: "958",
      growthRate: "23.59%",
      // isCurrent: isCardCurrent
    }
  ]);

  useEffect(() => {
    // const initialObjectWithIsCurrent = data.filter(i => i.isCurrent);
    // console.log(initialObjectWithIsCurrent)
    // console.log(data[0])
    // setActiveCard(initialObjectWithIsCurrent)
    // setActiveCard(data[0]);

    // const something = data.slice(0, 1);
    // console.log(something);
    // setActiveCard(something);
    // setActiveCard(data)


    console.log(data)
  }, []);

  // let cardsRef = useRef();
  // cards[cards.lenth - 1];
  // const [notCurrent, setNotCurrent] = useState("notCurrent");

  const runPrevButton = () => {

    console.log(activeCard);

    const resetToVeryBack = currentCardIdx === 0; 
   const index = resetToVeryBack ? data.length - 1 : currentCardIdx - 1;


    

    


    // const resetToVeryBack = currentCardIdx === 0;
    // const index = resetToVeryBack ? data.length - 1 : currentCardIdx - 1;
    // setCurrentCardIdx(index);
    // // setActiveCard(data[index]);
    // console.log(activeCard)
    // setActiveCard(data[2])
    // console.log(data);
    // const allNotIsCurrent = data.filter(i => !i.isCurrent);
    // console.log(allNotIsCurrent)
    // const position = data.findIndex(i => i.isCurrent);
    // if(position === 0){
    //   const nextCard = data[data.length - 1];
    //   setActiveCard(nextCard);
    // } else {
    //   const nextCard = data[position - 1];
    //   setActiveCard(nextCard)
    // }
    // const objectWithIsCurrent = data[position];
    // console.log(objectWithIsCurrent)
    // console.log(position);
    // data.map((i, item) => {
    // });
    // data.map((item, idx) => {
    //   const currentPosition = item[position];
    //   console.log(currentPosition)
    //   console.log('item', item[idx])
    // });
    // data.map((item, index) => {
    //   if (position === 0) {
    //     nextCard = item[data.length - 1];
    //     setData(data => ({...data, nextCard: { isCurrent: true}, position: {isCurrent: false}}))
    //   }
    // });
    //  data.map((item, index) => {
    //    let nextCard = null;
    //    data.map((item, index)=> {
    //     if(item.indexOf(is)){
    //       nextCard = item[data.length - 1];
    //       // setData(data => ({...data, item[nextCard]: isCurrent :fa}))
    //     }
    //    });
    //  });
  };

  const runNextButton = () => {
    



  };

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper>
          <WidgetWrapper className="widget-slider">
            {data.map(({ id, title, svg, data, growthRate }) => (
              <Card
                key={id}
                title={title}
                svg={svg}
                data={data}
                growthRate={growthRate}
              />
            ))}
          </WidgetWrapper>

          <PrevButton handlePrevButton={runPrevButton} />
          <NextButton handleNextButton={runNextButton} />
        </SiteWrapper>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
