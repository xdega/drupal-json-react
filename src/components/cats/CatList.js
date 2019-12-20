import React from 'react';
import CatItem from "./CatItem";

export default class CatList extends React.Component {
    
     constructor() {
      super();
      this.state = { data: null };
      this.loadPosts = this.loadPosts.bind(this);
      this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.loadPosts();
    }

    updateData(responseData) {
        this.setState({
            data: responseData.data
        });
    }

    loadPosts() {
        console.log("Loading posts...");
        fetch(this.props.url, {mode:'cors'})
            .then(function (response) {
                return response.json();
            })
            .then((data) => this.updateData(data))
            .catch(err => console.log('Fetching Posts Failed', err));
    }

    render() {
        return (
            <div className="text-center">
              { this.state.data !== null && this.state.data !== undefined && this.state.data.length > 0 ?
                   this.state.data.map(item => <CatItem {...item} key={item.id}/>)
                   :
                    <div className="text-center mt-2 p-3 bg-red-200 border-solid border-red-300 border">No cats found.</div>
              }
            </div>
        );
    }
}
