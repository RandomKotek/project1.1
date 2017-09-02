import React from 'react';
import meme1 from '../img/mem1.jpg';
import meme2 from '../img/mem2.png';
import meme3 from '../img/mem3.JPG';
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
                <a href="https://www.youtube.com/watch?v=5QUZ360iyi0" target="_blank">
                    <img src={meme1} style={imgStyle}/>
                </a>
                <a href="https://www.youtube.com/watch?v=OOQaYdfq-EI" target="_blank">
                    <img src={meme2} style={imgStyle}/>
                </a>
                <a href="https://www.youtube.com/watch?v=5LTGF2eSTGk" target="_blank">
                    <img src={meme3} style={imgStyle}/>
            </div>
        );
    }
}
