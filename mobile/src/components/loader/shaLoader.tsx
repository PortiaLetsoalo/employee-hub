import React, { FC, Fragment } from 'react';
import { Platform, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { IShaLoaderProps} from './interface';
import styles from './styles';
import ShaText from '../text/shaText';
import ShaView from '../view/shaView';
import { useTheme } from '../../providers/theme';
import { Colors } from '../../utils/constants';

const ShaLoader: FC<IShaLoaderProps> = (props) => {
  const {
    children,
    loading,
    loadingText,
    loaderColor,
    customIndicator,
    type = 'obscure',
    overlayType = 'flat',
    ...properties
  } = props;
  const { themeColors } = useTheme();

  if (type === 'overlay') {
    return (
      <Fragment>
        {loading ? (
          overlayType === 'flat' ? (
            <ShaView style={styles.overlayContainer}>
              <ActivityIndicator
                color={loaderColor ?? 'white'}
                size={Platform.OS === 'android' ? 'large' : 'small'}
                style={styles.overlayIndicator}
              />
              <ShaText style={styles.loadingText}>
                {loadingText ?? 'Loading...'}
              </ShaText>
            </ShaView>
          ) : (
            <ShaView style={styles.circularLoaderParentContainer}>
              <ShaView style={styles.circularLoaderContainer}>
                {customIndicator ? (
                  customIndicator
                ) : (
                  <ActivityIndicator
                    color={
                      loaderColor ??
                      themeColors?.accentColor?.toString() ??
                      Colors.DefaultAccentColor
                    }
                    size={Platform.OS === 'android' ? 28 : 'small'}
                  />
                )}
              </ShaView>
              {loadingText ? (
                <ShaText style={styles.circularLoaderText}>
                  {loadingText}
                </ShaText>
              ) : null}
            </ShaView>
          )
        ) : null}
      </Fragment>
    );
  }

  if (!loading) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator {...properties} />
    </View>
  );
};

ShaLoader.defaultProps = {
  size: 'large',
};

export default ShaLoader;
