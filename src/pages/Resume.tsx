import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const Text = styled.p`
  width: 700px;
`;

const Resume = () => {
  return (
    <div>
      <Title>나는 프로젝트 내역</Title>
      <Text>
        <p>프로젝트 내역을 적어봅니다.</p>
      </Text>
      <Title>나는 프로젝트 내역</Title>
      <Text>
        <p>프로젝트 내역을 적어봅니다.</p>
      </Text>
      <Title>나는 프로젝트 내역</Title>
      <Text>
        <p>프로젝트 내역을 적어봅니다.</p>
      </Text>
    </div>
  );
};

export default Resume;
