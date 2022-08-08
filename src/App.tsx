import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

import Router from './services/routes';

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Router />
    </>
  );
}
