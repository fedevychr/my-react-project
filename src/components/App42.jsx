// import { useMemo, useState } from 'react';
// const App42 = () => {
//   const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
//   const [query, setQuery] = useState('');
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query],
//   );

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// import { useEffect, useRef, useState } from 'react';

// const App42 = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   console.log('App42: ', btnRef.current);

//   useEffect(() => {
//     console.log('useEffect: ', btnRef.current);
//   });

//   const handleClick = () => {
//     console.log('handleClick: ', btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

// import { useEffect, useRef } from 'react';

// const App42 = () => {
//   const valueRef = useRef(0);

//   useEffect(() => {
//
//     console.log(valueRef.current);
//   });

//   const handleClick = () => {
//     valueRef.current += 1;
//   };

//   return <button onClick={handleClick}>Click to update ref value</button>;
// };

// import Player from './Player/Player';

// const App42 = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

import { forwardRef, useRef, useEffect } from 'react';

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));
CustomButton.displayName = 'CustomButton';

const App42 = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};

export default App42;
