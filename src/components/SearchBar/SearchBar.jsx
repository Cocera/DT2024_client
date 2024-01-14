import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 366,
        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder={<SearchOutlined />}
      />
    </>
  );
};

export default SearchBar;