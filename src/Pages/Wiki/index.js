import React, { memo, useEffect } from 'react';
import useHostStore from "host/hostStore";
import styled from 'styled-components';
import { Title } from 'slaydtheme';
import PageLoader from '../../modules/PageLoader';
import Layout from '../../components/Layout';

const Section = styled.section`
    text-align: center;
    padding: 20px 0;
`;

const SectionHeading = styled(Title)`

`;

const InputLine = styled.div`

`;

const Wiki = memo((props) => {
    const { setPageTitle } = useHostStore();

    useEffect(()=>{
        setPageTitle('Wiki');
    },[])

    return (
        <PageLoader>
            <Layout layoutStyle={['Flex', 'CenterX', 'FullH']}>
                <Section>
                    <SectionHeading level={3}>User Input:</SectionHeading>
                    <SectionHeading level={4}>Keyboard:</SectionHeading>
                    <SectionHeading level={5}>Navigation:</SectionHeading>
                    <InputLine>[M] - Opens & closes Main Menu</InputLine>
                    <InputLine>[U] - Opens & closes User Menu</InputLine>
                    <InputLine>[Escape] - Closes User & Main Menus if open</InputLine>
                </Section>
            </Layout>
        </PageLoader>
    );
});

Wiki.displayName = 'Wiki';

Wiki.propTypes = {};

export default Wiki;
