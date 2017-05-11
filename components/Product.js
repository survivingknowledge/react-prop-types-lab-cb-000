
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component{
  render(){
    return (
      <div className="product">
          <p>Name: {this.props.name}</p>
          {this.props.producer ? <small>{this.props.producer}</small> : null}
          <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
          <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,

}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    if(weight === undefined){
      return new Error('The weight prop is required');
    }

    if(isNaN(weight)){
      return new Error('The weight prop is not a number');
    }

    const isValidWeight = weight > 80 && weight < 300;
    if(!isValidWeight){
      return new Error('The weight prop should range between 80 and 300');
    }
  },
}



//
// 1. In the `components/Product.js` file, create a `Product` React component.
// 2. This component has the following props:
//     *  `name`: a string — required
//     *  `producer`: a string — optional
//     *  `hasWatermark`: a boolean — optional, defaults to false
//     *  `color`: a string — required, can only be `'white'`, `'eggshell-white'` or `'salmon'`
//     *  `weight`: a number — required, ranges between 80 and 300
// 3. Note: for the `weight` prop, we'll need custom logic. Remember that it's possible to write your own prop validator
// function!
