import { View } from 'react-native';
import React from 'react';
import AppView from '../../components/AppScreen';
import AppImagePicker from '../../components/AppImagePicker';
import AppFormInput from '../../components/AppFormInput';
import { FieldValues, useForm } from 'react-hook-form';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import { useProduct } from '../../hooks/useProduct';

const ProductEditScreen = () => {
  const { createProduct } = useProduct();
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (input: FieldValues) => {
    createProduct(input);
    reset({ title: '', price: '', image: '', city: '' });
  };

  return (
    <AppView className="flex-1 bg-light px-5">
      <View className="flex h-1/4">
        <AppImagePicker
          name="image"
          control={control}
          rules={{
            required: 'You need to provide an image',
          }}
        />
      </View>
      <View className="flex h-3/4">
        <AppFormInput name="title" placeholder="Title" control={control} />
        <AppFormInput name="city" placeholder="City" control={control} />
        <AppFormInput name="price" placeholder="Price" control={control} />
        <AppButton
          color="bg-primary-500"
          underlayColor={colors.primaryTint}
          title="Save"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </AppView>
  );
};

export default ProductEditScreen;
