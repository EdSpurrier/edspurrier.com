import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';
import { SubHeading, Title } from 'theme';
import Navigation from 'components/Navigation';



const Welcome = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Welcome');
    }, [])

    return (
        <PageLoader>
            <Navigation />
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                <Title level={1}>WELCOME</Title>
                <SubHeading>Ed Spurrier</SubHeading>
            </Layout>
        </PageLoader>
    );
});

Welcome.displayName = 'Welcome';

Welcome.propTypes = {};

export default Welcome;
