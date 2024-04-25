const Overlay = ({ children, close }) => {
	return (
		<div
			className='fixed flex flex-wrap items-center justify-center overscroll-none overflow-x-hidden overflow-y-auto sm:items-start sm:p-10 bg-slate-600 w-full h-full inset-0 z-30'
			>
			{children}
		</div>
	)
}

export default Overlay
