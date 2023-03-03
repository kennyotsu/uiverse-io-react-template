import React from "react";
import HTML from '../../../!YOUR_HTML_GOES_HERE.html?raw'

export function UiDesign() {
  return (
    <div dangerouslySetInnerHTML={{ __html: HTML }} />
  )
}
