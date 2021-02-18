import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import Tags from "react-native-tags";

const JobItem = props => {
    return (
        <View style = {styles.container}>
            <View style = {styles.upperContainer}>
                <Image style = {styles.ImageContainer} source = {{ uri : props.imageURL}}/>
                <View style = {styles.descriptionContainer}>
                <Text style = {styles.companyContainer}>{props.company}</Text>
                <Text style = {styles.titleContainer} numberOfLines = {2}>{props.title}</Text>
                </View>
            </View>
            <View style = {styles.middleContainer}>
                <View style = {styles.underlineTextContainer}>
                <Text style = {styles.timeContainer}>{props.time}</Text>
                </View>
                <View style = {styles.typesContainer}>
                <Text style = {styles.textType}>{props.type}</Text>
                </View>
            </View>
            <View style = {styles.tagsContainer}>
            <ScrollView style = {styles.ScrollViewContainer} horizontal={true}>
                {props.tags.map(tag => <TouchableOpacity style = {styles.tagText}><Text key = {tag} style = {styles.myTextContainer} numberOfLines = { 1 }>{tag}</Text></TouchableOpacity>)}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 240,
        width: 350,
        padding: 30,
        marginTop: 10,
        backgroundColor: '#FAF7F7',
        borderRadius: 7,
        marginBottom: 10

    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
        },
    ImageContainer: {
        width: 70,
        height: 70,
        padding: 10,
        alignItems: 'stretch'
    },
    descriptionContainer: {
        padding: 10,
        justifyContent: "center"
    },
    companyContainer: {
        textAlign: 'left',
        marginBottom: 10.
    },
    titleContainer: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    middleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40
    },
    underlineTextContainer: {
        borderBottomWidth: 1,
        borderColor: '#3B3C3B',
        marginLeft: 10,
        width: '100%',
        padding: 5,
    },
    timeContainer: {
        fontStyle: 'italic',
        marginBottom: 10
    },
    typesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BAFFC7',
        // width: 50,
        height: 18,
        padding: 2,
        borderRadius: 2
        
    },
    textType: {
        color: '#27AF40',
        fontSize: 15
    },
    tagsContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "flex-start",

    },
    tagText: {
        backgroundColor: '#CDC9C9',
        padding: 1,
        textAlign: 'center',
        borderRadius: 3,
        height: 30,
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: "flex-start",
    },
    myTextContainer: {
        fontSize: 16,
        textAlign: "center",
        
    }
});

export default JobItem;