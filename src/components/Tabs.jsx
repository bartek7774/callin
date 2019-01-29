import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0
    }
  }
  onClick=(evt)=>{
    evt.preventDefault();
    const cur=evt.target.dataset.id;
    this.setState({
      show:cur
    })
  }

  render() {
    const contents=this.props.children.filter(x=>!!x);
    const headers=this.props.headers.map(
      (x,i)=>
    <li key={i}
     className={`tabs__nav-item ${i==this.state.show?'active':''}`} 
     onClick={this.onClick} data-id={i}>{x}</li>)

    return (
      <div className="tabs">
        <ul className="tabs__nav">
          {headers}
        </ul>
          {
            headers.map((x,i)=>{
              return (<div key={i} className={`tabs__content ${i==this.state.show?'fadeInCard':''}`}>
                {contents[i]}
              </div>)
              })
          }
      </div>
    )
  }
}

export default Tabs;