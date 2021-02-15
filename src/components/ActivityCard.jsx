    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: theme.spacing(2),
    },
    details: {
        width: "70%",
    },
    cover: {
        width: "30%",
    },
}));

function ActivityCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardMedia
            className={classes.cover}
            image={props.image}
        />

        <div className={classes.details}>
            <CardContent>
            <Typography component="h5" variant="h5">
                {props.title}
            </Typography>
            <Typography variant="subtitle1">
                {props.detail}
            </Typography>
            </CardContent>
        </div>
        </Card>
    );
}

export default ActivityCard;