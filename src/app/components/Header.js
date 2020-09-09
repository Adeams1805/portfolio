import React from 'react';
import { connect } from 'react-redux';
import { IntlActions, useTranslate } from 'react-redux-multilingual';

class HeaderPage extends React.Component {

    render() {
        return (
            <HeaderTranslated
            dispatch={this.props.dispatch}
            />
        )
    }
}

function HeaderTranslated(props) {
    const t = useTranslate()

    return (
        <header>
            <img
            id="pp"
            src="/images/photo-profil-rond.png"
            alt="Photo de profil"/>

            <div className="nav-icon">
                <p onClick={() => props.dispatch(IntlActions.setLocale('fr'))}>FR</p>
                <p onClick={() => props.dispatch(IntlActions.setLocale('en'))}>EN</p>
            </div>
        </header>
    )
}

function mapState(state) {
    const { Intl } = state
    return { Intl }
}

const Header = connect(mapState)(HeaderPage);
export default Header;