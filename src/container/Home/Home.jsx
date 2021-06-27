// file ini di buat agar lebih dinamis dan rapih 

import React, { Component } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render() {
        // mengembalikan isi nilai yang ingin di tampilkan
        // return > tidak bisa bernilai satu hiraki / berurut 
        return (
            // mengambil isi file component yang sudah diimport youtubecomp
            <div>
                {/* <YouTubeComp
                    time="7.00"
                    title="Tutorial React Js - bagian 1" />
                <YouTubeComp
                    time="12.00"
                    title="Tutorial React Js - bagian 2"
                />
                <YouTubeComp
                    time="8.00"
                    title="Tutorial React Js - bagian 3"
                />
                <YouTubeComp
                    time="20.00"
                    title="Tutorial React Js - bagian 4"
                />
                <YouTubeComp /> */}

                <Product/>
            </div>
        )
    }
}

export default Home;