    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import clsx from 'clsx';
    import Card from '@material-ui/core/Card';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "100%",
        height: theme.spacing(18), 
        marginTop: theme.spacing(2),
    },
    cover: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    coverImg: {
        opacity: "0.5",
    },
    coverText: {
        height: theme.spacing(10),
        whiteSpace: "break-spaces",
        overflow: "hidden",
    }
}));

function ServicesCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardMedia
            className={clsx(classes.cover, classes.coverImg)}
            image={props.image}
        />

        <div className={clsx(classes.cover)}>
            <CardContent>
            <Typography component="h5" variant="h5">
                {props.title}
            </Typography>
            <Typography className={classes.coverText} variant="subtitle1">
                {props.detail}
            </Typography>
            </CardContent>
        </div>
        </Card>
    );
}

export default ServicesCard;
