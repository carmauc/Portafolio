import { motion } from 'framer-motion';
const Box = () => {
	const sp = '\u00A0';

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.08 * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: -20,
			y: 10,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
	};

	const nombre = 'Hola,';
	const nombre2 = `soy${sp}Mauricio,`;
	const nombre3 = `Desarrollador${sp}Web`;
	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='visible'
			className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl md:ml-24 cursor-pointer'>
			<h1>
				{[...nombre].map((value, index) => (
					<motion.span
						variants={child}
						key={index}
						className=' text-slate-100 inline-block hover:animate-rubber hover:text-sky-600 brightness-150'>
						{value}
					</motion.span>
				))}
				<br />
				{[...nombre2].map((value, index) => (
					<motion.span
						variants={child}
						key={index}
						className='text-slate-100 inline-block hover:animate-rubber hover:text-sky-600 brightness-150'>
						{value}
					</motion.span>
				))}
				<br />
				{[...nombre3].map((value, index) => (
					<motion.span
						variants={child}
						key={index}
						className='text-slate-100 inline-block hover:animate-rubber hover:text-sky-600 brightness-150'>
						{value}
					</motion.span>
				))}
			</h1>
			<p className='w-fit animate-fadein text-gray-500 text-sm md:text-2xl mt-9'>
				Front End Developer
			</p>
			<a
				href='https://wa.me/34607823575?text=Hola,%20me%20interesan%20sus%20servicios%20como%20desarrollador%20web.'
				target='_blank'
				className='relative md:w-1/3 mt-10 px-2 py-1 block sm:py-1.5 sm:px-4 overflow-hidden  border border-sky-600 brightness-150 font-semibold tracking-wide leading-none hover:text-teal-600 group'
				type='button'
				rel='noreferrer'>
				<span className='absolute -translate-x-full ease-in duration-700 group-hover:translate-x-0 -skew-x-12  h-full -left-5 w-96 inset-0 bg-gradient-to-br from-sky-600 brightness-150  to-cyan-400'></span>
				<span className='relative text-xl inset-0 flex justify-center items-center font-bold text-sky-600 brightness-150 transition-colors duration-300 ease-in-out group-hover:text-gray-900'>
					Contáctame !
				</span>
			</a>
		</motion.div>
	);
};

export default Box;
