import { provider } from '../framework';
const {browser} = provider;
// import LoginFragment
const { $ } = provider.elementsInterface;
const { waitForCondition } = provider.waiters;

describe('Login test suite', () => {
  beforeEach('Set up', async () => {
    await browser.get('http://localhost:4000');
    await waitForCondition(async () => await $('body').isPresent());
    await browser.executeScript(() => localStorage.clear());
    await browser.get('http://localhost:4000');
  });

  it('Admin success login', async () => {
    // await new LoginFragment().login({ username: 'admin', password: 'admin' });
    // await waitForCondition(async () => await $('#table_page').isDisplayed());
    // await waitForCondition(async () => await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed());
  });

  it('User success login', async () => {
    // await new LoginFragment().login({ username: 'test', password: 'test' });
    // await waitForCondition(async () => await $('#table_page').isDisplayed());
    // await waitForCondition(async () => !(await $('xpath=//button[text()="До адмін кабінету"]').isDisplayed()));
  });
});
