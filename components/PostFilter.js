import styled from 'styled-components';

const PostFilterParent = styled.section`
    padding-top: 4rem;
    margin: 0 2rem;
    text-align: center;
`;
const PostFilterHeading = styled.div`
    padding-top: 4rem;
`;
const PostFilterHeader = styled.h2`
    font-size: calc(4rem + (16 * (100vw - 1440px)) / 1119);
`;
const PostFilterHeaderSubText = styled.p`
    color: rgb(204, 131, 92);
    font-size: calc(1rem + (2 * (100vw - 1440px)) / 1119);
    margin-bottom: 2rem;
`;
const PostFilterLinkHolder = styled.div`
    overflow: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;
const PostFilterLinkList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style-type: none;
`;
const PostFilterLinkListItem = styled.li`
    min-width: 125px;
    font-size: 1.5rem;
`;

const PostFilter = () => (
    <PostFilterParent>
        <PostFilterHeading>
            <PostFilterHeaderSubText>Discover more about Fintros</PostFilterHeaderSubText>
            <PostFilterHeader>Expore the Fintros Journal</PostFilterHeader>
        </PostFilterHeading>
        <PostFilterLinkHolder>
            <PostFilterLinkList>
                <PostFilterLinkListItem>All</PostFilterLinkListItem>
                <PostFilterLinkListItem>Grooming</PostFilterLinkListItem>
                <PostFilterLinkListItem>Hair</PostFilterLinkListItem>
                <PostFilterLinkListItem>Lifestyle</PostFilterLinkListItem>
                <PostFilterLinkListItem>Mental Health</PostFilterLinkListItem>
                <PostFilterLinkListItem>Primary Care</PostFilterLinkListItem>
                <PostFilterLinkListItem>Psychiatric</PostFilterLinkListItem>
                <PostFilterLinkListItem>Science</PostFilterLinkListItem>
                <PostFilterLinkListItem>Sex</PostFilterLinkListItem>
                <PostFilterLinkListItem>Skin</PostFilterLinkListItem>
                <PostFilterLinkListItem>Top Posts</PostFilterLinkListItem>
                <PostFilterLinkListItem>Well Being</PostFilterLinkListItem>
            </PostFilterLinkList>
        </PostFilterLinkHolder>
    </PostFilterParent>
)

export default PostFilter