import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {
  createCovCreditSeller,
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateBizna,
  updateCompany,
  updateCovCreditSeller,
  updateReqLoanCredSl,
  updateSAgent,
  updateSMAccount,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSMAccount,
  getSAgent,
  getAdvocate,
  getPersonel,
  getBizna,
  getReqLoanCredSl,
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
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const CovCredSls = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  const [AdvRegNo, setAdvRegNo] = useState("");
  const [Desc, setDesc] = useState("");
  
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  
  const [ItmNm, setItmNm] = useState("");
  const [ItmSrlNu, setItmSrlNu] = useState("");
  const [DfltPnlty, setDfltPnlty] = useState("");

  const route = useRoute();
  

 
  const fetchCredSlLnReq = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await Auth.currentAuthenticatedUser();
    
    try {
      const PersnlDtl:any = await API.graphql(
        graphqlOperation(getReqLoanCredSl, {id: route.params.id}),
      );

      const loaneeEmail =PersnlDtl.data.getReqLoanCredSl.loaneeEmail;

      const advLicNo =PersnlDtl.data.getReqLoanCredSl.advLicNo;
      const BusinessRegNos =PersnlDtl.data.getReqLoanCredSl.businessNo;
      const statusNumber =PersnlDtl.data.getReqLoanCredSl.statusNumber;
      const itemName =PersnlDtl.data.getReqLoanCredSl.itemName;
      const amount =PersnlDtl.data.getReqLoanCredSl.amount;
      const AmtExp =PersnlDtl.data.getReqLoanCredSl.repaymentAmt;
      const RepaymtPeriod =PersnlDtl.data.getReqLoanCredSl.repaymentPeriod;
      const status =PersnlDtl.data.getReqLoanCredSl.status;
      const description =PersnlDtl.data.getReqLoanCredSl.description;
      const defaultPenalty =PersnlDtl.data.getReqLoanCredSl.defaultPenalty;
      const AdvEmail =PersnlDtl.data.getReqLoanCredSl.AdvEmail;
      const DefaultPenaltyRate = parseFloat(defaultPenalty)/parseFloat(AmtExp) *100;
      const RecomDfltPnltyRate = (parseFloat(AmtExp)*20) / 100;

      const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

      
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
          
          const userLoanTransferFees = CompDtls.data.getCompany.biznaCredSaleFee;
          const AdvComs = CompDtls.data.getCompany.AdvCom;
          const CoverageFees = CompDtls.data.getCompany.CoverageFee;
          const AdvCompanyComs = CompDtls.data.getCompany.AdvCompanyCom;
          const AdvCovFee =(parseFloat(CoverageFees)*parseFloat(AdvComs))
          const CompCovFee = parseFloat(CoverageFees)*parseFloat(AdvCompanyComs);
          const AdvCovAmt = AdvCovFee*parseFloat(amount)
          const CompCovAmt = CompCovFee*parseFloat(amount)
          const ttlCovFeeAmount = parseFloat(CoverageFees)*parseFloat(amount)
         
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning; 
         
          const ttlSellerLnsInAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInAmtCov;
          
          const ttlSellerLnsInTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInTymsCov;
          const ttlSellerLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInActvAmtCov;
          
          const ttlSellerLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInActvTymsCov;
          const maxInterestCredSllrs = CompDtls.data.getCompany.maxInterestCredSllr;
          const maxBLss = CompDtls.data.getCompany.maxBLs; 
          
          const Interest = ((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))    

          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
          parseFloat(userLoanTransferFees)*parseFloat(amount) + ttlCovFeeAmount)

          
          
          const ActualMaxPwnBrkrInterest = parseFloat(AmtExp) - parseFloat(amount)
          const phoneContacts = CompDtls.data.getCompany.phoneContact;  
          const TransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) 
          const TtlTransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount)  + parseFloat(amount)
          const MaxSMInterest = (parseFloat(amount) + 
          (parseFloat(userLoanTransferFees)*parseFloat(amount) + 
              ttlCovFeeAmount))*parseFloat(maxInterestCredSllrs)*parseFloat(RepaymtPeriod);

          const ActualMaxSMInterest = parseFloat(AmtExp) - 
                  (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
                  ttlCovFeeAmount);

          const lnTrnsfrFee = parseFloat(userLoanTransferFees)*parseFloat(amount);
          const TotalAmtExp = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) + parseFloat(AmtExp);
          const TotalAmtExp2 = parseFloat(userLoanTransferFees)*parseFloat(amount) + parseFloat(AmtExp);
          const TransCost2 = parseFloat(userLoanTransferFees)*parseFloat(amount)
          
          
              

              const fetchRecUsrDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try {
                    const RecAccountDtl:any = await API.graphql(
                        graphqlOperation(getSMAccount, {awsEmail: loaneeEmail}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLnrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov; 
                        const TtlActvLonsTmsByrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsByrCov;
                        const DefaultPenaltySMs =RecAccountDtl.data.getSMAccount.DefaultPenaltySM;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const nationalids =RecAccountDtl.data.getSMAccount.nationalid;
                        const phonecontactz =RecAccountDtl.data.getSMAccount.phonecontact;


                        
                                  

                                  
                                            const FetchSenderDtls = async () => {
                                              if(isLoading){
                                                return;
                                              }
                                              setIsLoading(true);
                                              try {
                                                  const RecAccountDtl:any = await API.graphql(
                                                      graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
                                                      );
                                                      const pwz =RecAccountDtl.data.getSMAccount.pw;
                                                      const nationalidss =RecAccountDtl.data.getSMAccount.nationalid;
                                                      const owner =RecAccountDtl.data.getSMAccount.owner;
                                                      const name =RecAccountDtl.data.getSMAccount.name;
                                                      const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact;
                                                      const SenderUsrBal =RecAccountDtl.data.getSMAccount.balance;

                                                      const sendSMLn2 = async () => {
                                                        if(isLoading){
                                                          return;
                                                        }
                                                        setIsLoading(true);
                                                        try {
                                                          await API.graphql(
                                                            graphqlOperation(createCovCreditSeller, {
                                                              input: {
                                                                itemName:itemName,
                                                            
                                                                buyerID: nationalids,
                                                                sellerID: nationalidss,
                                                                sellerContact:userInfo.attributes.email,
                                                                buyerContact: loaneeEmail, 
                                                                loanerLoanee:userInfo.attributes.email+loaneeEmail,
                                                                loanerLoaneeAdv:  userInfo.attributes.email+loaneeEmail+ "None",                                   
                                                                amountSold: parseFloat(amount).toFixed(0),
                                                                amountexpectedBack: (TotalAmtExp2 - TransCost2).toFixed(0),
                                                                amountExpectedBackWthClrnc:(TotalAmtExp2 - TransCost2).toFixed(0),
                                                                amountRepaid: 0,
                                                                buyerName:namess,
                                                                SellerName:name,
                                                                lonBala:(TotalAmtExp2 - TransCost2).toFixed(0),
                                                                repaymentPeriod: RepaymtPeriod,
                                                                timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                                                timeExpBack2: 61 + daysUpToDate,
                                                                dfltUpdate: daysUpToDate,
                                                                giverStatus: "Pal2Pal",
                                                                description: description,
                                                                DefaultPenaltyCredSl:defaultPenalty,
                                                                DefaultPenaltyCredSl2:0,
                                                                status: "LoanActive",
                                                                owner: owner,
                                                                advEmail: "None",
                                                                advregnu: "None",
                                                               
                                                              },
                                                            }),
                                                          );
                              
                              
                                                        } catch (error) {
                                                          if (error){
                                                            Alert.alert("Credit Sale unsuccessful; Retry")
                                                            return
                                                          }
                                                        }
                                                        setIsLoading(false);
                                                        await updtSendrAc2();
                                                      };
                                                      
                              
                                                      const updtSendrAc2 = async () =>{
                                                        if(isLoading){
                                                          return;
                                                        }
                                                        setIsLoading(true);
                                                        try{
                                                            await API.graphql(
                                                              graphqlOperation(updateSMAccount, {
                                                                input:{
                                                                  awsEmail:userInfo.attributes.email,
                                                                  
                                                                  
                                                                }
                                                              })
                                                            )
                              
                              
                                                        }
                                                        catch(error){
                                                          console.log(error)
                                                          if (error){Alert.alert("Error!")
                                                          return;}
                                                        }
                                                        setIsLoading(false);
                                                        await updtRecAc2();
                                                      }
                                                      const updtRecAc2 = async () =>{
                                                        if(isLoading){
                                                          return;
                                                        }
                                                        setIsLoading(true);
                                                        try{
                                                            await API.graphql(
                                                              graphqlOperation(updateSMAccount, {
                                                                input:{
                                                                  awsEmail:loaneeEmail,
                                                                  
                                                                  balance:(parseFloat(RecUsrBal) - TransCost2).toFixed(0),
                                                                                                   
                                                                  saleStts: "AccountNotBL",
                                                                                                  
                                                                  
                                                                }
                                                              })
                                                            )                              
                                                        }
                                                        catch(error){
                                                          console.log(error)
                                                          if (error){Alert.alert("Error!")
                                                          return;}
                                                        }
                                                        setIsLoading(false);
                                                        await updtComp2();
                                                      }
                              
                                                      const updtComp2 = async () =>{
                                                        if(isLoading){
                                                          return;
                                                        }
                                                        setIsLoading(false);
                                                        
                                                        try{
                                                            await API.graphql(
                                                              graphqlOperation(updateCompany, {
                                                                input:{
                                                                  AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                                                      
                                                                  
                                                                  companyEarningBal:parseFloat(companyEarningBals) + parseFloat(userLoanTransferFees)*parseFloat(amount),
                                                                  companyEarning:  parseFloat(companyEarnings) + parseFloat(userLoanTransferFees)*parseFloat(amount),  
                                                                 
                                                                  ttlSellerLnsInAmtCov: TotalAmtExp2 + parseFloat(ttlSellerLnsInAmtCovs),
                                                                  
                                                                  ttlSellerLnsInTymsCov: 1 + parseFloat(ttlSellerLnsInTymsCovs),
                                                                     
                                                                  
                                                                   
                                                                  
                                                                }
                                                              })
                                                            )
                                                            
                                                            
                                                        }
                                                        catch(error){
                                                          if (error){Alert.alert("Error!")
                                                      return;}
                                                        }
                                                        setIsLoading(false);
                                                        await updtLnReq2();
                                                      }
                                                      
                                                      const updtLnReq2 = async () =>{
                                                        if(isLoading){
                                                          return;
                                                        }
                                                        setIsLoading(false);
                                                        
                                                        try{
                                                            await API.graphql(
                                                              graphqlOperation(updateReqLoanCredSl, {
                                                                input:{
                                                                  id:route.params.id,                                                      
                                                                  status:"Approved"
                                                                }
                                                              })
                                                            )
                                                            
                                                            
                                                        }
                                                        catch(error){
                                                          console.log(error);
                                                          if (error){Alert.alert("Error!")
                                                      return;}
                                                        }
                                                        Alert.alert("Success. TransactionFee:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) 
                                                        );
                              
                                                        Communications.textWithoutEncoding(phonecontactz,'MiFedha. Hi '+ namess 
                                                        + ', you have been loaned services/goods worth Ksh. '+ amount +' by '
                                                      + name + '. For clarification call the Loaner: '
                                                      + phonecontact 
                                                      + '. The following is a break down of your repayable loan: '
                                                      + ' Cash price of the goods is Ksh. '+ amount 
                                                      + '. Amount you had committed to repay is Ksh. '
                                                      + AmtExp + '. Transaction fee is Ksh. '
                                                      + lnTrnsfrFee +  '. Total Repayable is Ksh'+ TotalAmtExp2 
                                                      + '. Thank you.');
                                                        setIsLoading(false);
                                                        
                                                      }  

                                                      const fetchAdv = async () =>{
                                                        if(isLoading){
                                                          return;
                                                        }
                                                        setIsLoading(true);
                                                        try{
                                            
                                                          const AdvDtls:any = await API.graphql(
                                                            graphqlOperation(getAdvocate,
                                                              {advregnu: advLicNo}),
                                                              
                                                          );
                                                          const advTtlAern = AdvDtls.data.getAdvocate.TtlEarnings;
                                                          const advBl = AdvDtls.data.getAdvocate.advBal;
                                                          const advStts = AdvDtls.data.getAdvocate.status;
                                                          const namesssssss = AdvDtls.data.getAdvocate.name;
          


                                                     
                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createCovCreditSeller, {
                                input: {
                                  itemName:itemName,
                              
                                  buyerID: nationalids,
                                  sellerID: nationalidss,
                                  sellerContact:userInfo.attributes.email,
                                  buyerContact: loaneeEmail, 
                                  loanerLoanee:userInfo.attributes.email+loaneeEmail,
                                  loanerLoaneeAdv:  userInfo.attributes.email+loaneeEmail+ AdvRegNo,                                   
                                  amountSold: parseFloat(amount).toFixed(0),
                                  amountexpectedBack: (TotalAmtExp - TransCost).toFixed(0),
                                  amountExpectedBackWthClrnc:(TotalAmtExp - TransCost).toFixed(0),
                                  amountRepaid: 0,
                                  buyerName:namess,
                                  SellerName:name,
                                  giverStatus: "Pal2Pal",
                                  lonBala:(TotalAmtExp - TransCost).toFixed(0),
                                  repaymentPeriod: RepaymtPeriod,
                                  timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                  timeExpBack2: 61 + daysUpToDate,
                                  dfltUpdate: daysUpToDate,
                                  advregnu: advLicNo,
                                  description: description,
                                  DefaultPenaltyCredSl:defaultPenalty,
                                  DefaultPenaltyCredSl2:0,
                                  status: "LoanActive",
                                  owner: owner,
                                  AdvEmail:AdvEmail
                                },
                              }),
                            );


                          } catch (error) {
                            if (error){
                              Alert.alert("Credit Sale unsuccessful; Retry")
                              return
                            }
                          }
                          setIsLoading(false);
                          await updtSendrAc();
                        };

                        sendSMLn();
                        

                        const updtSendrAc = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateSMAccount, {
                                  input:{
                                    awsEmail:userInfo.attributes.email,
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
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
                                    awsEmail:loaneeEmail,
                                    
                                    balance:(parseFloat(RecUsrBal) - TransCost).toFixed(0),                               
                                    saleStts: "AccountNotBL",
                                                                    
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtComp();
                        }

                        const updtComp = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    ttlCompCovEarnings:CompCovAmt + parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal:AdvCovAmt + parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning:AdvCovAmt + parseFloat(AdvEarnings),
                                    companyEarningBal:CompCovAmt + parseFloat(companyEarningBals) + parseFloat(userLoanTransferFees)*parseFloat(amount),
                                    companyEarning: CompCovAmt + parseFloat(companyEarnings) + parseFloat(userLoanTransferFees)*parseFloat(amount),  
                                   
                                    ttlSellerLnsInAmtCov: TotalAmtExp + parseFloat(ttlSellerLnsInAmtCovs),
                                    
                                    ttlSellerLnsInTymsCov: 1 + parseFloat(ttlSellerLnsInTymsCovs),
                                       
                                    
                                     
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            if (error){Alert.alert("Error!")
                        return;}
                          }
                          setIsLoading(false);
                          await updtAdv();
                        }
                        const updtAdv = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateAdvocate, {
                                  input:{
                                    advregnu: advLicNo,
                                    advBal: AdvCovAmt + parseFloat(advBl) ,
                                    TtlEarnings:AdvCovAmt + parseFloat(advTtlAern),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            if (error){Alert.alert("Error!")
      return;}
                          }
                          
                         ;
                         await updtLnReq();
                          setIsLoading(false);
                        }

                        const updtLnReq = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoanCredSl, {
                                  input:{
                                    id:route.params.id,                                                      
                                    status:"Approved"
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Error!")
                        return;}
                          }
                          Alert.alert("Success. AdvocateFee:" 
                          +(parseFloat(CoverageFees)*parseFloat(amount)).toFixed(2) 
                          + ", TransactionFee:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) 
                          );

                          Communications.textWithoutEncoding(phonecontactz,'MiFedha. Hi '+ namess 
                          + ', you have been loaned Services/goods worth Ksh. '+ amount +' by '
                        + name + '. For clarification call the loaner: '
                        + phonecontact 
                        + '. The following is a break down of your repayable loan: '
                        + ' Cash price of the goods is Ksh. '+ amount 
                        + '. Amount you had committed to repay is Ksh. '
                        + AmtExp + '. Transaction fee is Ksh. '
                        + lnTrnsfrFee + '. Advocacy Fee is Ksh. '
                        + ttlCovFeeAmount + '. Total Repayable is Ksh'+ TotalAmtExp 
                        + '. Thank you.');
                          setIsLoading(false);
                          
                        }       
                      
                        
                        
                        
                        
                      }
                      catch (e){
                        if (e){Alert.alert("Error! No advocate involved during request")
                return;}
                      }
                      setIsLoading(false);
                    }

                    if (userInfo.attributes.sub!==owner) {
                      Alert.alert("Please first create a main account")
                      return;
                    }  else if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver adversely listed');
                  return;
                }
                else if(statusNumber === 0){Alert.alert('Advocate has not yet witnessed');                  
              }
                    
                    else if(BusinessRegNos === loaneeEmail){Alert.alert('You cannot Loan Yourself');}
                    else if(status !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                    else if(status === "Approved"){Alert.alert('Loan already granted');}

                    else if (
                      parseFloat(RecUsrBal) < TransCost && advLicNo != " "
                    ) {Alert.alert("Cancelled."+ "Bal: "+ RecUsrBal +". Deductable: " + TransCost.toFixed(2) 
                    + ". "+ ((TransCost) - parseFloat(RecUsrBal)).toFixed(2) + ' more needed');}

                    else if (
                      parseFloat(RecUsrBal) < TransCost2 && advLicNo == " "
                    ) {Alert.alert("Cancelled."+ "Bal: "+ RecUsrBal +". Deductable: " + TransCost2.toFixed(2) 
                    + ". "+ ((TransCost2) - parseFloat(RecUsrBal)).toFixed(2) + ' more needed');}
                    
                  
                    
                    else if(pwz !==SnderPW){Alert.alert('Wrong password');}
                    
                    else if(advLicNo == ' '){sendSMLn2();}
                    
                     else {
                    
                    await fetchAdv();
                     }         
                    }       
                    catch(e) {     
                      if (e){Alert.alert("Error! ")
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                      await FetchSenderDtls();  

                    
                   
                  
                    }
                    catch (e){
                      if (e){Alert.alert("Error!")
              return;}
                    }
                    setIsLoading(false);
                  }

                  await fetchRecUsrDtls();

           

          
        
        } catch (e) {
          if (e){Alert.alert("Error!")
      return;}
        } 
        setIsLoading(false);       
      };
      await fetchCompDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error!")
      return;}
  };
      setIsLoading(false);
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      setAdvRegNo("");
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
     
      setItmNm("");
      setItmSrlNu("");
      setDfltPnlty("")
}

useEffect(() =>{
  const DfltPnltys=DfltPnlty
    if(!DfltPnltys && DfltPnltys!=="")
    {
      setDfltPnlty("");
      return;
    }
    setDfltPnlty(DfltPnltys);
    }, [DfltPnlty]
     );

     useEffect(() =>{
      const ItmSrlNus=ItmSrlNu
        if(!ItmSrlNus && ItmSrlNus!=="")
        {
          setItmSrlNu("");
          return;
        }
        setItmSrlNu(ItmSrlNus);
        }, [ItmSrlNu]
         );

     useEffect(() =>{
      const ItmNms=ItmNm
        if(!ItmNms && ItmNms!=="")
        {
          setItmNm("");
          return;
        }
        setItmNm(ItmNms);
        }, [ItmNm]
         );


     
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
    
      <View style={styles.image}>
        <ScrollView >
         
         <View style={styles.amountTitleView}>
           <Text style={styles.title}>Fill Loan Details Below</Text>
         </View>

         
         
         <View style={styles.sendAmtView}>
           <TextInput
           placeholder='Sales Officer User PassWord'
             value={SnderPW}
             onChangeText={setSnderPW}
             secureTextEntry = {true}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           
         </View>


         <TouchableOpacity
           onPress={fetchCredSlLnReq}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Credit Sell with Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default CovCredSls;