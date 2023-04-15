import { Input } from 'antd';
const InputCom = ({handleSearch}) => {
    return (
        <Input 
        placeholder="Enter your city" 
        size='small'
        style={{marginRight:"10px"}}
        onClick={console.log("enter")}
        />
    )
};
export default InputCom;