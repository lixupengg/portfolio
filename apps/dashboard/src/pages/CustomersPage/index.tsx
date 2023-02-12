// Basic Imports
import React, { useEffect } from 'react';
import useRequest from '@stonksfi/hooks';
import Table from '../../sharedComponents/Table';

/* Styles */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../components/CTAButton';

const CustomersPage = () => {
	const [selectedTabList, setSelectedTabList] = React.useState<number>(0);
	const handleTabChange = (index: number) => {
		setSelectedTabList(index);
	};
	const { data, error, status } = useRequest({
		url: 'http://18.143.189.118:8080/api/',
		method: 'get'
	});
	return (
		<>
			<main className="page-container">
				<div className={styles.campaignPageHeaderRow}>
					<h2 className={styles.pageTitle}> Customers </h2>
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
				<Table data={[]} columns={[]} />
			</main>
		</>
	);
};

export default CustomersPage;
