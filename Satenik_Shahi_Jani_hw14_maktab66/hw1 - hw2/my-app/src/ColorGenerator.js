import React, { Component } from 'react';
import { Color } from "./Color";


export class ColorGenerator extends Component {
    constructor(props){
        super(props)
        this.state={
            // colors:['#ef0a78','#ffa500','#8140b5','#a0e203','#bc99eb','#19e7ee','#3f087c','#980b0f','#1cbcc7','#45bd45','#C70039 ','#808000','#581845','#2874A6','#086250'],
            added:[]
        }
        this.colorGenerate=this.colorGenerate.bind(this);
    }
    colorGenerate() {
        if(this.state.added.length===100){
            alert('100 colors');
            return;
        }
      // let randomItem = this.state.colors[Math.floor(Math.random()*this.state.colors.length)];
      var randomItem = "#"+Math.floor(Math.random()*16777215).toString(16);
        this.setState({
          added:[randomItem,...this.state.added]
        });
      };
  render() {
    return (
        
      <div className='color-part-2'>
          <h1>Color Generator</h1>
          <button onClick={() => this.colorGenerate()}>Add Color</button>
          <ul>
              {this.state.added.map((item,index)=><Color  colorItem={item} keyItem={index}/>)}
          </ul>
      </div>
    )
  }
}

export default ColorGenerator