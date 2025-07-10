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
  const handleClick3 = (e) => {
    console.log(e.target.innerText) 
  }
  return (
	<main>
		<p onDoubleClick={handleClick}>
      Hello { handleNameChanges() }!</p>
    <button onClick={handleClick}>Clique-me</button>
    <button onClick={()=>handleClick2('Dave')}>Clique-me</button>
    <button onClick={(e)=>handleClick3(e)}>Clique-me</button>
	</main>
  )
}

export default Content