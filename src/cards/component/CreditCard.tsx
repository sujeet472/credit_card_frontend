
import { useState, ChangeEvent, FocusEvent } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

type Focused = "name" | "number" | "expiry" | "cvc" | "";

interface CardState {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: Focused; // Use Focused type
}

const PaymentForm: React.FC = () => {
  const [state, setState] = useState<CardState>({
    number: '67463',
    expiry: '',
    cvc: '',
    name: '',
    focus: '', // Use an empty string as an initial value
  });

//   const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = evt.target;
//     setState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
//     const name = evt.target.name as Focused; // Type assertion
//     setState((prev) => ({ ...prev, focus: name }));
//   };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      {/* <form>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form> */}
    </div>
  );
};

export default PaymentForm;
