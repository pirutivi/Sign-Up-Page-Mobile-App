import React, { useState } from 'react';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,KeyboardAvoidingView,Platform,SafeAreaView,ScrollView} from 'react-native';


export default function Index() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>

    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Link href="../" style={styles.backButton}>
              <AntDesign name="left" size={24} color="black" />
            </Link>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo_law.jpeg')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.inputContainer}>

            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Nazriya Fahad"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />



            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="user@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="****"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Text style={styles.label}>Re-enter Password</Text>
            <TextInput
              style={styles.input}
              placeholder="****"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />


            <TouchableOpacity style={styles.SignUpButton}>
              <Text style={styles.SignUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Already have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.LoginLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </>

  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6E9F0',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 0 : 16,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },

  SignUpButton: {
    backgroundColor: '#87CEEB',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },

  SignUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 16,
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
  },
  LoginLink: {
    fontSize: 14,
    color: '#87CEEB',
    fontWeight: '600',
  },
});