import LangSwitcher from './LangSwitcher/LangSwitcher';
import LoginForm from './LoginForm/LoginForm';
import { useState } from 'react';

const App31 = () => {
  const [lang, setLang] = useState('uk');
  const [coffeeSize, setCoffeeSize] = useState('sm');
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleLogin = userData => {
    console.log(userData);
  };

  const handleSizeChange = evt => {
    setCoffeeSize(evt.target.value);
  };

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />

      <h2>Selected language</h2>
      <LangSwitcher value={lang} onSelect={setLang} />
      <p>
        <b>Selected language:</b> {lang}
      </p>

      <h2>Select coffee size</h2>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === 'sm'}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === 'md'}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === 'lg'}
          onChange={handleSizeChange}
        />
        Large
      </label>
      <p>
        <b>Selected size:</b> {coffeeSize}
      </p>

      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default App31;
