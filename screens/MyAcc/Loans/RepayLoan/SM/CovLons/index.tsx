import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansCovered,
  
  createSMLoansNonCovered,
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getCompany,
  getSMAccount,
  getSMLoansCovered,
  
} from '../../../../../../src/graphql/queries';

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


const RepayCovLnsss = props => {

  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [SendrPhn, setSendrPhn] = useState(null);
  
  const route = useRoute();
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrPhn(userInfo.attributes.phone_number);
  }

  useEffect(() => {
    fetchUser();
    }, []);  


  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {phonecontact: SendrPhn}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const TtlActvLonsTmsLneeCovss =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov;
      const TtlActvLonsAmtLneeCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeCov;
      const TtlClrdLonsTmsLneeCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsLneeCov;
      const TtlClrdLonsAmtLneeCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtLneeCov;
      const TtlBLLonsTmsLneeCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsLneeCov;
      const TtlBLLonsAmtLneeCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtLneeCov;
      const names =accountDtl.data.getSMAccount.name;
      
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const MaxTymsBLs =accountDtl.data.getSMAccount.MaxTymsBL;

      const ftchCvdSMLn = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
            const RecAccountDtl:any = await API.graphql(
                graphqlOperation(getSMLoansCovered, {id: route.params.id}),
                );
                const amountExpectedBackWthClrncs =RecAccountDtl.data.getSMLoansCovered.amountExpectedBackWthClrnc; 
                
                const loaneename =RecAccountDtl.data.getSMLoansCovered.loaneename; 
                const SellerNames =RecAccountDtl.data.getSMLoansCovered.loanername; 
                const amountrepaids =RecAccountDtl.data.getSMLoansCovered.amountrepaid; 
                const amountExpectedBacks =RecAccountDtl.data.getSMLoansCovered.amountexpected;
                const ClranceAmt = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountExpectedBacks); 
                const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountrepaids);     
                const loanerPhns =RecAccountDtl.data.getSMLoansCovered.loanerPhn; 
      
      const fetchCompDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
            
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;  
          const ttlSMLnsInClrdAmtCovs = CompDtls.data.getCompany.ttlSMLnsInClrdAmtCov; 
          const ttlSMLnsInClrdTymsCovs = CompDtls.data.getCompany.ttlSMLnsInClrdTymsCov;
          
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) + ClranceAmt; 
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {phonecontact: loanerPhns}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;                    
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                  
                    const TtlActvLonsTmsLnrCovssss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov;
                    const TtlActvLonsAmtLnrCovssss =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLnrCov;
                    const TtlClrdLonsTmsLnrCovssss =accountDtl.data.getSMAccount.TtlClrdLonsTmsLnrCov;
                    const TtlClrdLonsAmtLnrCovssss =accountDtl.data.getSMAccount.TtlClrdLonsAmtLnrCov;
                    const TtlBLLonsTmsLnrCovssss =accountDtl.data.getSMAccount.TtlBLLonsTmsLnrCov;
                    const TtlBLLonsAmtLnrCovssss =accountDtl.data.getSMAccount.TtlBLLonsAmtLnrCov;
                    const namess =accountDtl.data.getSMAccount.name;
                    const MaxTymsIHvBLs =accountDtl.data.getSMAccount.MaxTymsIHvBL;
                    
                    

                   
                               
                              const updtSMCvLnLnOver  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMLoansCovered, {
                                        input:{
                                          id:route.params.id,
                                          amountrepaid: parseFloat(amounts) + parseFloat(amountrepaids),
                                          lonBala: LonBalsss+parseFloat(amounts),
                                          amountExpectedBackWthClrnc:parseFloat(amountExpectedBackWthClrncs) - ClranceAmt,
                                          status: "LoanCleared",
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await sendNonLnLnOver();
                              }
                              
                              const sendNonLnLnOver = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        senderPhn: SendrPhn,
                                        recPhn: loanerPhns,     
                                        RecName:namess,
                                        SenderName:names,                             
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "SMLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
                                  if(!error){
                                    Alert.alert("Account deactivated successfully")
                                    
                                } 
                                else{Alert.alert("Please check your internet connection")
                                return;}
                                }
                                setIsLoading(false);
                                await updtSendrAcLonOvr();
                              };
          
                              const updtSendrAcLonOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          phonecontact:SendrPhn,
                                          
                                          balance:parseFloat(SenderUsrBal)-TotalTransacted ,
                                          
                                          TtlActvLonsTmsLneeCov:parseFloat(TtlActvLonsTmsLneeCovss)-1,                                          
                                          TtlActvLonsAmtLneeCov: parseFloat(TtlActvLonsAmtLneeCovs) - parseFloat(amounts), 
                                          TtlClrdLonsTmsLneeCov: 1 + parseFloat(TtlClrdLonsTmsLneeCovs),
                                          TtlClrdLonsAmtLneeCov: parseFloat(TtlClrdLonsAmtLneeCovs) + parseFloat(amounts),
                                          TtlBLLonsTmsLneeCov:parseFloat(TtlBLLonsTmsLneeCovs)-1,                                          
                                          TtlBLLonsAmtLneeCov: parseFloat(TtlBLLonsAmtLneeCovs) - parseFloat(amounts), 
                                          MaxTymsBL: parseFloat(MaxTymsBLs) - 1,
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              }
          
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          phonecontact:loanerPhns,
                                          
                                          balance:parseFloat(RecUsrBal) + (parseFloat(amounts) - ClranceAmt), 
                                          MaxTymsIHvBL:parseFloat(MaxTymsIHvBLs) - 1,                                     
                                          TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovssss) - 1,
                                          TtlActvLonsAmtLnrCov: parseFloat(TtlActvLonsAmtLnrCovssss) - parseFloat(amounts),
                                          TtlClrdLonsTmsLnrCov: parseFloat(TtlClrdLonsTmsLnrCovssss) + 1,
                                          TtlClrdLonsAmtLnrCov: parseFloat(TtlClrdLonsAmtLnrCovssss) + parseFloat(amounts),
                                          TtlBLLonsTmsLnrCov:parseFloat(TtlBLLonsTmsLnrCovssss)-1,                                          
                                          TtlBLLonsAmtLnrCov: parseFloat(TtlBLLonsAmtLnrCovssss) - parseFloat(amounts),                                   
                                          
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtCompLnOvr();
                              }
          
                              const updtCompLnOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt,
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt,                                                    
                                          
                                          
                                          ttlSMLnsInClrdAmtCov: parseFloat(ttlSMLnsInClrdAmtCovs) + parseFloat(amounts), 
                                          ttlSMLnsInClrdTymsCov: parseFloat(ttlSMLnsInClrdTymsCovs) + 1
                                          
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert("Loan: Ksh. "+amountExpectedBacks.toFixed(2) + " Clearance fee: Ksh. " +ClranceAmt.toFixed(2) + "Transaction fee: Ksh. "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);
                              }                                                                                                            
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMLoansCovered, {
                                        input:{
                                          id:route.params.id,
                                          amountrepaid: parseFloat(amounts) + parseFloat(amountrepaids),
                                          lonBala: LonBalsss - parseFloat(amounts),
                                          amountExpectedBackWthClrnc:parseFloat(amountExpectedBackWthClrncs) - ClranceAmt,
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await sendCovLn();
                              }
                              
                              const sendCovLn = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        recPhn: loanerPhns,
                                        senderPhn: SendrPhn,    
                                        RecName:namess,
                                        SenderName:names,                                
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "SMLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
                                  if(!error){
                                    Alert.alert("Account deactivated successfully")
                                    
                                } 
                                else{Alert.alert("Please check your internet connection")
                                return;}
                                }
                                setIsLoading(false);
                                await updtSendrAc();
                              };
          
                              const updtSendrAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          phonecontact:SendrPhn,
                                          
                                          balance:parseFloat(SenderUsrBal)-TotalTransacted,
                                                                                   
                                          TtlActvLonsAmtLneeCov: parseFloat(TtlActvLonsAmtLneeCovs) - parseFloat(amounts), 
                                          
                                         
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAc();
                              }
          
                              const updtRecAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          phonecontact:loanerPhns,
                                          
                                          balance:parseFloat(RecUsrBal) + (parseFloat(amounts) - ClranceAmt),
                                          
                                          TtlActvLonsAmtLnrCov: parseFloat(TtlActvLonsAmtLnrCovssss) - parseFloat(amounts),
                                          
                                          
                                                                            
                                          
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtComp();
                              }
          
                              const updtComp = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt,
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt,                                                    
                                          
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  
                                }
                                Alert.alert("Loan:Ksh. "+amountExpectedBacks.toFixed(2) + " ClearanceFee:Ksh. " +ClranceAmt.toFixed(2) + "Transaction:Ksh. "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);
                              }

                                                          
                                                    
                              
                              if(usrAcActvStts === "AccountInactive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                              else if(usrAcActvSttss === "AccountInactive"){Alert.alert('Receiver account is inactive');
                              return;
                            }
                              
                              else if (
                                parseFloat(SenderUsrBal) < TotalTransacted 
                              ) {Alert.alert('Requested amount is more than you have in your account');
                            return;
                          }
                          else if(SendrPhn === loanerPhns){Alert.alert('You cannot Repay Yourself');}
                              
                              else if(usrPW !==SnderPW){Alert.alert('Wrong password');
                            return;
                          }
                              
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(parseFloat(amounts) > LonBalsss){Alert.alert("Your Loan Balance is lesser: "+LonBalsss)}
                          

                          else if(parseFloat(amounts) === LonBalsss){updtSMCvLnLnOver();}                         
                          
                              
                               else {
                                repyCovLn();
                              }
                          }
                          catch (e) {
                            if (e){Alert.alert("There is no such a loan")
                            return;}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  if (e){Alert.alert("Reciever does not exist")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchCompDtls();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Check your internet connection")
      return;}
        }
        setIsLoading(false);        
      };
      await ftchCvdSMLn();
    
      
    } catch (e) {
      if (e){Alert.alert("Sender does not exist")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
     
    
      setDesc("");
      setSnderPW("");
    
}



     useEffect(() =>{
      const amt=amounts
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amounts]
         );

         
                     useEffect(() =>{
                      const descr=Desc
                        if(!descr && descr!=="")
                        {
                          setDesc("");
                          return;
                        }
                        setDesc(descr);
                        }, [Desc]
                         );

                         useEffect(() =>{
                          const SnderPWss=SnderPW
                            if(!SnderPWss && SnderPWss!=="")
                            {
                              setSnderPW("");
                              return;
                            }
                            setSnderPW(SnderPWss);
                            }, [SnderPW]
                             );

                           

                             

                                 

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill account Details Below</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
            keyboardType={"decimal-pad"}
              value={amounts}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Sent</Text>
          </View>


          <View style={styles.sendAmtView}>
            <TextInput
              value={SnderPW}
              onChangeText={setSnderPW}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loanee PassWord</Text>
          </View>

         
          <View style={styles.sendAmtViewDesc}>
            <TextInput
              multiline={true}
              value={Desc}
              onChangeText={setDesc}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Description</Text>
          </View>
          
          

          <TouchableOpacity
            onPress={fetchSenderUsrDtls}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default RepayCovLnsss;