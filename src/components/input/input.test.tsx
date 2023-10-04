import { render, fireEvent } from "@testing-library/react-native";
import InputTest from "./input";

/* test('form submits two answers', () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();

  const { getAllByLabelText, getByText } = render(
    <InputTest questions={allQuestions} onSubmit={mockFn} />
  );

  const answerInputs = getAllByLabelText('answer input');

  fireEvent.changeText(answerInputs[0], 'a1');
  fireEvent.changeText(answerInputs[1], 'a2');
  fireEvent.press(getByText('Submit'));

  expect(mockFn).toHaveBeenCalledWith({
    '1': { q: 'q1', a: 'a1' },
    '2': { q: 'q2', a: 'a2' },
  });
}) */

test('lenght ok', () => {
  
  const mockFn = jest.fn();

  const { getByPlaceholderText } = render(
    <InputTest questions="Hola"  />
  );

  const inputElement = getByPlaceholderText('Enter text'); 
  expect(inputElement).toBeDefined();

  // Simula el evento de escritura en el input
  fireEvent.changeText(inputElement, 'Hello, world!');

  // Verifica que el valor del input se haya actualizado
  expect(inputElement.value).toBe('Hello, world!');
})