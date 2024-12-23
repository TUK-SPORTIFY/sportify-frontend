import React from 'react';
import * as S from '@/styles/componentsStyles/componentsLayoutStyles/Input.styled';
import { forwardRef } from 'react';

interface BaseInputProps {
  type?: string;
  placeholder: string;
  search?: boolean; // 검색 스타일 여부
  margin?: string;
  value?: string;
  onFocus?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { type = 'text', placeholder = '', search = false, margin, value, onChange, onFocus, ...props },
    ref
  ) => {
    return (
      <S.SearchInput
        type={type}
        required
        placeholder={placeholder}
        search={search}
        ref={ref}
        $margin={margin}
        value={value} // 상태를 넘김
        onChange={onChange}
        onFocus={onFocus}
        {...props}
      />
    );
  }
);

export default BaseInput;
