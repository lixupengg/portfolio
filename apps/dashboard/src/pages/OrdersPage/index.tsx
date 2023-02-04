/* eslint-disable react/state-in-constructor */
// Basic Imports
import React, { useEffect } from 'react';

/* Styles */
import axios from 'axios';
import styles from './index.module.scss';

/* Components */
import PageHeader from '../../components/PageHeader';
import { ORDERS_TABLE, EXPIRED_ORDERS_TABLE } from '../../DATA/FAKE_DATA';
import Table from '../../sharedComponents/Table';
import CTAButton from '../../components/CTAButton';

const OrdersPage = () => {
	const [selectedTabList, setSelectedTabList] = React.useState<number>(0);
	const [userData, setUserData] = React.useState<any>();
	useEffect(() => {
		axios
			.get('/merchants/3/orders')
			.then((res) => {
				setUserData(res);
				console.log(userData);
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(userData);
	}, []);
	const handleTabChange = (index: number) => {
		setSelectedTabList(index);
	};
	return (
		<>
			<main className="page-container">
				<PageHeader
					title="Subscription"
					breadcrumb={[
						{ content: 'Home', to: '/subscriptions' },
						{ content: 'Subscriptions' }
					]}
					callToAction=""
				/>
				<div className={styles.campaignPageHeaderRow}>
					<h2 className={styles.pageTitle}> Subscriptions </h2>
					<div className={styles.buttonsRow}>
						<CTAButton
							colorScheme="brand"
							type="secondary"
							size="tiny"
							to="/brand/campaigns/new"
							disabled
						>
							<i className="bx bxs-download"></i>
							Export
						</CTAButton>
					</div>
				</div>
				<Table
					data={EXPIRED_ORDERS_TABLE.data}
					columns={EXPIRED_ORDERS_TABLE.columns}
				/>
			</main>
		</>
	);
};

export default OrdersPage;
