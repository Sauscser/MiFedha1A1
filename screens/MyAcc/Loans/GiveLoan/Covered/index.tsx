import React, {useEffect, useState} from 'react';

import {
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateCompany,
  updateSAgent,
  updateSmAccount,
  updateSMAccount,
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSmAccount,
  getSAgent,
  getAdvocate,
} from '../../../../../src/graphql/queries';

import {useNavigation} from '@react-navigation/native';

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
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const SMASendLns = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  const [AdvRegNo, setAdvRegNo] = useState("");
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);

  const [RecAccCode, setRecAccCode] = useState("");
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
     
  }

  useEffect(() => {
    fetchUser();
    }, []);  

  



  const fetchSenderUsrDtls = async () => {
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSmAccount, {nationalid: SenderNatId}),
      );

      const SenderUsrBal =accountDtl.data.getSmAccount.balance;
      const usrPW =accountDtl.data.getSmAccount.pw;
      const usrAcActvStts =accountDtl.data.getSmAccount.acStatus;
      const usrLnLim =accountDtl.data.getSmAccount.loanLimit;
      const TtlActvLonsTmsLnrCovs =accountDtl.data.getSmAccount.TtlActvLonsTmsLnrCov;
      const TtlActvLonsAmtLnrCovs =accountDtl.data.getSmAccount.TtlActvLonsAmtLnrCov;
      
  
      const SenderSub =accountDtl.data.getSmAccount.owner;
      
      const fetchCompDtls = async () => {
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
          const TtlCovRateCovRate = CompDtls.data.getCompany.userTransferFee;
          const AdvCovRateofTtlCovRate = CompDtls.data.getCompany.AdvCom;
          const AdvCovRate = parseFloat(AdvCovRateofTtlCovRate)*parseFloat(TtlCovRateCovRate)
          const CompErningFrmCovrgFee = parseFloat(TtlCovRateCovRate) - AdvCovRate;
          const UsrCovFee = AdvCovRate * parseFloat(amount) + (CompErningFrmCovrgFee)*parseFloat(amount);          
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          const TotalTransacted = parseFloat(amount) + UsrCovFee + parseFloat(UsrTransferFee)*parseFloat(amount);
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning; 
         
          const ttlSMLnsInAmtCovs = CompDtls.data.getCompany.ttlSMLnsInAmtCov;
          const ttlSMLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtCov;
          const ttlSMLnsInTymsCovs = CompDtls.data.getCompany.ttlSMLnsInTymsCov;
          const ttlSMLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsCov;
          

          

          const maxInterests = CompDtls.data.getCompany.maxInterest;

          
          
          const fetchAdv = async () =>{
            try{

              const AdvDtls:any = await API.graphql(
                graphqlOperation(getAdvocate,
                  {advregnu: AdvRegNo}),
                  
              );
              const advTtlAern = AdvDtls.data.getAdvocate.TtlEarnings;
              const advBl = AdvDtls.data.getAdvocate.advBal;
              const advStts = AdvDtls.data.getAdvocate.status;
              

              const fetchRecUsrDtls = async () => {
                try {
                    const RecAccountDtl:any = await API.graphql(
                        graphqlOperation(getSmAccount, {nationalid: RecNatId}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSmAccount.balance;
                        const usrNoBL =RecAccountDtl.data.getSmAccount.MaxTymsBL;
                        const usrAcActvStts =RecAccountDtl.data.getSmAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSmAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLneeCovs =RecAccountDtl.data.getSmAccount.TtlActvLonsTmsLneeCov;
                        const TtlActvLonsAmtLneeCovs =RecAccountDtl.data.getSmAccount.TtlActvLonsAmtLneeCov;
                        
                      
                        const sendSMLn = async () => {
                          try {
                            await API.graphql(
                              graphqlOperation(createSMLoansCovered, {
                                input: {
                                  loaneeid: RecNatId,
                                  loanerId: SenderNatId,                                  
                                  amountgiven: amount,
                                  amountexpected: AmtExp,
                                  amountrepaid: 0,
                                  loanerPW: SnderPW,
                                  repaymentPeriod: RepaymtPeriod,
                                  advregnu: AdvRegNo,
                                  description: Desc,
                                  status: "LoanActive",
                                  owner: ownr
                                },
                              }),
                            );


                          } catch (error) {
                            if(!error){
                              Alert.alert("Covered Loan sent successfully")
                              return;
                          } 
                          else{Alert.alert("Please check your internet connection")} 
                          }
                          await updtSendrAc();
                        };

                        const updtSendrAc = async () =>{
                          try{
                              await API.graphql(
                                graphqlOperation(updateSmAccount, {
                                  input:{
                                    nationalid:SenderNatId,
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs)+1,
                                    TtlActvLonsAmtLnrCov: parseFloat(TtlActvLonsAmtLnrCovs) + parseFloat(amount),
                                                                              
                                    balance:parseFloat(SenderUsrBal)-TotalTransacted 
                                   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                            return;}
                          }
                          await updtRecAc();
                        }
                        const updtRecAc = async () =>{
                          try{
                              await API.graphql(
                                graphqlOperation(updateSmAccount, {
                                  input:{
                                    nationalid:RecNatId,
                                    TtlActvLonsTmsLneeCov: parseFloat(TtlActvLonsTmsLneeCovs) +1 ,
                                    TtlActvLonsAmtLneeCov: parseFloat(TtlActvLonsAmtLneeCovs)+ parseFloat(amount),
                                    
                                    balance:parseFloat(RecUsrBal) + parseFloat(amount)                                     
                                    
                                                                      
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                            return;}
                          }
                          await updtComp();
                        }

                        const updtComp = async () =>{
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    ttlCompCovEarnings:(CompErningFrmCovrgFee) * parseFloat(amount) + parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal:(AdvCovRate) * parseFloat(amount) + parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning:(AdvCovRate) * parseFloat(amount) + parseFloat(AdvEarnings),
                                    companyEarningBal:CompErningFrmCovrgFee * parseFloat(amount) + parseFloat(companyEarningBals),
                                    companyEarning: CompErningFrmCovrgFee * parseFloat(amount) + parseFloat(companyEarnings),                                                    
                                    
                                    ttlSMLnsInAmtCov: parseFloat(amount) + parseFloat(ttlSMLnsInAmtCovs),
                                    ttlSMLnsInActvAmtCov: parseFloat(amount) + parseFloat(ttlSMLnsInActvAmtCovs),
                                    ttlSMLnsInTymsCov: 1 + parseFloat(ttlSMLnsInTymsCovs),
                                    ttlSMLnsInActvTymsCov: 1 + parseFloat(ttlSMLnsInActvTymsCovs),      
                                    
                                     
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          await updtAdv();
                        }
                        const updtAdv = async () =>{
                          try{
                              await API.graphql(
                                graphqlOperation(updateAdvocate, {
                                  input:{
                                    advregnu: AdvRegNo,
                                    advBal: (AdvCovRate) * parseFloat(amount) + parseFloat(advBl) ,
                                    TtlEarnings:(AdvCovRate) * parseFloat(amount) + parseFloat(advTtlAern),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
      return;}
                          }
                        }
                                              
                        if (usrNoBL > 1){Alert.alert('Receiver does not qualify');}
                        else if(recAcptncCode !== RecAccCode){Alert.alert('Please first get the Loanee consent to loan');}
                        else if(usrAcActvStts !== "AccountActive"){Alert.alert('Your account is inactive');}
                        else if((((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))) > maxInterests)
                        {Alert.alert('Your interest is too high');}
                        else if (
                          SenderUsrBal < TotalTransacted 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                        else if(advStts !=="AccountActive"){Alert.alert('Advocate Account is inactive');}
                        else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                        else if(ownr !==SenderSub){Alert.alert('Please send from your own  account');}
                        else if(usrAcActvStts !=="AccountActive"){Alert.alert('Your account is inactive');}
                        else if(usrLnLim < amount){Alert.alert('Call ' + CompPhoneContact + ' to have your Loan limit adjusted');}
                        
                         else {
                          await sendSMLn();
                        }                                                
                    }       
                    catch(e) {     
                      if (e){Alert.alert("Check your internet connection")
      return;}                 
                    }
                    }                    
                      await fetchRecUsrDtls();        
                    

            }
            catch (e){
              if (e){Alert.alert("Check your internet connection")
      return;}
            }
          }
          
          await fetchAdv();

          
        
        } catch (e) {
          if (e){Alert.alert("Check your internet connection")
      return;}
        }        
      };
      await fetchCompDtls();
    
      
    } catch (e) {
      if (e){Alert.alert("Check your internet connection")
      return;}
  };
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      setAdvRegNo("");
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
}

useEffect(() =>{
  const SnderNatIds=SenderNatId
    if(!SnderNatIds && SnderNatIds!=="")
    {
      setSenderNatId("");
      return;
    }
    setSenderNatId(SnderNatIds);
    }, [SenderNatId]
     );

     useEffect(() =>{
      const amt=amount
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amount]
         );

         useEffect(() =>{
          const RecNatIds=RecNatId
            if(!RecNatIds && RecNatIds!=="")
            {
              setRecNatId("");
              return;
            }
            setRecNatId(RecNatIds);
            }, [RecNatId]
             );

             useEffect(() =>{
              const AdvRegNoss=AdvRegNo
                if(!AdvRegNoss && AdvRegNoss!=="")
                {
                  setAdvRegNo("");
                  return;
                }
                setAdvRegNo(AdvRegNoss);
                }, [AdvRegNo]
                 );

                 useEffect(() =>{
                  const AmtExpss=AmtExp
                    if(!AmtExpss && AmtExpss!=="")
                    {
                      setAmtExp("");
                      return;
                    }
                    setAmtExp(AmtExpss);
                    }, [AmtExp]
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

                             useEffect(() =>{
                              const RepaymtPeriods=RepaymtPeriod
                                if(!RepaymtPeriods && RepaymtPeriods!=="")
                                {
                                  setRepaymtPeriod("");
                                  return;
                                }
                                setRepaymtPeriod(RepaymtPeriods);
                                }, [RepaymtPeriod]
                                 );

                                 useEffect(() =>{
                                  const RecAccCodes=RecAccCode
                                    if(!RecAccCodes && RecAccCodes!=="")
                                    {
                                      setRecAccCode("");
                                      return;
                                    }
                                    setRecAccCode(RecAccCodes);
                                    }, [RecAccCode]
                                     );

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill Loan Details Below</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={SenderNatId}
              onChangeText={setSenderNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Sender National Id</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={RecNatId}
              onChangeText={setRecNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Receiver National Id</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Loaned</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={AdvRegNo}
              onChangeText={setAdvRegNo}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Advocate Reg Number</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={SnderPW}
              onChangeText={setSnderPW}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Sender PassWord</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={AmtExp}
              onChangeText={setAmtExp}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Amount Expected Back</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={RepaymtPeriod}
              onChangeText={setRepaymtPeriod}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Repayment Period</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              multiline={true}
              value={RecAccCode}
              onChangeText={setRecAccCode}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Reciever Acceptance Code</Text>
          </View>

          <View style={styles.sendAmtView}>
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
            <Text style={styles.sendAmtButtonText}>Loan with Advocate Coverage</Text>
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default SMASendLns;