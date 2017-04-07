import React = require("react");
import ReactDOM = require("react-dom");

export class Hello extends React.Component<Props,void> {

  render(): JSX.Element|any {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }

}

interface Props {
  name: string;
}