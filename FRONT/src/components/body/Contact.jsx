/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion'
import {
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
} from '@heroicons/react/24/outline'
import api from '../../../services/api'
import  { useState, useEffect } from 'react'
import '../Drop.css'

const Contact = () => {

	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [asunto, setAsunto] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [resetForm, setResetForm] = useState(false); // state para reiniciar formulario al enviar


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append('nombre', nombre);
			formData.append('correo', correo);
			formData.append('asunto', asunto);
			formData.append('mensaje', mensaje);

	
			const response = await api.enviarFormulario(formData);
		  console.log(response); // Manejar la respuesta del servidor
	    alert( "Mensaje Enviado");
		setResetForm(true);
		} catch (error) {
			console.log(error);
	alert("Error en envío de mensaje.");
		  };
		}

		useEffect(() => {
			if (resetForm) {
			  // Reiniciar todos los estados a sus valores iniciales
			  setNombre('');
			  setCorreo('');
			  setMensaje('');
			  setAsunto('');
			}
		  }, [resetForm]);
	return (
		<section
			id='contact'
			className='relative bg-zinc-900 md:p-12 min-h-screen md:pt-0 h-auto w-auto pb-12'>
			<h2 className='flex justify-center items-center text-1xl sm:text-2xl md:text-4xl lg:text-5xl cursor-pointer'>
				{[...'Contacto'].map((value, index) => (
					<motion.span
						variants={value}
						key={index}
						className=' text-sky-600 brightness-150 inline-block hover:animate-rubber'>
						{value}
					</motion.span>
				))}
			</h2>

			<div className='grid grid-cols-1 md:grid md:grid-cols-2'>
				<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md '>
					<p className='mb-8 lg:mb-16 font-light text-center text-white sm:text-xl'>
						Si necesitas contactarme puedes usar el botón de “Contáctame” o bien
						puedes llenar este formulario, responderé lo más pronto posible.
					</p>
					<form
						name='contact'
						className='space-y-8'
						onSubmit={handleSubmit}>
						{/* <input type='hidden' name='form-name' value='contact' /> */}
				
						<input type='hidden' name='form-name' value='contact' />


						<div>
							<label
								htmlFor='nombre'
								className=' mb-2 text-sm font-medium text-gray-300'>
								Tu Nombre
							</label>

							<input
								type='nombre'
								name='nombre'
								id='nombre'
								className=' focus:outline-none focus:ring focus:outline-sky-600 block shadow-sm text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white '
								placeholder='Tu nombre'
								required
								onChange={(e) => setNombre(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className=' mb-2 text-sm font-medium text-gray-300'>
								Tu Correo
							</label>

							<input
								type='email'
								name='email'
								id='email'
								className=' focus:outline-none focus:ring focus:outline-sky-600 block shadow-sm text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white '
								placeholder='nombre@gmail.com'
								required
								onChange={(e) => setCorreo(e.target.value)}
							/>
						</div>

						<div>
							<label
								htmlFor='subject'
								className='block mb-2 text-sm font-medium text-gray-300'>
								Asunto
							</label>
							<input
								type='text'
								name='subject'
								id='subject'
								className='focus:outline-none focus:ring focus:outline-sky-600 block shadow-sm text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white '
								placeholder='Asunto'
								required
								onChange={(e) => setAsunto(e.target.value)}

							/>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block mb-2 text-sm font-medium text-gray-300'>
								Tu Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								rows='6'
								className='focus:outline-none focus:ring focus:outline-sky-600 block shadow-sm text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white  '
								placeholder='Mensaje'
								onChange={(e) => setMensaje(e.target.value)}
								>
								</textarea>
						</div>

						<button
							className='py-2 px-4 relative border border-sky-600 brightness-150 font-semibold tracking-wide leading-none overflow-hidden hover:text-teal-600 group'
							type='submit'>
							<span className='-translate-x-full ease-in duration-700 group-hover:translate-x-0 -skew-x-12 absolute h-full -left-5 w-96 inset-0 bg-gradient-to-br from-sky-600 brightness-150  to-cyan-400 '></span>
							<span className='relative text-sm inset-0 flex justify-center items-center font-bold text-sky-600 brightness-150 transition-colors duration-100 ease-in-out group-hover:text-gray-900'>
								Enviar
							</span>
						</button>
					</form>
				</div>

				<div className='flex justify-center items-center gap-12 mt-7'>
					<div className='flex flex-col justify-center'>
						<div className='flex p-4'>
							<div className='relative flex justify-center items-center h-12 w-12 rounded-md  bg-white  hover:bg-sky-600 brightness-150 group'>
								<MapPinIcon className='absolute w-6 h-6 group-hover:stroke-white'></MapPinIcon>
							</div>
							<div className='flex flex-col ml-5 text-white'>
								<h3 className='text-sky-600'>Ubicación</h3>
								<p>Envigado, Antioquia</p>
							</div>
						</div>
						<div className='flex p-4'>
							<div className='relative flex justify-center items-center h-12 w-12 rounded-md  bg-white  hover:bg-sky-600 brightness-150 group'>
								<PhoneIcon className='absolute w-6 h-6 group-hover:stroke-white'></PhoneIcon>
							</div>
							<div className='flex flex-col ml-5 text-white'>
								<h3 className='text-sky-600'>Teléfono</h3>
								<p>+57 312-813-5693</p>
							</div>
						</div>
						<div className='flex p-4'>
							<div className='relative flex justify-center items-center h-12 w-12 rounded-md bg-white hover:bg-sky-600 brightness-150 group'>
								<EnvelopeIcon className='absolute w-6 h-6 group-hover:stroke-white'></EnvelopeIcon>
							</div>
							<div className='flex flex-col ml-5 text-white'>
								<h3 className='text-sky-600'>Email</h3>
								<p>carmauc339@outlook.com</p>
							</div>
						</div>

						<div className='mt-16 flex items-center justify-evenly'>
							{/* <button className="relative w-9" title='Facebook'>
                <svg className='absolute w-10 h-10 fill-white hover:fill-[#1877f2]' viewBox="0 0 24 24"    >
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
                </button> */}

							{/* <button className="relative w-9" title='Instagram'>
                <svg viewBox="0 0 1024 1024" className="absolute w-10 h-10 fill-white hover:fill-[#c13584]">
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                </svg>
                </button> */}
							<a
								href='https://github.com/carmauc'
								target='_blank'
								className='relative w-9'
								title='GitHub'
								rel='noreferrer'>
								<svg
									className='absolute w-10 h-10 fill-white hover:fill-[#F1502F]'
									viewBox='0 0 256 256'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M128.001 30C72.7791 30 28 74.7708 28 130.001C28 174.184 56.6533 211.668 96.3867 224.891C101.384 225.817 103.219 222.722 103.219 220.081C103.219 217.696 103.126 209.819 103.083 201.463C75.2631 207.512 69.3927 189.664 69.3927 189.664C64.8437 178.105 58.2894 175.032 58.2894 175.032C49.2163 168.825 58.9733 168.953 58.9733 168.953C69.0151 169.658 74.3026 179.258 74.3026 179.258C83.2217 194.546 97.6965 190.126 103.403 187.571C104.301 181.107 106.892 176.696 109.752 174.199C87.5405 171.67 64.1913 163.095 64.1913 124.778C64.1913 113.86 68.0977 104.939 74.4947 97.9362C73.4564 95.4175 70.0335 85.2465 75.4635 71.4722C75.4635 71.4722 83.8609 68.7845 102.971 81.7226C110.948 79.5069 119.502 78.3958 128.001 78.3577C136.499 78.3958 145.061 79.5069 153.052 81.7226C172.139 68.7845 180.525 71.4722 180.525 71.4722C185.968 85.2465 182.544 95.4175 181.505 97.9362C187.917 104.939 191.797 113.86 191.797 124.778C191.797 163.187 168.403 171.644 146.135 174.119C149.722 177.223 152.918 183.308 152.918 192.638C152.918 206.018 152.802 216.787 152.802 220.081C152.802 222.742 154.602 225.86 159.671 224.878C199.383 211.64 228 174.169 228 130.001C228 74.7708 183.227 30 128.001 30ZM65.4536 172.453C65.2333 172.95 64.4517 173.099 63.7396 172.758C63.0143 172.432 62.6069 171.754 62.8421 171.256C63.0574 170.744 63.8406 170.602 64.5643 170.945C65.2913 171.271 65.7053 171.955 65.4536 172.453ZM70.3725 176.842C69.8956 177.285 68.9633 177.079 68.3307 176.38C67.6766 175.683 67.554 174.751 68.0376 174.302C68.5294 173.86 69.4336 174.067 70.0893 174.764C70.7434 175.47 70.8709 176.395 70.3725 176.842ZM73.7471 182.458C73.1344 182.884 72.1325 182.485 71.5132 181.595C70.9004 180.706 70.9004 179.64 71.5264 179.212C72.1474 178.785 73.1344 179.169 73.762 180.052C74.373 180.956 74.373 182.023 73.7471 182.458ZM79.4542 188.962C78.9061 189.566 77.7386 189.404 76.8841 188.579C76.0098 187.773 75.7663 186.629 76.3161 186.024C76.8709 185.418 78.045 185.589 78.9061 186.407C79.7738 187.211 80.0387 188.364 79.4542 188.962ZM86.8301 191.157C86.5883 191.941 85.4639 192.297 84.3312 191.964C83.2002 191.621 82.46 190.704 82.6885 189.912C82.9237 189.124 84.053 188.753 85.194 189.109C86.3234 189.45 87.0652 190.361 86.8301 191.157ZM95.2242 192.089C95.2523 192.913 94.2919 193.597 93.1029 193.612C91.9073 193.639 90.9402 192.971 90.9269 192.16C90.9269 191.327 91.8659 190.65 93.0615 190.63C94.2505 190.607 95.2242 191.269 95.2242 192.089ZM103.47 191.773C103.613 192.577 102.787 193.404 101.606 193.624C100.445 193.836 99.3702 193.339 99.2229 192.541C99.0788 191.716 99.92 190.89 101.079 190.676C102.262 190.471 103.32 190.955 103.47 191.773Z' />
								</svg>
							</a>
							<a
								href='https://www.linkedin.com/in/mauriciocorreac'
								target='_blank'
								className='relative w-9'
								title='Linkedin'
								rel='noreferrer'>
								<svg
									className='absolute w-10 h-10 fill-white hover:fill-[#0A66C2]'
									viewBox='0 0 1024 1024'>
									<path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z' />
								</svg>
							</a>
							<a
								href='https://wa.me/573128135693?text=Hola,%20me%20interesan%20sus%20servicios%20como%20desarrollador%20web.'
								target='_blank'
								className=' relative w-9'
								title='Whatsapp'
								rel='noreferrer'>
								<svg
									className='absolute w-10 h-10 fill-white hover:fill-[#00E676] '
									viewBox='0 0 448 512'>
									<path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
