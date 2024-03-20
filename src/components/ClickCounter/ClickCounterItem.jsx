const ClickCounterItem = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounterItem;
