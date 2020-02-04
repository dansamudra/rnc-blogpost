import React, { useState } from 'react';

const BlogContext = React.createContext();



export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts, 
            { title: `Blog Post #${blogPosts.length + 1}`}
        ]);
        //it mean create new array and take all blogPosts then add to new array
    };
    
    return (
        //Provider is an Object that provide information that child component can get
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )

}

export default BlogContext;