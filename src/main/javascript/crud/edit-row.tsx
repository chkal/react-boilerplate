import React = require("react");
import ReactDOM = require("react-dom");
import { Product } from "./types";

export class ProductEditRow extends React.Component<Props,void> {

  private nameInput: HTMLInputElement;
  private priceInput: HTMLInputElement;

  private onSave() {
    this.props.onCommit( {
      id: this.props.product.id,
      name: this.nameInput.value,
      price: Number( this.priceInput.value )
    } );
  }

  private onCancel() {
    this.props.onCancel();
  }

  render(): JSX.Element|any {
    return (
      <tr>
        <td>
          <input type="text" className="form-control"
                 ref={ input => this.nameInput = input }
                 defaultValue={this.props.product.name}/>
        </td>
        <td>
          <input type="text" className="form-control"
                 ref={ input => this.priceInput = input }
                 defaultValue={this.props.product.price.toFixed(2)}/>
        </td>
        <td className="text-center">
          <button onClick={ e => this.onSave() } className="btn btn-default">
            Save
          </button>
          <button onClick={ e => this.onCancel() } className="btn btn-default">
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}

interface Props {
  product: Product;
  onCommit: ( p: Product ) => void;
  onCancel: () => void;
}