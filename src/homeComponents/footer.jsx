import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'>
                        <GitHubButton href="https://github.com/imvk01" data-show-count="true" aria-label="Follow @imvk01 on GitHub">Follow @imvk01</GitHubButton>
                        </div>
                </div>
        );
    }
}

export default Footer;