import React, { useEffect } from "react";
import styled from "styled-components";

const UnderImgContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;
const UnderImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 28px 6px;
  padding: 2px;
  border-radius: 18px;
  cursor: pointer;
`;
const UnderDiscount = styled.div`
  position: absolute;
  top: 1px;
  right: 13px;
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;
const UnderImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  }
`;

const UnderPage = ({ dataLoad, currentSelected, setCurrentSelected }) => {
  const selectedImg = ["case1", "case2", "case3", "case4", "case5", "case6", "case7"];
  const underLineColor = () => {
    {
      selectedImg.map((className, index) => {
        if (currentSelected === index + 1) {
          document.querySelector(`.${className}`).style.background = "linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)";
        } else {
          document.querySelector(`.${className}`).style.background = "none";
        }
      });
    }
  };

  useEffect(() => {
    underLineColor();
  });

  return (
    <UnderImgContainer>
      {selectedImg.map((className, index) => {
        return (
          <UnderImgBox
            key={index}
            className={className}
            onClick={() => {
              if (currentSelected === index + 1) {
                setCurrentSelected(0);
              } else {
                setCurrentSelected(index + 1);
              }
            }}
          >
            {dataLoad.productList[index].discountRate > 0 ? <UnderDiscount>{dataLoad.productList[index].discountRate}%</UnderDiscount> : null}
            <UnderImg src={dataLoad.productList[index].imageUrl}></UnderImg>
          </UnderImgBox>
        );
      })}
    </UnderImgContainer>
  );
};
export default UnderPage;
