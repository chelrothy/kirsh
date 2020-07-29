import * as React from "react";

import * as S from "./../../lib/style/createProduct";
import useCreateProduct from "./../../hooks/product/useCreateProduct";
import useCreateProductModal from "./../../hooks/product/useCreateProductModal";
import { closeIcon } from "./../../assets";

const CreateProduct: React.FC = () => {
  const { submitNewProduct, setProductName, setPicture } = useCreateProduct();
  const { isOpen, setModalClosed, setModalOpened } = useCreateProductModal();

  const onClickButton = () => {
    submitNewProduct();
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
        <S.CreateProductMainText>상품 추가하기</S.CreateProductMainText>
        <S.CreateProductSubText>
          아직 등록되지 않은 새로운 상품을 추가해 주세요!
        </S.CreateProductSubText>
        <S.CreateProductFormContainer>
          <S.CreateProductLabel>상품 이름</S.CreateProductLabel>
          <S.CreateProductInput
            placeholder="상품 이름을 입력해 주세요."
            onChange={e => setProductName(e.target.value)}
          />
          <S.CreateProductLabel>상품 사진</S.CreateProductLabel>
          <S.CreateProductInput
            onChange={e => handleFiles(e.target.files)}
            type="file"
            placeholder="상품 이름을 입력해 주세요."
          />
          <S.CreateProductButton onClick={() => onClickButton()}>
            이 상품 추가하기
          </S.CreateProductButton>
        </S.CreateProductFormContainer>
      </S.CreateProductContainer>
    </S.CreateProductBackground>
  );
};

export default CreateProduct;
