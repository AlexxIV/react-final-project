import React, { Component } from 'react';
import '../../styles/common/footer.scss';
import GithubLogo from '../../images/GitHub-Mark-32px.png';

export default class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <span className="footer-created">Created by Alex Ivanov 2018</span>
                <span className="footer-about">React course final project Softuni &reg;
                    <a className="footer-github-link" href="https://github.com/AlexxIV/react-final-project">
                        <img src={GithubLogo} alt="GithubLogo"/>
                    </a>
                </span>
            </div>
        )
    }
}