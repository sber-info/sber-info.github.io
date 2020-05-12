function Dropdown(props) {
  return (
    <div className="dropdown_item" id={props.items.id} key={props.items.id}>
      <a href={'#' + props.items.id}>{props.items.name}</a>
    </div>
  )
};

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'if' },
      { id: 2, name: 'you`re' },
      { id: 3, name: 'happy' },
      { id: 4, name: 'clap' },
      { id: 5, name: 'your' },
      { id: 6, name: 'hands' },
    ]
  }

  renderItem() {
    return this.state.items.map(item => {
      return (<Dropdown items={item} />)
    })
  }

  render() {
    return (
      <div className="app" id="myDropdown">
        <input type="text" id="myInput" className="dropdown_input" defoultvalue="" />
        <div className="dropdown_list">
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