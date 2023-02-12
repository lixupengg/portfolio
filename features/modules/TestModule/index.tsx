import React, { ReactNode } from 'react';
import { ModuleConfig } from '../types';
import { Test } from './style';

interface Props {
    config?: ModuleConfig;
}

const TestModule = (props: Props) => {
	const { config } = props;
	return (
       <Test>
            {config?.name}
        </Test>
	);
};

export default TestModule;
