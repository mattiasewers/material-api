import React from "react";
import styles from '../styles';
import Radium from 'radium';


class Home extends React.Component {

  render() {
    return( 
    	<div className="container">
    		<section style={styles.section}>
    			<h1 style={styles.textCenter}>Welcome! Search for your username!</h1>
			</section>
		</div>
	);
  }
}

export default Radium(Home);