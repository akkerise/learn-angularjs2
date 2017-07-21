import { TodoAngularjs2Page } from './app.po';

describe('todo-angularjs2 App', () => {
  let page: TodoAngularjs2Page;

  beforeEach(() => {
    page = new TodoAngularjs2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
