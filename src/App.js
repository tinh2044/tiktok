import { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

import FromContext from './Context/FormContext';
import { Modal } from './Context/ModalContext';
import { ModalDownload } from './Context/ModalDownloadContext';
import { FormDownload } from './components/Form';
function App() {
    const { showModal } = useContext(Modal);
    const { showModalDownload } = useContext(ModalDownload);
    return (
        <Router>
            <div className="App">
                {showModal && <FromContext />}
                {showModalDownload && <FormDownload />}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
