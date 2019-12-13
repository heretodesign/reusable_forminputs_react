export default class StringInput extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      this.props.onChange && this.props.onChange(e.target.value);
    }
    render() {
      const {
        className,
        value
      } = this.props;
      return (
        <input
          className={ className }
          type="text"
          value={ value }
          onChange={ this.handleChange } />
      );
    }
  }