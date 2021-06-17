import React from 'react';
import useStyles from './styles';
import {Card,CardActions,CardContent,CardMedia,Typography,Button} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
const SinglePost  = ({post}) =>{
    const style = useStyles();
    console.log(post);
    return (
        <Card className={style.card}>
            <CardMedia className={style.media} image={post.selectedFile} title={post.title}/>
            <div className={style.overlay}>
                <Typography variant="h5">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={style.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={style.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={style.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={style.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    )
}

export default SinglePost;