import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { onDelete } from './apptest';
import { addTodo } from './apptest';
import {apps} from './apptest';
import { AddTodo } from './MyComponents/AddTodo';

const fakeLocalStorage = (function () {         //mocking
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

let todo1 = new apps
export function saveToStorage(value) {
  window.localStorage.setItem('the-key', value);
}
let todos = todo1.todos

test('renders learn react link', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/About/i);
  const linkElement2 = screen.getByText(/Add Todo/i);
  const linkElement3 = screen.getByText(/My Todos List/i);

  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});

afterEach(cleanup)

it('should take a snapshot', () => {
  const { asFragment } = render(<App />)

  expect(asFragment(<App />)).toMatchSnapshot()
});

it('addtodo func', () => {
  todo1.addTodo('Test title', 'Test desc')
  let todo = {
    sno: 1,
    title: 'Test title',
    desc: 'Test desc'
  }
  let temp = todo1.todos.filter((e) => {
    return e == todo
  });
  console.log(todo1.todos)
  expect(todo1.todos.length).toBe(1);
})

it('delete todo', () => {
  let todo = {
    sno: 1,
    title: 'Test title',
    desc: 'Test desc'
  }
  todo1.onDelete(todo)
  let temp={}
  if (todos == null) {
  }
  else {
    let temp = todo1.todos.filter((e) => {
      return e == todo
    });
  }
  expect(todo1.todos.length).toBe(0);
})


describe('storage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('saves the key to the storage', () => {
    saveToStorage('fake-value');

    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });
});