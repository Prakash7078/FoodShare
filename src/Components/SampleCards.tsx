import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

const SampleCards = (): JSX.Element => {
    return (
        <View>
          <Text style={styles.headText}>Food Need Communities</Text>
          <ScrollView horizontal={true} style={styles.container}>
              <View style={styles.container1}>
                  <Image style={styles.image} source={require('../Images/save-food.jpg')}/>
                  <View>
                      <Text style={styles.text}>Old age home</Text>
                      <Text style={styles.text}>Guntur 4-42</Text>
                      <Text style={styles.text}>+91 9704688559</Text>
                  </View>
              </View>
              <View style={styles.container1}>
                  <Image style={styles.image} source={require('../Images/save-food.jpg')}/>
                  <View>
                      <Text style={styles.text}>Vruddhula Seva Samstha</Text>
                      <Text style={styles.text}>Guntur 4-42</Text>
                      <Text style={styles.text}>+91 9704688559</Text>
                  </View>
              </View>
              <View style={styles.container1}>
                  <Image style={styles.image} source={require('../Images/save-food.jpg')}/>
                  <View>
                      <Text style={styles.text}>Old age home</Text>
                      <Text style={styles.text}>Guntur 4-42</Text>
                      <Text style={styles.text}>+91 9704688559</Text>
                  </View>
              </View>
          </ScrollView>
        </View>
      );
};

const styles = StyleSheet.create({
    headText:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        color:'black',
        paddingVertical:20,
    },
    text:{
        textAlign:'center',
        color:'black',
    },
    image:{
        height:300,
        width:400,
        objectFit:'cover',
    },
    container:{
        flex:1,
        flexDirection:'row',
        marginBottom:26,
    },
    container1:{
        flex:1,
        flexDirection:'column',
        width:'full',
    },
    
});
export default SampleCards;