// @flow

import React from 'react'

type Props = {
	handleClick: Function,
	label: string,
}

const Button = ({ handleClick, label }: Props) =>
	<button onClick={handleClick}>{label}</button>

export default Button
