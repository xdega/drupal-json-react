import React from 'react';

export default class CatItem extends React.Component {
    render() {
        return (
          <div className="md:w-1/4 m-2 mt-2 shadow md:inline-block">
            <h2 className="text-white text-lg bg-gray-800 p-2 py-1">{ this.props.source_tld || "..." }</h2>
            <div className="bg-gray-200 border-2 border-gray-300 border-t-0 p-2"> 
              <img className="m-auto" src={ this.props.images.fixed_height.url } alt={ this.props.title || "Untitled" } />   
            </div>
          </div>
        );
    }
}
