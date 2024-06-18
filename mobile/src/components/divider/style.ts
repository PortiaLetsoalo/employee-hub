import { StyleSheet } from 'react-native';
import { useTheme } from '../../providers/theme';
import type { IShaDivider } from './interface';
import { flatten } from '../../utils/index';
import { Colors } from '../../utils/constants/index';

const getStyling = (props: IShaDivider) => {
  const { vertical } = props;
  let isHorizontal = !vertical;
  const { themeColors } = useTheme();

  return StyleSheet.create({
    parentContainer: flatten([
      {
        width: isHorizontal ? '100%' : 0.8,
        height: isHorizontal ? 1.0 : '100%',
      },
      props.containerStyle,
    ]),
    dividerViewStyle: flatten([
      {
        width: isHorizontal ? '100%' : 0,
        height: isHorizontal ? 0 : '100%',
      },
      {
        borderStyle: props.dashed ? 'dashed' : 'solid',
        borderColor:
          props.color ?? themeColors?.dividerColor ?? Colors.DefaultBorderColor,
      },
      props.dividerViewStyle,
    ]),
  });
};

export { getStyling };
