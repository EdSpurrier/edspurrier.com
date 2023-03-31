import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import PageLoader from 'modules/PageLoader';
import Layout from 'components/Layout';
import { SubHeading, Title } from 'theme';



const Skills = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(() => {
        setPageTitle('Skills');
    }, [])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'CenterY', 'FullH']}>
                <Title level={1}>Skills</Title>
                <SubHeading>Ed Spurrier</SubHeading>
            </Layout>
        </PageLoader>
    );
});

Skills.displayName = 'Skills';

Skills.propTypes = {};

export default Skills;
