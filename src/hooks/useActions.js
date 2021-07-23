import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import ActionCreators from '../store'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ActionCreators, dispatch)
}
