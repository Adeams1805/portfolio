import React from 'react';
import { useTranslate } from 'react-redux-multilingual';

class Home extends React.Component {

    render() {
        return <HomeTranslated />
    }
}

function HomeTranslated (props) {
    const t = useTranslate()
  
    return (
        <div id="home">
            <p>
                {t('about')}<br/><br/>
                maeva.boyaval<i class="fa fa-at" aria-hidden="true"></i>gmail.com
            </p>
        </div>
    )
}

export default Home;