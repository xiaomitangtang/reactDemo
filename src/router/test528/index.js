import React, { useEffect, useState } from 'react'
import {
  Link, Route, useParams, Switch, Redirect, useLocation,
  useRouteMatch
} from 'react-router-dom'

const Dom = () => {
  const [d, setD] = useMyHook(1)
  console.log('dom--', d)
  return <>
    <h1>这是我自己的hook</h1>
    <h3>{d}</h3>
    <button onClick={() => setD(d + 1)}>点击+1</button>
  </>
}
const useMyHook = (a) => {
  const [d, setD] = useState(a)
  console.log('d==1>', d)
  useEffect(() => {
    console.log('useEffect===>', d)
  }, [d])
  return [d, setD]
}




export default Dom