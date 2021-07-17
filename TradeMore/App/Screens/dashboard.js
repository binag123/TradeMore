
import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useState } from 'react/cjs/react.production.min';
const DATA = [
    {
        id: '1',
        currency: 'EURUSD',
        amount1: '1.233456',
        amount2: '1.23456',
        status: false
    },
    {
        id: '2',
        currency: 'EURUSD',
        amount1: '1.233456',
        amount2: '1.23456',
        status: false
    },
    {
        id: '3',
        currency: 'EURUSD',
        amount1: '1.233456',
        amount2: '1.23456',
        status: true
    },
];

class Dashboard extends Component {
constructor(props){
    super(props)
    this.state={
        isvisible:false
    }
}
     renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>this.setState({isvisible:true})}
         style={styles.item}>
            {/* <View style={{width:'5%',height:'30%'}}> */}
            <View style={[styles.TriangleShapeView, { borderBottomColor: item.status ? '#046cb5' : '#666' }]}></View>
            {/* </View> */}
            <Text style={[styles.title, { width: '30%' }]}>{item.currency}</Text>
            <Text style={[styles.title, { width: '30%' }]}>{item.amount1}</Text>
            <Text style={[styles.title, { width: '30%' }]}>{item.amount2}</Text>
        </TouchableOpacity>
    );
render(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '8%', backgroundColor: 'blue', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../Assets/menu.png')} style={{ width: 24, height: 24, tintColor: '#fff' }} />
                <Text style={{ fontSize: 16, width: '70%', color: '#fff' }} >Quotes</Text>
                <Image source={require('../Assets/plus.png')} style={{ width: 24, height: 24, tintColor: '#fff' }} />
                <Image source={require('../Assets/edit.png')} style={{ width: 24, height: 24, tintColor: '#fff' }} />
            </View>
            <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
            <Modal 
            onBackButtonPress={()=>this.setState({isvisible:false})}
            isVisible={this.state.isvisible}>
                <View style={{ width:'100%',height:100,backgroundColor:'#fff',justifyContent:'center',alignItems:'center' }}>
                    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-around'}}>
                        <TouchableOpacity style={{width:'45%',justifyContent:'center',backgroundColor:'#0a798f',alignItems:'center'}} >
                            <Text style={styles.btnTxt}>BUY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:'45%',backgroundColor:'#0a798f',justifyContent:'center',alignItems:'center'}} >
                            <Text style={styles.btnTxt}>SELL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fff',
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 20,
    },
    TriangleShapeView: {
        //To make Triangle Shape
        width: 0,
        height: 0,
        borderLeftWidth: 20,
        transform: [{ rotate: "180deg" }],
        // borderRightWidth: 60,
        borderBottomWidth: 20,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
    },
    btnTxt:{
        paddingHorizontal:'5%',
        // backgroundColor:'#666',
        color:'#fff',
        paddingHorizontal:'5%'
    }
});

export default Dashboard;