import React from 'react'
import { Button } from '../UI/Button'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
	const history = useHistory()

	return (
		<Button onClick={() => history.goBack()}>Back</Button>
	)
}
