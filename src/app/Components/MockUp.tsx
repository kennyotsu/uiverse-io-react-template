import styled from "styled-components";
import React, {useState} from "react";
import {useAppearanceStore} from "../stores/useAppearanceStore";
import {motion} from "framer-motion";
import '../../../!YOUR_CSS_GOES_HERE.css'
import {MockUpFooter} from "./MockUpFooter";


const MockUpContainer = styled.div`
      //dynamic
      background-color: ${props => props.theme};
      //hardcoded
      min-width: 313px;
      min-height: 250px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1;
      border-radius: 8px;
      overflow: hidden;
    `

export function MockUp(props) {

  const {theme, type} = props
  const appearance = useAppearanceStore(state => state.appearance)
  // const [activeAppearance, setActiveAppearance] = useState('button')

  const variants = {
    button: { height: 250, width: 313.3 },
    card: { height: 420, width: 378.8 },
    form:{ height: 540, width: 477 },
  }


  return (
    <>
      <div className={"relative flex flex-col"}>
      <MockUpContainer theme={theme} as={motion.div} animate={appearance}
                       variants={variants}>
          {props.children}
      </MockUpContainer>

      <MockUpFooter/>
    </div>
  </>
  )
}
