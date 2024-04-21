const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='relative p-4 shadow md:px-6 md:py-8 bg-zinc-900 h-auto w-auto'>
			<hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
			<span className='block text-sm sm:text-sm text-center text-gray-400'>
				&copy; {currentYear} Mauricio Correa. All Rights Reserved.
			</span>
		</footer>
	)
}

export default Footer
