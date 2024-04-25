import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Overlay from './Overlay';

const Tarjeta = ({ data }) => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};
	const closeModal = () => {
		setOpen(false);
	};

	return (
		<section>
			<Card data={data} open={openModal} />
			{open && <Overlay close={closeModal}>{<Modal data={data} close={closeModal} />}</Overlay>}
		</section>
	);
};

export default Tarjeta;
