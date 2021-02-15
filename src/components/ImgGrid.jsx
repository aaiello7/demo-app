    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import GridList from '@material-ui/core/GridList';
    import GridListTile from '@material-ui/core/GridListTile';
    import feedPosts from '../feedPosts';

    const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    }));

function ImgGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {feedPosts.map((post) => (
            <GridListTile key={post.key} cols={post.cols || 1}>
                <img src={post.img} alt={post.title} />
            </GridListTile>
            ))}
        </GridList>
        </div>
    );
}

export default ImgGrid;