import React from 'react';
import { useTranslate } from 'react-redux-multilingual';

class Program extends React.Component {

    render() {
        return <ProgramTranslated />
    }
}

function ProgramTranslated (props) {
    const t = useTranslate()
  
    return (
        <div id="program">
            <div className="projet">
                <img src="images/logo-uxia.png" alt="UXIA"/>
                <p>{t('uxia')}<br/><a href="https://uxia-agency.com/" target="_blank"  rel="noopener">https://uxia-agency.com/</a></p>
            </div>

            <div className="projet">
                <img src="images/logo-nukka.png" alt="nukka."/>
                <p>{t('nukka')}<br/><a href="https://nukka.fr/" target="_blank"  rel="noopener">https://nukka.fr/</a></p>
            </div>

            <div className="projet">
                <img src="images/ge-logo.png" alt="Group Ethica"/>
                <p>{t('ethica')}<br/><a href="https://www.groupe-ethica.fr/" target="_blank"  rel="noopener">https://www.groupe-ethica.fr/</a></p>
            </div>
        </div>
    )
}

export default Program;