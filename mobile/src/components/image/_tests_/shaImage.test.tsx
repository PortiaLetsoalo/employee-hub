import React from 'react';
import { create, act } from 'react-test-renderer';
import ShaImage from '../shaImage';

const createShaImage = (source, style) =>
  create(<ShaImage source={source} style={style} />);

describe('ShaImage Component', () => {
  let tree;
  
  beforeEach(() => {
    tree = createShaImage({
      uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      height: 200,
      width: 200,
    }, { width: 200, height: 200 }); // Default style
  });

  it('matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('is defined', () => {
    expect(
      <ShaImage
        source={{
          uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
          height: 200,
          width: 200,
        }}
        style={{ width: 200, height: 200 }} // Ensure style is an object
      />
    ).toBeDefined();
  });

  it('renders with correct props', () => {
    const instance = tree.root;
    expect(instance.props.source.uri).toEqual(
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    );
    expect(instance.props.source.height).toEqual(200);
    expect(instance.props.source.width).toEqual(200);
    expect(instance.props.style).toEqual({ width: 200, height: 200 });
  });

  it('updates props correctly', () => {
    act(() => {
      tree.update(
        <ShaImage
          source={{
            uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            height: 300,
            width: 300,
          }}
          style={{ width: 300, height: 300 }}
        />
      );
    });

    const instance = tree.root;
    expect(instance.props.source.uri).toEqual(
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    );
    expect(instance.props.source.height).toEqual(300);
    expect(instance.props.source.width).toEqual(300);
    expect(instance.props.style).toEqual({ width: 300, height: 300 });
  });
});
