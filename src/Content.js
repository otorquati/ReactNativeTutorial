import { useState } from 'react';

const Content = () => {
	const [ name, setName ] = useState('Dave'); 
  const [ count, setCount ] = useState(0);

  const handleNameChanges = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    return names[int] 
     }
  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = (name) => {
    console.log(count) 
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText) 
  }
  return (
	<main>
		<p onDoubleClick={handleClick}>
      Hello { name }!</p>
    <button onClick={handleNameChanges}>Mude o nome</button>
    <button onClick={handleClick}>Clique-me</button>
    <button onClick={handleClick2}>Clique-me</button>
    <button onClick={(e)=>handleClick3(e)}>Clique-me</button>
	</main>
  )
}

export default Content