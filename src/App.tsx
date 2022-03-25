import React from 'react';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";

type PropsType = {}

const App: React.FC<PropsType> = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <UsersContainer/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
