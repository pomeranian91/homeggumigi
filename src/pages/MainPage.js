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

  useEffect(() => {
    const ggumigiApi = () => {
      axios
        .get("//cdn.ggumim.co.kr/test/image_product_link.json")
        .then((response) => {
          setDataLoad(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    ggumigiApi();
  }, []);

  return (
    <Container>
      {dataLoad.productList && <TopPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} />}
      {dataLoad.productList && <UnderPage dataLoad={dataLoad} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} />}
    </Container>
  );
};
export default MainPage;
