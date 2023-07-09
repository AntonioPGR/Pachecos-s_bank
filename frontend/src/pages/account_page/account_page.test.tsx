describe('Test statments display', () => {
  it.todo('is load when page load');
  it.todo('is updated after a balance update');
});

describe('Test balance display', () => {
  it.todo('is load when page load');
  it.todo('is updated after a withdraw');
  it.todo('is updated afer a deposit');
});

describe('Test withdraw actions', () => {
  it.todo('An error is throwed when the balance in insufficent');
  it.todo(
    'Is made a request to register the withdraw when balance is sufficient'
  );
  it.todo('An error is throwed when the value is 0');
  it.todo('An error is throwed when the value is less than 0');
});

describe('Test deposit actions', () => {
  it.todo('Is made a request to register the deposit');
  it.todo('An error is throwed when the value is 0');
  it.todo('An error is throwed when the value is less than 0');
});

export {};
