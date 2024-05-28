import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 1rem;
  word-break: keep-all;
`;

const Text = styled.p`
  width: 700px;
  margin-left: 10px;
  margin-bottom: 2rem;
`;

const Resume = () => {
  return (
    <div>
      <Title>동계실무캠프 수료</Title>
      <Text>
        <p>2020년 겨울방학</p>
        <p>피그마, 플러터를 활용한 프로젝트</p>
      </Text>
      <Title>창의축전 주니어부문 장려상</Title>
      <Text>
        <p>2022년 1학기</p>
        <p>플러터를 이용하여 평생교육 강좌 알림 어플 개발</p>
      </Text>
      <Title>충청톤 대상</Title>
      <Text>
        <p>2022년 2학기</p>
        <p>백엔드 개발자로 참여 도움이 필요한 수혜자 매칭 플랫폼 개발</p>
      </Text>
    </div>
  );
};

export default Resume;
