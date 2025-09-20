import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Switch,
  Image,
} from 'react-native';

export default function SpotifyLogin() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState({ dd: '', mm: '', yy: '' });
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [remember, setRemember] = useState(true);

  function onSubmit() {
    if (mode === 'signin') {
      if (!email || !password) return Alert.alert('Missing fields', 'Enter email and password');
      return Alert.alert('Signed in', `Welcome back, ${email}`);
    }

    // signup
    if (!email || !username || !password) return Alert.alert('Missing fields', 'Complete all fields');
    return Alert.alert('Signed up', `Welcome, ${username}`);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topLogo}>
        <View style={styles.logoWrap}>
          <Image source={require('../../assets/images/partial-react-logo.png')} style={styles.logoImage} />
        </View>
        <Text style={styles.appTitle}>Spotify</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.modeToggle}>
            <TouchableOpacity onPress={() => setMode('signin')} style={[styles.modeButton, mode === 'signin' && styles.modeActive]}>
              <Text style={[styles.modeText, mode === 'signin' && styles.modeTextActive]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMode('signup')} style={[styles.modeButton, mode === 'signup' && styles.modeActive]}>
              <Text style={[styles.modeText, mode === 'signup' && styles.modeTextActive]}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {mode === 'signup' && (
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Full name"
              placeholderTextColor="#5b5b5b"
              style={styles.input}
            />
          )}

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            placeholderTextColor="#5b5b5b"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#5b5b5b"
            secureTextEntry
            style={styles.input}
          />

          {mode === 'signup' && (
            <View>
              <Text style={styles.smallLabel}>Date Of Birth</Text>
              <View style={styles.dobRow}>
                <TextInput placeholder="DD" placeholderTextColor="#5b5b5b" style={[styles.input, styles.dobInput]} value={dob.dd} onChangeText={(t) => setDob((s) => ({ ...s, dd: t }))} />
                <TextInput placeholder="MM" placeholderTextColor="#5b5b5b" style={[styles.input, styles.dobInput]} value={dob.mm} onChangeText={(t) => setDob((s) => ({ ...s, mm: t }))} />
                <TextInput placeholder="YY" placeholderTextColor="#5b5b5b" style={[styles.input, styles.dobInput]} value={dob.yy} onChangeText={(t) => setDob((s) => ({ ...s, yy: t }))} />
              </View>

              <View style={styles.genderRow}>
                <TouchableOpacity onPress={() => setGender('male')} style={[styles.genderButton, gender === 'male' && styles.genderActive]}>
                  <Text style={[styles.genderText, gender === 'male' && styles.genderTextActive]}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGender('female')} style={[styles.genderButton, gender === 'female' && styles.genderActive]}>
                  <Text style={[styles.genderText, gender === 'female' && styles.genderTextActive]}>Female</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={styles.rowBetween}>
            <View style={styles.rememberRow}>
              <Switch value={remember} onValueChange={setRemember} trackColor={{ true: '#1DB954' }} />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Forgot password', 'Password reset flow')}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={onSubmit}>
            <Text style={styles.primaryText}>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</Text>
          </TouchableOpacity>

          <Text style={styles.or}>Sign {mode} With</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn} onPress={() => Alert.alert('Continue with Facebook')}>
              <Text style={styles.socialText}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn} onPress={() => Alert.alert('Continue with Google')}>
              <Text style={styles.socialText}>G</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.smallText}>{mode === 'signin' ? "Don't have an account?" : 'Already have an account?'} </Text>
            <TouchableOpacity onPress={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
              <Text style={styles.linkText}>{mode === 'signin' ? 'Sign Up' : 'Sign In'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0fb84b',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  topLogo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoWrap: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  logoImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#121212',
    marginBottom: 8,
  },
  appTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#0f0f0f',
    padding: 20,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
  },
  modeToggle: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#0b0b0b',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  modeActive: {
    backgroundColor: '#121212',
  },
  modeText: {
    color: '#9a9a9a',
  },
  modeTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#121212',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#232323',
  },
  smallLabel: {
    color: '#9a9a9a',
    marginBottom: 8,
  },
  dobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dobInput: {
    flex: 1,
    marginRight: 8,
  },
  genderRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 12,
  },
  genderButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#0b0b0b',
    marginRight: 8,
    alignItems: 'center',
  },
  genderActive: {
    backgroundColor: '#1DB954',
  },
  genderText: {
    color: '#9a9a9a',
  },
  genderTextActive: {
    color: '#000',
    fontWeight: '700',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#bfc0c0',
    marginLeft: 8,
  },
  forgot: {
    color: '#9a9a9a',
  },
  primaryButton: {
    backgroundColor: '#1DB954',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  or: {
    color: '#9a9a9a',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0b0b0b',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    color: '#fff',
    fontWeight: '700',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  smallText: {
    color: '#9a9a9a',
  },
  linkText: {
    color: '#1DB954',
    marginLeft: 6,
  },
});
