import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect } from 'react';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import colors from '../utils/colors';

interface AppImagePickerProps {
  name: string;
  control: Control;
  rules?: RegisterOptions;
}

const AppImagePicker = ({ name, control, rules }: AppImagePickerProps) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (!result.cancelled) {
      onChange(result.uri);
    } else {
      onChange(null);
    }
  };

  const {
    field: { onChange, value, ref },
  } = useController({ name, control, rules });

  return (
    <TouchableOpacity onPress={() => pickImage()}>
      {value ? (
        <View className="w-full h-full rounded-lg overflow-hidden">
          <Image
            source={{ uri: value }}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
      ) : (
        <View className="border-dashed border border-medium  w-full h-full justify-center items-center bg-white rounded-lg overflow-hidden">
          <Image
            source={require('../assets/imgPlaceholder.jpg')}
            className="w-28 h-28 rounded-full"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppImagePicker;
