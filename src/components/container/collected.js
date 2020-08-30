import React, {Component} from 'react';
import { useRouteMatch } from "react-router-dom";

class Collected extends Component {
    render() {
        let { path, url } = useRouteMatch();
        return (
            <div>
                Collected
            </div>
        );
    }
}

export default Collected;
