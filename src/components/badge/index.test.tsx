import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from './index';

describe('Badge', () => {
  test('renders badge with default style', () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('border rounded-[24px] font-medium');
  });

  test('renders badge with "paid" type', () => {
    render(<Badge type="paid" />);
    const badge = screen.getByText('paid');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('uppercase border-[#12904333] bg-[#E6FFF0] px-[12px] py-[7.5px] rounded-[18px] text-[7.5px] text-[#129043] leading-[12px]');
  });

  test('renders badge with "overdue" type', () => {
    render(<Badge type="overdue" />);
    const badge = screen.getByText('overdue');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('uppercase border-[#FF566333] bg-[#FFF4F5] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#FF5663] leading-[12.43px]');
  });

  test('renders badge with "draft" type', () => {
    render(<Badge type="draft" />);
    const badge = screen.getByText('draft');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('uppercase border-[#373B4733] bg-[#F6F8FA] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#373B47] leading-[12.43px]');
  });

  test('renders badge with "pending payment" type', () => {
    render(<Badge type="pending payment" />);
    const badge = screen.getByText('pending payment');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('uppercase border-[#D98F0033] bg-[#FFF8EB] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#D98F00] leading-[12.43px]');
  });

  test('renders badge with "partial payment" type', () => {
    render(<Badge type="partial payment" />);
    const badge = screen.getByText('partial payment');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('uppercase border-[#003EFF33] bg-[#F2FBFF] px-[24px] py-[7.5px] rounded-[24px] text-[10px] text-[#003EFF] leading-[12.43px]');
  });

  test('applies custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText('Custom Badge');
    expect(badge).toHaveClass('custom-class');
  });

  test('renders custom children', () => {
    render(<Badge>Custom Content</Badge>);
    const badge = screen.getByText('Custom Content');
    expect(badge).toBeInTheDocument();
  });
});