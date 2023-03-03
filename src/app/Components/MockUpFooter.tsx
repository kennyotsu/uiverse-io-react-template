import React from "react";
import {useTypeStore} from "../stores/useTypeStore";
import {useAppearanceStore} from "../stores/useAppearanceStore";

export function MockUpFooter() {
  const activeType = useTypeStore((state) => state.type)


  if (activeType === 'creator profile'){
    return (
      <div className={`card__footer w-full flex flex-row justify-between`}>
        <div className={"card__views align-middle text-grayText text-[15px] w-full text-end mt-[7px] px-[7px]"}>
          3.3K views
        </div>
      </div>
    )
  }
  if (activeType === 'post overview'){
    return (
      <div className={`card__footer w-full flex flex-row justify-start`}>
        <div className={"card__views text-grayText text-[15px] text-end mt-[7px] px-[7px]"}>
          Nov 19, 2024
        </div>
        <div className={"text-primary font-bold bg-transparent text-[15px] text-end mt-[7px] px-[7px]"}>
          4.4K views
        </div>
      </div>
    )
  }
  if (activeType === 'challenge submission'){
    return (
      <div className={`card__footer w-full flex flex-row justify-between`}>
        <div className={"text-primary font-bold bg-transparent text-[15px] text-end mt-[7px] px-[7px]"}>
          UiverseUser420
        </div>
      </div>
    )
  }

  //default
  return (
    <div className={`card__footer w-full flex flex-row justify-between`}>
      <div className={"text-primary font-bold bg-transparent text-[15px] text-end mt-[7px] px-[7px]"}>
        UiverseUser420
      </div>
      <div className={"card__views text-grayText text-[15px] text-end mt-[7px] px-[7px]"}>
        3.3K views
      </div>
    </div>
  )
}
