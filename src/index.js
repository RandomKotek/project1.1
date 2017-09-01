import React from 'react';
import ReactDOM from 'react-dom';
import {Images} from './components/Images';
import {Title} from './components/Title';

class DankPage extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Images/>
            </div>
        );

    }
}

ReactDOM.render(<DankPage/>, document.getElementById('app'));
