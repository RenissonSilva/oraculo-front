import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: any;
  x: SharedValue<number>;
};

const CustomButton = ({flatListRef, flatListIndex, dataLength, x}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const navigation = useNavigation();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(140)
          : withSpring(60),
      height: 60,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH, 3 * SCREEN_WIDTH, 4 * SCREEN_WIDTH],
      ['#917CFF', '#202733', '#765756', '#7450E9', '#002A2A'],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
        } else {
          navigation.navigate('home');
        }
      }}>
      <Animated.View
        style={[styles.container, buttonAnimationStyle, animatedColor]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>
          Iniciar
        </Animated.Text>
        <Animated.Image
          source={require('../assets/images/ArrowIcon.png')}
          style={[styles.arrow, arrowAnimationStyle]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2169',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
  },
  textButton: {color: 'white', fontSize: 16, position: 'absolute'},
});
