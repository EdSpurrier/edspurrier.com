import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';

const ComingSoon = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Coming Soon');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                COMING SOON<br />
            </Layout>
        </PageLoader>
    );
});

ComingSoon.displayName = 'ComingSoon';

ComingSoon.propTypes = {};

export default ComingSoon;
