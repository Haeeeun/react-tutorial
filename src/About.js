import React from 'react';
import qs from 'qs';

//query 사용

function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // ? 를 제거해줌
  })

  const detail = query.detail === 'true'; // 결과값은 문자로 들어옴

  return (
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 튜토리얼 입니다.
      </p>
      {detail && <p>detail 값이 true 입니다!</p>}
    </div>
  );
}

export default About;