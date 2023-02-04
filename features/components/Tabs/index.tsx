import React, { ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
	tabsContent: ReactNode[];
	tabsDisplayList: string[];
	handleTabChange: (index: number) => void;
	selectedTab: number;
}

const TabsWrapper = (props: Props) => {
	const { handleTabChange, selectedTab, tabsContent, tabsDisplayList } = props;
	return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabsList}>
                {tabsDisplayList.map((tab, index) => (
                    <div
                        key={tab}
                        className={`${styles.tab} ${
                            selectedTab === index ? styles.selectedTab : ''
                        }`}
                        onClick={() => handleTabChange(index)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <div className={styles.tabsContent}>{tabsContent[selectedTab]}</div>
        </div>
	);
};

export default TabsWrapper;
