import React from 'react';
import {create, act} from 'react-test-renderer';
import {Icon} from '@rneui/themed';
import ShaIcon from '../shaIcon';
import {useTheme} from '../../../providers/theme';

jest.mock('@rneui/themed', () => ({
  Icon: 'Icon',
}));

jest.mock('../../../providers/theme', () => ({
  useTheme: jest.fn(),
}));

describe('ShaIcon Component', () => {
  let tree;
  const mockTheme = {
    themeColors: {
      iconColor: 'blue',
    },
  };

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);

    const defaultProps = {
      name: 'home',
      type: 'font-awesome',
      size: 24,
      color: 'red',
      onPress: jest.fn(),
      containerStyle: {padding: 10},
      iconStyle: {margin: 5},
    };

    tree = create(<ShaIcon {...defaultProps} />);
  });

  it('matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('is defined', () => {
    expect(
      <ShaIcon name={'home'} type={'antdesign'} size={14} />,
    ).toBeDefined();
  });

  it('renders with correct props', () => {
    const instance = tree.root;
    expect(instance.findByType(Icon).props.name).toEqual('home');
    expect(instance.findByType(Icon).props.type).toEqual('font-awesome');
    expect(instance.findByType(Icon).props.size).toEqual(24);
    expect(instance.findByType(Icon).props.color).toEqual('red');
    expect(instance.findByType(Icon).props.containerStyle).toEqual({
      padding: 10,
    });
    expect(instance.findByType(Icon).props.iconStyle).toEqual({margin: 5});
  });

  it('handles onPress correctly', () => {
    const instance = tree.root;
    const onPressMock = instance.props.onPress;

    act(() => {
      instance.findByType(Icon).props.onPress();
    });

    expect(onPressMock).toHaveBeenCalled();
  });

  it('updates props correctly', () => {
    act(() => {
      tree.update(
        <ShaIcon
          name="user"
          type="material"
          size={30}
          color="green"
          containerStyle={{margin: 20}}
          iconStyle={{padding: 10}}
        />,
      );
    });

    const instance = tree.root;
    expect(instance.findByType(Icon).props.name).toEqual('user');
    expect(instance.findByType(Icon).props.type).toEqual('material');
    expect(instance.findByType(Icon).props.size).toEqual(30);
    expect(instance.findByType(Icon).props.color).toEqual('green');
    expect(instance.findByType(Icon).props.containerStyle).toEqual({
      margin: 20,
    });
    expect(instance.findByType(Icon).props.iconStyle).toEqual({padding: 10});
  });
});
