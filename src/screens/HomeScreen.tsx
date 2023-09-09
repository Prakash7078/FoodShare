import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SampleCards from '../Components/SampleCards';
import About from '../Components/About';
import Contact from '../Components/Contact';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navbar navigation={navigation}/>
        <Hero/>
        <SampleCards/>
        <About/>
        <Contact/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});
export default HomeScreen;
