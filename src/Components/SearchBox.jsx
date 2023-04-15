import { Input,  } from 'antd';
const { Search } = Input;

const SearchBox = ({onSearch}) => {
    // const onSearch = (value) => console.log(value);

    return(
    <Search 
     placeholder="Enter your city" 
     size='small'
     style={{
        width: 200,
        marginRight:"10px"
     }}
     onSearch={onSearch}
     enterButton 
    />
);}
export default SearchBox;