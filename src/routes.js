import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login'
import newAcount from './pages/newAcount'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
            <Route path = '/' exact component={newAcount}/>
            <Route path = '/login' exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

