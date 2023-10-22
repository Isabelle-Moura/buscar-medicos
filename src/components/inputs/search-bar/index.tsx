// import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useEffect, useState } from 'react';
import SearchIcon from '../../../assets/icons/search.png'
import * as S from './style'

// import { useLocation } from 'react-router-dom';

// interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
//   onSearch: (search: string) => void { onSearch }: Props
// }

const SearchBar = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const initialSearchValue = queryParams.get('search') || '';

  // const [searchValue, setSearchValue] = useState(initialSearchValue);

  // const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setSearchValue(newValue);
  // };

  // const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     handleSearch();
  //   }
  // };

  // const handleSearch = () => {
  //   onSearch(searchValue);
  // };

  // useEffect(() => {
  //   // Update the search input value whenever the URL query parameter changes
  //   const queryValue = queryParams.get('search') || '';
  //   setSearchValue(queryValue);
  // }, [location.search]);

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Pesquise uma palavra-chave"
        // value={searchValue}
        // onChange={handleSearchChange}
        // onKeyDown={handleKeyPress}
      />
      <S.Icon src={SearchIcon} />
    </S.Container>
  );
};

export default SearchBar;