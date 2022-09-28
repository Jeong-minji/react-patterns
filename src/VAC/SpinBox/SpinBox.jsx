import React from "react";
import SpinBoxView from "./SpinBoxView";
import useSpinBox from "./useSpinBox";

const SpinBox = () => {
  const { props } = useSpinBox();

  // JSX -> VAC로 교체
  return <SpinBoxView {...props} />;
};

export default SpinBox;
