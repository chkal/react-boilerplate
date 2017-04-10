import React = require("react");
import ReactDOM = require("react-dom");
import FormEvent = React.FormEvent;
import KeyboardEvent = React.KeyboardEvent;

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

  private addOnEnter( e: KeyboardEvent<HTMLInputElement> ) {
    if( e.which === 13 ) {
      this.add();
    }
  }

  render(): JSX.Element|any {
    return (
      <tr>
        <td>
          <input type="text" className="form-control"
                 ref={ input => this.nameInput = input }
                 onKeyPress={ e => this.addOnEnter(e) }/>
        </td>
        <td>
          <input type="text" className="form-control"
                 ref={ input => this.priceInput = input }
                 onKeyPress={ e => this.addOnEnter(e) }/>
        </td>
        <td className="text-center">
          <button onClick={ e => this.add() } className="btn btn-primary">
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