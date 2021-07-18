import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0); //0은 초기값
    // const number = numberState[0];
    // const setNumber = numberState[1]; 와 동일한 코드, number는 현재 상태, setNumber는 값을 업데이트 하는 함수

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber+1); // 업데이트 함수 (최적화랑 관련이 있다)
    }

    const onDecrease = () => {
        setNumber(number-1);
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