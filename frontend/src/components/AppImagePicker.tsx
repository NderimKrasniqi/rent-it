import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import colors from '../utils/colors';

interface AppImagePickerProps {
  name: string;
  control: Control;
  rules?: RegisterOptions;
}

const AppImagePicker = ({ name, control, rules }: AppImagePickerProps) => {
  const {
    field: { onChange, value },
  } = useController({ name, control, rules });

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

  return (
    <View className="bg-red-500 flex-1 justify-center items-center rounded-lg">
      <TouchableOpacity onPress={() => pickImage()}>
        {value ? (
          <Image source={{ uri: value }} className="w-60 h-full rounded-lg" />
        ) : (
          <Image
            source={require('../assets/imgPlaceholder.jpg')}
            className=" h-full rounded-lg"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppImagePicker;
