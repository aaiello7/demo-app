import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactCard from './ContactCard';
import MenuTabs from './MenuTabs';
import ImgGrid from './ImgGrid';
import ActivityFeed from './ActivityFeed';
//DB
import userProfile from '../PetProfile';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(10),
        width: '100%',
    },    
}));

function PetProfile(props) {
    const classes = useStyles();
    const [tabSelect, setTab] = useState(0);

    function changeTab (tabValue) {
        setTab(tabValue)
    }
    
    return (
        <div className={classes.root}>
            <ContactCard 
                key={userProfile[0].id}
                type= "pet"
                fabLink="/Treats"
                firstName={userProfile[0].firstName}
                lastName={userProfile[0].lastName}
                pic={userProfile[0].pic}
                about={userProfile[0].about}
            />
            <MenuTabs
                selectTab={changeTab}
                tabs={["Posts", "Activity"]} />
            {tabSelect === 0 ?
                <ImgGrid />
                :
                <ActivityFeed />
            }
        </div>
    )
}
export default PetProfile;


