import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {updateCompany} from '../../../../src/graphql/mutations';
import { getAdvocate, getBizna, getCompany, getSMAccount  } from '../../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';


import {
  View,
  Text,
  
  
  TextInput,
  ScrollView,
  
  
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { createReqLoan } from '../../../../src/graphql/mutations';



const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  
  const [awsEmail, setAWSEmail] = useState("");
  const [itemPrys, setitemPrys] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [rpymntPrd, setrpymntPrd] = useState('');
  const [pword, setPW] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState("");

  
  const [itemTwn, setitemTwn] = useState('');
  
  
  const route = useRoute();


  

    
      const gtBizna = async () =>{
        if(isLoading){
          return;
        }
        setIsLoading(true);
        const userInfo = await Auth.currentAuthenticatedUser();
        try{
          const compDtls :any= await API.graphql(
            graphqlOperation(getSMAccount,{awsemail:userInfo.attributes.email})
            );
            const pws = compDtls.data.getSMAccount.pw;
            const phonecontacts = compDtls.data.getSMAccount.phonecontact;
            const name = compDtls.data.getSMAccount.name;
            const ownerz = compDtls.data.getSMAccount.owner;
            
            const Int = ((parseFloat(lnPrsntg) - parseFloat(itemPrys))*100)/(parseFloat(lnPrsntg)*parseFloat(rpymntPrd))

            const gtComp = async () =>{
              if(isLoading){
                return;
              }
              setIsLoading(true);
              const userInfo = await Auth.currentAuthenticatedUser();
              try{
                const compDtls :any= await API.graphql(
                  graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                  );
                  const maxDefaultPen = compDtls.data.getCompany.maxDfltPen;

                  const RecomDfltPnltyRate = (parseFloat(lnPrsntg)*maxDefaultPen) / 100;
                  const DfltPnltyRate = (parseFloat(MmbaID)*maxDefaultPen) / 100;
                  
                  
                  const gtLnerDtls = async () =>{
              if(isLoading){
                return;
              }
              setIsLoading(true);
              const userInfo = await Auth.currentAuthenticatedUser();
              try{
                const compDtls3 :any= await API.graphql(
                  graphqlOperation(getBizna,{BusKntct:awsEmail})
                  );
              
                 
                  const namez = compDtls3.data.getBizna.busName;

                  const CreateNewSMAc2 = async () => {
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                    try {
                      await API.graphql(
                      graphqlOperation(createReqLoan, {
                      input: {
                       
                        loaneeEmail:userInfo.attributes.email,
                        loanerEmail:awsEmail,
                        loaneeName: name,
                        loaneePhone:phonecontacts,
                        AdvEmail: "email",
                        advLicNo: "Sign2Phn",
                        loanerName: namez,
                        loanerPhone: awsEmail,
                        amount: parseFloat(itemPrys).toFixed(2),
                        repaymentAmt: parseFloat(lnPrsntg).toFixed(2),
                        repaymentPeriod:rpymntPrd,
                        status: "AwaitingResponse",
                        statusNumber: 0,
                        owner: userInfo.attributes.sub,
                        description: ChmRegNo,
                        defaultPenalty: MmbaID
                              },
                            })
                            
                            ,
                          );
                  
                          
                  
                          
                        } catch (error) {
                          console.log(error)
                          if(error){
                            Alert.alert("Please enter details correctly")
                            return;
                        } 
                        
                        }
                        Alert.alert("Loan Request Successful");
                        Communications.textWithoutEncoding(awsEmail,'MiFedha. Hi '+ namez + '. It is '
                    + name
                    + '. I request a soft loan of Ksh. '+ itemPrys +
                  ' from you. '
                  + 'Please go to MiFedha app to grant me the request' 
                  +'. Thank you.');
                      }

                  const gtAdvDtls = async () =>{
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                    const userInfo = await Auth.currentAuthenticatedUser();
                    try{
                      const compDtls5 :any= await API.graphql(
                        graphqlOperation(getAdvocate,{advregnu:Sign2Phn})
                        );
                    
                        const email = compDtls5.data.getAdvocate.email;
                        const phonecontact = compDtls5.data.getAdvocate.phonecontact;
                
                  
                  
            
console.log(userInfo.attributes.sub)
console.log(ownerz)


const CreateNewSMAc = async () => {
  if(isLoading){
    return;
  }
  setIsLoading(true);
  try {
    await API.graphql(
    graphqlOperation(createReqLoan, {
    input: {
     
      loaneeEmail:userInfo.attributes.email,
      loanerEmail:awsEmail,
      loaneeName: name,
      loaneePhone:phonecontacts,
      AdvEmail: email,
      advLicNo: Sign2Phn,
      loanerName: namez,
      loanerPhone: awsEmail,
      amount: parseFloat(itemPrys).toFixed(2),
      repaymentAmt: parseFloat(lnPrsntg).toFixed(2),
      repaymentPeriod:rpymntPrd,
      status: "AwaitingResponse",
      statusNumber: 0,
      owner: userInfo.attributes.sub,
      description: ChmRegNo,
      defaultPenalty: MmbaID
            },
          })
          
          ,
        );

        

        
      } catch (error) {
        console.log(error)
        if(error){
          Alert.alert("Please enter details correctly")
          return;
      } 
      
      }
      
      Alert.alert("Loan Request Successful");
      Communications.textWithoutEncoding(awsEmail,'MiFedha. Greetings! '
      + 'We ' + name + ', the loanee and ' + namez + ', the loaner humbly' +  
      ' request that you witness our loan contract on MiFedha app amounting to Ksh. '+
      itemPrys + ' repayable as Ksh. ' + lnPrsntg + ' by the end of ' +rpymntPrd + 
      ' days. Default penalty is Ksh. '+ MmbaID + '. You can reach my loaner through '+ awsEmail +
       '. You can also reach me through ' +phonecontacts +'. Thank you.');
      
    };
    
  CreateNewSMAc();

  

      
          
      } catch (e) {
        if(e){Alert.alert("Error!")}
        return
      }

    }
    if (pword !== pws)
          {Alert.alert("Wrong User password");
        
      } 
      
      else if (parseFloat(itemPrys) > parseFloat(lnPrsntg))
      {Alert.alert("Repayment Amount cant be lesser than Loan")}
      else if ((DfltPnltyRate) > (RecomDfltPnltyRate))
      {Alert.alert("Enter Default Penalty less than Ksh. " + RecomDfltPnltyRate)}
      else if (Int > 100){
        Alert.alert("Interest exploits you; enter lesser repayment amount")
      }
      else if (Sign2Phn != "")
      {
      
      await gtAdvDtls();
    
    }

    else {CreateNewSMAc2();}
        } catch (e) {
          if(e){Alert.alert("Error!")}
          console.error(e);
          
        }
      
      }
    await gtLnerDtls();

  } catch (e) {
    if(e){Alert.alert("Error!")}
    console.error(e);
  }
  setIsLoading(false);
      
  }
  
  await gtComp();

        } catch (e) {
          if(e){Alert.alert("Error!")}
          console.error(e);
          
        }
        setIsLoading(false);
            setChmPhn('');
            setPW('');
            setAWSEmail("")
            setChmDesc("")
            setChmNm("")
            setChmRegNo("")
            setMmbaID("")
            setSign2Phn("");
            setrpymntPrd("");
            setlnPrsntg("");
            setitemTwn("");
            setitemPrys("");
      }
          
    
          useEffect(() =>{
            const itemPryss=itemPrys
              if(!itemPryss && itemPryss!=="")
              {
                setitemPrys("");
                return;
              }
              setitemPrys(itemPryss);
              }, [itemPrys]
               );
               
               useEffect(() =>{
                const itemTwns=itemTwn
                  if(!itemTwns && itemTwns!=="")
                  {
                    setitemTwn("");
                    return;
                  }
                  setitemTwn(itemTwns);
                  }, [itemTwn]
                   );
                   
                   useEffect(() =>{
                    const lnPrsntgs=lnPrsntg
                      if(!lnPrsntgs && lnPrsntgs!=="")
                      {
                        setlnPrsntg("");
                        return;
                      }
                      setlnPrsntg(lnPrsntgs);
                      }, [lnPrsntg]
                       );
                       
                       useEffect(() =>{
                        const rpymntPrds=rpymntPrd
                          if(!rpymntPrds && rpymntPrds!=="")
                          {
                            setrpymntPrd("");
                            return;
                          }
                          setrpymntPrd(rpymntPrds);
                          }, [rpymntPrd]
                           );
                           
                           
                           useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs!=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const ChmRegNos=ChmRegNo
          if(!ChmRegNos && ChmRegNos!=="")
          {
            setChmRegNo("");
            return;
          }
          setChmRegNo(ChmRegNos);
          }, [ChmRegNo]
           );
           
           useEffect(() =>{
        const awsEmails=awsEmail
          if(!awsEmails && awsEmails!=="")
          {
            setAWSEmail("");
            return;
          }
          setAWSEmail(awsEmails);
          }, [awsEmail]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms!=="")
          {
            setChmNm("");
            return;
          }
          setChmNm(ChmNms);
          }, [ChmNm]
           );

           useEffect(() =>{
            const ChmDescs=ChmDesc
              if(!ChmDescs && ChmDescs!=="")
              {
                setChmDesc("");
                return;
              }
              setChmDesc(ChmDescs);
              }, [ChmDesc]
               );

useEffect(() =>{
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
     );

     useEffect(() =>{
      const pws=pword
        if(!pws && pws!=="")
        {
          setPW("");
          return;
        }
        setPW(pws);
        }, [pword]
         );

         useEffect(() =>{
          const Sign2Phns=Sign2Phn
            if(!Sign2Phns && Sign2Phns!=="")
            {
              setSign2Phn("");
              return;
            }
            setSign2Phn(Sign2Phns);
            }, [Sign2Phn]
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
                    
                    placeholder='Company Phone'
                      value={awsEmail}
                      onChangeText={setAWSEmail}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Company Phone Number</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    
                    placeholder='Advocate License Number (Optional)'
                      value={Sign2Phn}
                      onChangeText={setSign2Phn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Advocate License Number</Text>
                  </View>
                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                     keyboardType='decimal-pad'
                     
                      value={itemPrys}
                      onChangeText={setitemPrys}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Loan Amount</Text>
                  </View>

                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                    keyboardType='decimal-pad'
                    
                      value={lnPrsntg}
                      onChangeText={setlnPrsntg}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Repayment Amount</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    keyboardType='decimal-pad'
                    placeholder='Enter number of Days'
                      value={rpymntPrd}
                      onChangeText={setrpymntPrd}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Repayment Period</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    keyboardType='decimal-pad'
                    placeholder='Default Penalty'
                      value={MmbaID}
                      onChangeText={setMmbaID}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Default Penalty</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    
                    placeholder='Loan Description (Optional)'
                      value={ChmRegNo}
                      multiline= {true}
                      onChangeText={setChmRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Loan Description</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}> User PassWord</Text>
                  </View>

                  <TouchableOpacity
                    onPress={gtBizna}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Request 
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateBiz;