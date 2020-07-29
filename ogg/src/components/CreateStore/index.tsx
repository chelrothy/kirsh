import * as React from "react";

import * as S from "./../../lib/style/createProduct";
import CreateStoreStarInput from "./CreateStoreStarInput";
import { closeIcon } from "./../../assets";
import useCreateStore from "./../../hooks/store/useCreateStore";

const CreateStore: React.FC = () => {
  const {
    setStoreName,
    setDescription,
    setAveragePrice,
    setPicture,
    submitNewStore,
    setModalClosed
  } = useCreateStore();

  const onClickButton = () => {
    submitNewStore();
    setModalClosed();
  };

  const handleFiles = (files: FileList | null) => {
    if (files) {
      const picture = files[0];
      setPicture(picture);
    }
  };

  return (
    <S.CreateProductBackground>
      <S.CreateProductContainer>
        <S.CreateProductHeader>
          <span>
            <S.CreateProductLogoTextGray>옷</S.CreateProductLogoTextGray>
            <S.CreateProductLogoText>까게</S.CreateProductLogoText>
          </span>
          <S.CreateProductCloseIcon
            src={closeIcon}
            alt="닫기"
            onClick={() => setModalClosed()}
          />
        </S.CreateProductHeader>
        <S.CreateProductMainText>쇼핑몰 생성하기</S.CreateProductMainText>
        <S.CreateProductSubText>
          아직 등록되지 않은 새로운 쇼핑몰을 생성해 주세요!
        </S.CreateProductSubText>
        <S.CreateProductFormContainer>
          <S.CreateProductLabel>쇼핑몰 이름</S.CreateProductLabel>
          <S.CreateProductInput
            placeholder="쇼핑몰 이름을 입력해 주세요."
            onChange={e => setStoreName(e.target.value)}
          />
          <S.CreateProductLabel>대표 사진</S.CreateProductLabel>
          <S.CreateProductInput
            type="file"
            placeholder="대표 사진을 등록해 주세요."
            onChange={e => handleFiles(e.target.files)}
          />
          <S.CreateProductLabel>쇼핑몰 설명</S.CreateProductLabel>
          <S.CreateProductInput
            type="text"
            placeholder="쇼핑몰을 짧게 설명해 주세요."
            onChange={e => setDescription(e.target.value)}
          />

          <S.CreateProductLabel>평균 가격대</S.CreateProductLabel>
          <S.CreateProductInput
            type="text"
            placeholder="평균 가격대를 입력해 주세요."
            onChange={e => setAveragePrice(e.target.value)}
          />
          <S.CreateProductLabel>쇼핑몰 평점</S.CreateProductLabel>
          <br />
          <CreateStoreStarInput />
          <br />
          <S.CreateProductButton onClick={() => onClickButton()}>
            이 쇼핑몰 생성하기
          </S.CreateProductButton>
        </S.CreateProductFormContainer>
      </S.CreateProductContainer>
    </S.CreateProductBackground>
  );
};

export default CreateStore;
