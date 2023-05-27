import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
import WebRoutes from './routes';
function App() {
  return (
    <Layout>
      <div className='App'>
        <WebRoutes />
        <ToastContainer />
      </div>
    </Layout>
  );
}

export default App;
