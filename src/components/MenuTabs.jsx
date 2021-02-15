import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        width: "100%",
        margin: "auto",
    },
}));



function MenuTabs(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
    <div className={classes.root}>
        <Paper square>
            <Tabs
                variant="fullWidth"
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={(event, newValue) => {
                    setValue(newValue);
                    props.selectTab(newValue)
                }}
                aria-label="Tabs"
            >
            {props.tabs.map((tab) => (
                <Tab label={tab} />
            ))}
            </Tabs>
        </Paper>
    </div>
    );
}

export default MenuTabs;