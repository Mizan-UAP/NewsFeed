import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Comment = () => {

    const { commentId } = useParams();
    const [commentDetail, setCommentDetail] = useState({});
    console.log(commentDetail);
    useEffect(() => {
        const Url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
        fetch(Url)
            .then(response => response.json())
            .then(data => setCommentDetail(data))
    }, [])

    return (
        <div>
            <h1 align="center">Comments are given Below for {commentId}</h1>

            <h3>Name : <small>{commentDetail.name}</small> </h3>
            <h3>Email : <small>{commentDetail.email}</small> </h3>
            <h3>Body : <small>{commentDetail.body}</small> </h3>
            <Link to="/home" > Home </Link>


        </div>
    );
};

export default Comment;