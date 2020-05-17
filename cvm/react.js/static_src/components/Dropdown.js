function Dropdown(props) {
  return (
    <div className="dropdown_item" id={props.items.id} key={props.items.id}>
      <a href={'#' + props.items.id}>{props.items.name}</a>
    </div>
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.choosed = this.choosed.bind(this);
    this.state = {
      items: [
        { id: 1, name: 'if' },
        { id: 2, name: 'you`re' },
        { id: 3, name: 'happy' },
        { id: 4, name: 'clap' },
        { id: 5, name: 'your' },
        { id: 6, name: 'hands' },
      ],
      value: '',
      drop: false,
    };
  }

  handleChange() {
    this.setState({ value: event.target.value });
    // this.setState({
    //   items: this.state.items.filter(item =>
    //     (item.name.toUpperCase().indexOf(this.state.value.toUpperCase()) > -1)
    //   )
    // });
    // console.log(this.state.value);
  }

  handleBlur() {
    // setTimeout(() => this.setState(state => ({ drop: false }))
    //   , 150);
  }

  handleClick() {
    this.setState(state => ({ drop: true }));
  };

  choosed() {
    this.setState(state => ({ value: event.target.innerText }));
  }

  renderItem() {
    if (this.state.drop === true) {
      return this.state.items.map(item => {
        if (item.name.toUpperCase().indexOf(this.state.value.toUpperCase()) > -1) {
          return (<Dropdown items={item} />)
        };
      });
    };
  };

  render() {
    return (
      <div className="app" id="myDropdown" >
        <input type="text" id="myInput" value={this.state.value} className="dropdown_input" onBlur={() => this.handleBlur()} onChange={() => this.handleChange()} onClick={() => this.handleClick()} />
        <div className="dropdown_list" onClick={() => this.choosed()}>
          {this.renderItem()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)