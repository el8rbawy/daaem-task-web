'use client';
import styled from "styled-components";

export const Main = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   background-color: #F6F8F7;

   .container {
      background-color: #fff;
      width: 600px;
      height: 600px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      padding: 30px;
      border-radius: 5px;
      overflow: auto;
      height: calc(100vh - 80px);
   }
   .item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:not(:last-of-type) {
         margin-bottom: 15px;
      }
      .flex {
         display: flex;
         align-items: center;
      }
      .picture {
         width: 80px;
         height: 80px;
         background-color: #eaf1ee;
         border-radius: 50%;
         margin-right: 15px;

         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
         }
      }
      .info {
         line-height: 1.4;
      }
      button {
         border: none;
         border-radius: 5px;
         width: 100px;
         height: 35px;
         color: #fff;
         background-color: #ce4b42;
         transition: all .2s ease-in-out;
         font-size: 15px;

         &:hover {
            opacity: 0.8;
         }
      }
   }
`;