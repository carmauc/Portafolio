import Tarjetas from './Cards/Tarjetas'
import { motion } from 'framer-motion'

const Section3 = () => {
	const sp = '\u00A0'
	return (
		<div
			id='section3'
			className='relative bg-zinc-900  min-h-screen h-auto w-auto flex flex-col justify-center items-center pt-28 md:pt-0 pb-32'>
			<h2 className='text-1xl sm:text-2xl md:text-4xl lg:text-5xl m-12 cursor-pointer'>
				{[...`Mi${sp}Portafolio`].map((value, index) => (
					<motion.span
						variants={value}
						key={index}
						className=' text-sky-600 brightness-150 inline-block hover:animate-rubber'>
						{value}
					</motion.span>
				))}
			</h2>
			<p className='text-sm md:text-lg text-center text-white mb-5'>
				Una pequeña galería de proyectos y micro-proyectos desarrollados por mí.
			</p>
			<Tarjetas />
		</div>
	)
}

export default Section3
