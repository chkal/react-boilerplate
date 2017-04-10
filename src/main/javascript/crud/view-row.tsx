import React = require("react");
import ReactDOM = require("react-dom");
import { Product } from "./types";

export class ProductViewRow extends React.Component<Props,void> {

  onEditClicked() {
    this.props.onEdit( this.props.product.id );
  }

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
        <td className="text-center">
          <button onClick={ e => this.onEditClicked() } className="btn btn-default">
            Edit
          </button>
          <button onClick={ e => this.onDeleteClicked() } className="btn btn-danger">
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
  onEdit: ( id: number ) => void;
}