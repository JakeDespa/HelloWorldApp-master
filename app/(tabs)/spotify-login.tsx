import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SpotifyLogin() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/spotify-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Log in to Spotify</Text>
      <TextInput placeholder="Email or username" style={styles.input} placeholderTextColor="#b3b3b3" />
      <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#b3b3b3" secureTextEntry />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupLink} onPress={() => {}}>
        <Text style={styles.signupText}>Don’t have an account? <Text style={{ color: '#1DB954' }}>Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 32,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#282828',
    color: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#1DB954',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  or: {
    color: '#b3b3b3',
    marginVertical: 8,
  },
  altButton: {
    width: '100%',
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginBottom: 8,
  },
  altButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 24,
  },
  signupText: {
    color: '#b3b3b3',
    fontSize: 14,
  },
});
