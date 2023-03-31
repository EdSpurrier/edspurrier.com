import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';
import { SubHeading, Title } from 'theme';



const Creations = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Creations');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                <Title level={1}>Creations</Title>
                <SubHeading>Ed Spurrier</SubHeading>
            </Layout>
        </PageLoader>
    );
});

Creations.displayName = 'Creations';

Creations.propTypes = {};

export default Creations;
