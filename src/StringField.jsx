function StringField({ label, ...inputProps }) {
    return (
      <div className="string-field field">
        { label && <label>{ label }</label> }
        <StringInput { ...inputProps } />
      </div>
    );
  }