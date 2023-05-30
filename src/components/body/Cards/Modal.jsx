import './Modal.css'
import { XCircleIcon } from '@heroicons/react/24/outline'
const Modal = ({ data, close }) => {
	const { imageUrl, address } = data
	return (
		<div className='relative container rounded-2xl p-3 shadow-xl bg-black z-50 h-fit w-fit'>
			<img
				className=' rounded-2xl mx-auto max-h-full  '
				alt='captura pagina web'
				src={imageUrl}
				
			/>
			<a
				href={address}
				target='_blank'
				className='fixed bottom-0 left-0 flex justify-center items-center bg-slate-700 brightness-150 w-full h-12 text-sm md:text-lg text-black hover:text-sky-600'
				rel='noreferrer'>
				{address}
			</a>
			<button onClick={close} className='absolute top-10 right-10'>
				<XCircleIcon className='w-10 h-10 stroke-slate-700 hover:stroke-sky-600'/>
			</button>
		</div>
	)
}

export default Modal
