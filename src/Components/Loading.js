import React, { Component } from 'react'
import loading from '../loading.webp' 

export default class Loading extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img 
          src={loading} 
          alt="Loading..." 
          style={styles.image}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh"
  },
  image: {
    width: "70px",
    opacity: 0.8
  }
}
