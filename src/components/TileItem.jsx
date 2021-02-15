import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


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
        backgroundColor: "transparent",
        margin: 0,
        padding: 0,   
    },
    dotsBtn: {
        padding: 0,
    }
}));


function TileItem(props) {
    const classes = useStyles();
    return (
        <Card className={classes.tileItem}>
            <CardActionArea>
                <CardMedia>
                    <img className={classes.tileImg} src={props.image} alt={props.user} /> 
                </CardMedia>
            </CardActionArea>
            <CardActions className={classes.cardBottom} >
                <Button className={classes.dotsBtn} size="small" color="default">
                <MoreHorizIcon/>
                </Button>
            </CardActions>
        </Card>
    );
};

export default TileItem;