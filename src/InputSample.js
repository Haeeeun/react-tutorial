import React, { useState, useRef } from 'react'

function InputSample () {
	const [inputs, setInputs] = useState({
			name: '',
			nickname: '',
	});
	const nameInput = useRef();
	const { name, nickname } = inputs;
    

	const onChange = (e) => {
			const { name, value } = e.target; //name: name, nickname / value: 사용자가 입력하는 값

			setInputs({
					...inputs, //객체 상태를 업데이틑 할 때는 '객체 복사'를 꼭 해야한다.
					[name]: value,
			})
	};

	const onReset = () => {
			setInputs({
					name: '',
					nickname: '',
			});
			nameInput.current.focus();
	};

	return (
		<div>
			<input
				name="name"
				placeholder="이름"
				onChange={onChange}
				value={name}
				ref={nameInput}
			/>
			<input
				name="nickname"
				placeholder="닉네임"
				onChange={onChange}
				value={nickname}
			/>
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} ({nickname})
			</div>
		</div>
	)
}

export default InputSample