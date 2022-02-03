import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "../img/goarrow.png";

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
  font-size: 13px;
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
  font-size: 13px;
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
  font-size: 13px;
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
  font-size: 13px;
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
  padding-bottom: 2px;
  text-align: left;
`;
const TabTitle = styled.div`
  line-height: 1.3em;
`;
const TitlePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;
const PriceDetail = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;
const PriceOutside = styled.span`
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
`;
const PriceDiscounted = styled.span`
  color: #ff585d;
  margin-right: 4px;
  line-height: 1.2em;
  font-size: 16px;
  font-weight: bold;
`;
const GoArrow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const ToolTipPage = ({ dataLoad, currentSelected }) => {
  if (currentSelected === 1) {
    return (
      <TabBoxContainerUpRight>
        <div>
          <TabBoxContainerImg src={dataLoad.productList[0].imageUrl}></TabBoxContainerImg>
        </div>
        {dataLoad.productList[0].outside === true ? (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[0].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[0].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[0].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[0].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[0].priceDiscount}</PriceDetail>
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
            <TabTitle>{dataLoad.productList[1].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[1].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[1].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[1].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[1].priceDiscount}</PriceDetail>
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
            <TabTitle>{dataLoad.productList[2].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[2].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[2].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[2].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[2].priceDiscount}</PriceDetail>
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
            <TabTitle>{dataLoad.productList[3].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[3].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[3].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[3].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[3].priceDiscount}</PriceDetail>
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
            <TabTitle>{dataLoad.productList[4].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[4].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[4].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[4].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[4].priceDiscount}</PriceDetail>
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
            <TabTitle>{dataLoad.productList[5].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[5].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[5].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[5].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[5].priceDiscount}</PriceDetail>
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
            <TabTitle>{dataLoad.productList[6].productName}</TabTitle>
            <TitlePrice>
              <PriceOutside>예상가</PriceOutside>
              <PriceDetail>{dataLoad.productList[6].priceDiscount}</PriceDetail>
            </TitlePrice>
          </TabBoxContainerText>
        ) : (
          <TabBoxContainerText>
            <TabTitle>{dataLoad.productList[6].productName}</TabTitle>
            <TitlePrice>
              <PriceDiscounted>{dataLoad.productList[6].discountRate}%</PriceDiscounted>
              <PriceDetail>{dataLoad.productList[6].priceDiscount}</PriceDetail>
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
export default ToolTipPage;
