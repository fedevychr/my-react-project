import Event from './Event/Event';
import CustomButton from './CustomButton/CustomButton';
import State from './State/State';
import ClickCounter from './ClickCounter/ClickCounter';
import Update from './Update/Update';

const App21 = () => {
  return (
    <>
      <div>
        <p>---Event--- </p>
        <Event />
        <p>--------------- </p>
      </div>

      <div>
        <p>---CustomButton---</p>
        <CustomButton message="Playing music!">Play some music</CustomButton>
        <CustomButton message="Uploading your data!">Upload data</CustomButton>
        <p>------------------</p>
      </div>

      <div>
        <p>--State---</p>
        <State />
        <p>-------------------</p>
      </div>

      <div>
        <p>---ClickCounter---</p>
        <ClickCounter />
        <p>--------------------</p>
      </div>

      <div>
        <p>---Update---</p>
        <Update />
      </div>
    </>
  );
};

// const App21 = () => {
//    return <button onClick={() => alert('You clicked me!')}>Click me!</button>;
// };

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

export default App21;
