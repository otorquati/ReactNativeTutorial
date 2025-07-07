import React from 'react'

const Content = () => {
	  const handleNameChanges = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
	<main>
		<p>Hello { handleNameChanges() }</p>
	</main>
  )
}

export default Content