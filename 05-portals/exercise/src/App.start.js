/*

Have `Portal` create a new DOM element, append it to document.body and then
render its children into a portal. We want to have portal create the new dom
node when it mounts, and remove it when it unmounts.

Tips:

- in componentDidMount, create a new dom node and append it to the body
  - `document.createElement('div')`
  - `document.body.append(node)`
- in componentWillUnmount, remove the node from the body with
  `document.body.removeChild(node)`

Finally, the menu will be rendered out of DOM context so the styles will be all
wrong, you'll need to provide a `style` prop with fixed position and left/top
values.  To help out, we've imported `Rect`. Go check the docs for Rect
(https://ui.reach.tech/rect) and then use it to put the menu by the button.

*/

import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Rect from "@reach/rect";

class Portal extends React.Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    this.node = document.createElement("div")
    document.body.appendChild(this.node)
    this.setState({mounted: true})
  }

  componentWillMount() {
    document.body.removeChild(this.node)
  }


  render() {
    return this.state.mounted ? createPortal(this.props.children, this.node) : null;
  }
}

class Select extends React.Component {

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any,
    defaultValue: PropTypes.any
  };

  state = {
    value: this.props.defaultValue,
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  isControlled() {
    return this.props.value != null
  }

  render() {
    const { isOpen } = this.state;
    let label;
    const children = React.Children.map(this.props.children, child => {
      const { value } = this.isControlled() ? this.props : this.state;
      if (child.props.value === value) {
        label = child.props.children;
      }

      return React.cloneElement(child, {
        onSelect: () => {
          if (this.isControlled()) {
            this.props.onChange(child.props.value);
          } else {
            this.setState({ value: child.props.value });
          }
        }
      });
    });

    return (
      <Rect>
        {({ rect, ref }) => (
          <div onClick={this.handleToggle} className="select">
            <button ref={ref} className="label">
              {label} <span className="arrow">???</span>
            </button>
            {isOpen && (
              <Portal>
                <ul
                  style={{
                    position: "absolute",
                    top: rect.top,
                    left: rect.left
                  }}
                  className="options"
                >
                  {children}
                </ul>
              </Portal>
            )}
          </div>
        )}
      </Rect>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li className="option" onClick={this.props.onSelect}>
        {this.props.children}
      </li>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="block">
          <h2>Portal Party</h2>
          <Select defaultValue="tikka-masala">
            <Option value="tikka-masala">Tikka Masala</Option>
            <Option value="tandoori-chicken">Tandoori Chicken</Option>
            <Option value="dosa">Dosa</Option>
            <Option value="mint-chutney">Mint Chutney</Option>
          </Select>
        </div>
      </div>
    );
  }
}

export default App;
