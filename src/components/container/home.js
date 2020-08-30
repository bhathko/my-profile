import React, {Component} from 'react';
import styles from "./home.module.scss"
import Profile from "../profile/profile";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgScroll: `0 0`
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll(e) {
        this.setState({
            bgScroll: -window.pageYOffset + 'px'
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.bannerContainer} style={{backgroundPositionY: this.state.bgScroll}}>
                    Everything negative – pressure, challenges – is all an opportunity for me to rise.
                </div>
                <Profile />
            </div>
        );
    }
}

export default Home;
