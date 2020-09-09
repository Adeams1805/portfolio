import React from 'react';
import { useTranslate } from 'react-redux-multilingual';

class Autres extends React.Component {

    render() {
        return <AutresTranslated />
    }
}

function AutresTranslated (props) {
    const t = useTranslate()
  
    return (
        <div id="other">
            <div className="projet">
                <img src="images/Vent-Nocturne.gif" alt="gif"/>
                <p>{t('ventNocturne')}</p>
            </div>
            
            <div className="projet">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/d7uiB6fkUPo" frameBorder="0" allow="autoplay; encrypted-media;" allowFullScreen></iframe>
                <p>{t('mondo')}</p>
            </div>

            <div className="projet">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CP6OFT0AGkw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <p>{t('emodyssey')}</p>
            </div>

            <div className="projet">
                <img src="images/astroboy-megaman-fight.gif" alt="gif"/>
                <p>{t('astroMega')}</p>
            </div>

            <div className="projet">
                <img src="images/Photograph.png" alt="Photograph"/>
                <p>{t('photograph')}</p>
            </div>
        </div>
    )
}

export default Autres;