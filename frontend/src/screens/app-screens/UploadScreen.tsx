import { View, Text, Modal } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import colors from '../../utils/colors';
interface UpploadProps {
  show: boolean;
  progress: number;
  onDone: () => void;
}

const UploadScreen = ({ show, onDone, progress = 0 }: UpploadProps) => {
  return (
    <Modal visible={show}>
      <View className="flex-1 justify-center items-center">
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            source={require('../../assets/done.json')}
            loop={false}
            autoPlay
            style={{ width: 150 }}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;
