import React from 'react'
import Auth from './components/Auth'
import OnePet from './components/OnePet'
import Dashboard from './components/Dashboard'
import AddEditForm from './components/AddEditForm'
import About from './components/About'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/auth' component={Auth} />
        <Route path='/about' component={About} />
        <Route path='/pet/:id' component={OnePet} />
        <Route path='/edit/:id' component={AddEditForm} />
        <Route path='/add' component={AddEditForm} />
    </Switch>
)

