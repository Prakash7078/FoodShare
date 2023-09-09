import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
const Navbar=({navigation})=>{
    return (
        <View style={styles.navbar}>
          <Image style={styles.img} source={require('../Images/sharefood.jpg')}/>
          <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Restaurants</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>People</Text>
              </TouchableOpacity>
          </View>
          <Button title="Donars" color='red' onPress={()=>navigation.navigate('Donars', {name: 'Donate'})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width:50,
        height:50,
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        gap:5,
    },button: {
        backgroundColor: 'transparent', // Set your desired background color
        padding:6,
        borderRadius:5,
      },
      buttonText: {
        color: 'white', // Set the text color
        textAlign: 'center',
        fontWeight: 'bold', // Optional: Customize text style
      },
    navbar:{
        flex:1,
        backgroundColor:'orange',
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    }
})
export default Navbar;