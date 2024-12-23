import { useEffect } from 'react';
import { Divide, Title, CrewItem, Button } from '@/components';
import * as S from '@/styles/pagesStyles/manageCrewStyles/ManageCrewPage.styled';
import { myCrewsState, myPastCrewsState } from '@/recoil/atom/myCrews';
import { useRecoilState } from 'recoil';

import { useQueries } from '@/service/queries/useQueries';
import { myNeighborsApi, pastCrewsApi } from '@/service/queries';

import FilterIcon from '@/assets/icon/etc/filter_Default.png';
import { useNavigate } from 'react-router-dom';

const ManageCrewPage = () => {
  const [myCrews, setMyCrews] = useRecoilState(myCrewsState);
  const [myPastCrews, setMyPastCrews] = useRecoilState(myPastCrewsState);
  const navigate = useNavigate();

  const { data } = useQueries(
    ['myNeighbors', 'myPastCrewsState'], // queryKey
    {
      myNeighbors: myNeighborsApi,
      myPastCrewsState: pastCrewsApi,
    },
    { staleTime: 5 * 60 * 1000, cacheTime: 10 * 60 * 1000 }, // queryOptions
    [null, null]
  );

  useEffect(() => {
    if (data) {
      const myCrewData = data.myNeighbors.data.myCrews;
      const myPastCrewData = data.myPastCrewsState.data.myPastCrews;

      setMyCrews(myCrewData);
      setMyPastCrews(myPastCrewData);
    }
  }, [data, setMyCrews, setMyPastCrews]);

  return (
    <S.EntireConatiner>
      <S.MyCrewListContainer>
        <Title title="나의 이웃 모임" color={true} />
        <S.MyCrewList>
          {myCrews && myCrews.length > 0 ? (
            myCrews.map((crew) => (
              <CrewItem
                onClick={() => navigate(`/crewItem/${crew.crewId}`, { state: { crew } })}
                key={crew.crewId}
                crews={crew}
              />
            ))
          ) : (
            <S.NoneData>현재 나만의 운동 이웃이 없습니다.</S.NoneData>
          )}
        </S.MyCrewList>
        <Button title="새로운 모임 찾아보기" onClick={() => {navigate('/ticket')}}></Button>
      </S.MyCrewListContainer>

      <Divide />

      <S.PastCrewListContainer>
        <Title title="과거의 나의 이웃 모임" color={true}>
          <S.FilterIcon src={FilterIcon} />
        </Title>
        <S.PastCrewList>
          {myPastCrews && myPastCrews.length > 0 ? (
            myPastCrews.map((crew) => <CrewItem key={crew.crewId} crews={crew} />)
          ) : (
            <S.NoneData>지난 이웃이 없습니다.</S.NoneData>
          )}
        </S.PastCrewList>
      </S.PastCrewListContainer>
    </S.EntireConatiner>
  );
};

export default ManageCrewPage;
