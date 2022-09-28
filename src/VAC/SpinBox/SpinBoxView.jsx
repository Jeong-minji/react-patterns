// VAC
const SpinBoxView = ({
  value,
  disableDecrease,
  disableIncrease,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div>
      <button disabled={disableDecrease} onClick={onDecrease}>
        -
      </button>
      <span>{value}</span>
      <button disabled={disableIncrease} onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default SpinBoxView;
