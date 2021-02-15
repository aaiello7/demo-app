import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    tileItem: {
        display: "inline-block",
        columnBreakInside: "avoid",
        width: "100%",
        marginTop: theme.spacing(3),
        borderRadius: "15px",

    },
    tileImg: {
        width: "100%",
        height: "auto",
        padding: theme.spacing(0),
    },
    cardBottom: {
        margin: 0,
        padding: 0,   
    },
    dotsBtn: {
        padding: 0,
    }
}));


function SkeletonTileItem() {
    const classes = useStyles();
    return (
        <Card className={classes.tileItem}>
            <CardActionArea>
                <CardMedia>
                    <Skeleton variant="rect" className={classes.tileImg} /> 
                </CardMedia>
            </CardActionArea>
            <CardActions className={classes.cardBottom} >
                <Button className={classes.dotsBtn} size="small" color="default">
                    <Skeleton variant="circle"/> 
                </Button>
            </CardActions>
        </Card>
    );
};

export default SkeletonTileItem;