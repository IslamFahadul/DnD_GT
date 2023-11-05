import { render, screen } from '@testing-library/react';
import Grid from '../Grid';
import { it } from '@testing-library/react';
import { expect } from '@testing-library/jest-dom';

 // eslint-disable-next-line no-undef
    describe('Grid functionality', () => {
    it('renders images correctly', () => {
        const images = [
        { id: 1, src: 'image-1.webp', alt: 'Image 1' },
        { id: 2, src: 'image-2.webp', alt: 'Image 2' },
        { id: 3, src: 'image-3.webp', alt: 'Image 3' },
        ];
        render(<Grid images={images} />);
        const imageElements = screen.getAllByRole('img');
        expect(imageElements).toHaveLength(images.length);
        imageElements.forEach((img, index) => {
        expect(img).toHaveAttribute('src', images[index].src);
        expect(img).toHaveAttribute('alt', images[index].alt);
        });
    });

    it('renders a message when there are no images', () => {
        render(<Grid images={[]} />);
        const messageElement = screen.getByText('No images to display.');
        expect(messageElement).toBeInTheDocument();
    });
    });
