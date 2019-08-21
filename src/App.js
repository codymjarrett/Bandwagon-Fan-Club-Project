import React, { useState } from "react";
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
  ${"" /* width: 960px; */}
  margin: auto;
  position: relative;
`;

const WidgetWrapper = styled.div``;
function App() {
  const [current, setCurrent] = useState("current");
  const [notCurrent, setNotCurrent] = useState("notCurrent");

  const runPrevButton = () => {
    
  }
  
  const runPrevButton = () => {

  }

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper className="widget-slider">
          <WidgetWrapper>
            <Card title={'Total Fans'} current={current} />
            <Card title={'Total Sales'} notCurrent={notCurrent} />
            <Card title={'Total Events'} notCurrent={notCurrent} />
            <Card title={'Active Tickets'} notCurrent={notCurrent} />
          </WidgetWrapper>

          <PrevButton />
          <NextButton />
        </SiteWrapper>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
