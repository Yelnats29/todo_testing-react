import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders an h1 tag', () => {
  const app = render(<App />);
  const heading = app.getByRole('heading');
  expect(heading).toHaveTextContent('Get It Done!');
});

test('The Show All Task section exists', () => {
  const app = render(<App />);
  const inputElement = app.getByPlaceholderText('Enter Task Here')
  const addButton = app.getByText('+');

  fireEvent.change(inputElement, {target: {value: 'New Task'} });
  fireEvent.click(addButton);

  const taskItem = app.getByText('New Task');
  expect(taskItem).toBeInTheDocument();
});

test('cross out task when completed', () => {
  const app = render(<App />);
  const inputElement = app.getByPlaceholderText('Enter Task Here')
  const addButton = app.getByText('+');

  fireEvent.change(inputElement, {target: {value: 'New Task'} });
  fireEvent.click(addButton);

  const taskItem = app.getByText('New Task');
  fireEvent.click(taskItem);

  expect(taskItem).toHaveClass('completed');


// Another Click to reset it back
fireEvent.click(taskItem);
expect(taskItem).not.toHaveClass('completed');
});


test('removes a todo item', () => {
  const app = render(<App />);
  const inputElement = app.getByPlaceholderText('Enter Task Here');
  const addButton = app.getByText('+');

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  const deleteTask = app.getByText('Delete Task');
  fireEvent.click(deleteTask);

  const taskItem = app.queryByText('New Task');
  expect(taskItem).not.toBeInTheDocument();
});