import React from "react";
import styles from './profile.module.css';
import Typical from 'react-typical';
import {FaFacebook, FaGithub, FaLink, FaLinkedin, FaTwitter} from 'react-icons/fa';
function Profile(){
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.details}>
                    <div className={styles.colZ}>

                        <a href="#">
                            <FaTwitter/>
                        </a>
                        <a href="#">
                            <FaFacebook/>
                        </a>
                        <a href="#">
                            <FaLinkedin/>
                        </a>
                        <a href="#">
                            <FaLink/>
                        </a>
                        <a href="#">
                            <i className="fa fa-facebook"/>
                        </a>
                    </div>
                    <div className={styles.profileDetailsName}>
                        <span className={styles.primaryText}>
                            {" "}
                            <h1>
                                Hello I am <span className={styles.highlightedText}>Avijit Acharjee</span>
                            </h1>
                        </span>
                    </div>
                    <div className={styles.profileDetailsRole}>
                        <span className={styles.primaryText}>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                'Android Developer',2000,
                                'Web Developer',1500
                            ]}
                            wrapper = {"p"}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile