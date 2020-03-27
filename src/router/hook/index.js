import React, { useEffect, useState, useLayoutEffect, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useDebugValue, forwardRef } from 'react'
import rafSchedule from 'raf-schd';

export default () => {
  const [count, setCount] = useState(() => {
    console.log('渲染useState--count1');
    return 1
  })
  const [count2, setCount2] = useState(2)
  const myhook = useMyhook()
  useEffect(() => {
    console.log('useEffect-----count');
    return () => {
      console.log('unuseEffect----count');
    }
  }, [count])

  useEffect(() => {
    console.log('useEffect===count2');
    console.log('refT', refT);
    return () => {
      console.log('unuseEffect===count2');
    }
  }, [count2])


  // if (count2 > 1) {
  //   useEffect(() => {
  //     console.log('useEffect===只会执行一次');
  //     return () => {
  //       console.log('unuseEffect===只会执行一次');
  //     }
  //   }, [])
  // }

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return () => {
      console.log('unuseLayoutEffect');
    }
  })
  const clickHandle = () => {
    // useEffect(() => {
    //   console.log('useEffect===只会执行一次2');
    //   return () => {
    //     console.log('unuseEffect===只会执行一次2');
    //   }
    // }, [])
  }
  const refT = useRef()
  const memoizedCallback = useCallback((node) => {
    console.log('useCallback');
    console.log(node, count, count2);
  }, [count, count2])
  const memoizedValue = useMemo(() => {
    console.log('useMemo', count, count2);
    return count + count2
  }, [count, count2]);
  return <div>
    <h1>hook</h1>
    <div>
      <div>{count}---{count2}</div>
      <div><button onClick={() => setCount(count + 1)}>setCount</button></div>
      <div><button onClick={() => setCount2(count2 + 1)}>setCount2</button></div>
      <div><button onClick={clickHandle}>clickHandle</button></div>
      <div>
        <Counter></Counter>
      </div>
      <hr />
      <div ref={memoizedCallback}>memoizedCallback</div>
      <div>
        <TextInputWithFocusButton></TextInputWithFocusButton>
      </div>
      <div>
        FancyInput
      <FancyInput ref={refT}></FancyInput>
      </div>
      <div>WrongCounter
      <WrongCounter></WrongCounter>
      </div>
      <div>
        useMemo
      <hr />
        <div>{memoizedValue}</div>
        <div>{memoizedValue}</div>
        <div>{memoizedValue}</div>
        <div>{memoizedValue}</div>
        <div>{memoizedValue}</div>
        <div>{memoizedValue}</div>
        <div>{memoizedValue}</div>

      </div>
    </div>
  </div>
}
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    input: inputRef.current
  }));
  return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);


function WrongCounter() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1); // 这个 effect 依赖于 `count` state
  //   }, 1000);
  //   console.log('count');
  //   return () => {
  //     console.log('clearCount');
  //     clearInterval(id)
  //   };
  // }, [count]);//如果没有count   内部的count值通过闭包，永远为0

  useEffect(() => {
    const id = setInterval(() => {
      console.log('cccc');
      setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ 我们的 effect 不适用组件作用域中的任何变量

  return <h1>{count}</h1>;
}
/*
  只在最顶层使用 Hook       只在 React 函数中调用 Hook
  hook  通过调用顺序区别不同hook  所以不能再判断语句中使用，因为可能会改变顺序
    基础 Hook

    useState
    useEffect
    useContext
    额外的 Hook

    useReducer
    useCallback
    useMemo
    useRef
    useImperativeHandle
    useLayoutEffect
    useDebugValue

*/


function useMyhook(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    console.log('myhook effect');
    return () => {
      console.log('myhook uneffect');
    }

  }, []);

  return isOnline;
}



const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


// const Button = React.memo((props) => {
//   // 你的组件
// });

// 这不是一个 Hook 因为它的写法和 Hook 不同。React.memo 等效于 PureComponent，但它只比较 props。（你也可以通过第二个参数指定一个自定义的比较函数来比较新旧 props。如果函数返回 true，就会跳过更新。）