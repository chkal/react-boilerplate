import React = require("react");
import ReactDOM = require("react-dom");
import { ProductAddRow } from "./add-row";
import { ProductViewRow } from "./view-row";
import { Product } from "./types";

export class ProductTable extends React.Component<any,State> {

  private nextId: number = 1;

  constructor( props: any, context: any ) {
    super( props, context );
    this.state = {
      products: []
    };
  }

  addProduct( name: string, price: number ) {
    this.setState( ( oldState ) => {
      return {
        products: [...oldState.products, { id: this.nextId++, name, price }]
      };
    } )
  }

  deleteProduct( id: number ) {
    this.setState( oldState => {
      return {
        products: oldState.products.filter( p => p.id !== id )
      };
    } );
  }

  render(): JSX.Element|any {
    return (
      <div>
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <ProductAddRow onAdd={ (n,p) => this.addProduct(n,p) }/>
            {
              this.state.products.map( product => (
                <ProductViewRow product={product}
                                key={product.id}
                                onDelete={ p => this.deleteProduct(p) }/>
              ) )
            }
          </tbody>
        </table>
      </div>
    );
  }

}

interface State {
  products: Product[];
}