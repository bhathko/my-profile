import React, {Component} from 'react';
import './content.scss';
import { Switch, Route, Link } from "react-router-dom";
import Blog from "../container/blog";
import Collected from "../container/collected";
import Home from "../container/home";
class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/collected">
                            <Collected />
                        </Route>
                    </Switch>
                </div>
        );
    }
}
export default Content;
