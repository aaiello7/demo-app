import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import ContactCard from './ContactCard';
import MenuTabs from './MenuTabs';
import ImgGrid from './ImgGrid';
import ActivityFeed from './ActivityFeed';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(10),
        width: '100%',
    },    
}));

function VetProfile(props) {
    const classes = useStyles();
    const [tabSelect, setTab] = useState(0);
    let history = useHistory();

    function changeTab (tabValue) {
        setTab(tabValue)
    }
    
    return (
        <div className={classes.root}>
            <ContactCard 
                key={history.location.state.id}
                type= "vet"
                fabLink="/Schedule"
                firstName={history.location.state.firstName}
                lastName={history.location.state.lastName}
                pic={history.location.state.pic}
                about={history.location.state.about}
            />
            <MenuTabs
                selectTab={changeTab}
                tabs={["Services", "History"]}
                />
            {tabSelect === 0 ?
                <ImgGrid />
                :
                <ActivityFeed />
            }
        </div>
    )
}
export default VetProfile;


