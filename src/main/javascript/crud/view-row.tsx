import React = require("react");
import ReactDOM = require("react-dom");
import { Product } from "./types";

export class ProductViewRow extends React.Component<Props,void> {

  onDeleteClicked() {
    this.props.onDelete( this.props.product.id );
  }

  render(): JSX.Element|any {
    return (
      <tr>
        <td>
          {this.props.product.name}
        </td>
        <td>
          {this.props.product.price}
        </td>
        <td>
          <button onClick={ e => this.onDeleteClicked() }>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

interface Props {
  product: Product;
  onDelete: ( id: number ) => void;
}