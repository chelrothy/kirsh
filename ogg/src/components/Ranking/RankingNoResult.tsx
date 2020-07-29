import * as React from "react";

import * as S from "../../lib/style/ranking";
import { questionIcon } from "./../../assets";
import useCreateStoreModal from "./../../hooks/store/useCreateStoreModal";

const RankingNoResult: React.FC = () => {
  const { isOpen, setModalClosed, setModalOpened } = useCreateStoreModal();

  return (
    <S.RankingNoResultContainer>
      <p>
        검색하신 조건과 일치하는 결과가 없습니다.
        <br />
        새로운 인터넷 쇼핑몰을 등록하시겠습니까?
      </p>
      <img src={questionIcon} alt="검색 결과 없음" />
      <button onClick={() => setModalOpened()}>쇼핑몰 등록</button>
    </S.RankingNoResultContainer>
  );
};

export default RankingNoResult;
