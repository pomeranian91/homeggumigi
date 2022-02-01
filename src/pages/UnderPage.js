import React, { useEffect } from "react";
import styled from "styled-components";

const UnderImgContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;
const UnderImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 6px;
  padding: 2px;
  border-radius: 18px;
`;
const UnderImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  border: 0.5px solid white;
`;
// background = "";
const UnderPage = ({ dataLoad, currentSelected, setCurrentSelected }) => {
  const tete = () => {
    if (currentSelected === 0) {
      document.querySelector(".case").style.background = "none";
    } else if (currentSelected === 1) {
      document.querySelector(".case").style.background = "none";
      document.querySelector(".case1").style.background = "linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)";
    } else if (currentSelected === 2) {
      document.querySelector(".case2").style.background = "linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)";
      document.querySelector(".case").style.background = "none";
    } else if (currentSelected === 3) {
      document.querySelector(".case3").style.background = "linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)";
      document.querySelector(".case").style.background = "none";
    } else {
      document.querySelector(".case").style.background = "none";
    }
  };
  useEffect(() => {
    tete();
    console.log(currentSelected);
  });

  return (
    <UnderImgContainer>
      <UnderImgBox
        className="case case1"
        onClick={() => {
          if (currentSelected === 1) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(1);
          }
        }}
      >
        <UnderImg src={dataLoad.productList[0].imageUrl}></UnderImg>
      </UnderImgBox>
      <UnderImgBox
        className="case case2"
        onClick={() => {
          if (currentSelected === 2) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(2);
          }
        }}
      >
        <UnderImg src={dataLoad.productList[1].imageUrl}></UnderImg>
      </UnderImgBox>
      <UnderImgBox
        className="case case3"
        onClick={() => {
          if (currentSelected === 3) {
            setCurrentSelected(0);
          } else {
            setCurrentSelected(3);
          }
        }}
      >
        <UnderImg src={dataLoad.productList[2].imageUrl}></UnderImg>
      </UnderImgBox>
      <UnderImgBox>
        <UnderImg src={dataLoad.productList[3].imageUrl}></UnderImg>
      </UnderImgBox>
      <UnderImgBox>
        <UnderImg src={dataLoad.productList[4].imageUrl}></UnderImg>
      </UnderImgBox>
      <UnderImgBox>
        <UnderImg src={dataLoad.productList[5].imageUrl}></UnderImg>
      </UnderImgBox>
      <UnderImgBox>
        <UnderImg src={dataLoad.productList[6].imageUrl}></UnderImg>
      </UnderImgBox>
    </UnderImgContainer>
  );
};
export default UnderPage;
