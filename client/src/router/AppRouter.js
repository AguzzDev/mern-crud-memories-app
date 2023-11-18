import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import AuthScreen from "../pages/AuthScreen";
import MemoriesScreen from "../pages/MemoriesScreen";
import { useLocalStorage } from "hook/useLocalStorage";

export const AppRouter = () => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useLocalStorage();

    return (
      <Route
        {...rest}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/auth" />
        }
      />
    );
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/auth" render={() => <AuthScreen />} />
          <PrivateRoute path="/search" component={MemoriesScreen} />
          <PrivateRoute path="/" component={MemoriesScreen} />
        </Switch>
      </div>
    </Router>
  );
};
