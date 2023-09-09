import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
const Hero=()=>{
    return (
        <View>
          <Image style={styles.image} source={require('../Images/wastefood.jpg')} />
        </View>
      )
}

const styles = StyleSheet.create({
    image:{
        objectFit:'cover',
        width:'full',
        height:250,
    }
});
export default Hero;