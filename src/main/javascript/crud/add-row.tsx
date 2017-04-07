import React = require("react");
import ReactDOM = require("react-dom");

export class ProductAddRow extends React.Component<Props,void> {

  private nameInput: HTMLInputElement;
  private priceInput: HTMLInputElement;

  private add() {
    this.props.onAdd(
      this.nameInput.value,
      Number( this.priceInput.value )
    );
    this.nameInput.value = "";
    this.priceInput.value = "";
  }

  render(): JSX.Element|any {
    return (
      <tr>
        <td>
          <input type="text"
                 ref={ input => this.nameInput = input }/>
        </td>
        <td>
          <input type="text"
                 ref={ input => this.priceInput = input }/>
        </td>
        <td>
          <button onClick={ e => this.add() }>
            Add
          </button>
        </td>
      </tr>
    );
  }
}

interface Props {
  onAdd: ( name: string, price: number ) => void;
}