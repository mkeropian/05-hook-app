import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({id,title}) => {

  const pRef = useRef();
  const [ boxSize, setBoxSize ] = useState ({ width: 0, height: 0 });

  useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
  },[title])

  return (
    <>
      <blockquote 
        className ="blockquote text-end"
        style     ={{ display: 'flex' }} 
        >
          <p ref={ pRef } className="mb-1">{ id }</p>
          <footer className="blockquote-footer">{ title }</footer>
      </blockquote>      

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
