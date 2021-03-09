// change this Component to a class!
class Category extends React.Component {
  constructor() {
    super()
  }


//   // get data from props and use map to build an array of <li>
//   // ... code goes here
  render(){
    const datas = this.props.data.map((result, index) => (
      <li className="cat-link left valign-wrapper" key={index.toString()}>
        <i className="material-icons">{result.icon}</i>{result.title}
      </li>
    ))


    return (
      <div className="row">
        <ul className="cat-nav center-align">
          {datas}
        </ul>
      </div>
    )
  }
}

