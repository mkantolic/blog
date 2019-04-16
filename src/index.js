import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ListPosts from "./Container/ListPosts";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Container/Login";
import CreateAccount from "./Container/CreateAccount";
import LoadingComponent from "./Container/LoadingComponent";
import AuthenticatedComponent from "./Container/AuthenticatedComponent";
import PostDetail from "./Container/PostDetail";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/CreateAccount" component={CreateAccount} />
          <Route path="/Login" component={Login} />
          <AuthenticatedComponent>
            <Route path="/:id" component={PostDetail} />
            <Route exact path="/" component={ListPosts} />
          </AuthenticatedComponent>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
/*const createStoreWithMiddleware = applyMiddleware(thunk)(createStore); */

/*<Route path="/create" component={CreateProject} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/:id" component={PostDetail} />*/
/* <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route path="/quiz" component={QuizHome} />
          <Route path="/create" component={CreateProject} />
          <Route path="/Login" component={Login} />
          <Route exact path="/" component={ListPosts} />
          <Route path="/:id" component={PostDetail} />
        </Switch>
        <div className="footer" id="footer">
          <p>Sve slike su preuzete s https://unsplash.com</p>
        </div>
      </div>
    </BrowserRouter>*/
