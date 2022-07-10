import axios from "axios";

export default async function GetLocation(){
    try{
        const { data: response } = await axios.get('http://ip-api.com/json/?fields=country,regionName,city');
        return `${response.city}, ${response.regionName}, ${response.country}`;
    }
    catch(e){
        console.log(e);
    }
    
    return null;
}