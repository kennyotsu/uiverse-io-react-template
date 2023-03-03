import HTML from '../../../!YOUR_HTML_GOES_HERE.html?raw'
import React from 'react'
import { MockUp } from './MockUp'
import TypeSelectDropdown from './TypeSelectDropdown'
import AppearancesSelectDropdown from './AppearancesSelectDropdown'
import {useAppearanceStore} from "../stores/useAppearanceStore";
import {MockUpElements} from "./MockUpElements";

function headTo(url, target) {
  window.open(url, target)
}

export function AppContainer() {
  const appearance = useAppearanceStore((state) => state.appearance)
  return (
    <div className={'appContainer'}>
      <div className={'max-w-[400px] text-primary'}>
        <a className={' max-w-xl font-bold text-4xl'}>
          Design your {appearance}<br/> the way it's going to appear on
          <span
            onClick={() => headTo('https://uiverse.io/', '_blank')}
            className={
              'cursor-pointer font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300 via-indigo-600'
            }
          >
            {' '}
            Uiverse
          </span>
        </a>
        <p className={"mt-4"}>Choose type and appearance to preview available safe-spaces</p>

      </div>
      <div className={"relative w-fit flex-row"}>

      <div className={' appOptions mt-6'}>
        <p className={' text-grayText font-bold ml-4 h-6'}>Options</p>
        <div className={"flex gap-4 p-2"}>
          <div className={'appOption'}>
            <p>type</p>
            <TypeSelectDropdown />
          </div>
          <div className={'appOption'}>
            <p>appearance</p>
            <AppearancesSelectDropdown />
          </div>
          <div className={""}></div>
        </div>
      </div>
      <div className={'mockups'} >
        <MockUp theme="#e8e8e8">
          <MockUpElements color='#212121'/>
        </MockUp>
        <MockUp theme="#212121">
          <MockUpElements color='#e8e8e8'/>
        </MockUp>
      </div>
      <p className={"mt-16 text-grayText"}>Edit premade .html and .css files in the root folder to style your design</p>
      <div className={"text-grayText mt-4 underline"}>
        <a href={"https://github.com/kennyotsu/uiverse-io-react-template"} target={'_blank'}>
          GitHub
        </a>
      </div>

      </div>
    </div>
  )
}
