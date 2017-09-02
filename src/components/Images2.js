import React from 'react';
import meme4 from '../img/mem4.jpg';
import meme5 from '../img/mem5.jpg';
import meme6 from '../img/mem6.jpg';

const lulzStyle = {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
};

const imgStyle = {
    height: '250px',
    width: 'auto',
    border: '10px solid black',
};

export class Images2 extends React.Component {
    render() {
        return (
            <div id="lulz" style={lulzStyle}>
                <a href="https://www.youtube.com/watch?v=d4JEh9hlK_s" target="_blank">
                    <img src={meme4} style={imgStyle}/>
                </a>
                <a href="https://www.youtube.com/watch?v=-4jwzan3AyA" target="_blank">
                    <img src={meme5} style={imgStyle}/>
                </a>
                <a href="https://www.youtube.com/watch?v=_tG6u6TZ8BQ" target="_blank">
                    <img src={meme6} style={imgStyle}/>
                </a>
            </div>
        );
    }
}
