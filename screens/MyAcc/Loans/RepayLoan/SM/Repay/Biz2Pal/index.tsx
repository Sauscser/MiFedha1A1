import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {
  
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  updateBizna,
  createLoanRepayments,
  
} from '../../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getBizna,
  getCompany,
  getSMAccount,
  getSMLoansCovered,
  
} from '../../../../../../../src/graphql/queries';

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

  const[isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  

  

  

      const ftchCvdSMLn = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
            const RecAccountDtl:any = await API.graphql(
                graphqlOperation(getSMLoansCovered, {loanID: route.params.loanID}),
                );
                const amountExpectedBackWthClrncs =RecAccountDtl.data.getSMLoansCovered.amountExpectedBackWthClrnc; 
                
                const lonBalas =RecAccountDtl.data.getSMLoansCovered.lonBala; 
                const crtnDate =RecAccountDtl.data.getSMLoansCovered.crtnDate; 

                const loanerEmail =RecAccountDtl.data.getSMLoansCovered.loanerEmail; 
                const amountrepaids =RecAccountDtl.data.getSMLoansCovered.amountrepaid; 
                const amountExpectedBacks =RecAccountDtl.data.getSMLoansCovered.amountexpected;
               
                
                const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountrepaids);     
                const loanerPhns =RecAccountDtl.data.getSMLoansCovered.loanerPhn; 
                const DefaultPenaltySM2s =RecAccountDtl.data.getSMLoansCovered.DefaultPenaltySM2;
                const clearanceAmts = RecAccountDtl.data.getSMLoansCovered.clearanceAmt;

                const ClranceAmt = parseFloat(clearanceAmts) + (DefaultPenaltySM2s);

                const repaymentPeriod =RecAccountDtl.data.getSMLoansCovered.repaymentPeriod; 
                const amountgiven =RecAccountDtl.data.getSMLoansCovered.amountgiven; 
                const interest =RecAccountDtl.data.getSMLoansCovered.interest;
                const dfltUpdate =RecAccountDtl.data.getSMLoansCovered.dfltUpdate;

              const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const now1:any = "2024-05-20";
             
              
              
              
              
              
             

        
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

             

              
              const tmDif = daysUpToDate - dfltUpdate;
              const tmDif2 = daysUpToDate - crtnDate;

              const netLnBalz = amountExpectedBacks - amountrepaids

              const netLnBal = parseFloat(amountExpectedBackWthClrncs) - 
              parseFloat(clearanceAmts) - parseFloat (DefaultPenaltySM2s)
      
              const netLnBal2 = (netLnBalz) * 
              ((Math.pow(1 + parseFloat(interest)/36500, tmDif2)))

              const LonBal1 = (netLnBal2 + parseFloat(clearanceAmts) + parseFloat (DefaultPenaltySM2s)).toFixed(0)
                const LoanBalz = parseFloat(LonBal1) - parseFloat(amounts)
                


                console.log(loanerEmail)

                const fetchSenderUsrDtls = async () => {
                  if(isLoading){
                    return;
                  }
                  setIsLoading(false);
                  const userInfo = await Auth.currentAuthenticatedUser();
                  
                  try {
                    const accountDtl:any = await API.graphql(
                      graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
                    );
              
                    const SenderUsrBal =accountDtl.data.getSMAccount.balance;
                    const usrPW =accountDtl.data.getSMAccount.pw;
                    const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
                    const owner =accountDtl.data.getSMAccount.owner;
                    const TtlActvLonsAmtLneeCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeCov;
                    const TtlClrdLonsTmsLneeCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsLneeCov;
                    const TtlClrdLonsAmtLneeCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtLneeCov;
                    const TtlBLLonsTmsLneeCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsLneeCov;
                    const TtlBLLonsAmtLneeCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtLneeCov;
                    const names =accountDtl.data.getSMAccount.name;
                  
                    const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
                    const MaxTymsBLs =accountDtl.data.getSMAccount.MaxTymsBL;
      
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
          const totalLnsRecovereds = CompDtls.data.getCompany.totalLnsRecovered;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) ; 
          const maxBLss = CompDtls.data.getCompany.maxBLs;
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getBizna, {BusKntct: loanerEmail}),
                    );
                    const netEarnings1 =RecAccountDtl.data.getBizna.netEarnings;
                  const TtlEarnings1 =RecAccountDtl.data.getBizna.TtlEarnings;
                  const busName =RecAccountDtl.data.getBizna.busName;


                    const updtSendrAcLonOvr1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:userInfo.attributes.email,
                                
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,
                                
                                
                                TtlClrdLonsTmsLneeCov: 1 + parseFloat(TtlClrdLonsTmsLneeCovs),
                                TtlClrdLonsAmtLneeCov: (parseFloat(TtlClrdLonsAmtLneeCovs) + parseFloat(amounts)).toFixed(0),
                                
                                MaxTymsBL: 0,
                              }
                            })
                          )


                      }
                      catch(error){
                        if (error){
                          Alert.alert("Repayment unsuccessful; Retry")
                          return
                        }
                      }
                      setIsLoading(false);
                      await updtSMCvLnLnOver();
                    }

                    const updtSendrAcLonOvr2 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:userInfo.attributes.email,
                                
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,
                                
                                
                                TtlClrdLonsTmsLneeCov: 1 + parseFloat(TtlClrdLonsTmsLneeCovs),
                                TtlClrdLonsAmtLneeCov: (parseFloat(TtlClrdLonsAmtLneeCovs) + parseFloat(amounts)).toFixed(0),
                                TtlBLLonsTmsLneeCov: parseFloat(TtlBLLonsTmsLneeCovs) - 1,
                                TtlBLLonsAmtLneeCov: (parseFloat(TtlBLLonsAmtLneeCovs) - parseFloat(amounts)).toFixed(0),
                                MaxTymsBL: parseFloat(MaxTymsBLs) - 1,
                              }
                            })
                          )


                      }
                      catch(error){
                        if (error){
                          Alert.alert("Repayment unsuccessful; Retry")
                          return
                        }
                      }
                      setIsLoading(false);
                      await updtSMCvLnLnOver();
                    }
                               
                              const updtSMCvLnLnOver  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMLoansCovered, {
                                        input:{
                                          loanID: route.params.loanID,
                                          amountrepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(0),
                                          lonBala: LoanBalz.toFixed(0),
                                          amountExpectedBackWthClrnc:LoanBalz.toFixed(0),
                                          clearanceAmt: 0,
                                          status: "LoanCleared",
                                          DefaultPenaltySM2:0
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){console.log(error)
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
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        senderPhn: userInfo.attributes.email,
                                        recPhn: loanerPhns,     
                                        RecName:busName,
                                        SenderName:names, 
                                        loanId1: route.params.loanID,  
                                        
                                        loanId2: "route.params.id",
                                        loanId3: "route.params.id",                            
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "SMLonRepayment",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if (error){
                                    console.log(error)
                                    return
                                  }
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              };
          
                              
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateBizna, {
                                        input:{
                                          BusKntct: loanerEmail,
                                          
                                          netEarnings:(parseFloat(netEarnings1) + (parseFloat(amounts) - parseFloat(clearanceAmts))).toFixed(0), 
                                          TtlEarnings:(parseFloat(TtlEarnings1) + (parseFloat(amounts) - parseFloat(clearanceAmts))).toFixed(0),                                
                                         
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){console.log(error)
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
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + clearanceAmts ,
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + clearanceAmts ,                                                    
                                          totalLnsRecovered: parseFloat(totalLnsRecovereds) + parseFloat(amounts) ,
                                          
                                          ttlSMLnsInClrdAmtCov: parseFloat(ttlSMLnsInClrdAmtCovs) + parseFloat(amounts), 
                                          ttlSMLnsInClrdTymsCov: parseFloat(ttlSMLnsInClrdTymsCovs) + 1
                                          
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){

                                  if (error){
                                    Alert.alert("Repayment unsuccessful; Retry")
                                    return
                                  }
                                  
                                }
                                Alert.alert("Cleared. ClearanceFee: " +ClranceAmt.toFixed(2) + ". Transaction: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                Communications.textWithoutEncoding(loanerPhns,'MiFedha. Hi '
                              + busName + ', your loan of ID ' 
                              +  route.params.loanID 
                              + 'has been repaid Ksh. ' + amounts + ' by '+ names 
                              +'. For clarification call the loanee: '
                            + userInfo.attributes.phone_number + '. Thank you.');
                        
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
                                          loanID: route.params.loanID,
                                          amountrepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(0),
                                          lonBala: LoanBalz.toFixed(0),
                                          DefaultPenaltySM2:0,
                                         
                                          amountExpectedBackWthClrnc:LoanBalz.toFixed(0),
                                          clearanceAmt: 0
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){console.log(error)
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
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        recPhn: loanerEmail,
                                        senderPhn: userInfo.attributes.email,    
                                        RecName:busName,
                                        SenderName:names,  
                                        loanId1: route.params.loanID,  
                                        
                                        loanId2: "route.params.id",
                                        loanId3: "route.params.id",                              
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "SMLonRepayment",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if (error){
                                    Alert.alert("Repayment unsuccessful; Retry")
                                    return
                                  }
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
                                          awsemail:userInfo.attributes.email,
                                          TtlClrdLonsAmtLneeCov: (parseFloat(TtlClrdLonsAmtLneeCovs) + parseFloat(amounts)).toFixed(0),
                                          balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0),
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){console.log(error)
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
                                      graphqlOperation(updateBizna, {
                                        input:{
                                          BusKntct: loanerEmail,
                                          
                                          netEarnings:(parseFloat(netEarnings1) + (parseFloat(amounts) - parseFloat(clearanceAmts))).toFixed(0), 
                                          TtlEarnings:(parseFloat(TtlEarnings1) + (parseFloat(amounts) - parseFloat(clearanceAmts))).toFixed(0),                                
                                         
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){console.log(error)
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
                                          ttlSMLnsInClrdAmtCov: parseFloat(ttlSMLnsInClrdAmtCovs) + parseFloat(amounts), 
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt - parseFloat(DefaultPenaltySM2s),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt - parseFloat(DefaultPenaltySM2s),                                                    
                                          
                                          totalLnsRecovered: parseFloat(totalLnsRecovereds) + parseFloat(amounts) ,
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Repayment unsuccessful; Retry")
                                    return
                                  }
                                  
                                }
                                Alert.alert("Partially paid. Clearance: " +ClranceAmt.toFixed(2) + ". Transaction: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                Communications.textWithoutEncoding(loanerPhns,'Hi '
                              + busName + ', your loan of ID ' 
                              +  route.params.loanID 
                              + ' has been repaid Ksh. ' + amounts + ' by '+ names 
                              +'. For clarification call the loanee: '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                        
                        setIsLoading(false);
                              }

                                                          
                                                    
                              
                              if (userInfo.attributes.sub!==owner) {
                                Alert.alert("Please first create a main account")
                                return;
                              }  else if(usrAcActvStts === "AccountInactive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                                     
                              else if (
                                parseFloat(SenderUsrBal) < TotalTransacted 
                              ) {Alert.alert('Requested amount is more than you have in your account');
                            return;
                          }
                          

                          else if(ClranceAmt > parseFloat(amounts) ){Alert.alert( "Too little repayment: at least "+ClranceAmt.toFixed(2));
                            return;
                          }
                              
                              else if(usrPW !==SnderPW){Alert.alert('Wrong password');
                            return;
                          }
                              
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(parseFloat(amounts) > parseFloat(LonBal1)){Alert.alert("Your Loan Balance is lesser: "+ LonBal1)}
                          

                          else if(parseFloat(amounts) === parseFloat(LonBal1)  && parseFloat(MaxTymsBLs) === parseFloat(maxBLss) )
                          {updtSendrAcLonOvr1();}          
                          
                          else if(parseFloat(amounts) === parseFloat(LonBal1)  && parseFloat(MaxTymsBLs) > parseFloat(maxBLss) )
                          {updtSendrAcLonOvr2();}  
                               else {
                                repyCovLn();
                              }
                          }
                          catch (e) {
                            if (e){console.log(e)}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  if (e){console.log(e)
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchCompDtls();
        } catch (e) {
          console.log(e)
          if (e){console.log(e)
      return;}
        }
        setIsLoading(false);        
      };
      await fetchSenderUsrDtls();
    
      
    } catch (e) {
      if (e){console.log(e)
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
              secureTextEntry = {true}
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
            onPress={ftchCvdSMLn }
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