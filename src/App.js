import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Slider from  "react-slick";
import ReactModal from 'react-modal';

import { seeds } from "./Data/seeds"


import Card from "./Components/Card";
import Forms from "./Components/Forms";

import { colorPalette, Fonts } from "./Theme/Theme";

const SiteWrapper = styled.div`
  width: 60rem;
  margin: 4rem auto;
`;
// properly hides application from screenreaders 
// and other assistive technologies while the modal is open
// basically aria-hidden = true 
ReactModal.setAppElement('#root');

const getPortalNode = () => {
  return document.getElementById('portal');
}


function App() {
  // const [rightBtnScale, setRightBtnScale] = useState(false);
  const [data, setData] = useState({ ...seeds });
  const [dataToEdit, setdataToEdit] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings = {
    dots: true,
  };

  const handleActionButton = (id) => {
    const dataFromTheId = data.cards.filter(item => item.id === id);
    setdataToEdit({...dataFromTheId});
  }

  

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper>
        <Slider {...settings}>
        {data.cards.map(({ id, title, svg, totalData, growthRate }) => (
     
         <Card
          // isScaled={rightBtnScale}
          key={id}
          id={id}
          title={title}
          svg={svg}
          totalData={totalData}
          growthRate={growthRate}
          handleActionButton={handleActionButton}
          setIsModalOpen={setIsModalOpen}
        />  
     
        ))}

        </Slider>
        <ReactModal isOpen={isModalOpen} parentSelector={getPortalNode}>
        <Forms setIsModalOpen={setIsModalOpen}/> 
        </ReactModal>
        </SiteWrapper>
        
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
