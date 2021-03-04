// import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import {
// 	Button,
// 	Modal,
// 	Row,
// 	Col,
// } from "reactstrap";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import MessageInfo from './MessageInfo';

/**
 * モーダル
 */
export const ModalArea = ({test}) => {
	// const modalTitle = manga;
	// 	buttonName,
	// 	modalBody,
	// 	modalAction,
	// 	message,
	// 	color,
	// 	buttonColor

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const clicked = () => modalAction();

	return (
		<div>
			<Button
				outline block
				// color={buttonColor}
				className="mb-3 btn-sm"
				onClick={toggle}
			>
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{ test.title }</ModalHeader>
				<ModalBody></ModalBody>
				<figure>
					<img
						src={ test.title }
						alt=""/>
				</figure>
				{/*<MessageInfo*/}
				{/*	message={message}*/}
				{/*	color={color}*/}
				{/*/>*/}
				<ModalFooter>
					<Button color="secondary"
									className="mb-3 btn-sm"
									onClick={toggle}>閉じる
					</Button>
					{/*{ !message ?*/}
					{/*	<Button*/}
					{/*		className="mb-3 btn-sm"*/}
					{/*		color="success" onClick={() => {clicked()}}>実行する*/}
					{/*	</Button>*/}
					{/*	: null}*/}
				</ModalFooter>
			</Modal>
		</div>
	);
}


// export const Pop = () => {
// 	const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
// 	const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
// 		false
// 	);
// 	const [modalFormOpen, setModalFormOpen] = React.useState(false);
// 	return (
// 		<>
// 			<Row>
// 				<Col md="2">
// 					<Button
// 						block
// 						className="mb-3"
// 						color="primary"
// 						onClick={() => setModalDefaultOpen(true)}
// 						type="button"
// 					>
// 						Default
// 					</Button>
// 					<Modal
// 						isOpen={modalDefaultOpen}
// 						toggle={() => setModalDefaultOpen(false)}
// 					>
// 						<div className=" modal-header">
// 							<h6 className=" modal-title" id="modal-title-default">
// 								Type your modal title
// 							</h6>
// 							<button
// 								aria-label="Close"
// 								className=" close"
// 								onClick={() => setModalDefaultOpen(false)}
// 								type="button"
// 							>
// 								<span aria-hidden={true}>×</span>
// 							</button>
// 						</div>
// 						<div className=" modal-body">
// 							<p>
// 								{/*Far far away, behind the word mountains, far from the countries*/}
// 								{/*Vokalia and Consonantia, there live the blind texts. Separated*/}
// 								{/*they live in Bookmarksgrove right at the coast of the Semantics,*/}
// 								{/*a large language ocean.*/}
// 							</p>
// 							<p>
// 								{/*A small river named Duden flows by their place and supplies it*/}
// 								{/*with the necessary regelialia. It is a paradisematic country, in*/}
// 								{/*which roasted parts of sentences fly into your mouth.*/}
// 							</p>
// 						</div>
// 						<div className=" modal-footer">
// 							<Button color="primary" type="button">
// 							  Go Website
// 							</Button>
// 							<Button
// 								className=" ml-auto"
// 								color="link"
// 								onClick={() => setModalDefaultOpen(false)}
// 								type="button"
// 							>
// 								Close
// 							</Button>
// 						</div>
// 					</Modal>
// 				</Col>
// 			</Row>
// 		</>
// 	);
// }
