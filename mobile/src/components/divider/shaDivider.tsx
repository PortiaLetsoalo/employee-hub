import React, { FC } from 'react';
import ShaView from '../view/shaView';
import { IShaDivider} from './interface';
import { getStyling } from './style';

const ShaDivider: FC<IShaDivider> = (props) => {
  const style = getStyling(props);
  return (
    <ShaView style={style.parentContainer}>
      <ShaView style={style.dividerViewStyle} />
    </ShaView>
  );
};

ShaDivider.defaultProps = {
  vertical: false,
};

export default ShaDivider;
