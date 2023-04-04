import { Context } from "./Context";

const Contextstate = (props)=>
{
    return(
        <Context.Provider value={"hello"}>
            {props.children}
        </Context.Provider>
    )
}

export default Contextstate;