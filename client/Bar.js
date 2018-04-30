import React from "react";

const Bar = () => {
  return (
    <div>
      <div onClick={(e) => {
          console.log(e)
        }}
      >
        barrbabababababaab
      </div>
      <div>barrbabababababaab</div>
      <div>barrbabababababaab</div>
      <div>barrbabababababaab</div>
    </div>
  )
}

export default Bar;
