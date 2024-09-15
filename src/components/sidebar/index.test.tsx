import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar } from './index';

// Mock the List component
jest.mock('./list', () => ({
  List: ({ items }: { items: {label: string}[] }) => (
    <ul data-testid="mocked-list">
      {items.map((item) => (
        <li key={item.label}>{item.label}</li>
      ))}
    </ul>
  ),
}));

// Mock the icon components
jest.mock('../icons/logo', () => ({ Logo: () => <div data-testid="logo" /> }));
jest.mock('../icons/house', () => ({ HouseIcon: () => <div data-testid="house-icon" /> }));
jest.mock('../icons/small-grid', () => ({ SmallGridIcon: () => <div data-testid="small-grid-icon" /> }));
jest.mock('../icons/invoice', () => ({ InvoiceIcon: () => <div data-testid="invoice-icon" /> }));
jest.mock('../icons/small-people', () => ({ SmallPeopleIcon: () => <div data-testid="small-people-icon" /> }));
jest.mock('../icons/help', () => ({ HelpIcon: () => <div data-testid="help-icon" /> }));
jest.mock('../icons/settings', () => ({ SettingsIcon: () => <div data-testid="settings-icon" /> }));

describe('Sidebar', () => {
  test('renders sidebar with logo and list', () => {
    render(<Sidebar />);

    // Check if the sidebar container is rendered
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('fixed top-0 gap-10 text-sm bg-white hidden md:flex min-h-full w-[280px] py-10 px-6 flex-col');

    // Check if the logo is rendered
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();

    // Check if the list is rendered
    const list = screen.getByTestId('mocked-list');
    expect(list).toBeInTheDocument();

    // Check if all menu items are rendered
    const menuItems = [
      'Getting Started',
      'Overview',
      'Accounts',
      'Invoice',
      'Beneficiary Management',
      'Help Center',
      'Settings'
    ];

    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});