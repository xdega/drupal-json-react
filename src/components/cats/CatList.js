import React from 'react';
import CatItem from "./CatItem";
import Preloader from "../Preloader";

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
              { this.state.data ? this.state.data.map(item => <CatItem {...item} key={item.id}/>) :
                <Preloader /> 
              }
            </div>
        );
    }
}
