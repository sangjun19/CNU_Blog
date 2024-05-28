import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture
            src="data:image/png;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>안상준</Name>
          <Description>컴퓨터융합학부</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
