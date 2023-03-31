import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';
import { SubHeading, Title } from 'theme';



const Testamonials = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Testamonials');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                <Title level={1}>Testamonials</Title>
                <SubHeading>Ed Spurrier</SubHeading>
            </Layout>
        </PageLoader>
    );
});

Testamonials.displayName = 'Testamonials';

Testamonials.propTypes = {};

export default Testamonials;
