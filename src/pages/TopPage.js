import React, { useState } from "react";
import styled from "styled-components";
import TabOpen from "../img/tabicon.png";
import TabClose from "../img/tabiconclose.png";
import TabPage from "./TabPage";

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
      {/* 1번 */}
      <TabIconContainer
        style={{ right: dataLoad.productList[0].pointX, bottom: dataLoad.productList[0].pointY }}
        onClick={() => {
          if (currentSelected === 1) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(1);
          }
        }}
      >
        {currentSelected === 1 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 1 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>
      {/* 2번 */}
      <TabIconContainer
        style={{ top: "510.4px", left: "284.067px" }}
        onClick={() => {
          if (currentSelected === 2) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(2);
          }
        }}
      >
        {currentSelected === 2 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 2 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>
      {/* 3번 */}
      <TabIconContainer
        style={{ top: "460.8px", left: "154.467px" }}
        onClick={() => {
          if (currentSelected === 3) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(3);
          }
        }}
      >
        {currentSelected === 3 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 3 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>
      {/* 4번 */}
      <TabIconContainer
        style={{ top: "240px", left: "333.667px" }}
        onClick={() => {
          if (currentSelected === 4) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(4);
          }
        }}
      >
        {currentSelected === 4 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 4 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>
      {/* 5번 */}
      <TabIconContainer
        style={{ top: "328px", left: "720.867px" }}
        onClick={() => {
          if (currentSelected === 5) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(5);
          }
        }}
      >
        {currentSelected === 5 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 5 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>
      {/* 6번 */}
      <TabIconContainer
        style={{ top: "564.8px", left: "444.034px" }}
        onClick={() => {
          if (currentSelected === 6) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(6);
          }
        }}
      >
        {currentSelected === 6 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 6 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>
      {/* 7번 */}
      <TabIconContainer
        style={{ top: "275.2px", left: "199.267px" }}
        onClick={() => {
          if (currentSelected === 7) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(7);
          }
        }}
      >
        {currentSelected === 7 ? <TabIconClosed src={TabClose}></TabIconClosed> : <TabIcon src={TabOpen}></TabIcon>}
        {currentSelected === 7 ? <TabPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TabPage> : null}
      </TabIconContainer>

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
