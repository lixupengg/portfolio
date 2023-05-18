import React, { ReactNode } from 'react';
import { Modal as RsuiteModal, ModalProps as RsuiteModalProps } from 'rsuite';
import { Button } from '@lixupeng/components';

/* Styles */
import { StyledButtonRow, StyledTitle } from './styles';

interface ModalProps extends RsuiteModalProps {
	title: string;
	children: ReactNode
	okText?: string;
	onOk?: () => void;
	cancelText?: string;
	onCancel?: () => void;
	size: 'lg' | 'md' | 'sm' | 'xs';
}

const Modal = (props: ModalProps) => {
	const { title, okText, onOk, cancelText, onCancel } = props;
	const handleOk = () => {
		if (onOk) {
			onOk();
		}
		if (onCancel) {
			onCancel();
		}
	}

	const handleCancel = () => {
		if (onCancel) {
			onCancel();
		}
	}
	return (
		<RsuiteModal {...props}>
			<RsuiteModal.Header>
				<StyledTitle>
					{title}
				</StyledTitle>
			</RsuiteModal.Header>
			<RsuiteModal.Body>
			{props.children}
			</RsuiteModal.Body>
			<RsuiteModal.Footer>
				<StyledButtonRow>
					<Button type='primaryStrong' onClick={handleOk}>
						{okText || 'OK'}
					</Button>
					<Button type='link' onClick={handleCancel}>
						{cancelText || 'Cancel'}
					</Button>
				</StyledButtonRow>
			</RsuiteModal.Footer>
		</RsuiteModal>
	);
};

Modal.Body = RsuiteModal.Body;
Modal.Header = RsuiteModal.Header;
Modal.Footer = RsuiteModal.Footer;

export default Modal;
