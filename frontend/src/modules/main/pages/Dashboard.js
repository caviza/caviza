import React from 'react';

import ContainerHeader from '../../../components/ContainerHeader';
import {Grid} from '@material-ui/core';

import IntlMessages from 'util/IntlMessages';

class DashboardPage extends React.Component {
    render() {
        const {match} = this.props;

        return (
            <Grid className="animated slideInUpTiny animation-duration-3" container>
                <Grid item xs={12}>
                    <ContainerHeader title={<IntlMessages id="sidebar.dashboard.start"/>} match={match}/>
                </Grid>

                <Grid item xs={12}>
                    <h1 className="font-weight-light"><IntlMessages id="sidebar.dashboard.last-accessed-consortium"/></h1>
                </Grid>
            </Grid>
        )
    }
}

export default DashboardPage;