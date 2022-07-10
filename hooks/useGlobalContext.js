import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useGlobalContext(){
    let context = useContext(GlobalContext);
    return context;
}