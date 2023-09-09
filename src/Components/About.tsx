import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'

const About=()=>{
    return (
        <View>
          <Text style={styles.aboutText}>About</Text>
          <View style={styles.cont1}>
              <Text style={{paddingHorizontal:10,color:'black',}}>Taking the food from companies, restaurants, people and provide contacts of trusts, organizations we are sharing only quality food to them. If you want to participate for this join and provide some food to people who always fetching for food.</Text>
              <Image style={styles.img} source={require('../Images/donate.jpg')} />
          </View>
  
        </View>
      )
}

const styles = StyleSheet.create({
    cont1:{
        flex:1,
        alignItems:'center',
        gap:16,
    },
    aboutText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'black',
    }
    
});
export default About;