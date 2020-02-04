import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

//hooks is function that add-in some additional functionality to function component
const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
    getBlogPosts()
    //useEffect is props that make sure we just run the code one time.. 
    //..when the app start re render
    useEffect(()=>{
        getBlogPosts();
        const listener = navigation.addListener('didFocus', ()=>{
            getBlogPosts();
        });
        return()=>{
            listener.remove();
        }
    }, [])
    //empty array is to make arrow function run exactly one time

    return (
        <View>
            
            <FlatList
                data={state}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', { id: item.id })}
                        >
                            <View style={styles.row}>
                                <Text styles={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather style={styles.icon} name='trash' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>

    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:()=>(
            <TouchableOpacity
                onPress={() => navigation.navigate('Create')}
            >
                <Feather name='plus' size={30} />
            </TouchableOpacity>
        )
    }
}

styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen