import ReactDOM from 'react-dom/client';
import { UserProvider } from './userContext';
import App421 from './components/App421';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App421 />
  </UserProvider>,
);
