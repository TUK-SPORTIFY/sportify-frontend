import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { locationState } from '../recoil/atom/location';
import * as S from '../styles/AddressSearch.styled';
import SearchResults from '../components/SearchResults';
import MyAddressesList from '../components/MyAddresses';
import { addressModalState } from '../recoil/atom/addressModal';
import AddressPopup from '../components/AddressPopup';
import BaseInput from '../components/BaseInput';

const AddressSearchPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // 검색어 입력 DOM을 참조하기 위한 ref
  const psRef = useRef<kakao.maps.services.Places | null>(null);
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]); // 검색 결과
  const location = useRecoilValue(locationState);

  const [selectedPlace, setSelectedPlace] =
    useState<kakao.maps.services.PlacesSearchResultItem | null>(null); // 주소 클릭 후  저장
  const [modalOpen, setModalOpen] = useRecoilState(addressModalState);

  useEffect(() => {
    const { kakao } = window;
    psRef.current = new kakao.maps.services.Places();
  }, []);

  const searchPlaces = () => {
    const ps = psRef.current;
    const keyword = inputRef.current?.value;

    if (!keyword) {
      // 키워드가 없을 경우 검색 결과
      setPlaces([]);
      return;
    }

    ps?.keywordSearch(
      keyword,
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색 결과를 최대 10개로 제한
          setPlaces(data.slice(0, 10));
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 중 오류가 발생했습니다.');
        }
      },
      {
        location: new window.kakao.maps.LatLng(location.latitude, location.longitude),
      }
    );
  };

  // 장소 저장
  const handleSavedPlaces = (place: kakao.maps.services.PlacesSearchResultItem) => {
    setSelectedPlace(place);
    setModalOpen(true);
  };

  return (
    <S.SearchContainer>
      <BaseInput
        search={true}
        onChange={searchPlaces}
        ref={inputRef}
        type="text"
        placeholder={
          location.address === '' ? '지번,도로명,건물명을 입력해주세요' : location.address
        }
      />
      {inputRef.current?.value ? (
        <SearchResults places={places} onPlaceClick={handleSavedPlaces} />
      ) : (
        <MyAddressesList />
      )}
      {modalOpen && selectedPlace && <AddressPopup place={selectedPlace} />}
    </S.SearchContainer>

    // 주소 페이지 인터랙션 구현
  );
};
export default AddressSearchPage;
