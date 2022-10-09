import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';
import ModalContext from './Context/ModalContext';
import LoginContext from './Context/LoginContext';
import ModalDownloadContext from './Context/ModalDownloadContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <GlobalStyle>
        <ModalContext>
            <LoginContext>
                <ModalDownloadContext>
                    <App />
                </ModalDownloadContext>
            </LoginContext>
        </ModalContext>
    </GlobalStyle>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
