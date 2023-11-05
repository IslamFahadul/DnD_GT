
import ImageSort from './ImageSort';
import { render, fireEvent } from '@testing-library/react';
import { expect } from '@jest/globals';
import { describe,it } from '@jest/globals';

describe('ImageSort component', () => {
    const images = [
        { id: 1, title: 'Image-1' },
        { id: 2, title: 'Image-2' },
        { id: 3, title: 'Image-3' },
    ];

    it('displays images in the correct order when sort button is clicked', () => {
        const { getByText, getAllByTestId } = render(<ImageSort images={images} />);
        const sortButton = getByText('Sort Images');
        fireEvent.click(sortButton);
        const imageTitles = getAllByTestId('image-title').map((titleElement) => titleElement.textContent);
        const sortedTitles = images.map((image) => image.title).sort();
        expect(imageTitles).toEqual(sortedTitles);
    });

    it('displays images in reverse order when reverse button is clicked', () => {
        const { getByText, getAllByTestId } = render(<ImageSort images={images} />);
        const reverseButton = getByText('Reverse Images');
        fireEvent.click(reverseButton);
        const imageTitles = getAllByTestId('image-title').map((titleElement) => titleElement.textContent);
        const reversedTitles = images.map((image) => image.title).reverse();
        expect(imageTitles).toEqual(reversedTitles);
    });
  });

