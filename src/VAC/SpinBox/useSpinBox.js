import { useState } from "react";

const useSpinBox = () => {
  const [value, setValue] = useState(0);

  // JSX를 추상화한 Props Object
  const props = {
    value,
    disableDecrease: value < 1,
    disableIncrease: value > 10,
    onDecrease: () => setValue(value - 1),
    onIncrease: () => setValue(value + 1),
  };

  return { props };
};

export default useSpinBox;
