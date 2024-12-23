import styled from 'styled-components';
import searchImg from '@/assets/icon/etc/search_Default.png'

export const SearchInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'search' && prop !== '$margin', // search는 DOM에 전달되지 않음
}) <{ search?: boolean, $margin?: string }>`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 8px;
  outline: 0;
  margin:  ${(props) =>
    props.$margin ? props.$margin : 0};

  background: var(--grayBG);
  /* 배경색과 이미지 통합 */
 
  ${(props) =>
    props.search &&
    `
    background: var(--grayBG) url(${searchImg}) no-repeat left center;
    background-size: 1.6rem; 
    background-position: 1.6rem center;
    padding-left: 4.3rem;
  `}

&::placeholder  { /* 기본 */
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--textC3);
}

&::-webkit-input-placeholder { /* Chrome, Safari, Edge */
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--textC8);
  }
`;

