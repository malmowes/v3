import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  
  
  
  const [counter, setCounter] =useState (0);
  


  const style = StyleSheet.create({
      baseText: {
      fontWeight: "bold", fontSize: (25), height:100
    },
      

  });

function plus() {
  setCounter (counter +1);

    if (counter <0) 
    {setCounter(0);
  
    }
  }

  function minus() {
    setCounter (counter -1);
  
      if (counter <0) 
      {setCounter(0);
    
      }
    }

   
  



  return (
    <View
      style={{
        flex: 1,
        
        alignItems: "center",
      }}
    >
      <View>

      <Text style = {style.baseText}>{counter}</Text>
      </View>
      
      
     
      <View style= {{  justifyContent: "center", backgroundColor:"skyblue", width:100}}>
      
      
      <Button
          onPress={() => {
plus();


          }
                        
          }
       
title="Plus"       
       />
    </View>
     
    <View style= {{ justifyContent: "center", backgroundColor:"yellow", width:100}}>
      <Button
          onPress={() => {
minus();


          }
                        
          }
       
title="Minus"       
       />
    
    </View> 
  






<View style={{
        flex:1
      }}>

    </View>

    <View style={{justifyContent: "center", backgroundColor:"red", width:100,}}>
    
 {counter > 0 && (
        <Button
          title="Reset"
          onPress={() => {

            setCounter(0) ;
            
            
                      }
                        
                        
                        
                        
                      }
          color="green"
        />
      )}







      </View>
<View style= {{ height:50}}>
  
  </View>




    </View>
  );
}
