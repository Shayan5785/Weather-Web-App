import { Input,  } from 'antd';
const { Search } = Input;

const SearchBox = ({onSearch}) => {

    return(
    <Search 
     placeholder="Enter your city" 
     size='small'
     style={{
        width: 200,
        marginRight:"10px"
     }}
     onSearch={onSearch}
     onPressEnter={false} 
     enterButton
    />
);}
export default SearchBox;