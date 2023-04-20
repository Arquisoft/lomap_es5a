import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import BaseTextArea from './BaseTextArea';

describe('BaseTextArea component', () => {

  afterAll(cleanup);
    
  test('renders textarea', () => {
    const label = 'Description';
    const placeholder = 'Enter your description here...';
    const mockOnChange = jest.fn();

    render(
      <BaseTextArea
        label={label}
        name="description"
        value=""
        placeholder={placeholder}
        onChange={mockOnChange}
      />
    );

    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeInTheDocument();

    const textareaElement = screen.getByPlaceholderText(placeholder);
    expect(textareaElement).toBeInTheDocument();

    const textarea = textareaElement as HTMLTextAreaElement;

    textarea.value = 'Sample text';
    expect(textarea.value).toBe('Sample text');
  });

  test('Generacion de un UID random', () => {
    const label = 'Test label';
    const mockOnChange = jest.fn();

    render(
      <BaseTextArea label={label} name="test" value="" onChange={mockOnChange} />
    );

    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeInTheDocument();

    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();

    const id = textareaElement.getAttribute('id');
    expect(id).toBeDefined();
  });
});
