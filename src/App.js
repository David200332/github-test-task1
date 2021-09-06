import './App.css';
import ReposList from './components/ReposList/ReposList';
import { Provider } from 'react-redux';
import { store } from './reducer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReposList></ReposList>
      </div>
    </Provider>
  );
}

export default App;
