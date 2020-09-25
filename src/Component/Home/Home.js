import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [postData, setPostData] = useState([]);
    
    const topTen = postData.slice(0,25);

    useEffect(() => {
        const Url = "https://jsonplaceholder.typicode.com/posts";
        fetch(Url)
            .then(response => response.json())
            .then(data => setPostData(data))
    }, [])

    return (
        <div>
            <h1 align="center" >User's Post and Comments</h1>            
            {
                topTen.map(data => <Post userData={data} > </Post>)
            }
        </div>
    );
};

export default Home;