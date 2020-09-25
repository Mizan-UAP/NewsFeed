import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginLeft: 50,
        padding: 20,

    },
});

const Post = (props) => {

    const { title, body, id } = props.userData;
    // console.log(data);


    const classes = useStyles();
    return (
        <div>
            <h1> Post : {id} </h1>

            <Card className={classes.root} >
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <img src="https://picsum.photos/200/300" alt="" />
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            A piece of writing, image, or other item of content published online, typically on a blog or social media website or application.
                        </Typography>
                    </CardContent>

                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`/Posts/${id}`}>Post {id} </Link>
                    </Button>
                    <Button size="small" color="primary">
                        <Link to={`/Comments/${id}`}>Comments {id} </Link>
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default Post;