import React from 'react'

const Content = () => {
	  const handleNameChanges = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  const handleClick = () => {
    console.log('Você clicou!')
  }
  const handleClick2 = (name) => {
    console.log(`${name} foi clicado`) 
  }
  return (
	<main>
		<p>Hello { handleNameChanges() }!</p>
    <button onClick={handleClick}>Clique-me</button>
    <button onClick={()=>handleClick2('Dave')}>Clique-me</button>
	</main>
  )
}

export default Content