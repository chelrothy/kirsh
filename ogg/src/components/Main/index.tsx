import * as React from "react";

import * as BS from "./../../lib/style";
import * as S from "../../lib/style/main";
import { mainBgImg } from "./../../assets";
import Ranking from "./../Ranking";
import CreateStore from "./../CreateStore";
import SearchBar from "./MainSearchBar";
import useCreateStoreModal from "./../../hooks/store/useCreateStoreModal";

const Main: React.FC = () => {
  const { isOpen, setModalClosed, setModalOpened } = useCreateStoreModal();

  return (
    <S.MainContainer>
      <SearchBar />
      <Ranking />
      {isOpen && <CreateStore />}
      <BS.BackgroundImg src={mainBgImg} />
    </S.MainContainer>
  );
};

export default Main;
