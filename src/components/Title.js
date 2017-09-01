import React from 'react';

const style = {
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "Comic Sans MS",
    backgroundColor: 'blue',
    marginBottom: '20px',
    color: 'white',
    borderBottom: '5px solid red'
};

export class Title extends React.Component {
    render() {
        return (
            <div id="ZestyMemeTitle" style={style}>
                Zesty Memes
            </div>
        );
    }
}
