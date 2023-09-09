import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';
import React, {useState} from 'react'
import { Picker } from '@react-native-picker/picker';

const AddData = ({value}) => {
    const [name, setName] = useState('');
  const [kind, setKind] = useState('restaurants');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const[addData,setAddData]=useState(true);
  const handleSubmit = () => {
    database()
    .ref('/donators/'+value)
    .set({
      name:name,
      id:value,
      kind:kind,
      amount:amount,
      desc:description,
      date:date,
      place:place,
    })
    .then(() => alert('Food Added...'));
    setAddData(false);
    
  };
  return (
    <View>
      {addData && 
      <View style={styles.form}>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
  
            <Text style={styles.text}>Donars</Text>
            <Picker
              selectedValue={kind}
              onValueChange={(value) => setKind(value)}
            >
              <Picker.Item label="Restaurant" value="restaurant" />
              <Picker.Item label="People" value="people" />
              <Picker.Item label="Functions" value="functions" />
            </Picker>
  
            {/* Add subfield selection logic here if needed */}
  
            <Text style={styles.text}>Amount</Text>
            <TextInput style={styles.input}
              placeholder="Amount in plates"
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="numeric"
            />
            {/* <Slider
                step={1}
                minimumValue={0}
                maximumValue={100}
                value={amount}
                onValueChange={slideValue => setAmount(slideValue)}
                minimumTrackTintColor="#1fb28a"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#b9e4c9"
              /> */}
  
            <Text style={styles.text}>Date</Text>
            <TextInput style={styles.input}
              placeholder="DD-MM-YYYY"
              value={date}
              onChangeText={(text) => setDate(text)}
              keyboardType="numeric"
            />
  
            <Text style={styles.text}>Place</Text>
            <TextInput style={styles.input}
              placeholder="Place"
              value={place}
              onChangeText={(text) => setPlace(text)}
            />
            <Text style={styles.text}>Description</Text>
            <TextInput style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
              multiline={true}
              numberOfLines={4}
            />
            <Button color='red'  title="Submit" onPress={handleSubmit} />
          </View>}

    </View>
  )
}

export default AddData

const styles = StyleSheet.create({
    form:{
        padding:20,
      },
      input:{
        borderWidth:2,
        marginBottom:5,
        color:'black',
        backgroundColor:'lightgrey',
      },
      text:{
        fontWeight:'bold',
        color:'black',
        fontSize:18,
      },
})