import React from "react";
import styled from "styled-components";
import TabOpen from "../img/tabicon.png";
import TabClose from "../img/tabiconclose.png";
import ToolTipPage from "./ToolTipPage";

const MainImgContainer = styled.div`
  position: relative;
`;
const MainImg = styled.img`
  width: 800px;
`;

const TabIconContainer = styled.div`
  position: absolute;
  cursor: pointer;
`;
const TabIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const TabIconClosed = styled.img`
  width: 32px;
  height: 32px;
`;

const TopPage = ({ dataLoad, currentSelected, setCurrentSelected }) => {
  return (
    <MainImgContainer>
      {dataLoad.productList.map((point, index) => {
        return (
          <TabIconContainer
            key={index}
            style={{ top: point.pointX * 1.6, left: point.pointY * 1.65565 }}
            onClick={() => {
              if (currentSelected === index + 1) {
                setCurrentSelected(0);
              } else {
                setCurrentSelected(index + 1);
              }
            }}
          >
            {currentSelected === index + 1 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
            {currentSelected === index + 1 ? <ToolTipPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></ToolTipPage> : null}
          </TabIconContainer>
        );
      })}
      <MainImg
        src={dataLoad.imageUrl}
        onClick={() => {
          setCurrentSelected(0);
        }}
      ></MainImg>
    </MainImgContainer>
  );
};
export default TopPage;
