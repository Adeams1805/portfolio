import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { IntlActions, useTranslate } from 'react-redux-multilingual';

class Navigation extends React.Component {

    render() {
        return (
            <NavigationTranslated
            />
        )
    }
}

function NavigationTranslated(props) {
    const t = useTranslate()

    return (
        <div className="nav-bar">
            <div className="nav-menu">
                <NavLink exact to="/">
                    <p>{t('headerAbout')}</p>
                </NavLink>

                <NavLink to="/programmation">
                    <p>{t('headerProg')}</p>
                </NavLink>

                <NavLink to="/autre">
                    <p>{t('headerOther')}</p>
                </NavLink>
            </div>
        </div>
    )
}

function mapState(state) {
    const { Intl } = state
    return { Intl }
  }

const NavigationMenu = connect(mapState)(Navigation);
export default NavigationMenu;