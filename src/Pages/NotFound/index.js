import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';
import { Title } from 'theme';
import { NavLink } from 'react-router-dom';
import routePaths from 'Router/routePaths';


const NotFound = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH', 'Column']}>
                <Title level={1}>404</Title>
                <br />
                Opps you seemed to find a place we don't live...
                <br />
                <br />
                <br />
                <NavLink to={routePaths.welcome}>
                    Home
                </NavLink>
            </Layout>
        </PageLoader>
    );
});

NotFound.displayName = 'NotFound';

NotFound.propTypes = {};

export default NotFound;
