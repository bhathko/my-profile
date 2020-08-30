import React, {Component} from 'react';
import styles from './profile.module.scss';
import 'antd/dist/antd.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expert: [
                { name: 'Html : ', star: 5 },
                { name: 'Css : ', star: 5 },
                { name: 'Angular : ', star: 5 },
                { name: 'React : ', star: 2 },
                { name: 'Linux : ', star: 3 },
                { name: 'Git : ', star: 4 },
                { name: 'Node.js : ', star: 3 },
                { name: 'SQL : ', star: 2 },
            ]
        }
    }
    showStar(num) {
        return Array.from({ length: num }).map( number =>
            <img className={styles.star} src="/assets/icons/star.svg" />
        )
    }
    showExpert() {
        return this.state.expert.map( item => (
            <div className={styles.expert}>
                <span className={styles.expertName}>{item.name} </span>
                {this.showStar(item.star)}
            </div>
        ))
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.slogan}>
                    Hi, I'm Hunter, <br/>
                    I like learning new Technology and working side-project.
                </div>
                <div className={styles.expertLayout}>
                    {this.showExpert()}
                </div>
                <div className={styles.socialList}>
                    <span className={styles.socialTitle}>Social Link : </span>
                    <a href="https://github.com/imkouyo/imkouyo.github.io" target="_blank"><img style={{width: "60px", height: "60px", marginRight: "40px", marginLeft: "40px"}} src="/assets/icons/github.svg" alt=""/></a>
                    <a href="https://www.linkedin.com/in/tai-yu-ko-ab6372102/" target="_blank"><img style={{width: "60px", height: "60px", marginRight: "40px"}} src="/assets/icons/linkdin.svg" alt=""/></a>
                    <a href="mailto: bhathko@gmail.com"><img style={{width: "60px", height: "60px"}} src="/assets/icons/google.svg" alt=""/></a>
                </div>
            </div>
        );
    }
}

export default Profile;
