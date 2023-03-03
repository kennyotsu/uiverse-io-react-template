import {useTypeStore} from "../stores/useTypeStore";
import React from "react";
import {UiDesign} from "./UiDesign";
import {useAppearanceStore} from "../stores/useAppearanceStore";

export function MockUpElements(props) {
  const {color} = props
  const activeType = useTypeStore((state) => state.type)
  const activeAppearance = useAppearanceStore((state) => state.appearance)

  const Favorite = (props) => {
    return (
      <div className={"z-[100] absolute left-[0] bottom-0 z-2 flex justify-center align-middle gap-2 bg-primary px-2 py-1 rounded-[8px]"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="24" height="24">
          <path fill='none' d="M0 0h24v24H0z"></path>
          {props.child}
          <path fill="#181818" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
        </svg>
        <p className={"text-[#181818]"}>Add to favorites</p>
      </div>
    )
  }
  const GetHtmlCss = (props) => {
    return (
      <div className={`text-[${color}] absolute inset-3 transition transition-[300ms] text-[15px]`}>
        {props.children}
        <div className={"absolute right-0 bottom-0 z-2"}>
          Get <span className=" px-2 py-1 rounded bg-[#ff5858] text-primary">HTML</span> &amp; <span className="px-2 py-1 rounded bg-[#0071e2] text-primary">CSS</span>
        </div>
      </div>
    )
  }
  const FavoriteSmall = () => {
    return (
        <div className={`text-[${color}] text-[1rem] absolute top-[10px] right-[10px] cursor-pointer flex align-middle text-[15px] opacity-70 pt-[3px] pr-[6px] pb-[3px] pl-[4px] rounded-[8px]`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="24" height="24">
            <path fill='none' d="M0 0h24v24H0z"></path>
            <path fill={`${color}`} d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
          </svg>
          <p className={"ml-1"}>198</p>
        </div>
    )
  }
  const VoteFor = () => {
    return (
      <div className={`text-[${color}] text-[1rem] absolute top-[10px] right-[4px] cursor-pointer flex align-middle text-[15px] opacity-100 pt-[3px] pr-[6px] pb-[3px] pl-[4px] rounded-[8px]`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="currentColor" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
        <p className={"ml-1 font-bold "}>198 <span className={"px-2 py-1 rounded-[8px] text-[#e8e8e8] bg-[#171717]"}>vote</span></p>
      </div>
    )
  }
  const PostEditor = () => {
    return (
      <div className={`font-bold text-[${color}] text-[1rem] absolute top-[14px] right-[8px] cursor-pointer flex align-middle justify-between w-full text-[15px] opacity-100 pt-[3px] pr-[6px] pb-[3px] pl-[4px] rounded-[8px]`}>
        <div className={"flex flex-col items-start"}>
          <div className={activeAppearance === 'button' ? 'ml-5 flex flex-row absolute transform translate-y-[180px]' : 'ml-5 flex flex-row absolute'}>
            <div className={"flex  items-center justify-center text-white rounded-[100px] w-[40px] h-[40px] bg-gradient-to-r from-indigo-500 to-teal-300"}>UI</div>
            <div className={'ml-2 flex flex-col'}>
              <p className={"text-xs font-bold"}>Made by</p>
              <p className={"font-bold"}>@UiverseUser420</p>
            </div>
          </div>
        </div>
        <div className={"flex flex-col items-end"}>
          <div className={"flex flex-row items-center"}>Theme:
            <div className={"mx-2 themeSwitch"}>
            <div className={color === "#e8e8e8" ? 'themeSwitchKnob themeSwitchKnob-left' : 'themeSwitchKnob themeSwitchKnob-right'}></div>
            </div> {color === "#e8e8e8" ? 'Dark' : 'Light'}</div>
          <p className={"text-[16px]"}>{color}</p>
        </div>
      </div>
    )
  }

  if (activeType === 'creator profile'){
    return (
      <>
        <FavoriteSmall/>
        <GetHtmlCss>
          <Favorite/>
        </GetHtmlCss>
        <UiDesign />
      </>
    )
  }
  if (activeType === 'post overview'){
    return (
      <>
      <PostEditor/>
      <UiDesign />
      </>
    )
  }
  if (activeType === 'challenge submission'){
    return (
      <>
        <VoteFor/>
        <GetHtmlCss>
        </GetHtmlCss>
        <UiDesign />
      </>
    )
  }

  return (
    <>
      <GetHtmlCss>
        <Favorite/>
      </GetHtmlCss>
      <UiDesign />
    </>
  )
}
