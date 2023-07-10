import { SessionKey } from 'models/session_key';
import { renderWithProviders } from 'utils/test_renders';
import { SideBar } from '.';
import { mock_matchMedia } from 'utils/mock_matchMedia';
import { screen } from '@testing-library/react';
import { not_logged_in_menu_links } from 'data/menu_links';

jest.mock('models/session_key');

describe('Test side bar when not logged in', () => {
  beforeEach(() => {
    mock_matchMedia();
    (SessionKey.is_set as jest.Mock).mockImplementation(() => false);
  });

  it('should display just login link', () => {
    renderWithProviders(<SideBar />);
    const links = screen.getAllByTestId('menu_link');
    expect(links).toHaveLength(not_logged_in_menu_links.length);
  });
});

it.todo('Test side bar when logged in');
// describe('Test side bar when logged in', () => {
//   beforeEach(() => {
//     mock_matchMedia();
//     (SessionKey.is_set as jest.Mock).mockImplementation(() => true);
//   });

//   it('should display logout, account and investments link', () => {
//     renderWithProviders(<SideBar />);
//     const links = screen.getAllByTestId('menu_link');
//     expect(links).toHaveLength(logged_in_menu_links.length);
//   });
// });
