/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ViroARScene, ViroARSceneNavigator, ViroAnimations, ViroBox, ViroMaterials, ViroText } from '@viro-community/react-viro';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { wood } from './assets';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const InitialScene=()=> {
  ViroMaterials.createMaterials(
    {
      wood:{
        diffuseTexture: wood
      }
    }
  );
  ViroAnimations.registerAnimations({
    rotate:{
      duration: 2300,
      properties:{
        rotateY: '+=90'
      }
    }
  })
  return (
    <ViroARScene>
      {/* <ViroText
      text='Helloworld'
      position={[0, -2, -12]}
      style={{fontSize:100,color: "red"}}
      /> */}
      <ViroBox
      height={3}
      width={3}
      length={3}
      materials={["wood"]}
      scale={[0.2, 0.5, 0.2]}
      position={[0, -2, -3]}
      animation={{name:"rotate", loop:true, run:true}}
      />
    </ViroARScene>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ViroARSceneNavigator
    initialScene={{scene:InitialScene}}
    style={{flex:1}}

    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
