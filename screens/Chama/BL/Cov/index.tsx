import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {updateCompany, updateSMAccount, updateCvrdGroupLoans, updateGroup,  updateChamaMembers, } from '../../../../src/graphql/mutations';
import {getCompany, getSMAccount, getCvrdGroupLoans, getGroup, getChamaMembers } from '../../../../src/graphql/queries';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';


  


const BLChmCovLoanee = (props) => {
  const navigation = useNavigation();

  const [LonId, setLonId] = useState("");
  const [ChmMbrId, setChmMbrId] = useState("");
  const [SigntryPW, setSigntryPW] = useState("");
  
 
  const[isLoading, setIsLoading] = useState(false);
  


  const route = useRoute();
  

  
    
    const gtCompDtls = async () =>{
      
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await Auth.currentAuthenticatedUser();
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ttlChmLnsInBlTymsCovs = compDtls.data.getCompany.ttlChmLnsInBlTymsCov
        const ttlChmLnsInBlAmtCovs = compDtls.data.getCompany.ttlChmLnsInBlAmtCov
        const userClearanceFees = compDtls.data.getCompany.userClearanceFee
        const ttlBLUsrss = compDtls.data.getCompany.ttlBLUsrs

        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls2 :any= await API.graphql(
              graphqlOperation(getCvrdGroupLoans,{id:route.params.id})
              );
              const loaneePhns = compDtls2.data.getCvrdGroupLoans.loaneePhn
              const loanerPhns = compDtls2.data.getCvrdGroupLoans.grpContact
              const amountexpecteds = compDtls2.data.getCvrdGroupLoans.amountExpectedBack
              const amountrepaids = compDtls2.data.getCvrdGroupLoans.amountRepaid
              const lonBala = compDtls2.data.getCvrdGroupLoans.lonBala
              const amountExpectedBackWthClrncs = compDtls2.data.getCvrdGroupLoans.amountExpectedBackWthClrnc
              
              const statusssss = compDtls2.data.getCvrdGroupLoans.status
              const memberIds = compDtls2.data.getCvrdGroupLoans.memberId
              
              const DefaultPenaltyChms = compDtls2.data.getCvrdGroupLoans.DefaultPenaltyChm
              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) 
              + parseFloat(amountExpectedBackWthClrncs) + parseFloat(DefaultPenaltyChms)
              const MmbrClrnceCosts = parseFloat(userClearanceFees) * parseFloat(amountexpecteds)
              const MmbrClrnceCost = parseFloat(userClearanceFees) * parseFloat(amountexpecteds)
              + parseFloat(DefaultPenaltyChms);

              const LonBal = amountExpectedBackWthClrncss - parseFloat(amountrepaids);

              

              const gtLoanerDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const compDtls3 :any= await API.graphql(
                    graphqlOperation(getGroup,{grpContact:loanerPhns})
                    );
                    const owners = compDtls3.data.getGroup.owner
                    const acStatuss = compDtls3.data.getGroup.status
                    const TtlBLLonsTmsLnrChmCovs = compDtls3.data.getGroup.TtlBLLonsTmsLnrChmCov
                    const TtlBLLonsAmtLnrChmCovs = compDtls3.data.getGroup.TtlBLLonsAmtLnrChmCov
                    const TtlActvLonsTmsLnrChmCovs = compDtls3.data.getGroup.TtlActvLonsTmsLnrChmCov
                    const TtlActvLonsAmtLnrChmCovs = compDtls3.data.getGroup.TtlActvLonsAmtLnrChmCov
                    const grpNames = compDtls3.data.getGroup.grpName
                    const tymsChmHvBLs = compDtls3.data.getGroup.tymsChmHvBL
                    const signitoryPWs = compDtls3.data.getGroup.signitoryPW
                         
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls4 :any= await API.graphql(
                          graphqlOperation(getSMAccount,{awsemail:loaneePhns})
                          );
                          const TtlBLLonsTmsLneeChmCovs = compDtls4.data.getSMAccount.TtlBLLonsTmsLneeChmCov
                          const TtlBLLonsAmtLneeChmCovs = compDtls4.data.getSMAccount.TtlBLLonsAmtLneeChmCov
                          const phonecontact = compDtls4.data.getSMAccount.phonecontact
                          const TtlActvLonsAmtLneeChmCovs = compDtls4.data.getSMAccount.TtlActvLonsAmtLneeChmCov
                          const acStatusss = compDtls4.data.getSMAccount.acStatus
                          const namess = compDtls4.data.getSMAccount.name
                          const MaxTymsBLs =compDtls4.data.getSMAccount.MaxTymsBL;

                          const MmbDtls = async () =>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                              const compDtls5 :any= await API.graphql(
                                graphqlOperation(getChamaMembers,{ChamaNMember:memberIds})
                                );
                                const LnBalsss = compDtls5.data.getChamaMembers.LnBal
                               

                          const updateLoanerDtls = async () => {
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await API.graphql(
                                  graphqlOperation(updateGroup,{
                                    input:{
                                      grpContact:loanerPhns,
                                      tymsChmHvBL: parseFloat(tymsChmHvBLs) + 1,
                                      TtlBLLonsTmsLnrChmCov: parseFloat(TtlBLLonsTmsLnrChmCovs) + 1,
                                      TtlBLLonsAmtLnrChmCov: (parseFloat(TtlBLLonsAmtLnrChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                      TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                      
                                    }
                                  })
                                )
                        
                                
                            }
                            catch(error){ 
                              if (error){
                                Alert.alert("Error! Access denied!")
                                return}
                      }

                            setIsLoading(false);          
                            await updtActAdm ();
                          } 
                          
                          if(LonBal === 0){
                            Alert.alert("Loanee has cleared this loan");
                            return;
                          }

                          else if(owners !== userInfo.attributes.sub){
                            Alert.alert("You are not the one owed this loan")
                            return;
                          } 
                          

                          else if(statusssss === "LoanBL"){
                            Alert.alert("This Loan is already Black Listed")
                            return;
                          } 

                          else if(acStatuss === "AccountInactive"){
                            Alert.alert("Loaner account has been deactivated")
                            return;
                          } 

                          else if(acStatusss === "AccountInactive"){
                            Alert.alert("Loanee account has been deactivated");
                            return;
                          } 
                          else{updateLoanerDtls();}
                          
                  
                          const updtActAdm = async()=>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany,{
                                        input:{
                                          AdminId:"BaruchHabaB'ShemAdonai2",
                                          ttlChmLnsInBlTymsCov: parseFloat(ttlChmLnsInBlTymsCovs) + 1,
                                          ttlChmLnsInBlAmtCov: (parseFloat(ttlChmLnsInBlAmtCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          ttlBLUsrs:parseFloat(ttlBLUsrss) + 1,
                                        }
                                      })
                                    )
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                  Alert.alert("Error! Access denied!")
                                  return;
                              }}
                              await updateLoaneeDtls();
                              setIsLoading(false);
                              }
                              
                              const updateLoaneeDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount,{
                                        input:{
                                          awsemail:loaneePhns,
                                          MaxTymsBL: parseFloat(MaxTymsBLs) + 1,
                                          TtlBLLonsTmsLneeChmCov: parseFloat(TtlBLLonsTmsLneeChmCovs) + 1,
                                          TtlBLLonsAmtLneeChmCov: (parseFloat(TtlBLLonsAmtLneeChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                          
                                          TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          blStatus:"AccountBlackListed",
                                          loanStatus: "LoanActive"
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Error! Access denied!")
                                  }
                                  }
                              await updateLoanDtls();
                                setIsLoading(false);          
                              } 

                              const updateLoanDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          id:route.params.id,
                                          amountExpectedBackWthClrnc:amountExpectedBackWthClrncss.toFixed(0),
                                          lonBala:LonBal.toFixed(0),
                                          status:"LoanBL",
                                          DefaultPenaltyChm2:DefaultPenaltyChms.toFixed(0),
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                  Alert.alert("Error! Access denied!");
                                  return;
                              } 
                               }
                              await updateMbrDtls();
                              
                                setIsLoading(false);          
                              } 

                              const updateMbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateChamaMembers, {
                                        input:{
                                          ChamaNMember:memberIds,
                                          LnBal:(parseFloat(LnBalsss)+ MmbrClrnceCost).toFixed(0),
                                          blStatus:"AccountBlackListed",
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Blacklisting unsuccessful; Retry!")
                                    return
                                  }
                                   }
                              Alert.alert(grpNames +", you have blacklisted "+ namess)
                              Communications.textWithoutEncoding(phonecontact,'Hi '
                              + namess + ', your loan of ID ' 
                              +  route.params.id 
                              + 'has been blacklisted by '+ grpNames 
                              + ' group. The following is a breakdown of your repayable loan. Loan balance before blacklisting was Ksh. '
                            + lonBala + '. Default Penalty as you had agreed with your loaner is Ksh. ' + DefaultPenaltyChms 
                            + '. Clearance fee is Ksh. ' + MmbrClrnceCosts + '. Total current loan repayable is Ksh. ' + LonBal
                             +'. For clarification call the group Admin: '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                                setIsLoading(false);          
                              } 
                              
                            }
            
                        
                            catch(error){
                              console.log(error)
                              if(error){
                              Alert.alert("Error! Access denied!")
                              
                          
                          return;} }
                            setIsLoading(false);         
                            
                          }
                          await MmbDtls(); 
                        
                        }
            
                        
                        catch(error){
                          console.log(error)
                          if(error){
                          Alert.alert("Error! Access denied!")
                          
                      
                      return;} }
                        setIsLoading(false);         
                        
                      }
                      await gtLoaneeDtls(); 
                  }
      
                  catch(error){ if (error){
                    Alert.alert("Error! Access denied!")
                    return
                  }}
                  setIsLoading(false);         
                  
                }
                await gtLoanerDtls(); 
            }

            catch(error){
              console.log(error)
              if(error){
              Alert.alert("Error! Access denied!")
              return;              
          } 
           }
            setIsLoading(false);                     
          } 
          await gtLoanDtls();        
            
          } catch (error) {
            console.log(error)
            
            if(error){
              Alert.alert("Error! Access denied!")
              return;
          };
          }
          
          setIsLoading(false);
          setLonId("") 
          setChmMbrId("")
          setSigntryPW("")
        };    

        useEffect(() =>{
          const usId=LonId
            if(!usId && usId!=="")
            {
              setLonId("");
              return;
            }
            setLonId(usId);
            }, [LonId]
             );

             useEffect(() =>{
              const SigntryPWs=SigntryPW
                if(!SigntryPWs && SigntryPWs!=="")
                {
                  setSigntryPW("");
                  return;
                }
                setSigntryPW(SigntryPWs);
                }, [SigntryPW]
                 );
    

             useEffect(() =>{
              const ChmMbrIds=ChmMbrId
                if(!ChmMbrIds && ChmMbrIds!=="")
                {
                  setChmMbrId("");
                  return;
                }
                setChmMbrId(ChmMbrIds);
                }, [ChmMbrId]
                 );
        
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill User Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SigntryPW}
                      onChangeText={setSigntryPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Comment</Text>
                  </View>       
                  
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Black List 
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default BLChmCovLoanee;