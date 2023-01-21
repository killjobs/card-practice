import React, {useState , createContext,defaultValue} from "react";

const CardNumberProvider = (props) =>{
    const [cardNumberValue, setCardNumberValue] = useState({});
    
    return(
        <div>
            <CardNumberContext.Provider value={[cardNumberValue,setCardNumberValue]}>
                {props.children}
            </CardNumberContext.Provider>
        </div>
    );
}

export default CardNumberProvider;
export const CardNumberContext = createContext({defaultValue});