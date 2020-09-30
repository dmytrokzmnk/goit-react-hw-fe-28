import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 112px;
  width: 400px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
export const ListStatus = styled.span`
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isOnline ? "rgb(75,175,76)" : "rgb(254,82,78)")};
  display: block;
  margin-left: 16px;
  margin-right: 16px;
`;
export const ListAvatar = styled.img`
  width: 97px;
  height: 97px;
  margin-right: 16px;
  border-radius: 15px;
  display: block;
`;
export const ListName = styled.p`
  font-size: 24px;
`;
