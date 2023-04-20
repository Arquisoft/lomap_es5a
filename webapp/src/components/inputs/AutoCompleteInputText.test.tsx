import { cleanup, render, screen } from '@testing-library/react';
import AutoCompleteInputText from './AutoCompleteInputText';

describe('AutoCompleteInputText', () => {
  
  afterAll(cleanup);

  test('renders AutoCompleteInputText component', () => {
    render(<AutoCompleteInputText />);
    const freeSoloInput = screen.getByLabelText('freeSolo');
    const searchInput = screen.getByLabelText('Search input');
    expect(freeSoloInput).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
