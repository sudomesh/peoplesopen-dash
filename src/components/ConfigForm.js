  bindState = (property) => {
    return (event) => {
      this.setState({ [property]: event.target.value })
    }
  }
