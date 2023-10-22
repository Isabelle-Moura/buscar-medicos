import { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import SearchIcon from '../../../assets/icons/search.png';
import * as S from './style';

interface Props {
   onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
   // Initially, the search state is empty
   const [searchValue, setSearchValue] = useState('');

   // Updates the search state when the user types in the search bar
   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setSearchValue(newValue);
   };

   // Pressing Enter, performs the search
   const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   // Performs the search when the user clicks the search icon
   const handleSearch = () => {
      if (onSearch) {
         onSearch(searchValue);
      }
   };

   return (
      <S.Container>
         <S.Input type="text" placeholder="Pesquise uma palavra-chave" value={searchValue} onChange={handleSearchChange} onKeyPress={handleKeyPress} />
         <S.Icon src={SearchIcon} onClick={handleSearch} />
      </S.Container>
   );
};

export default SearchBar;
