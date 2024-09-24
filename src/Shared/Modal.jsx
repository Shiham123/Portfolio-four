import {useDispatch} from "react-redux"
import {copyEmail, toggleModal} from "../app/modalSlice"

const Modal = () => {
	const dispatch = useDispatch()

	return (
		<div>
			<button onClick={() => dispatch(toggleModal(false), copyEmail(false))}>Close Modal</button>
		</div>
	)
}

export default Modal
