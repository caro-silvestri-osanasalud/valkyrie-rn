import { render, fireEvent } from "@testing-library/react-native";
import BtnAction from "./button";

test("renders content", () => {
    const txt =  "Esto es un test";
    const component = render(<BtnAction text={txt}/>);
  component.getByText(txt)
    expect(component).toBeDefined()
});


test("renders content", () => {
    const txt =  "Esto es un test";
    const component = render(<BtnAction text={txt}/>);
    component.getByText('holaaa')
    expect(component).toBeDefined()
});

test("renders content", () => {
    const txt =  "Esto es un test";
    const component = render(<BtnAction text={txt}/>);
    
    fireEvent.press(component.getByText(txt))
    

    expect(component).toBeDefined()
});

