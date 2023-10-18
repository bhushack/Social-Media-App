import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import BioData from '../components/profile/BioData'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <BioData />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default ProfileScreen