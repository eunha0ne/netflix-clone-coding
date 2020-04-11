import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '~/features/Modal/modalSlice';
import { clearDetail } from '~/features/Detail/detailSlice';

import * as UI from '~/assets/ui/Icons';
import * as S from './index.style';

interface ModalProps {
  children: JSX.Element;
  backPath?: string | null;
}

export const Modal = ({ backPath, children }: ModalProps) => {
  return (
    <S.Background>
      <S.Modal backPath={backPath}>
        {children}
        <CloseButton />
      </S.Modal>
    </S.Background>
  );
};

const CloseButton = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
    dispatch(clearDetail());
  };

  return (
    <S.CloseBtn className="close-btn" onClick={onClose}>
      <UI.IconX width="3vw" height="3vw" />
      <span className="blind">콘텐츠 닫기</span>
    </S.CloseBtn>
  );
};
