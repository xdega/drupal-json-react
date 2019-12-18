import React from 'react';
import Moment from 'react-moment';

export default class PostItem extends React.Component {

    render() {
        return (
            <div className="mt-2 shadow">
                <h2 className="text-white text-lg bg-gray-800 p-2 py-1 rounded-lg-t">{ this.props.attributes.title }</h2>
                <div className="bg-gray-200 border-2 border-gray-300 border-t-0 p-2"> 
                    <div className="mb-3 text-gray-800" dangerouslySetInnerHTML={{ __html: this.props.attributes.body.value }} />
                    <div className='inline-block px-2 py-0 text-white bg-yellow-600'></div>
                    <Moment className="float-right block px-2 py-0 text-white bg-yellow-600" fromNow>{ this.props.attributes.changed }</Moment>
                </div>
            </div>
        );
    }
}
