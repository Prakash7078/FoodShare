import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';
import React, {useState} from 'react'
import { Picker } from '@react-native-picker/picker';

const UpdateData = ({route}) => {
  const { item } = route.params;
  if (!item) {
    return null; // Or you can render a placeholder or loading component
  }
    const [name, setName] = useState(item.name);
  const [kind, setKind] = useState(item.kind);
  const [amount, setAmount] = useState(item.amount);
  const [description, setDescription] = useState(item.desc);
  const [date, setDate] = useState(item.date);
  const [place, setPlace] = useState(item.place);
  const handleSubmit = () => {
    database()
    .ref('/donators/'+item.id)
    .update({
      name:name,
      id:item.id,
      kind:kind,
      amount:amount,
      desc:description,
      date:date,
      place:place,
    })
    .then(() => alert('Food Updated...'));
  };
  return (
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
        </View>
  )
}

export default UpdateData

const styles = StyleSheet.create({
    form:{
        padding:20,
      },
      input:{
        borderWidth:2,
        marginBottom:5,
        backgroundColor:'lightgrey',
      },
      text:{
        fontWeight:'bold',
        fontSize:18,
        color:'black',
      },
})