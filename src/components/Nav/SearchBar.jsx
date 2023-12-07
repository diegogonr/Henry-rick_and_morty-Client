import { useEffect, useState } from "react";
import {Button,Input,InputGroup,InputLeftElement, InputRightAddon} from "@chakra-ui/react";
 import { Search2Icon } from "@chakra-ui/icons";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
      
      console.log(id)

   }

   return (
      <div>
         {/* el valor del input es igual a id, si se cambia este por alguna razón */}
         {/* <input type='search' onChange={handleChange} value={id}/>    */}

         {/* cuando se necesite pasar argumento en una función, se hace por medio del callback
         para que no se ejecute */}
         {/* <button onClick={()=>{onSearch(id); setId('')}}>Agregar</button>   */}
 
         <InputGroup borderRadius={5} size="sm">
            <InputLeftElement
               pointerEvents="none"
               children={<Search2Icon color="gray.600" />}
            />
            <Input type="text" placeholder="Search..." border="1px solid #949494" onChange={handleChange} value={id}/> 
            <InputRightAddon
               p={0}
               border="none"
            >
               <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494"
                  onClick={()=>{onSearch(id); setId('')}}>
                  Add character
               </Button>
            </InputRightAddon>
         </InputGroup>
      </div>
   );
}
