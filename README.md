

# 🚀 "집꾸미기" 개인과제

- 배포 사이트 :https://pomeranian91.github.io/homeggumigi
- 영상 : gif 파일 첨부
- Front-end: 조용우

## 📆 개발 기간

- 기간: 2022년 02월 01일 ~ 2021년 02월 03일(3일간)

## 적용 기술

- Front-end : React(Funiction-Component)_reactr-router-dom(V6), styled-components, JavaScript(ES6)

## 🕹 설치 및 시작하는 법

1. git clone
2. npm install
3. npm run start

## 프로젝트 구조
  
   - __public__
     - index.html
   - __src__
     - __img__
       - goarrow.png
       - tabicon.png
       - tabiconclose.png
       - textboxarrow.png
     - __pages__
       - MainPage.js
       - ToolTipPage.js
       - TopPage.js
       - UnderPage.js
     - __styles__
       - GlobalStyles.js
     - index.js
     - package\-lock.json
     - package.json
## 구현 기능
- 사진과 가구에 대한 정보는 API를 통해서 호출
- 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- 선택된 가구는 선택되었으면 표시
- 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
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
 
## 소감 및 후기







