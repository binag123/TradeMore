import React, { Component } from 'react'
import { Image, View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView,Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Login extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{width:windowWidth,height:windowHeight }}>
                <LinearGradient colors={['#7ec7f7', '#32a8fa', '#0099ff']} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={styles.headingTxt}>Login</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ width: '85%', backgroundColor: '#fff', borderBottomRightRadius: 120 / 2, borderTopRightRadius: 120 / 2, overflow: 'hidden' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Image source={require('../Assets/user.png')} style={{ width: 16, height: 16, resizeMode: 'contain', tintColor: '#0099ff' }} />
                                <TextInput
                                    style={styles.inptStyle}
                                    placeholder='username'
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Image source={require('../Assets/lock.png')} style={{ width: 16, height: 16, resizeMode: 'contain', tintColor: '#0099ff' }} />
                                <TextInput
                                    style={[styles.inptStyle, { borderBottomWidth: 0 }]}
                                    placeholder='Password'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dashboard')}
                        style={{ width: 50, height: 50, backgroundColor: '#fff', position: 'absolute', borderRadius: 50 / 2, elevation: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Assets/right-arrow.png')} style={{ width: 28, height: 28, resizeMode: 'contain', tintColor: '#0099ff' }} />
                        </TouchableOpacity>
                    </View>
                    {/* <View>
                    <TextInput
                    placeholder='username'
                    />
                </View> */}
                </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Login

const styles = StyleSheet.create({
    headingTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    inptStyle: {
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderBottomWidth: 0.5,
        width: '90%'
    }
})