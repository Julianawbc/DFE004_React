//import React from 'react';
//import { render, screen } from '@testing-library/react';
//import App from './App';

//test('renders learn react link', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});

// src/App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title element", () => {
  render(<App />);
  const titleElement = screen.getByText(/React Posts Sharer/i);
  expect(titleElement).toBeInTheDocument();
});