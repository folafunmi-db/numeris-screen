import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './index';

describe('Button', () => {
  test('renders button with default variant', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('uppercase text-base leading-[19.89px] py-[24px] px-[86px] transition bg-[#003EFF] hover:bg-[#003EFF]/[.90] text-white rounded-[40px] font-medium');
  });

  test('renders button with variant 2', () => {
    render(<Button variant={2}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('uppercase text-sm leading-[17.4px] py-[24px] px-[86px] outline-offset-[-1px] transition bg-[#FFFFFF] hover:bg-[#E3E6EF]/10 outline outline-1 outline-[#E3E6EF] text-[#697598] font-medium rounded-[40px]');
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('custom-class');
  });

  test('passes through additional props', () => {
    render(<Button data-testid="test-button">Test Button</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });
});