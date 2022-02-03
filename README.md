

# 🚀 "집꾸미기" 개인과제

- 배포 사이트 :https://pomeranian91.github.io/homeggumigi
- Front-end: 조용우

## 📆 개발 기간

- 기간: 2022년 02월 01일 ~ 2021년 02월 03일(3일간)

## 🛠 적용 기술

- Front-end : React(Funiction-Component)_reactr-router-dom(V6), styled-components, JavaScript(ES6)

## 🕹 설치 및 시작하는 법

1. git clone
2. npm install
3. npm run start

## 📃 프로젝트 구조
  📦src
 ┣ 📂img
 ┃ ┣ 📜goarrow.png
 ┃ ┣ 📜tabicon.png
 ┃ ┣ 📜tabiconclose.png
 ┃ ┗ 📜textboxarrow.png
 ┣ 📂pages
 ┃ ┣ 📜MainPage.js
 ┃ ┣ 📜ToolTipPage.js
 ┃ ┣ 📜TopPage.js
 ┃ ┗ 📜UnderPage.js
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.js
 ┗ 📜index.js
 
##✔ 구현 기능
- 사진과 가구에 대한 정보를 API를 통해서 호출하여 사용
  - axios를 사용하여 받아온 값을 state에 저장하여 사용
- 기능설명
  - 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
  - 집꾸미기 사이트에서 돋보기 모양 이미지를 가져와 사용
  - 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
  - 닫기 버튼, 버튼이 없는 곳을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
  - tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
  - 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
  - 하단에 있는 상품목록에서 해당 가구가 선택되었으면 선택된 가구는 선택되었으면 표시
  - 하단에 있는 상품목록에서 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
  - 가구 정보는 2가지 형식이 존재
    - 입점되어 있는 가구 (product 정보에 outside가 false 이 가구)
      - 상품 이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 할인율 (product 정보 discount)
      - 가격 (product 정보 priceDiscount)
    - 입점되지 않는 가구
      - 상품이미지 (product 정보 imageUrl)
      - 상품명 (product 정보 name)
      - 예상 가격 (product 정보 priceDiscount)
 
##❗ 소감 및 후기
  이번 과제를 통해서 기본기를 좀 더 탄탄히 할 수 있어 정말 좋은 과제였습니다. tool tip박스의 상하좌우 위치를 각각 다르게 해야하는 부분에서 설계를 잘 하지 못해 로직을 제대로 설계하지 못 한 부분은 발전이 필요하다 생각합니다. 이번 과제를 계기로 좀 더 발전할 수 있는 프론트엔드 개발자가 되기 위해 노력하겠습니다.






