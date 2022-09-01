import styled from "styled-components";

const Announcement = () => {
  return (
    <Container>
      <ExtraContent>ONLINE EXCLUSIVE</ExtraContent>
      <SalesMainContent>15% OF WHEN YOU SPEND OVER $49</SalesMainContent>
      <ExtraContent>
        USE CODE: <SalesCode>MANUTD15</SalesCode>
      </ExtraContent>
    </Container>
  );
};

export default Announcement;
const Container = styled.div`
  height: 60px;
  background-color: #df0a0a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
`;

const SalesMainContent = styled.h1`
  color: white;
`;
const ExtraContent = styled.h3`
  color: white;
`;
const SalesCode = styled.span`
  color: #ebeb5f;
`;
