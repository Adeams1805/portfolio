import React from 'react';
import { useTranslate } from 'react-redux-multilingual';

class Footer extends React.Component {

    render() {
        return (
            <FooterTranslated />
        )
    }
}

function FooterTranslated() {
    const t = useTranslate()

    return (
        <footer>
            <div className="res-soc">
                <a href="https://www.linkedin.com/in/maeva-boyaval-40781514b/" target="_blank" rel="noopener noreferrer nofollow" className="link-fb">
                    <img src="/images/linkedin.svg" alt="LinkedIn"/>
                </a>
            </div>

            <div className="copyright">
                <p>Maeva Boyaval &copy; 2020</p>
            </div>
        </footer>
    )
}

export default Footer;