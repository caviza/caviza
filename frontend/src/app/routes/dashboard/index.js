import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

/**
 * Serves as main routing component switch in the navigation panel on the left of the app.
 *
 * @param match {Object} Containing the matched data of the current route, allowing the code below to recognize when the
 * user is at.
 * @returns {Object} A JSX representation of the Dashboard section of the navigation panel.
 * @constructor
 */
const DashboardNavigationSection = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/main`}/>
            <Route path={`${match.url}/main`}
                   component={asyncComponent(() => import('../../../modules/main/pages/Dashboard'))}/>
        </Switch>
    </div>
);

export default DashboardNavigationSection;