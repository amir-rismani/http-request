import './App.css';
import CommentContainer from './container/CommentContainer/CommentContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <CommentContainer />
      <ToastContainer />
    </div>
  );
}

export default App;
