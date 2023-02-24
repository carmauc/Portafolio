import './Modal.css'

const Modal = ({ data, close }) => {
	const { imageUrl, address } = data
	return (
		<div className='container rounded-2xl p-3 shadow-xl bg-black z-50 h-fit w-fit'>
			<img
				className=' rounded-2xl mx-auto max-h-full  '
				alt='captura pagina web'
				src={imageUrl}
			/>
			<a
				href={address}
				target='_blank'
				className='fixed bottom-0 left-0 flex justify-center items-center bg-sky-600 brightness-150 w-full h-12 text-lg text-black'
				rel='noreferrer'>
				{address}
			</a>
		</div>
	)
}

export default Modal
