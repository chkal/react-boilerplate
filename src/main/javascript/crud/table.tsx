import React = require("react");
import ReactDOM = require("react-dom");
import { ProductAddRow } from "./add-row";
import { ProductViewRow } from "./view-row";
import { Product } from "./types";
import { ProductEditRow } from "./edit-row";

export class ProductTable extends React.Component<any,State> {

  private nextId: number = 1;

  constructor( props: any, context: any ) {
    super( props, context );
    this.state = {
      products: [],
      editing: null
    };
  }

  addProduct( name: string, price: number ) {
    this.setState( ( oldState ) => {
      const product = {
        id: this.nextId++,
        name,
        price
      };
      return {
        products: [...oldState.products, product],
        editing: null
      };
    } )
  }

  private editStart( id: number ) {
    this.setState( {
      editing: id
    } );
  }

  private editCommit( product: any ) {
    this.setState( oldState => {
      return {
        products: oldState.products.map( p => p.id === product.id ? product : p ),
        editing: null
      };
    } );
  }

  private editCancel() {
    this.setState( oldState => {
      return {
        ...oldState,
        editing: null
      }
    } );
  }

  private deleteProduct( id: number ) {
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
                product.id === this.state.editing
                  ? <ProductEditRow product={product}
                                    key={product.id}
                                    onCommit={ p => this.editCommit(p) }
                                    onCancel={ () => this.editCancel() }/>
                  : <ProductViewRow product={product}
                                    key={product.id}
                                    onEdit={ id => this.editStart(id)}
                                    onDelete={ id => this.deleteProduct(id) }/>
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
  editing: number;
}