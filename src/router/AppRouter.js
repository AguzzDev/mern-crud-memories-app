import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import AuthScreen from "../pages/AuthScreen";
import MemoriesScreen from "../pages/MemoriesScreen";
import { useLocalStorage } from "hook/useLocalStorage";

export const AppRouter = () => {
    const { user } = useLocalStorage()
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact path="/auth"
                        component={() => (!user ? <AuthScreen /> : <Redirect to="/" />)}
                    />
                    <Route
                        exact path="/search"
                        component={MemoriesScreen}
                    />
                    <Route
                        exact path="/"
                        component={MemoriesScreen}
                    />
                </Switch>
            </div>
        </Router>
    )
}
