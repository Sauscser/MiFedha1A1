import React, {useEffect, useState} from 'react';

import {createCompany} from '../../../src/graphql/mutations';
import { getAgent, getBankAdmin, getBizna, getCompany, getSAgent, listPersonels} from '../../../src/graphql/queries';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
 
} from 'react-native';
import styles from './styles';



const MFNSignIn = (props) => {  
  const navigation = useNavigation();

  const [MFNId, setMFNId] = useState("");
  const [MFNPW, setMFNPW] = useState(""); 
  const [ownr, setownr] = useState(null); 
  const [PhoneContact, setPhoneContact] = useState(null); 
  
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    
    
    setownr(userInfo.attributes.sub);
    setPhoneContact(userInfo.attributes.phone_number);
     
  };

  

  useEffect(() => {
      fetchUser();
    }, []);
    
    
      const fetchMFNDts = async () => {
        try {
          const Lonees:any = await API.graphql(graphqlOperation(listPersonels, 
            { filter: {
                and: {
                  phoneKontact: { eq: PhoneContact},
                  BusinessRegNo:{ eq: MFNId}
                  
                }
              }}
              ));

                

                const VwMFNAc = () => {
                  navigation.navigate("CredSlsLneess", {MFNId});
                };

                
                if(Lonees.data.listPersonels.items.length < 1){
                  Alert.alert("You are not a Credit Sales Officer here");
                }
          
          else{
              
                  VwMFNAc();
              }
              
            }

            catch (e)
            {
              if(e){
                Alert.alert("Business does not exist; ");
                return;
              }
                console.log(e)               
                
            }    
            setMFNId("");
            setMFNPW("");
      
    
             }

             useEffect(() =>{
              const mfnIDs=MFNId
                if(!mfnIDs && mfnIDs!=="")
                {
                  setMFNId("");
                  return;
                }
                setMFNId(mfnIDs);
                }, [MFNId]
                 );
  
                 useEffect(() =>{
                  const mfnPWs=MFNPW
                    if(!mfnPWs && mfnPWs!=="")
                    {
                      setMFNPW("");
                      return;
                    }
                    setMFNPW(mfnPWs);
                    }, [MFNPW]
                     );



         return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={MFNId}
                      onChangeText={setMFNId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Phone</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={MFNPW}
                      onChangeText={setMFNPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business PassWord</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={fetchMFNDts}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to View
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default MFNSignIn;