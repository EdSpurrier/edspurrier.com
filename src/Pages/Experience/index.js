import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';
import { SubHeading, Title } from 'theme';



const Experience = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Experience');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                <Title level={1}>Experience</Title>
                <SubHeading>Ed Spurrier</SubHeading>
            </Layout>
        </PageLoader>
    );
});

Experience.displayName = 'Experience';

Experience.propTypes = {};

export default Experience;
