import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "../img/goarrow.png";
import TextArrow from "../img/textboxarrow.png";

const TabBoxContainerDown = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 28px;
  left: -20px;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  z-index: 5;
  & :before {
    content: "";
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 6;
  }
`;
const TabBoxContainerUpRight = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: unset;
  left: -20px;
  bottom: 52px;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  z-index: 5;
  & :before {
    content: "";
    position: absolute;
    top: unset;
    bottom: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 6;
    transform: rotate(180deg);
  }
`;
const TabBoxContainerUpLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: unset;
  left: -160px;
  bottom: 52px;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  z-index: 5;
  & :before {
    content: "";
    position: absolute;
    top: unset;
    left: unset;
    right: 34px;
    bottom: -8px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 6;
    transform: rotate(180deg);
  }
`;
const TabBoxContainerDownLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 28px;
  left: -160px;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 7px;
  z-index: 5;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  & :before {
    content: "";
    position: absolute;
    top: -8px;
    left: unset;
    right: 34px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 6;
  }
`;
const TabBoxContainerImg = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 8px;
`;
const TabBoxContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TitlePrice = styled.div`
  display: flex;
`;
const GoArrow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const TabPage = ({ dataLoad, currentSelected, setCurrentSelected }) => {
  if (currentSelected === 1) {
    return (
      <TabBoxContainerUpRight>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[0].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[0].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[0].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[0].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[0].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[0].discountRate}%</p>
              <p>{dataLoad.productList[0].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerUpRight>
    );
  } else if (currentSelected === 2) {
    return (
      <TabBoxContainerUpRight>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[1].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[1].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[1].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[1].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[1].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[1].discountRate}%</p>
              <p>{dataLoad.productList[1].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerUpRight>
    );
  } else if (currentSelected === 3) {
    return (
      <TabBoxContainerDown>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[2].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[2].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[2].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[2].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[2].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[2].discountRate}%</p>
              <p>{dataLoad.productList[2].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerDown>
    );
  } else if (currentSelected === 4) {
    return (
      <TabBoxContainerDown>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[3].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[3].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[3].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[3].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[3].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[3].discountRate}%</p>
              <p>{dataLoad.productList[3].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerDown>
    );
  } else if (currentSelected === 5) {
    return (
      <TabBoxContainerDownLeft>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[4].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[4].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[4].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[4].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[4].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[4].discountRate}%</p>
              <p>{dataLoad.productList[4].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerDownLeft>
    );
  } else if (currentSelected === 6) {
    return (
      <TabBoxContainerUpLeft>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[5].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[5].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[5].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[5].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[5].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[5].discountRate}%</p>
              <p>{dataLoad.productList[5].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerUpLeft>
    );
  } else if (currentSelected === 7) {
    return (
      <TabBoxContainerDown>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[6].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[6].outside === true ? (
          <TabBoxContainerText>
            <div>{dataLoad.productList[6].productName}</div>
            <TitlePrice>
              <p>예상가</p>
              <p>{dataLoad.productList[6].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <div>{dataLoad.productList[6].productName}</div>
            <TitlePrice>
              <p>{dataLoad.productList[6].discountRate}%</p>
              <p>{dataLoad.productList[6].priceDiscount}</p>
            </TitlePrice>
          </TabBoxContainerText>
        )}
        <GoArrow>
          <img src={Arrow} style={{ width: "20px", height: "20px" }}></img>
        </GoArrow>
      </TabBoxContainerDown>
    );
  } else {
    return null;
  }
};
export default TabPage;
