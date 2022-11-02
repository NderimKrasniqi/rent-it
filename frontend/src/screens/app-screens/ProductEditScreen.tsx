import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppView from '../../components/AppScreen';
import AppImagePicker from '../../components/AppImagePicker';
import AppFormInput from '../../components/AppFormInput';
import { FieldValues, useForm } from 'react-hook-form';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import { useAddProduct } from '../../hooks/useProduct';
import UploadScreen from './UploadScreen';
import { useUser } from '../../hooks/useUser';

const ProductEditScreen = () => {
  const [show, setShow] = useState(false);
  const { data } = useUser();
  const { progress, mutate: addProduct } = useAddProduct();
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset();
  }, []);

  const onSubmit = (input: FieldValues) => {
    setShow(true);
    addProduct({ product: input, userId: data?.id });
  };

  return (
    <AppView className="flex-1 bg-light px-5">
      <UploadScreen
        progress={progress}
        show={show}
        onDone={() => setShow(false)}
      />
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
