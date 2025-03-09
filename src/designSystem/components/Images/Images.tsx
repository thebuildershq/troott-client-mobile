import React from 'react';
import { Image, ImageProps, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native';

interface CustomImageProps extends ImageProps {
  source: ImageSourcePropType;
  size?: number; // Added size prop to control width & height
}

const CustomImage: React.FC<CustomImageProps> = (iprops) => {
  const { source, size, style,  ...props } = iprops;

  return (
    <Image
      source={source}
      style={[{ width: size, height: size }, style as StyleProp<ImageStyle>]} 
      {...props}
    />
  );
};

export default CustomImage;
