import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Button} from 'react-native'
import database from '@react-native-firebase/database';
import React, {useState,useEffect} from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RenderOnFlat from '../Components/RenderOnFlat';
import AddData from '../Components/AddData';

const DonatorsScreen = ({navigation}) => {
    const[newId,setNewId]=useState('');
    const[myData,setMyData]=useState('');
    const[addFood,setAddFood]=useState(false);
    const readData=()=>{
        database()
        .ref('/donators/')
        .on('value', snapshot => {
          if (snapshot.val() !== null) {
            setMyData(snapshot.val());
            setNewId(snapshot.val().length);
          } else {
            setNewId(0);
            // Handle the case when 'messages' is null (or not an array)
            // For example, set a default value or show an error message
            // setNewId(0); // Default value
            // console.error("No data in 'messages'");
          }
        });
    };
    useEffect(()=>{
        readData();
    },[])
  return (
    <ScrollView>
    <KeyboardAvoidingView>
      <Text style={styles.headtext}>DonatorsScreen</Text>
      <Button color='green' title='Add Food' onPress={()=>setAddFood(true)}/>
      <View >
        <FlatList data={myData} 
          renderItem={({item})=><RenderOnFlat item={item} navigation={navigation} />}/>
      </View>
      {addFood && 
          <AddData value={newId}/>
      }
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default DonatorsScreen

const styles = StyleSheet.create({
  headtext:{
    textAlign:'center',
    fontWeight:'bold',
    color:'black',
    fontSize:20,
    marginVertical:10,  
  },
  
})