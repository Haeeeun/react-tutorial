import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  }

  const goHome = () => {
    history.push('/'); // 방문기록에 남김
  }

  const replaceToHome = () => {
    history.replace('/'); // 방문기록에 남기지 않음
  }

  //컴포넌트가 mount 될 때 실행
  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');

    //컴포넌트가 unmount 될 때 실행
    return () => {
      unblock();
    }
  }, [history])

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
      <button onClick={replaceToHome}></button>
    </div>
  );
}

export default HistorySample;