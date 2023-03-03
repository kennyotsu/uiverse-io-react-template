import React, {Children, useEffect, useState} from "react";
import 'tailwindcss/tailwind.css'
import './app-specific-styles/index.scss'
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import HTML from '../../!YOUR_HTML_GOES_HERE.html?raw';
import {AppContainer} from "./Components/AppContainer";

const Globals = createGlobalStyle`
  html {
    font-size: 16px;
    min-height: -webkit-fill-available;
  }

  body {
    margin: 0;
    overflow-y: auto;
    padding: 0;
    //font-family: 'Evolventa', sans-serif;
    font-family: 'Montserrat', sans-serif;
    background-color: #171717;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  const props = {
    type: 'button', //button //card //form
    appearance: 'profile' //profile //overview //post //challenge
  }


  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle="UIVERSE Builder"
      >
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Globals />
      <AppContainer/>

    </>
  )
}

export default App
