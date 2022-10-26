import { View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';

const AppImagePicker = () => {
  const [image, setImage] = React.useState<string>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 0,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.base64);
      console.log(result.base64);
    }
  };

  return (
    <View className="flex-1 w-full justify-center items-center">
      <TouchableOpacity onPress={() => pickImage()}>
        {image ? (
          <Image
            source={{ uri: 'data:image/jpeg;base64,' + image }}
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
