import React from 'react';
import PostItem from "./PostItem";

export default class PostList extends React.Component {
    render() {
        let { data } = this.props 
        return (
            <div>
                <h1 className="text-3xl uppercase font-black text-gray-800">
                    The posts
                </h1>
               { data !== null && data !== undefined && data.length > 0 ?
                   data.map(item => <PostItem {...item} key={item.id}/>)
                   :
                    <div>No posts found.</div>
               }
            </div>
        );
    }
}
