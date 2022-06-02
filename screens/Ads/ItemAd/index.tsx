import React, {useEffect, useState} from 'react';

import {createBizna, createChamaMembers, createGoodsAds, createGroup,   createItem,   createSokoAd,   updateCompany} from '../../../src/graphql/mutations';
import { getBizna, getCompany, getSMAccount, listChamasRegConfirms, listPersonels, vwViaPhonss,  } from '../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


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



const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [UsrEmail, setUsrEmail] = useState(null);
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');

  const [itemPrys, setitemPrys] = useState('');
  const [itemTwn, setitemTwn] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [rpymntPrd, setrpymntPrd] = useState('');


  const[ownr, setownr] = useState(null);

    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      
      setName(userInfo.username);
      setownr(userInfo.attributes.sub);
      setUsrEmail(userInfo.attributes.email);
          
    };

    

    useEffect(() => {
        fetchUser();
      }, []);

      const ChckPersonelExistence = async () => {
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listPersonels,
              { filter: {
                  
                phoneKontact: { eq: UsrEmail},
                BusinessRegNo:{eq: ChmPhn}
                              
                }}
            )
          )
          
          const gtBizna = async () =>{
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try{
          const compDtls :any= await API.graphql(
            graphqlOperation(getBizna,{BusKntct:ChmPhn})
            );
            const pws = compDtls.data.getBizna.pw;
            const BusinessRegNos = compDtls.data.getBizna.BusinessRegNo;
            const busNames = compDtls.data.getBizna.busName;
            

      const CreateNewSMAc = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          await API.graphql(
          graphqlOperation(createSokoAd, {
          input: {
            sokoregno: BusinessRegNos,
            sokokntct:ChmPhn,
            
            sokoname: awsEmail,
            sokoprice: parseFloat(itemPrys),
            sokotown: itemTwn,
            sokolnprcntg: parseFloat(lnPrsntg),
            sokolpymntperiod: parseFloat(rpymntPrd),
            sokodesc:ChmDesc,
            owner: ownr,
                  },
                })
                
                ,
              );

              if (pword !== pws)
          {Alert.alert("Wrong Business password");
        
      } 
      else if (UsrDtls.data.listPersonels.items.length < 1) {
        Alert.alert("You do not work here");
        return;
        
      }
      
      else {
        Alert.alert("Advert successfully Published")
      }

              
            } catch (error) {
              console.log(error)
              if(error){
                Alert.alert("Please enter details correctly")
                return;
            } 
            
            }
            
            
            
          };

          CreateNewSMAc();

        } catch (e) {
          if(e){Alert.alert("Please first sign up")}
          console.error(e);
        }

          }
        
        await gtBizna();
      }

      catch(e){
      console.log(e)
      if(e){
      Alert.alert("User does not exist; otherwise check inernet connection")
      return;
      }
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
                    <Text style={styles.title}>Fill Ad Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                     
                      value={ChmPhn}
                      onChangeText={setChmPhn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Phone</Text>
                  </View>

                  
                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                     keyboardType='decimal-pad'
                      value={itemPrys}
                      onChangeText={setitemPrys}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Item Price</Text>
                  </View>

                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                    keyboardType='decimal-pad'
                    placeholder='Ex for 10% discount enter 10'
                      value={lnPrsntg}
                      onChangeText={setlnPrsntg}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Discount Percentage</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={awsEmail}
                      onChangeText={setAWSEmail}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Item Name</Text>
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

                  
        
                  

                  <View style={styles.sendAmtViewDesc}>
                    <TextInput
                      value={ChmDesc}
                      onChangeText={setChmDesc}
                      style={styles.sendAmtInputDesc}
                      multiline={true}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Item Desc</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Loaner User Word</Text>
                  </View>


                  <TouchableOpacity
                    onPress={ChckPersonelExistence}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Advertise
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateBiz;