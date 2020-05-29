/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useMemo } from 'react'
import {
  Link, Route, useParams, Switch, Redirect, useLocation,
  useRouteMatch
} from 'react-router-dom'
const Wrp = () => {
  console.log('Wrp')
  return <Dom></Dom>
}
const Dom = () => {
  const [a, setA] = useMyHook('a', 1)
  const [b, setB] = useMyHook('b', 2)
  const c = useMyHook2(a)
  const memoVal = useMemo(() => { console.log(`memo   b   === ${b}`); return b }, [b])
  console.log(`DOM---a== ${a}; b===${b};  c  ==${c}; `)
  return <>
    <h1>这是我自己的hook</h1>
    <h3>{a}</h3>
    <h3>{b}</h3>
    <h3>{c}</h3>
    <h3>memoVal{memoVal}</h3>
    <button onClick={() => setA(a + 1)}>点击a+1</button>
    <button onClick={() => setB(b + 1)}>点击b+1</button>
  </>
}
const useMyHook = (key, a) => {
  const [d, setD] = useState(a)
  useEffect(() => {
    console.log(`useMyHook;useEffect ${key} ==${a}`)
  })
  console.log(`useMyHook; ${key} ==${a}`)
  return [d, setD]
}

const useMyHook2 = (a) => {
  const [d, setD] = useState(a)
  useEffect(() => {
    console.log(`useMyHook2---useEffect  ${a}   ${d}`)
  }, [a])
  console.log(`'useMyHook2---a==${a}','d====${d}'`)
  return d
}




export default Wrp