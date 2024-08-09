import {StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import newTheme from '../utils/Constants';
const IconLibrary = {
  AntDesign,
  Entypo,
  FontAwesome5,
  EvilIcons,
  FontAwesome,
};
const CustomInputs = props => {
  const Icon = IconLibrary[props.iconFamily]
  
    const [secureTextEntry, setSecureTextEntry] = useState(false);
    const toggleSecureTextEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };

  return (
    <View
      style={{
        justifyContent: props.content ,
        backgroundColor: props.backgroundcolor ? backgroundcolor:newTheme.white,
        width: props.widthbox ? props.widthbox: '95%',
        borderRadius: props.radius ? props.radius:10,
        flexDirection: props.direction ? props.direction:'row',
        borderWidth: props.bdwidth ?props.bdwidth:2,
        borderColor: props.bordercolor ? props.bordercolor:newTheme.white,
        margin: props.margin,
        alignItems: props.align ? props.align:'center',
        elevation:props.elevation? props.elevation : 5,
      }}>
      {Icon && props.name && (
        <Icon name={props.name} 
        size={props.size ? props.size:25} 
        color={props.iconColor ? props.iconColor:newTheme.black} />
      )}
      
      {props.placeholder && (
        <TextInput
          style={{
            width: props.wbox ? props.wbox:'80%',
            fontFamily:newTheme.regular ,
            backgroundColor: props.bgColor ? props.bgColor:newTheme.white,
            fontSize:14,
            color: newTheme.black,
          }}
          placeholder={props.placeholder}
          keyboardType='default'
          secureTextEntry={secureTextEntry}
          placeholderTextColor={newTheme.black}
          onChangeText={props.onChange}
        />
      )}
      {props.showPassword&&
        <TouchableOpacity  onPress={toggleSecureTextEntry}>
          <Entypo
            name={secureTextEntry?"eye-with-line" :'eye'}
            size={props.sizeIcon  ? props.sizeIcon : 25}
            color={props.colorIcon ? props.colorIcon : newTheme.black}
          />
        </TouchableOpacity>
      }
    </View>
  );
};

export default CustomInputs;

const styles = StyleSheet.create({});
