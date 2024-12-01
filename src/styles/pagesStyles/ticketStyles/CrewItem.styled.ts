import styled from 'styled-components';

export const CrewItemContainer = styled.div`
  width: 100%;
  padding:1.6rem 0px;

  display: flex;
  gap: 1.6rem;
  border-bottom: 1px solid var(--grayBG);

  &:last-child {
    margin-bottom:16px;
  }
`;

export const Image = styled.img`
  width: 10.7rem;
  height: 10.7rem;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Difficulty = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--brandColor);
`;

export const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--textC3);
`;

export const CapacityArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CapacityIcon = styled.img`
  width:2rem;
  height:2rem;
`;

export const Capacity = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  color: var(--textC3);
`;