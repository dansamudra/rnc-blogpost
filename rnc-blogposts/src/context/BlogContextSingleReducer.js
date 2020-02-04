import React, { useReducer } from 'react';
import createDataContext from './createDataContext'

const BlogContext = React.createContext();

//useReducer=using a switch statement with action object
//
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost=()=> {
        dispatch({type:'add_blogpost'})
    };

    return (
        //Provider is an Object that provide information that child component can get
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )

}

export default BlogContext;