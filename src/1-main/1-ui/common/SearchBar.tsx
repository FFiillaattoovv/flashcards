import React, {ChangeEvent} from 'react';
import styles from "./SearchBar.module.css";
import RadioOptions from "./RadioOptions";

type SearchBarProps = {
    searchValue: string
    onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    onClickSearch: () => void
    onClickReset: () => void
    searchOptions?: string[]
    searchOption?: string
    setSearchOption?: (option: string) => void
}

export const SearchBar = ({searchValue, onChangeSearchValue, onClickSearch, onClickReset, searchOption, setSearchOption, searchOptions}: SearchBarProps) => {
    return (
        <div className={styles.searchInput}>
            {searchOptions && <RadioOptions name={'radio'} options={searchOptions} value={searchOption}
                          onChangeOption={setSearchOption}/>}
            <input className={styles.letterInput} value={searchValue} onChange={onChangeSearchValue}/>
            <button onClick={onClickSearch}>Search</button>
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}