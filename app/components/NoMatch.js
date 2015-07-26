import React from "react";
import styles from '../styles';


class NoMatch extends React.Component {

  render() {
    return( 
    	<div style={styles.container}>
    		<h1 style={styles.textCenter}>Please write your Twitter username!</h1>
		</div>
	);
  }
}

export default NoMatch;