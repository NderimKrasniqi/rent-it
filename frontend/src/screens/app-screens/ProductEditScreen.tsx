import { View } from 'react-native';
import React from 'react';
import AppView from '../../components/AppScreen';
import AppImagePicker from '../../components/AppImagePicker';
import AppFormInput from '../../components/AppFormInput';
import { FieldValues, useForm } from 'react-hook-form';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import dataApi from '../../api/data';
import { useMutation } from '@tanstack/react-query';

const ProductEditScreen = () => {
  const { mutate } = useMutation(dataApi.addProduct);
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (input: FieldValues) => {
    mutate(input);
    reset({ title: '', price: '', image: '', city: '' });
  };

  return (
    <AppView className="flex-1 bg-light px-5">
      <View className="border border-red-500 flex h-1/4">
        <AppImagePicker name="image" control={control} />
      </View>
      <View className="border border-green-500 flex h-3/4">
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
