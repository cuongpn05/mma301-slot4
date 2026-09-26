import React, { useState } from 'react';

import {
  View,
  Button,
  StyleSheet,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';

import StyledScreen from './screens/StyledScreen';

export default function App() {

  const [showStyled, setShowStyled] =
    useState(false);

  return (
    <View style={styles.container}>

      {showStyled ? (
        <StyledScreen />
      ) : (
        <HomeScreen />
      )}

      <View style={styles.footer}>

        <Button
          title={
            showStyled
              ? 'Xem StyleSheet'
              : 'Xem Styled-Components'
          }
          onPress={() =>
            setShowStyled(!showStyled)
          }
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});