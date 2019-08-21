import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Base from "./Components/Base";
import CardContainer from "./Components/CardContainer";
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

function App() {
  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper>
          <Base>
            <CardContainer />
          </Base>
          <PrevButton />
          <NextButton />
        </SiteWrapper>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
