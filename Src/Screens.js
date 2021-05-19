import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

export const Home = ({navigation}) => {   // home is called on header home screen will render and on button click goes to Details screen
    return (
        <View style={styles.container}>
            <Text>Welcome to Home Screen.... </Text>
            <Button style={styles.button} title='Details' onPress={()=> navigation.navigate('Details')}/>
        </View>
    )
}

export const SignIn = ({navigation}) => {
    return(
        <View style={styles.container}> 
            <Text style={styles.text}>Welcome To Sign In Screen ... </Text>
            <Button style={styles.button} title='Sign In' onPress={()=> navigation.navigate('CreateAccount')}/>
            <Button style={styles.button} title='CreateAccount' onPress={()=> navigation.navigate('CreateAccount')}/>
        </View>
    )
}

export const CreateAccount = () => {
    return(
        <View style={styles.container}>
            <Text>Welcome To CreateAccount Screen ... </Text>
        </View>
    )
}

export const Search = () => {
    return(
        <View style={styles.container}>
            <Text>Welcome To Search Screen ... </Text>
        </View>
    )
}

export const Details = () => {
    return(
        <View style={styles.container}> 
            <Text>Welcome To Details Screen ... </Text>
        </View>
    )
}

export const Setting = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome To Setting Screen ... </Text>
            <Button style={styles.button} title='Search' onPress={()=> navigation.navigate('Search')}/>
            <ScrollView>
                <Text style={styles.hellotext}>Hello</Text>
                <Text style={styles.hellotext}>Hello</Text>
                <Text style={styles.hellotext}>Hello</Text>
                <Text style={styles.hellotext}>Hello</Text>
                <Text style={styles.hellotext}>Hello</Text>
                <Text style={styles.hellotext}>Hello</Text>
                <Text style={styles.hellotext}>Hello</Text>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: 200,
        alignItems: 'center',
        top: 200,
        right: 75,
    },
    text:{
        
    },
    button:{
        top: 10,
    },
    hellotext:{
        height: 50,
    },
})
