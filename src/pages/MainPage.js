import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TopPage from "./TopPage";
import UnderPage from "./UnderPage";

const Container = styled.div`
  width: 800px;
  margin: auto;
  padding: 40px 0;
`;

const MainPage = () => {
  const [dataLoad, setDataLoad] = useState([]);
  const [currentSelected, setCurrentSelected] = useState(0);
  const showContect1 = () => {
    if (currentSelected === 1) {
      setCurrentSelected(0);
    } else {
      setCurrentSelected(1);
    }
  };
  useEffect(() => {
    axios.get("//cdn.ggumim.co.kr/test/image_product_link.json").then((response) => {
      setDataLoad(response.data).catch(() => {
        console.log("로딩 실패");
      });
    });
  }, []);

  return (
    <Container>
      <div>test</div>
      <TopPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></TopPage>
      <UnderPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected}></UnderPage>
    </Container>
  );
};
export default MainPage;
