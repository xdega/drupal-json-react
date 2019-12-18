import React from 'react';
import PostItem from "./PostItem";

export default class PostList extends React.Component {
    
     constructor() {
      super();
      this.state = { data: null };
      this.state.title = "posts";
      this.loadPosts = this.loadPosts.bind(this);
      this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.loadPosts();
    }

    updateData(responseData) {
        this.setState({
            data: responseData.data,
            included: responseData.included
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
            <div>
               { this.state.data !== null && this.state.data !== undefined && this.state.data.length > 0 ?
                   this.state.data.map(item => <PostItem {...item} key={item.id}/>)
                   :
                    <div>No posts found.</div>
               }
            </div>
        );
    }
}
