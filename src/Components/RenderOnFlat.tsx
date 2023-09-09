import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import database from '@react-native-firebase/database';
import UpdateData from './UpdateData';

const RenderOnFlat = ({item,navigation}) => {
    if (!item) {
        return null; // Or you can render a placeholder or loading component
      }
    
    const Delete=async(id)=>{
        await database().ref('/donators/'+id).remove();
        alert("deleted...")
    }
  return (
    <View style={styles.container}>
        <Text style={styles.text}><Text style={styles.text}>Name </Text>{item.name}</Text>
        <Text style={styles.text}><Text style={{fontWeight:'bold',}}>Donars </Text> {item.kind}</Text>
        <Text style={styles.text}><Text style={{fontWeight:'bold',}}>Amount(in plates) </Text>{item.amount}</Text>
        <Text style={styles.text}><Text style={{fontWeight:'bold',}}>Description </Text>{item.desc}</Text>
        <Text style={styles.text}><Text style={{fontWeight:'bold',}}>Date  </Text>{item.date}</Text>
        <Text style={styles.text}><Text style={{fontWeight:'bold',}}>Place </Text>{item.place}</Text>
        <View style={styles.container1}>
            <TouchableOpacity style={styles.button} onPress={()=>Delete(item.id)}>
                <View style={styles.button}>
                        <Text style={{fontWeight:'bold',color:'white',}}>Delete</Text>
                </View>        
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("update",{ item, name: 'Update Form' })}>
                <View style={styles.button}>
                        <Text style={{fontWeight:'bold',color:'white',}}>Update</Text>
                </View>        
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default RenderOnFlat;

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        color:'black',
    },
    container:{
        borderWidth:2,
        padding:10,
        margin:10,
        flex:1,
        gap:3,
    },
    container1:{
        flex:1,
        flexDirection:'row',
        gap:20,
    },
    button:{
        backgroundColor:'red',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:3,
    },
    
})