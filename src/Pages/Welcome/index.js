import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from '../../modules/PageLoader';
import Layout from '../../components/Layout';



const Welcome = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Welcome');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                WELCOME
            </Layout>
        </PageLoader>
    );
});

Welcome.displayName = 'Welcome';

Welcome.propTypes = {};

export default Welcome;
