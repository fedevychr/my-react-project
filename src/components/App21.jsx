import { useState } from 'react';

// const App21 = () => {
//   // ❌ Буде помилка
//   if (isLoggedIn) {
//     const [username, setUsername] = useState('');
//   }

//   // ❌ Буде помилка
//   for (let i = 0; i < 10; i++) {
//     const [valiue, setValue] = useState(0);
//   }

//   // ...
// };

// ✅ Так правильно
// const App21 = () => {
//   const [username, setUsername] = useState('');
//   const [valiue, setValue] = useState(0);
// };

const App21 = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
};

// import ClickCounter from './ClickCounter/ClickCounter';
// import { useState } from 'react';

// const App21 = () => {
//   const [clicks, setClick] = useState(0);

//   const handleClick = () => {
//     setClick(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// import { useState } from 'react';

// const App21 = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// import CustomButton from './CustomButton/CustomButton';

// const App21 = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// const App21 = () => {
//   const handleClick = evt => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={evt => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// const App21 = () => {
//   return <button onClick={() => alert('You clicked me!')}>Click me!</button>;
// };

export default App21;
