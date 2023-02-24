import { useState, useEffect } from 'react'
const ButtonTop = () => {
	const [buttontop, setbuttontop] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setbuttontop(true)
			} else {
				setbuttontop(false)
			}
		})
	}, [])

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		})
	}
	// super(props);
	// this.scrollToTop = this.scrollToTop.bind(this);

	return (
		<div>
			{buttontop && (
				<a
					onClick={scrollUp}
					className='text-slate-50  fixed m-9 bottom-7 right-7 hover:animate-pulse'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='w-10 h-10 stroke-2 stroke-sky-600 brightness-150 shadow-xl hover:shadow-sky-600/50 rounded-full cursor-pointer'>
						<path
							// stroke-linecap='round'
							// stroke-linejoin='round'
							d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
						/>
					</svg>
				</a>
			)}
		</div>
	)
}

export default ButtonTop
