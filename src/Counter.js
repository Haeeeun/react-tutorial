import React, { useReducer } from 'react';

//상태 업데이트 로직이 컴포넌트 밖에 있다.
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {

  const [number, dispatch] = useReducer(reducer, 0);
    // const [number, setNumber] = useState(0); //0은 초기값
    // const number = numberState[0];
    // const setNumber = numberState[1]; 와 동일한 코드, number는 현재 상태, setNumber는 값을 업데이트 하는 함수

    const onIncrease = () => {
      // setNumber(prevNumber => prevNumber+1); // 업데이트 함수 (최적화랑 관련이 있다)
      dispatch({
        type: 'INCREMENT'
      })
    }

    const onDecrease = () => {
      // setNumber(number-1);
      dispatch({
        type: 'DECREMENT'
      })
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            {/* <button onClick={onIncrease()} 는 함수를 호출하게 되는 것 */}
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter