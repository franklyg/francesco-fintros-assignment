import styled from 'styled-components';

const PostFilterParent = styled.section`
    padding-top: 4rem;
    padding: 0 2rem;
    margin: 0 0 4rem;
    text-align: center;
    border-bottom: 2px solid rgb(238, 226, 215);
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
const PostFilterLinkHolderOverflow = styled.div`
    overflow: hidden;
    height: 8rem;
`;
const PostFilterLinkHolder = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 2rem;
    padding-bottom: 10rem;
    position: relative;
`;
const PostFilterLinkList = styled.ul`
    display: flex;
    flex-flow: row;
    justify-content: center;
    list-style-type: none;
    position: absolute;
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
        <PostFilterLinkHolderOverflow>
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
        </PostFilterLinkHolderOverflow>
    </PostFilterParent>
)

export default PostFilter