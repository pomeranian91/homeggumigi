

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

## 소감 및 후기






- 사진과 가구에 대한 정보는 API를 통해서 호출
    - cdn.ggumim.co.kr/test/image_product_link.json
    - api 응답 내용
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42c1e966-8d6b-4abc-b0cc-3090110de031/Untitled.png)
        
- 기능 설명
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec176927-21b7-4a8b-ae4b-fd03be55a0d4/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad83b470-d0a0-43c2-8b15-2b79e46c4dc9/Untitled.png)
    
    - 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
    - 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
    - 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
    - tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
    - 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
        
        [https://lh6.googleusercontent.com/R5rmjydcYXBZ80jERt0H31xKIRHH_bLiXqqQYzQaGCj9e_angw-oqotKjV3WbElw2MpqKu1o4MEOyURRUR9BllBFwXUfKSwqgFPMwKxvziP97mATwJH5WeHrwJuvhQHV2aaLfq-X](https://lh6.googleusercontent.com/R5rmjydcYXBZ80jERt0H31xKIRHH_bLiXqqQYzQaGCj9e_angw-oqotKjV3WbElw2MpqKu1o4MEOyURRUR9BllBFwXUfKSwqgFPMwKxvziP97mATwJH5WeHrwJuvhQHV2aaLfq-X)
        
    - 선택된 가구는 선택되었으면 표시
        
        [https://lh5.googleusercontent.com/Qg25mZ4h7STZoXXfk5vwDMzY8eYgnMH4uSjos0fSHziHm1K4K-mssUgK-OowE-h7QQFw_j6LyZFRc9JWn9ZHeTWxNwUevnAsws_9iC1WHhCeGpr32do7kpFRrHjk_iYNZzuz8Uwv](https://lh5.googleusercontent.com/Qg25mZ4h7STZoXXfk5vwDMzY8eYgnMH4uSjos0fSHziHm1K4K-mssUgK-OowE-h7QQFw_j6LyZFRc9JWn9ZHeTWxNwUevnAsws_9iC1WHhCeGpr32do7kpFRrHjk_iYNZzuz8Uwv)
        
    - 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
- 가구 정보는 2가지 형식이 존재
    - 입점되어 있는 가구 (product 정보에 outside가 false 이 가구)
        
        [https://lh6.googleusercontent.com/UyPiDLoo8EWQptnoRk6tO3YwH1HIxymjb48FFD9n3R8W6SdpY22J0Go7udvIjetzVwrC4W7G0ob8T9MKzYXh322sKXCuoNEDAYj9WmbSjIQ_GmJ9xL1ct-K0sTsZ23zw7zuN1u2m](https://lh6.googleusercontent.com/UyPiDLoo8EWQptnoRk6tO3YwH1HIxymjb48FFD9n3R8W6SdpY22J0Go7udvIjetzVwrC4W7G0ob8T9MKzYXh322sKXCuoNEDAYj9WmbSjIQ_GmJ9xL1ct-K0sTsZ23zw7zuN1u2m)
        
        - 상품 이미지 (product 정보 imageUrl)
        - 상품명 (product 정보 name)
        - 할인율 (product 정보 discount)
        - 가격 (product 정보 priceDiscount)
    - 입점되지 않는 가구
        
        [https://lh5.googleusercontent.com/GYrQo-aL0dPu_tak3L_klRapvOwv8xaNrYQ1fKf41JdTeMfbNEa-yV-6ySS0JR2VlenHz2RgfM_w-L4u1hIy7bYsFQhmQaFl9lD4N8BasMXoMuGs2D1iNszIpkMlNtJfviFy1TNw](https://lh5.googleusercontent.com/GYrQo-aL0dPu_tak3L_klRapvOwv8xaNrYQ1fKf41JdTeMfbNEa-yV-6ySS0JR2VlenHz2RgfM_w-L4u1hIy7bYsFQhmQaFl9lD4N8BasMXoMuGs2D1iNszIpkMlNtJfviFy1TNw)
        
        - 상품이미지 (product 정보 imageUrl)
        - 상품명 (product 정보 name)
        - 예상 가격 (product 정보 priceDiscount)
