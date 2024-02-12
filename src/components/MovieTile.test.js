import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <MovieTile posterUrl="samplePosterUrl" movieNmae="Sample Movie" />
    );

    // Check if the component renders the movie name correctly
    const movieNameElement = getByText('Sample Movie');
    expect(movieNameElement).toBeTruthy();

    // Check if the image is rendered correctly
    const imageElement = getByTestId('movie-tile-image');
    expect(imageElement).toBeTruthy();
  });

    // Rest of the test cases   
});
