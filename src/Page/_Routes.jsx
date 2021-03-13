import { Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Error404 from "./Error404";

export default function _Routes() {
    return <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/*">
                <Error404/>
            </Route>
        </Switch>
    </>
}