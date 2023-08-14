import React, {Component} from 'react'
import {
    SafeAreaView, 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions, 
    TextInput
} from 'react-native';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;
 export default Login = ({ navigation }) => {
    return(
        <ImageBackground style={{height: '100%', width: '100%', backgroundColor: 'pink' }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: '100%', width: '100%'}}>
                    <View style={{width: '100%', height: '20%', marginTop: 0.3 * windownHeight, alignItems: 'center'}}>
                        <View style={{ width: '70%', height: 30, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                            <Text style={{color: 'white'}}>Email</Text>
                            <TextInput style={{height: '100%', width: '70%', borderBottomColor: 'white', borderBottomWidth: 1, textAlign:'right'}} autoCapitalize='none' />
                        </View>
                        <View style={{ width: '70%', height: 30, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop: 10}}>
                            <Text style={{color: 'white'}}>Password</Text>
                            <TextInput style={{height: '100%', width: '70%', borderBottomColor: 'white', borderBottomWidth: 1, textAlign:'right', paddingRight: 30}} autoCapitalize='none' />
                        </View>

                    </View>
                    <View style={{width: '100%', height: '20%',  marginTop: 0.15 * windownHeight, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{width: '60%', height:'30%', borderColor: 'white', borderWidth: 1, borderRadius: 100, backgroundColor: '#18A2EB', justifyContent:'center',alignItems:'center'}}
                            onPress={() => {
                                console.log('goto app0')
                                navigation.navigate('App')
                            }}
                            >
                            <Text style={{color:'white', fontSize: 20}}>Đăng Nhập</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#4D33B9',marginTop: 20, width: '60%', height:'30%', borderColor: 'white', borderWidth: 1, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'white', fontSize: 20}}>Đăng ký</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </SafeAreaView>

        </ImageBackground>
    )
 }