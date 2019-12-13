const EntityDataContext = React.createContext();
export function withEntityData(Component) {
  return function EntityDataComponent(props) {
    return (
      <EntityDataContext.Consumer>
        { entityProps => {
          const source = props.source || entityProps.source;
          const path = props.path;
          const sourceValue = _.get(path, source);
          const value = props.value !== undefined ?
            props.value : sourceValue;
          const onChange = props.onChange || entityProps.onChange;
          return (
            <Component
              { ...props }
              source={ source }
              path={ path}
              value={ value }
              onChange={ onChange }
            />
          );
        }}
      </EntityDataContext.Consumer>
    );
  };
}
export default class EntityData extends React.PureComponent {
  render() {
    return (
      <EntityDataContext.Provider value={{
        source: this.props.source,
        onChange: this.props.onChange
      }}>
        { this.props.children }
      </EntityDataContext.Provider>
    );
  }
}
// StringInput.jsx
import { withEntityData } from './EntityData';
class StringInput extends React.PureComponent {
   // ... Same as before
}
export default withEntityData(StringInput);