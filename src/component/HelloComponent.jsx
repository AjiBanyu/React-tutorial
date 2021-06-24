import React from 'react';
import './HelloComponent.css'; // import file css 

const HelloComponent = () => {
    // di react penamaan class pada style css adalah className
    return <p className="text-p">Hello Functional Component</p>
  }

// agar bisa di gunakan di mana saja
export default HelloComponent;