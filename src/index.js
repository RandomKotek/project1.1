import React from 'react';
import ReactDOM from 'react-dom';
import {Images} from './components/Images';
import {Images2} from './components/Images2';
import {Title} from './components/Title';

class DankPage extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Images/>
                <Images2/>
            </div>
        );

    }
}

ReactDOM.render(<DankPage/>, document.getElementById('app'));
