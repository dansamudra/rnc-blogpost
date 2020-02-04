import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'
import BlogFormPost from '../component/BlogPostForm';

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    return (
        // props name in this are make up name
        <BlogFormPost
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('Index'));
            }}
        />
    )
}

const styles = StyleSheet.create({

})

export default CreateScreen