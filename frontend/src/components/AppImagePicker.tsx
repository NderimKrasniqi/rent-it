import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import colors from '../utils/colors';

interface AppImagePickerProps {
  name: string;
  control: Control;
}

const AppImagePicker = ({ name, control }: AppImagePickerProps) => {
  const {
    field: { onChange, value },
  } = useController({ name, control });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (!result.cancelled) {
      onChange(result.uri);
    }
  };

  return (
    <View className="flex-1 w-full justify-center items-center">
      <TouchableOpacity onPress={() => pickImage()}>
        {value ? (
          <Image
            source={{ uri: value }}
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
        ) : (
          <Image
            className="h-32 w-32 rounded-full"
            source={require('../assets/imgPlaceholder.jpg')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppImagePicker;
