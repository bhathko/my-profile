import React, {Component} from 'react';
import styles from './navbar.module.scss';
import {Link} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: window.location.pathname.split('/')[1] || 'home'
        }
    }
    componentDidMount() {

    }

    handleRedirect(page) {
        this.setState({
            currentPage: page
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div
                        onClick={() => this.handleRedirect('home')}
                    >
                        <Link
                            className={styles.nav + ' ' + (this.state.currentPage === 'home'? styles.active:'')}
                            to='/home'>
                            Home
                        </Link>

                    </div>
                    <div
                        onClick={() => this.handleRedirect('blog')}
                    >
                        <Link
                            className={styles.nav + ' ' + (this.state.currentPage === 'blog'? styles.active:'')}
                            to='/blog'>
                            Blog
                        </Link>
                    </div>
                    <div
                        onClick={() => this.handleRedirect('collected')}
                    >
                        <Link
                            className={styles.nav + ' ' + (this.state.currentPage === 'collected'? styles.active:'')}
                            to='/collected'>
                            Collected
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
