import ClickCounterItem from './ClickCounterItem';
import { useState } from 'react';
// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  // Функція, яку будемо передавати в ClickCounter
  // для виклику під час кліку
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <ClickCounterItem value={clicks} onUpdate={handleClick} />
      <ClickCounterItem value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default ClickCounter;
