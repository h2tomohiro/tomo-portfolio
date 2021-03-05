import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {useRouter} from 'next/router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const CardModal = ({test}) => {
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const router = useRouter();

	return (
		<div>
			<div className="mb-2">
			<Button
				variant="primary"
				size="lg"
				color="primary"
				onClick={() => setModalDefaultOpen(true)}
				type="button"
				onClick={toggle}
			>
			  Check Information
			</Button>
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle} style={{
					backgroundColor: 'black',
				}}>{ test.title }</ModalHeader>
				<ModalBody class="modal-css" style={{
					backgroundColor: 'black',
				}}>
				  <figure>
					  <img class="modal-image"
						  src={ test.image_url}
							key={ test.mal_id }
						  alt=""/>
						<p>
							<b>Review Score</b><br/> { test.score}
						</p>
						<p>
							<b>Synopsis</b><br/> { test.synopsis}
						</p>
						<p>
							<b>Frist Date of publication</b><br/> { test.start_date.slice( 0, 10 )}
						</p>
						<p>
							<b>Last date of publication</b><br/> { test.end_date.slice( 0, 10 )}
						</p>
					</figure>
				</ModalBody>
				<ModalFooter style={{
					backgroundColor: 'black',
				}}>
					<Button
						onClick={() => router.push(test.url)}
						key={test.mal_id}
						color="primary"
						className="mb-3 btn-sm"
									>Go to Website
					</Button>
					<Button color="secondary"
									className="mb-3 btn-sm"
									onClick={toggle}>Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}