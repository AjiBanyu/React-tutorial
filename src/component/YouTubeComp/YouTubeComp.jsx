import React from 'react';
import './YouTubeComp.css';

// parameter fungsi props > agar membuat komponen menjadi dinamis
// cara penggunanya berikan nilai nya props.time, props.title, props.desc
// props.time > didapat dari file Home/home.jsx yang nilai componennya time
// props.title > didapat dari file Home/home.jsx yang nilai componennya title
// props.desc > didapat dari file Home/home.jsx yang nilai componennya desc

const YouTubeComp = (props) => {
    return (

        <div className="youtube-wrapper" >
            <div className="img-thumb">
                <img src="" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

// membuat props default > ketika nilai nya tidak ada maka akan di isikan nilai defaultnya
YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx jam Tayang'
}

// agar bisa di gunakan di mana saja
export default YouTubeComp;