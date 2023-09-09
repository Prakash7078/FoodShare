import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const[newId,setNewId]=useState('');
    const readData=()=>{
      database()
      .ref('/messages/')
      .on('value', snapshot => {
        if (snapshot.val() !== null) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    database()
    .ref('/messages/'+newId)
    .set({
      name:name,
      email:email,
      desc:description,
      phone:phone,
    })
    .then(() => alert('Message Added...'));
    setName('');
    setEmail('');
    setDescription('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
        <View style={{flex:1,alignItems:'center',gap:5,marginVertical:16,}}>
            <Text style={styles.contact}>Contact</Text>
            <Text style={styles.label}>If u have any queries feel free to contact with us.</Text>
        </View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
    contact:{
        fontWeight:'bold',
        color:'black',
        fontSize:20,
    },
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color:'black',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },

});

export default Contact;
