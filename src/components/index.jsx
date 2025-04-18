import React, { useImperativeHandle } from "react";

const Test = ({ ref, content }) => {
  const [text, setText] = React.useState("text");
  useImperativeHandle(
    ref,
    () => {
      return {
        show: () => {
          setText("show");
        },
        hide: () => {
          setText("hide");
        },
      };
    },
    []
  );
  return (
    <div ref={ref}>
      Test: {content}
      <div>this is {text}</div>
    </div>
  );
};

export default Test;
