import React from 'react';

import styles from './style.scss';


interface PageInterface {
	color: string
}

export class App extends React.Component<PageInterface> {
	render() {
	  return (<div className={styles.App}>
		<h1>Welcome to React with Typescript</h1>
		<p>The color of this page is: {this.props.color}</p>
	  </div>
	  );
	}
  }