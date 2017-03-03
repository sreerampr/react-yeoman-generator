import React from 'react';
import AddTodo from '../containers/AddTodo/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../presentational/Footer/Footer';
import AppBarExampleIcon from '../presentational/AppBar/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

export const TodoApp = () =>(
    <div>
        <MuiThemeProvider>
            <AppBarExampleIcon title="My AppBar" />
        </MuiThemeProvider>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);