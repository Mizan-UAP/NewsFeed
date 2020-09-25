import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {

    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    useEffect(() => {
        const Url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(Url)
            .then(response => response.json())
            .then(data => setPostDetail(data))
    }, [])

    return (
        <div>
            <h1 align="center">More about post details {postId}</h1>
            <h2> Title: <small>{postDetail.title}</small> </h2>
            <h2> Body: <small>{postDetail.body}</small> </h2>
            <Link to="/home" > Home </Link>


        </div>
    );
};

export default PostDetails;