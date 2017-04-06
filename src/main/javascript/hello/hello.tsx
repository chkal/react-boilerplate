import React = require("react");
import ReactDOM = require("react-dom");

export class Hello extends React.Component<Props,void> {

  constructor( props: Props, context: any ) {
    super( props, context );
  }

  render(): JSX.Element|any {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }

}

interface Props {
  name: string;
}