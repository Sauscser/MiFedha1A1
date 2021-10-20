/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSMAccountInput = {
  nationalid: string,
  name: string,
  phonecontact: string,
  awsemail: string,
  balance: number,
  pw: string,
  loanAcceptanceCode: string,
  ttlDpstSM: number,
  TtlWthdrwnSM: number,
  TtlActvLonsTmsLnrCov: number,
  TtlActvLonsTmsLneeCov: number,
  TtlActvLonsAmtLnrCov: number,
  TtlActvLonsAmtLneeCov: number,
  TtlBLLonsTmsLnrCov: number,
  TtlBLLonsTmsLneeCov: number,
  TtlBLLonsAmtLnrCov: number,
  TtlBLLonsAmtLneeCov: number,
  TtlClrdLonsTmsLnrCov: number,
  TtlClrdLonsTmsLneeCov: number,
  TtlClrdLonsAmtLnrCov: number,
  TtlClrdLonsAmtLneeCov: number,
  TtlActvLonsTmsLneeChmCov: number,
  TtlActvLonsAmtLneeChmCov: number,
  TtlBLLonsTmsLneeChmCov: number,
  TtlBLLonsAmtLneeChmCov: number,
  TtlClrdLonsTmsLneeChmCov: number,
  TtlClrdLonsAmtLneeChmCov: number,
  TtlActvLonsTmsSllrCov: number,
  TtlActvLonsTmsByrCov: number,
  TtlActvLonsAmtSllrCov: number,
  TtlActvLonsAmtByrCov: number,
  TtlBLLonsTmsSllrCov: number,
  TtlBLLonsTmsByrCov: number,
  TtlBLLonsAmtSllrCov: number,
  TtlBLLonsAmtByrCov: number,
  TtlClrdLonsTmsSllrCov: number,
  TtlClrdLonsTmsByrCov: number,
  TtlClrdLonsAmtSllrCov: number,
  TtlClrdLonsAmtByrCov: number,
  TtlActvLonsTmsLnrNonCov: number,
  TtlActvLonsTmsLneeNonCov: number,
  TtlActvLonsAmtLnrNonCov: number,
  TtlActvLonsAmtLneeNonCov: number,
  TtlBLLonsTmsLnrNonCov: number,
  TtlBLLonsTmsLneeNonCov: number,
  TtlBLLonsAmtLnrNonCov: number,
  TtlBLLonsAmtLneeNonCov: number,
  TtlClrdLonsTmsLnrNonCov: number,
  TtlClrdLonsTmsLneeNonCov: number,
  TtlClrdLonsAmtLnrNonCov: number,
  TtlClrdLonsAmtLneeNonCov: number,
  TtlActvLonsTmsLneeChmNonCov: number,
  TtlActvLonsAmtLneeChmNonCov: number,
  TtlBLLonsTmsLneeChmNonCov: number,
  TtlBLLonsAmtLneeChmNonCov: number,
  TtlClrdLonsTmsLneeChmNonCov: number,
  TtlClrdLonsAmtLneeChmNonCov: number,
  TtlActvLonsTmsSllrNonCov: number,
  TtlActvLonsTmsByrNonCov: number,
  TtlActvLonsAmtSllrNonCov: number,
  TtlActvLonsAmtByrNonCov: number,
  TtlBLLonsTmsSllrNonCov: number,
  TtlBLLonsTmsByrNonCov: number,
  TtlBLLonsAmtSllrNonCov: number,
  TtlBLLonsAmtByrNonCov: number,
  TtlClrdLonsTmsSllrNonCov: number,
  TtlClrdLonsTmsByrNonCov: number,
  TtlClrdLonsAmtSllrNonCov: number,
  TtlClrdLonsAmtByrNonCov: number,
  ttlNonLonsRecSM: number,
  ttlNonLonsSentSM: number,
  MaxTymsBL: number,
  loanStatus: Status,
  acStatus: Status,
  blStatus: Status,
  loanLimit: number,
  nonLonLimit: number,
  withdrawalLimit: number,
  depositLimit: number,
  owner: string,
};

export enum Status {
  NoLoan = "NoLoan",
  LoanActive = "LoanActive",
  LoanCleared = "LoanCleared",
  LoanBL = "LoanBL",
  AccountActive = "AccountActive",
  AccountInactive = "AccountInactive",
  AccountBlackListed = "AccountBlackListed",
  AccountNotBL = "AccountNotBL",
  NonLons = "NonLons",
  SMCovLonRepayment = "SMCovLonRepayment",
  SMNonCovLonRepayment = "SMNonCovLonRepayment",
  ChmCovLonRepayment = "ChmCovLonRepayment",
  ChmNonCovLonRepayment = "ChmNonCovLonRepayment",
  CredSlCovLonRepayment = "CredSlCovLonRepayment",
  CredSlNonCovLonRepayment = "CredSlNonCovLonRepayment",
}


export type ModelSMAccountConditionInput = {
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  awsemail?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  loanAcceptanceCode?: ModelStringInput | null,
  ttlDpstSM?: ModelFloatInput | null,
  TtlWthdrwnSM?: ModelFloatInput | null,
  TtlActvLonsTmsLnrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrNonCov?: ModelFloatInput | null,
  ttlNonLonsRecSM?: ModelFloatInput | null,
  ttlNonLonsSentSM?: ModelFloatInput | null,
  MaxTymsBL?: ModelFloatInput | null,
  loanStatus?: ModelStatusInput | null,
  acStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  loanLimit?: ModelFloatInput | null,
  nonLonLimit?: ModelFloatInput | null,
  withdrawalLimit?: ModelFloatInput | null,
  depositLimit?: ModelFloatInput | null,
  and?: Array< ModelSMAccountConditionInput | null > | null,
  or?: Array< ModelSMAccountConditionInput | null > | null,
  not?: ModelSMAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type SMAccount = {
  __typename: "SMAccount",
  nationalid: string,
  name: string,
  phonecontact: string,
  awsemail: string,
  balance: number,
  pw: string,
  loanAcceptanceCode: string,
  ttlDpstSM: number,
  TtlWthdrwnSM: number,
  TtlActvLonsTmsLnrCov: number,
  TtlActvLonsTmsLneeCov: number,
  TtlActvLonsAmtLnrCov: number,
  TtlActvLonsAmtLneeCov: number,
  TtlBLLonsTmsLnrCov: number,
  TtlBLLonsTmsLneeCov: number,
  TtlBLLonsAmtLnrCov: number,
  TtlBLLonsAmtLneeCov: number,
  TtlClrdLonsTmsLnrCov: number,
  TtlClrdLonsTmsLneeCov: number,
  TtlClrdLonsAmtLnrCov: number,
  TtlClrdLonsAmtLneeCov: number,
  TtlActvLonsTmsLneeChmCov: number,
  TtlActvLonsAmtLneeChmCov: number,
  TtlBLLonsTmsLneeChmCov: number,
  TtlBLLonsAmtLneeChmCov: number,
  TtlClrdLonsTmsLneeChmCov: number,
  TtlClrdLonsAmtLneeChmCov: number,
  TtlActvLonsTmsSllrCov: number,
  TtlActvLonsTmsByrCov: number,
  TtlActvLonsAmtSllrCov: number,
  TtlActvLonsAmtByrCov: number,
  TtlBLLonsTmsSllrCov: number,
  TtlBLLonsTmsByrCov: number,
  TtlBLLonsAmtSllrCov: number,
  TtlBLLonsAmtByrCov: number,
  TtlClrdLonsTmsSllrCov: number,
  TtlClrdLonsTmsByrCov: number,
  TtlClrdLonsAmtSllrCov: number,
  TtlClrdLonsAmtByrCov: number,
  TtlActvLonsTmsLnrNonCov: number,
  TtlActvLonsTmsLneeNonCov: number,
  TtlActvLonsAmtLnrNonCov: number,
  TtlActvLonsAmtLneeNonCov: number,
  TtlBLLonsTmsLnrNonCov: number,
  TtlBLLonsTmsLneeNonCov: number,
  TtlBLLonsAmtLnrNonCov: number,
  TtlBLLonsAmtLneeNonCov: number,
  TtlClrdLonsTmsLnrNonCov: number,
  TtlClrdLonsTmsLneeNonCov: number,
  TtlClrdLonsAmtLnrNonCov: number,
  TtlClrdLonsAmtLneeNonCov: number,
  TtlActvLonsTmsLneeChmNonCov: number,
  TtlActvLonsAmtLneeChmNonCov: number,
  TtlBLLonsTmsLneeChmNonCov: number,
  TtlBLLonsAmtLneeChmNonCov: number,
  TtlClrdLonsTmsLneeChmNonCov: number,
  TtlClrdLonsAmtLneeChmNonCov: number,
  TtlActvLonsTmsSllrNonCov: number,
  TtlActvLonsTmsByrNonCov: number,
  TtlActvLonsAmtSllrNonCov: number,
  TtlActvLonsAmtByrNonCov: number,
  TtlBLLonsTmsSllrNonCov: number,
  TtlBLLonsTmsByrNonCov: number,
  TtlBLLonsAmtSllrNonCov: number,
  TtlBLLonsAmtByrNonCov: number,
  TtlClrdLonsTmsSllrNonCov: number,
  TtlClrdLonsTmsByrNonCov: number,
  TtlClrdLonsAmtSllrNonCov: number,
  TtlClrdLonsAmtByrNonCov: number,
  ttlNonLonsRecSM: number,
  ttlNonLonsSentSM: number,
  MaxTymsBL: number,
  loanStatus: Status,
  acStatus: Status,
  blStatus: Status,
  loanLimit: number,
  nonLonLimit: number,
  withdrawalLimit: number,
  depositLimit: number,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMAccountInput = {
  nationalid: string,
  name?: string | null,
  phonecontact?: string | null,
  awsemail?: string | null,
  balance?: number | null,
  pw?: string | null,
  loanAcceptanceCode?: string | null,
  ttlDpstSM?: number | null,
  TtlWthdrwnSM?: number | null,
  TtlActvLonsTmsLnrCov?: number | null,
  TtlActvLonsTmsLneeCov?: number | null,
  TtlActvLonsAmtLnrCov?: number | null,
  TtlActvLonsAmtLneeCov?: number | null,
  TtlBLLonsTmsLnrCov?: number | null,
  TtlBLLonsTmsLneeCov?: number | null,
  TtlBLLonsAmtLnrCov?: number | null,
  TtlBLLonsAmtLneeCov?: number | null,
  TtlClrdLonsTmsLnrCov?: number | null,
  TtlClrdLonsTmsLneeCov?: number | null,
  TtlClrdLonsAmtLnrCov?: number | null,
  TtlClrdLonsAmtLneeCov?: number | null,
  TtlActvLonsTmsLneeChmCov?: number | null,
  TtlActvLonsAmtLneeChmCov?: number | null,
  TtlBLLonsTmsLneeChmCov?: number | null,
  TtlBLLonsAmtLneeChmCov?: number | null,
  TtlClrdLonsTmsLneeChmCov?: number | null,
  TtlClrdLonsAmtLneeChmCov?: number | null,
  TtlActvLonsTmsSllrCov?: number | null,
  TtlActvLonsTmsByrCov?: number | null,
  TtlActvLonsAmtSllrCov?: number | null,
  TtlActvLonsAmtByrCov?: number | null,
  TtlBLLonsTmsSllrCov?: number | null,
  TtlBLLonsTmsByrCov?: number | null,
  TtlBLLonsAmtSllrCov?: number | null,
  TtlBLLonsAmtByrCov?: number | null,
  TtlClrdLonsTmsSllrCov?: number | null,
  TtlClrdLonsTmsByrCov?: number | null,
  TtlClrdLonsAmtSllrCov?: number | null,
  TtlClrdLonsAmtByrCov?: number | null,
  TtlActvLonsTmsLnrNonCov?: number | null,
  TtlActvLonsTmsLneeNonCov?: number | null,
  TtlActvLonsAmtLnrNonCov?: number | null,
  TtlActvLonsAmtLneeNonCov?: number | null,
  TtlBLLonsTmsLnrNonCov?: number | null,
  TtlBLLonsTmsLneeNonCov?: number | null,
  TtlBLLonsAmtLnrNonCov?: number | null,
  TtlBLLonsAmtLneeNonCov?: number | null,
  TtlClrdLonsTmsLnrNonCov?: number | null,
  TtlClrdLonsTmsLneeNonCov?: number | null,
  TtlClrdLonsAmtLnrNonCov?: number | null,
  TtlClrdLonsAmtLneeNonCov?: number | null,
  TtlActvLonsTmsLneeChmNonCov?: number | null,
  TtlActvLonsAmtLneeChmNonCov?: number | null,
  TtlBLLonsTmsLneeChmNonCov?: number | null,
  TtlBLLonsAmtLneeChmNonCov?: number | null,
  TtlClrdLonsTmsLneeChmNonCov?: number | null,
  TtlClrdLonsAmtLneeChmNonCov?: number | null,
  TtlActvLonsTmsSllrNonCov?: number | null,
  TtlActvLonsTmsByrNonCov?: number | null,
  TtlActvLonsAmtSllrNonCov?: number | null,
  TtlActvLonsAmtByrNonCov?: number | null,
  TtlBLLonsTmsSllrNonCov?: number | null,
  TtlBLLonsTmsByrNonCov?: number | null,
  TtlBLLonsAmtSllrNonCov?: number | null,
  TtlBLLonsAmtByrNonCov?: number | null,
  TtlClrdLonsTmsSllrNonCov?: number | null,
  TtlClrdLonsTmsByrNonCov?: number | null,
  TtlClrdLonsAmtSllrNonCov?: number | null,
  TtlClrdLonsAmtByrNonCov?: number | null,
  ttlNonLonsRecSM?: number | null,
  ttlNonLonsSentSM?: number | null,
  MaxTymsBL?: number | null,
  loanStatus?: Status | null,
  acStatus?: Status | null,
  blStatus?: Status | null,
  loanLimit?: number | null,
  nonLonLimit?: number | null,
  withdrawalLimit?: number | null,
  depositLimit?: number | null,
  owner?: string | null,
};

export type DeleteSMAccountInput = {
  nationalid: string,
};

export type CreateSMLoansCoveredInput = {
  id?: string | null,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountrepaid: number,
  repaymentPeriod: number,
  advregnu: string,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelSMLoansCoveredConditionInput = {
  loaneeid?: ModelStringInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  advregnu?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSMLoansCoveredConditionInput | null > | null,
  or?: Array< ModelSMLoansCoveredConditionInput | null > | null,
  not?: ModelSMLoansCoveredConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SMLoansCovered = {
  __typename: "SMLoansCovered",
  id: string,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountrepaid: number,
  repaymentPeriod: number,
  advregnu: string,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMLoansCoveredInput = {
  id: string,
  loaneeid?: string | null,
  loanerId?: string | null,
  amountgiven?: number | null,
  amountexpected?: number | null,
  amountrepaid?: number | null,
  repaymentPeriod?: number | null,
  advregnu?: string | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSMLoansCoveredInput = {
  id: string,
};

export type CreateSMLoansNonCoveredInput = {
  id?: string | null,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountrepaid: number,
  repaymentPeriod: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelSMLoansNonCoveredConditionInput = {
  loaneeid?: ModelIDInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSMLoansNonCoveredConditionInput | null > | null,
  or?: Array< ModelSMLoansNonCoveredConditionInput | null > | null,
  not?: ModelSMLoansNonCoveredConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SMLoansNonCovered = {
  __typename: "SMLoansNonCovered",
  id: string,
  loaneeid: string,
  loanerId: string,
  amountgiven: number,
  amountexpected: number,
  amountrepaid: number,
  repaymentPeriod: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSMLoansNonCoveredInput = {
  id: string,
  loaneeid?: string | null,
  loanerId?: string | null,
  amountgiven?: number | null,
  amountexpected?: number | null,
  amountrepaid?: number | null,
  repaymentPeriod?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSMLoansNonCoveredInput = {
  id: string,
};

export type CreateNonLoansInput = {
  id?: string | null,
  senderID: string,
  recId: string,
  amount: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelNonLoansConditionInput = {
  senderID?: ModelStringInput | null,
  recId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelNonLoansConditionInput | null > | null,
  or?: Array< ModelNonLoansConditionInput | null > | null,
  not?: ModelNonLoansConditionInput | null,
};

export type NonLoans = {
  __typename: "NonLoans",
  id: string,
  senderID: string,
  recId: string,
  amount: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNonLoansInput = {
  id: string,
  senderID?: string | null,
  recId?: string | null,
  amount?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteNonLoansInput = {
  id: string,
};

export type CreateAgentInput = {
  phonecontact: string,
  nationalid: string,
  name: string,
  ttlEarnings: number,
  pw: string,
  email: string,
  sagentregno: string,
  TtlFltIn: number,
  TtlFltOut: number,
  floatBal: number,
  latitude: number,
  longitude: number,
  agentEarningBal: number,
  status: Status,
  owner: string,
};

export type ModelAgentConditionInput = {
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ttlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  TtlFltIn?: ModelFloatInput | null,
  TtlFltOut?: ModelFloatInput | null,
  floatBal?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAgentConditionInput | null > | null,
  or?: Array< ModelAgentConditionInput | null > | null,
  not?: ModelAgentConditionInput | null,
};

export type Agent = {
  __typename: "Agent",
  phonecontact: string,
  nationalid: string,
  name: string,
  ttlEarnings: number,
  pw: string,
  email: string,
  sagentregno: string,
  TtlFltIn: number,
  TtlFltOut: number,
  floatBal: number,
  latitude: number,
  longitude: number,
  agentEarningBal: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentInput = {
  phonecontact: string,
  nationalid?: string | null,
  name?: string | null,
  ttlEarnings?: number | null,
  pw?: string | null,
  email?: string | null,
  sagentregno?: string | null,
  TtlFltIn?: number | null,
  TtlFltOut?: number | null,
  floatBal?: number | null,
  latitude?: number | null,
  longitude?: number | null,
  agentEarningBal?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAgentInput = {
  phonecontact: string,
};

export type CreateFloatPurchaseInput = {
  id?: string | null,
  agentphone: string,
  amount: number,
  transactId: string,
  bankAdminID: string,
  status: Status,
  owner: string,
};

export type ModelFloatPurchaseConditionInput = {
  agentphone?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  transactId?: ModelStringInput | null,
  bankAdminID?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFloatPurchaseConditionInput | null > | null,
  or?: Array< ModelFloatPurchaseConditionInput | null > | null,
  not?: ModelFloatPurchaseConditionInput | null,
};

export type FloatPurchase = {
  __typename: "FloatPurchase",
  id?: string | null,
  agentphone: string,
  amount: number,
  transactId: string,
  bankAdminID: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatPurchaseInput = {
  id: string,
  agentphone?: string | null,
  amount?: number | null,
  transactId?: string | null,
  bankAdminID?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteFloatPurchaseInput = {
  id: string,
};

export type CreateFloatAddInput = {
  id?: string | null,
  withdrawerid: string,
  amount: number,
  agentPhonecontact: string,
  sagentId: string,
  status: Status,
  owner: string,
};

export type ModelFloatAddConditionInput = {
  withdrawerid?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  agentPhonecontact?: ModelStringInput | null,
  sagentId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFloatAddConditionInput | null > | null,
  or?: Array< ModelFloatAddConditionInput | null > | null,
  not?: ModelFloatAddConditionInput | null,
};

export type FloatAdd = {
  __typename: "FloatAdd",
  id: string,
  withdrawerid: string,
  amount: number,
  agentPhonecontact: string,
  sagentId: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloatAddInput = {
  id: string,
  withdrawerid?: string | null,
  amount?: number | null,
  agentPhonecontact?: string | null,
  sagentId?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteFloatAddInput = {
  id: string,
};

export type CreateFloatReductionInput = {
  id?: string | null,
  amount: number,
  depositerid: string,
  agContact: string,
  status: Status,
};

export type ModelFloatReductionConditionInput = {
  amount?: ModelFloatInput | null,
  depositerid?: ModelStringInput | null,
  agContact?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFloatReductionConditionInput | null > | null,
  or?: Array< ModelFloatReductionConditionInput | null > | null,
  not?: ModelFloatReductionConditionInput | null,
};

export type FloatReduction = {
  __typename: "FloatReduction",
  id: string,
  amount: number,
  depositerid: string,
  agContact: string,
  status: Status,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFloatReductionInput = {
  id: string,
  amount?: number | null,
  depositerid?: string | null,
  agContact?: string | null,
  status?: Status | null,
};

export type DeleteFloatReductionInput = {
  id: string,
};

export type CreateAgentWithdrawalsInput = {
  id?: string | null,
  agentPhone: string,
  bankAdminId: string,
  Amount: number,
  status: Status,
  owner: string,
};

export type ModelAgentWithdrawalsConditionInput = {
  agentPhone?: ModelStringInput | null,
  bankAdminId?: ModelStringInput | null,
  Amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAgentWithdrawalsConditionInput | null > | null,
  or?: Array< ModelAgentWithdrawalsConditionInput | null > | null,
  not?: ModelAgentWithdrawalsConditionInput | null,
};

export type AgentWithdrawals = {
  __typename: "AgentWithdrawals",
  id: string,
  agentPhone: string,
  bankAdminId: string,
  Amount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentWithdrawalsInput = {
  id: string,
  agentPhone?: string | null,
  bankAdminId?: string | null,
  Amount?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAgentWithdrawalsInput = {
  id: string,
};

export type CreateSAgentInput = {
  id?: string | null,
  saNationalid: string,
  name: string,
  phonecontact: string,
  pw: string,
  TtlEarnings: number,
  actvMFNdog: number,
  InctvMFNdog: number,
  email: string,
  saBalance: number,
  status: Status,
  owner: string,
};

export type ModelSAgentConditionInput = {
  saNationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  actvMFNdog?: ModelFloatInput | null,
  InctvMFNdog?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  saBalance?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSAgentConditionInput | null > | null,
  or?: Array< ModelSAgentConditionInput | null > | null,
  not?: ModelSAgentConditionInput | null,
};

export type SAgent = {
  __typename: "SAgent",
  id: string,
  saNationalid: string,
  name: string,
  phonecontact: string,
  pw: string,
  TtlEarnings: number,
  actvMFNdog: number,
  InctvMFNdog: number,
  email: string,
  saBalance: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSAgentInput = {
  id: string,
  saNationalid?: string | null,
  name?: string | null,
  phonecontact?: string | null,
  pw?: string | null,
  TtlEarnings?: number | null,
  actvMFNdog?: number | null,
  InctvMFNdog?: number | null,
  email?: string | null,
  saBalance?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSAgentInput = {
  id: string,
};

export type CreateSAgentWithdrawalsInput = {
  id?: string | null,
  saId: string,
  amount: number,
  bankAdmnId: string,
  status: Status,
  owner: string,
};

export type ModelSAgentWithdrawalsConditionInput = {
  saId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdmnId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelSAgentWithdrawalsConditionInput | null > | null,
  or?: Array< ModelSAgentWithdrawalsConditionInput | null > | null,
  not?: ModelSAgentWithdrawalsConditionInput | null,
};

export type SAgentWithdrawals = {
  __typename: "SAgentWithdrawals",
  id: string,
  saId: string,
  amount: number,
  bankAdmnId: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSAgentWithdrawalsInput = {
  id: string,
  saId?: string | null,
  amount?: number | null,
  bankAdmnId?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteSAgentWithdrawalsInput = {
  id: string,
};

export type CreateBankAdminInput = {
  nationalid: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  pw: string,
  BankAdmBal: number,
  email: string,
  status: Status,
  owner: string,
};

export type ModelBankAdminConditionInput = {
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  BankAdmBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelBankAdminConditionInput | null > | null,
  or?: Array< ModelBankAdminConditionInput | null > | null,
  not?: ModelBankAdminConditionInput | null,
};

export type BankAdmin = {
  __typename: "BankAdmin",
  nationalid: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  pw: string,
  BankAdmBal: number,
  email: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBankAdminInput = {
  nationalid: string,
  name?: string | null,
  phonecontact?: string | null,
  TtlEarnings?: number | null,
  pw?: string | null,
  BankAdmBal?: number | null,
  email?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteBankAdminInput = {
  nationalid: string,
};

export type CreateBankAdmWithdrawalsInput = {
  id?: string | null,
  bankAdmNatId: string,
  amount: number,
  status: Status,
  owner: string,
};

export type ModelBankAdmWithdrawalsConditionInput = {
  bankAdmNatId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelBankAdmWithdrawalsConditionInput | null > | null,
  or?: Array< ModelBankAdmWithdrawalsConditionInput | null > | null,
  not?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type BankAdmWithdrawals = {
  __typename: "BankAdmWithdrawals",
  id: string,
  bankAdmNatId: string,
  amount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBankAdmWithdrawalsInput = {
  id: string,
  bankAdmNatId?: string | null,
  amount?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteBankAdmWithdrawalsInput = {
  id: string,
};

export type CreateAdvocateInput = {
  advregnu: string,
  nationalid: string,
  pwd: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  advBal: number,
  email: string,
  officeLoc: string,
  status: Status,
  owner: string,
};

export type ModelAdvocateConditionInput = {
  nationalid?: ModelStringInput | null,
  pwd?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  advBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  officeLoc?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdvocateConditionInput | null > | null,
  or?: Array< ModelAdvocateConditionInput | null > | null,
  not?: ModelAdvocateConditionInput | null,
};

export type Advocate = {
  __typename: "Advocate",
  advregnu: string,
  nationalid: string,
  pwd: string,
  name: string,
  phonecontact: string,
  TtlEarnings: number,
  advBal: number,
  email: string,
  officeLoc: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvocateInput = {
  advregnu: string,
  nationalid?: string | null,
  pwd?: string | null,
  name?: string | null,
  phonecontact?: string | null,
  TtlEarnings?: number | null,
  advBal?: number | null,
  email?: string | null,
  officeLoc?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAdvocateInput = {
  advregnu: string,
};

export type CreateAdvocateWithdrawalsInput = {
  id?: string | null,
  bankAdmnId: string,
  advregnu: string,
  amount: number,
  status: Status,
  owner: string,
};

export type ModelAdvocateWithdrawalsConditionInput = {
  bankAdmnId?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelAdvocateWithdrawalsConditionInput | null > | null,
  or?: Array< ModelAdvocateWithdrawalsConditionInput | null > | null,
  not?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type AdvocateWithdrawals = {
  __typename: "AdvocateWithdrawals",
  id: string,
  bankAdmnId: string,
  advregnu: string,
  amount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdvocateWithdrawalsInput = {
  id: string,
  bankAdmnId?: string | null,
  advregnu?: string | null,
  amount?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteAdvocateWithdrawalsInput = {
  id: string,
};

export type CreateCompanyInput = {
  AdminId: string,
  phoneContact: string,
  companyEmail: string,
  termsNconditions: string,
  alert: string,
  about: string,
  policy: string,
  privacy: string,
  recom: string,
  pw1: string,
  pw2: string,
  agentwithdrawalFee: number,
  agentCom: number,
  sagentCom: number,
  companyCom: number,
  AdvCom: number,
  bankAdminCom: number,
  sawithdrawalFee: number,
  advuserwithdrawalFee: number,
  bankAdmuserwithdrawalFee: number,
  userLoanTransferFee: number,
  userTransferFee: number,
  userClearanceFee: number,
  ttlNonLonssRecSM: number,
  ttlNonLonssSentSM: number,
  ttlNonLonssRecChm: number,
  ttlNonLonssSentChm: number,
  companyEarningBal: number,
  companyEarning: number,
  agentEarningBal: number,
  agentEarning: number,
  saEarningBal: number,
  saEarning: number,
  AdvEarningBal: number,
  AdvEarning: number,
  admEarningBal: number,
  admEarning: number,
  ttlUsrDep: number,
  ttlUserWthdrwl?: number | null,
  agentFloatIn: number,
  agentFloatOut: number,
  ttlActiveUsers: number,
  ttlInactvUsrs: number,
  ttlKFNdgActv: number,
  ttlKFNdgInActv: number,
  ttlKNdgBLStts: number,
  ttlKFKbwActv: number,
  ttlKFKbwInActv: number,
  ttlKKbwBLStts: number,
  ttlKFAdvActv: number,
  ttlKFAdvInActv: number,
  ttlKAdvBLStts: number,
  ttlKFAdmActv: number,
  ttlKFAdmInActv: number,
  ttlKAdmBLStts: number,
  ttlSMLnsInAmtCov: number,
  ttlChmLnsInAmtCov: number,
  ttlSellerLnsInAmtCov: number,
  ttlSMLnsInActvAmtCov: number,
  ttlChmLnsInActvAmtCov: number,
  ttlSellerLnsInActvAmtCov: number,
  ttlSMLnsInClrdAmtCov: number,
  ttlChmLnsInClrdAmtCov: number,
  ttlSellerLnsInClrdAmtCov: number,
  ttlSMLnsInBlAmtCov: number,
  ttlChmLnsInBlAmtCov: number,
  ttlSellerLnsInBlAmtCov: number,
  ttlSMLnsInTymsCov: number,
  ttlChmLnsInTymsCov: number,
  ttlSellerLnsInTymsCov: number,
  ttlSMLnsInActvTymsCov: number,
  ttlChmLnsInActvTymsCov: number,
  ttlSellerLnsInActvTymsCov: number,
  ttlSMLnsInClrdTymsCov: number,
  ttlChmLnsInClrdTymsCov: number,
  ttlSellerLnsInClrdTymsCov: number,
  ttlSMLnsInBlTymsCov: number,
  ttlChmLnsInBlTymsCov: number,
  ttlSellerLnsInBlTymsCov: number,
  ttlCompTrnsfrEarningsCov: number,
  ttlCompBLClrncEarningsCov: number,
  ttlSMLnsInAmtNonCov: number,
  ttlChmLnsInAmtNonCov: number,
  ttlSellerLnsInAmtNonCov: number,
  ttlSMLnsInActvAmtNonCov: number,
  ttlChmLnsInActvAmtNonCov: number,
  ttlSellerLnsInActvAmtNonCov: number,
  ttlSMLnsInClrdAmtNonCov: number,
  ttlChmLnsInClrdAmtNonCov: number,
  ttlSellerLnsInClrdAmtNonCov: number,
  ttlSMLnsInBlAmtNonCov: number,
  ttlChmLnsInBlAmtNonCov: number,
  ttlSellerLnsInBlAmtNonCov: number,
  ttlSMLnsInTymsNonCov: number,
  ttlChmLnsInTymsNonCov: number,
  ttlSellerLnsInTymsNonCov: number,
  ttlSMLnsInActvTymsNonCov: number,
  ttlChmLnsInActvTymsNonCov: number,
  ttlSellerLnsInActvTymsNonCov: number,
  ttlSMLnsInClrdTymsNonCov: number,
  ttlChmLnsInClrdTymsNonCov: number,
  ttlSellerLnsInClrdTymsNonCov: number,
  ttlSMLnsInBlTymsNonCov: number,
  ttlChmLnsInBlTymsNonCov: number,
  ttlSellerLnsInBlTymsNonCov: number,
  ttlCompTrnsfrEarningsNonCov: number,
  ttlCompBLClrncEarningsNonCov: number,
  ttlCompCovEarnings: number,
  maxInterestSM: number,
  maxInterestCredSllr: number,
  maxInterestGrp: number,
  totalLnsRecovered: number,
};

export type ModelCompanyConditionInput = {
  phoneContact?: ModelStringInput | null,
  companyEmail?: ModelStringInput | null,
  termsNconditions?: ModelStringInput | null,
  alert?: ModelStringInput | null,
  about?: ModelStringInput | null,
  policy?: ModelStringInput | null,
  privacy?: ModelStringInput | null,
  recom?: ModelStringInput | null,
  pw1?: ModelStringInput | null,
  pw2?: ModelStringInput | null,
  agentwithdrawalFee?: ModelFloatInput | null,
  agentCom?: ModelFloatInput | null,
  sagentCom?: ModelFloatInput | null,
  companyCom?: ModelFloatInput | null,
  AdvCom?: ModelFloatInput | null,
  bankAdminCom?: ModelFloatInput | null,
  sawithdrawalFee?: ModelFloatInput | null,
  advuserwithdrawalFee?: ModelFloatInput | null,
  bankAdmuserwithdrawalFee?: ModelFloatInput | null,
  userLoanTransferFee?: ModelFloatInput | null,
  userTransferFee?: ModelFloatInput | null,
  userClearanceFee?: ModelFloatInput | null,
  ttlNonLonssRecSM?: ModelFloatInput | null,
  ttlNonLonssSentSM?: ModelFloatInput | null,
  ttlNonLonssRecChm?: ModelFloatInput | null,
  ttlNonLonssSentChm?: ModelFloatInput | null,
  companyEarningBal?: ModelFloatInput | null,
  companyEarning?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  agentEarning?: ModelFloatInput | null,
  saEarningBal?: ModelFloatInput | null,
  saEarning?: ModelFloatInput | null,
  AdvEarningBal?: ModelFloatInput | null,
  AdvEarning?: ModelFloatInput | null,
  admEarningBal?: ModelFloatInput | null,
  admEarning?: ModelFloatInput | null,
  ttlUsrDep?: ModelFloatInput | null,
  ttlUserWthdrwl?: ModelFloatInput | null,
  agentFloatIn?: ModelFloatInput | null,
  agentFloatOut?: ModelFloatInput | null,
  ttlActiveUsers?: ModelFloatInput | null,
  ttlInactvUsrs?: ModelFloatInput | null,
  ttlKFNdgActv?: ModelFloatInput | null,
  ttlKFNdgInActv?: ModelFloatInput | null,
  ttlKNdgBLStts?: ModelFloatInput | null,
  ttlKFKbwActv?: ModelFloatInput | null,
  ttlKFKbwInActv?: ModelFloatInput | null,
  ttlKKbwBLStts?: ModelFloatInput | null,
  ttlKFAdvActv?: ModelFloatInput | null,
  ttlKFAdvInActv?: ModelFloatInput | null,
  ttlKAdvBLStts?: ModelFloatInput | null,
  ttlKFAdmActv?: ModelFloatInput | null,
  ttlKFAdmInActv?: ModelFloatInput | null,
  ttlKAdmBLStts?: ModelFloatInput | null,
  ttlSMLnsInAmtCov?: ModelFloatInput | null,
  ttlChmLnsInAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSMLnsInTymsCov?: ModelFloatInput | null,
  ttlChmLnsInTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsCov?: ModelFloatInput | null,
  ttlSMLnsInAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsNonCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsNonCov?: ModelFloatInput | null,
  ttlCompCovEarnings?: ModelFloatInput | null,
  maxInterestSM?: ModelFloatInput | null,
  maxInterestCredSllr?: ModelFloatInput | null,
  maxInterestGrp?: ModelFloatInput | null,
  totalLnsRecovered?: ModelFloatInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type Company = {
  __typename: "Company",
  AdminId: string,
  phoneContact: string,
  companyEmail: string,
  termsNconditions: string,
  alert: string,
  about: string,
  policy: string,
  privacy: string,
  recom: string,
  pw1: string,
  pw2: string,
  agentwithdrawalFee: number,
  agentCom: number,
  sagentCom: number,
  companyCom: number,
  AdvCom: number,
  bankAdminCom: number,
  sawithdrawalFee: number,
  advuserwithdrawalFee: number,
  bankAdmuserwithdrawalFee: number,
  userLoanTransferFee: number,
  userTransferFee: number,
  userClearanceFee: number,
  ttlNonLonssRecSM: number,
  ttlNonLonssSentSM: number,
  ttlNonLonssRecChm: number,
  ttlNonLonssSentChm: number,
  companyEarningBal: number,
  companyEarning: number,
  agentEarningBal: number,
  agentEarning: number,
  saEarningBal: number,
  saEarning: number,
  AdvEarningBal: number,
  AdvEarning: number,
  admEarningBal: number,
  admEarning: number,
  ttlUsrDep: number,
  ttlUserWthdrwl?: number | null,
  agentFloatIn: number,
  agentFloatOut: number,
  ttlActiveUsers: number,
  ttlInactvUsrs: number,
  ttlKFNdgActv: number,
  ttlKFNdgInActv: number,
  ttlKNdgBLStts: number,
  ttlKFKbwActv: number,
  ttlKFKbwInActv: number,
  ttlKKbwBLStts: number,
  ttlKFAdvActv: number,
  ttlKFAdvInActv: number,
  ttlKAdvBLStts: number,
  ttlKFAdmActv: number,
  ttlKFAdmInActv: number,
  ttlKAdmBLStts: number,
  ttlSMLnsInAmtCov: number,
  ttlChmLnsInAmtCov: number,
  ttlSellerLnsInAmtCov: number,
  ttlSMLnsInActvAmtCov: number,
  ttlChmLnsInActvAmtCov: number,
  ttlSellerLnsInActvAmtCov: number,
  ttlSMLnsInClrdAmtCov: number,
  ttlChmLnsInClrdAmtCov: number,
  ttlSellerLnsInClrdAmtCov: number,
  ttlSMLnsInBlAmtCov: number,
  ttlChmLnsInBlAmtCov: number,
  ttlSellerLnsInBlAmtCov: number,
  ttlSMLnsInTymsCov: number,
  ttlChmLnsInTymsCov: number,
  ttlSellerLnsInTymsCov: number,
  ttlSMLnsInActvTymsCov: number,
  ttlChmLnsInActvTymsCov: number,
  ttlSellerLnsInActvTymsCov: number,
  ttlSMLnsInClrdTymsCov: number,
  ttlChmLnsInClrdTymsCov: number,
  ttlSellerLnsInClrdTymsCov: number,
  ttlSMLnsInBlTymsCov: number,
  ttlChmLnsInBlTymsCov: number,
  ttlSellerLnsInBlTymsCov: number,
  ttlCompTrnsfrEarningsCov: number,
  ttlCompBLClrncEarningsCov: number,
  ttlSMLnsInAmtNonCov: number,
  ttlChmLnsInAmtNonCov: number,
  ttlSellerLnsInAmtNonCov: number,
  ttlSMLnsInActvAmtNonCov: number,
  ttlChmLnsInActvAmtNonCov: number,
  ttlSellerLnsInActvAmtNonCov: number,
  ttlSMLnsInClrdAmtNonCov: number,
  ttlChmLnsInClrdAmtNonCov: number,
  ttlSellerLnsInClrdAmtNonCov: number,
  ttlSMLnsInBlAmtNonCov: number,
  ttlChmLnsInBlAmtNonCov: number,
  ttlSellerLnsInBlAmtNonCov: number,
  ttlSMLnsInTymsNonCov: number,
  ttlChmLnsInTymsNonCov: number,
  ttlSellerLnsInTymsNonCov: number,
  ttlSMLnsInActvTymsNonCov: number,
  ttlChmLnsInActvTymsNonCov: number,
  ttlSellerLnsInActvTymsNonCov: number,
  ttlSMLnsInClrdTymsNonCov: number,
  ttlChmLnsInClrdTymsNonCov: number,
  ttlSellerLnsInClrdTymsNonCov: number,
  ttlSMLnsInBlTymsNonCov: number,
  ttlChmLnsInBlTymsNonCov: number,
  ttlSellerLnsInBlTymsNonCov: number,
  ttlCompTrnsfrEarningsNonCov: number,
  ttlCompBLClrncEarningsNonCov: number,
  ttlCompCovEarnings: number,
  maxInterestSM: number,
  maxInterestCredSllr: number,
  maxInterestGrp: number,
  totalLnsRecovered: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompanyInput = {
  AdminId: string,
  phoneContact?: string | null,
  companyEmail?: string | null,
  termsNconditions?: string | null,
  alert?: string | null,
  about?: string | null,
  policy?: string | null,
  privacy?: string | null,
  recom?: string | null,
  pw1?: string | null,
  pw2?: string | null,
  agentwithdrawalFee?: number | null,
  agentCom?: number | null,
  sagentCom?: number | null,
  companyCom?: number | null,
  AdvCom?: number | null,
  bankAdminCom?: number | null,
  sawithdrawalFee?: number | null,
  advuserwithdrawalFee?: number | null,
  bankAdmuserwithdrawalFee?: number | null,
  userLoanTransferFee?: number | null,
  userTransferFee?: number | null,
  userClearanceFee?: number | null,
  ttlNonLonssRecSM?: number | null,
  ttlNonLonssSentSM?: number | null,
  ttlNonLonssRecChm?: number | null,
  ttlNonLonssSentChm?: number | null,
  companyEarningBal?: number | null,
  companyEarning?: number | null,
  agentEarningBal?: number | null,
  agentEarning?: number | null,
  saEarningBal?: number | null,
  saEarning?: number | null,
  AdvEarningBal?: number | null,
  AdvEarning?: number | null,
  admEarningBal?: number | null,
  admEarning?: number | null,
  ttlUsrDep?: number | null,
  ttlUserWthdrwl?: number | null,
  agentFloatIn?: number | null,
  agentFloatOut?: number | null,
  ttlActiveUsers?: number | null,
  ttlInactvUsrs?: number | null,
  ttlKFNdgActv?: number | null,
  ttlKFNdgInActv?: number | null,
  ttlKNdgBLStts?: number | null,
  ttlKFKbwActv?: number | null,
  ttlKFKbwInActv?: number | null,
  ttlKKbwBLStts?: number | null,
  ttlKFAdvActv?: number | null,
  ttlKFAdvInActv?: number | null,
  ttlKAdvBLStts?: number | null,
  ttlKFAdmActv?: number | null,
  ttlKFAdmInActv?: number | null,
  ttlKAdmBLStts?: number | null,
  ttlSMLnsInAmtCov?: number | null,
  ttlChmLnsInAmtCov?: number | null,
  ttlSellerLnsInAmtCov?: number | null,
  ttlSMLnsInActvAmtCov?: number | null,
  ttlChmLnsInActvAmtCov?: number | null,
  ttlSellerLnsInActvAmtCov?: number | null,
  ttlSMLnsInClrdAmtCov?: number | null,
  ttlChmLnsInClrdAmtCov?: number | null,
  ttlSellerLnsInClrdAmtCov?: number | null,
  ttlSMLnsInBlAmtCov?: number | null,
  ttlChmLnsInBlAmtCov?: number | null,
  ttlSellerLnsInBlAmtCov?: number | null,
  ttlSMLnsInTymsCov?: number | null,
  ttlChmLnsInTymsCov?: number | null,
  ttlSellerLnsInTymsCov?: number | null,
  ttlSMLnsInActvTymsCov?: number | null,
  ttlChmLnsInActvTymsCov?: number | null,
  ttlSellerLnsInActvTymsCov?: number | null,
  ttlSMLnsInClrdTymsCov?: number | null,
  ttlChmLnsInClrdTymsCov?: number | null,
  ttlSellerLnsInClrdTymsCov?: number | null,
  ttlSMLnsInBlTymsCov?: number | null,
  ttlChmLnsInBlTymsCov?: number | null,
  ttlSellerLnsInBlTymsCov?: number | null,
  ttlCompTrnsfrEarningsCov?: number | null,
  ttlCompBLClrncEarningsCov?: number | null,
  ttlSMLnsInAmtNonCov?: number | null,
  ttlChmLnsInAmtNonCov?: number | null,
  ttlSellerLnsInAmtNonCov?: number | null,
  ttlSMLnsInActvAmtNonCov?: number | null,
  ttlChmLnsInActvAmtNonCov?: number | null,
  ttlSellerLnsInActvAmtNonCov?: number | null,
  ttlSMLnsInClrdAmtNonCov?: number | null,
  ttlChmLnsInClrdAmtNonCov?: number | null,
  ttlSellerLnsInClrdAmtNonCov?: number | null,
  ttlSMLnsInBlAmtNonCov?: number | null,
  ttlChmLnsInBlAmtNonCov?: number | null,
  ttlSellerLnsInBlAmtNonCov?: number | null,
  ttlSMLnsInTymsNonCov?: number | null,
  ttlChmLnsInTymsNonCov?: number | null,
  ttlSellerLnsInTymsNonCov?: number | null,
  ttlSMLnsInActvTymsNonCov?: number | null,
  ttlChmLnsInActvTymsNonCov?: number | null,
  ttlSellerLnsInActvTymsNonCov?: number | null,
  ttlSMLnsInClrdTymsNonCov?: number | null,
  ttlChmLnsInClrdTymsNonCov?: number | null,
  ttlSellerLnsInClrdTymsNonCov?: number | null,
  ttlSMLnsInBlTymsNonCov?: number | null,
  ttlChmLnsInBlTymsNonCov?: number | null,
  ttlSellerLnsInBlTymsNonCov?: number | null,
  ttlCompTrnsfrEarningsNonCov?: number | null,
  ttlCompBLClrncEarningsNonCov?: number | null,
  ttlCompCovEarnings?: number | null,
  maxInterestSM?: number | null,
  maxInterestCredSllr?: number | null,
  maxInterestGrp?: number | null,
  totalLnsRecovered?: number | null,
};

export type DeleteCompanyInput = {
  AdminId: string,
};

export type CreateCovCreditSellerInput = {
  id?: string | null,
  itemName: string,
  itemSerialNumber?: string | null,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountRepaid: number,
  repaymentPeriod: number,
  description?: string | null,
  status: Status,
  advregnu: string,
  owner: string,
};

export type ModelCovCreditSellerConditionInput = {
  itemName?: ModelStringInput | null,
  itemSerialNumber?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  advregnu?: ModelStringInput | null,
  and?: Array< ModelCovCreditSellerConditionInput | null > | null,
  or?: Array< ModelCovCreditSellerConditionInput | null > | null,
  not?: ModelCovCreditSellerConditionInput | null,
};

export type CovCreditSeller = {
  __typename: "CovCreditSeller",
  id: string,
  itemName: string,
  itemSerialNumber?: string | null,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountRepaid: number,
  repaymentPeriod: number,
  description?: string | null,
  status: Status,
  advregnu: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCovCreditSellerInput = {
  id: string,
  itemName?: string | null,
  itemSerialNumber?: string | null,
  buyerContact?: string | null,
  sellerContact?: string | null,
  buyerID?: string | null,
  sellerID?: string | null,
  amountSold?: number | null,
  amountexpectedBack?: number | null,
  amountRepaid?: number | null,
  repaymentPeriod?: number | null,
  description?: string | null,
  status?: Status | null,
  advregnu?: string | null,
  owner?: string | null,
};

export type DeleteCovCreditSellerInput = {
  id: string,
};

export type CreateNonCovCreditSellerInput = {
  id?: string | null,
  itemName: string,
  itemSerialNumber?: string | null,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountRepaid: number,
  repaymentPeriod: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelNonCovCreditSellerConditionInput = {
  itemName?: ModelStringInput | null,
  itemSerialNumber?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelNonCovCreditSellerConditionInput | null > | null,
  or?: Array< ModelNonCovCreditSellerConditionInput | null > | null,
  not?: ModelNonCovCreditSellerConditionInput | null,
};

export type NonCovCreditSeller = {
  __typename: "NonCovCreditSeller",
  id: string,
  itemName: string,
  itemSerialNumber?: string | null,
  buyerContact: string,
  sellerContact: string,
  buyerID: string,
  sellerID: string,
  amountSold: number,
  amountexpectedBack: number,
  amountRepaid: number,
  repaymentPeriod: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNonCovCreditSellerInput = {
  id: string,
  itemName?: string | null,
  itemSerialNumber?: string | null,
  buyerContact?: string | null,
  sellerContact?: string | null,
  buyerID?: string | null,
  sellerID?: string | null,
  amountSold?: number | null,
  amountexpectedBack?: number | null,
  amountRepaid?: number | null,
  repaymentPeriod?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteNonCovCreditSellerInput = {
  id: string,
};

export type CreateGroupInput = {
  grpContact: string,
  signitoryContact: string,
  SignitoryNatid: string,
  signitoryName: string,
  grpName: string,
  signitoryPW: string,
  grpEmail: string,
  grpBal: number,
  ttlGrpMembers: number,
  description?: string | null,
  ttlNonLonsRecChm: number,
  ttlNonLonsSentChm: number,
  ttlDpst: number,
  ttlWthdrwn: number,
  TtlActvLonsTmsLnrChmCov: number,
  TtlActvLonsAmtLnrChmCov: number,
  TtlBLLonsTmsLnrChmCov: number,
  TtlBLLonsAmtLnrChmCov: number,
  TtlClrdLonsTmsLnrChmCov: number,
  TtlClrdLonsAmtLnrChmCov: number,
  TtlActvLonsTmsLnrChmNonCov: number,
  TtlActvLonsAmtLnrChmNonCov: number,
  TtlBLLonsTmsLnrChmNonCov: number,
  TtlBLLonsAmtLnrChmNonCov: number,
  TtlClrdLonsTmsLnrChmNonCov: number,
  TtlClrdLonsAmtLnrChmNonCov: number,
  status: Status,
  owner: string,
};

export type ModelGroupConditionInput = {
  signitoryContact?: ModelStringInput | null,
  SignitoryNatid?: ModelStringInput | null,
  signitoryName?: ModelStringInput | null,
  grpName?: ModelStringInput | null,
  signitoryPW?: ModelStringInput | null,
  grpEmail?: ModelStringInput | null,
  grpBal?: ModelFloatInput | null,
  ttlGrpMembers?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  ttlNonLonsRecChm?: ModelFloatInput | null,
  ttlNonLonsSentChm?: ModelFloatInput | null,
  ttlDpst?: ModelFloatInput | null,
  ttlWthdrwn?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type Group = {
  __typename: "Group",
  grpContact: string,
  signitoryContact: string,
  SignitoryNatid: string,
  signitoryName: string,
  grpName: string,
  signitoryPW: string,
  grpEmail: string,
  grpBal: number,
  ttlGrpMembers: number,
  description?: string | null,
  ttlNonLonsRecChm: number,
  ttlNonLonsSentChm: number,
  ttlDpst: number,
  ttlWthdrwn: number,
  TtlActvLonsTmsLnrChmCov: number,
  TtlActvLonsAmtLnrChmCov: number,
  TtlBLLonsTmsLnrChmCov: number,
  TtlBLLonsAmtLnrChmCov: number,
  TtlClrdLonsTmsLnrChmCov: number,
  TtlClrdLonsAmtLnrChmCov: number,
  TtlActvLonsTmsLnrChmNonCov: number,
  TtlActvLonsAmtLnrChmNonCov: number,
  TtlBLLonsTmsLnrChmNonCov: number,
  TtlBLLonsAmtLnrChmNonCov: number,
  TtlClrdLonsTmsLnrChmNonCov: number,
  TtlClrdLonsAmtLnrChmNonCov: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  grpContact: string,
  signitoryContact?: string | null,
  SignitoryNatid?: string | null,
  signitoryName?: string | null,
  grpName?: string | null,
  signitoryPW?: string | null,
  grpEmail?: string | null,
  grpBal?: number | null,
  ttlGrpMembers?: number | null,
  description?: string | null,
  ttlNonLonsRecChm?: number | null,
  ttlNonLonsSentChm?: number | null,
  ttlDpst?: number | null,
  ttlWthdrwn?: number | null,
  TtlActvLonsTmsLnrChmCov?: number | null,
  TtlActvLonsAmtLnrChmCov?: number | null,
  TtlBLLonsTmsLnrChmCov?: number | null,
  TtlBLLonsAmtLnrChmCov?: number | null,
  TtlClrdLonsTmsLnrChmCov?: number | null,
  TtlClrdLonsAmtLnrChmCov?: number | null,
  TtlActvLonsTmsLnrChmNonCov?: number | null,
  TtlActvLonsAmtLnrChmNonCov?: number | null,
  TtlBLLonsTmsLnrChmNonCov?: number | null,
  TtlBLLonsAmtLnrChmNonCov?: number | null,
  TtlClrdLonsTmsLnrChmNonCov?: number | null,
  TtlClrdLonsAmtLnrChmNonCov?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGroupInput = {
  grpContact: string,
};

export type CreateGrpMembersInput = {
  id?: string | null,
  groupContact: string,
  memberContact: string,
  memberNatId: string,
  acBal: number,
  AcStatus: Status,
  loanStatus: Status,
  blStatus: Status,
  owner: string,
};

export type ModelGrpMembersConditionInput = {
  groupContact?: ModelStringInput | null,
  memberContact?: ModelStringInput | null,
  memberNatId?: ModelStringInput | null,
  acBal?: ModelFloatInput | null,
  AcStatus?: ModelStatusInput | null,
  loanStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  and?: Array< ModelGrpMembersConditionInput | null > | null,
  or?: Array< ModelGrpMembersConditionInput | null > | null,
  not?: ModelGrpMembersConditionInput | null,
};

export type GrpMembers = {
  __typename: "GrpMembers",
  id: string,
  groupContact: string,
  memberContact: string,
  memberNatId: string,
  acBal: number,
  AcStatus: Status,
  loanStatus: Status,
  blStatus: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGrpMembersInput = {
  id: string,
  groupContact?: string | null,
  memberContact?: string | null,
  memberNatId?: string | null,
  acBal?: number | null,
  AcStatus?: Status | null,
  loanStatus?: Status | null,
  blStatus?: Status | null,
  owner?: string | null,
};

export type DeleteGrpMembersInput = {
  id: string,
};

export type CreateCvrdGroupLoansInput = {
  id?: string | null,
  grpContact: string,
  loaneeID: string,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountRepaid: number,
  description?: string | null,
  advRegNu: string,
  status: Status,
  owner: string,
};

export type ModelCvrdGroupLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  loaneeID?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  advRegNu?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelCvrdGroupLoansConditionInput | null > | null,
  or?: Array< ModelCvrdGroupLoansConditionInput | null > | null,
  not?: ModelCvrdGroupLoansConditionInput | null,
};

export type CvrdGroupLoans = {
  __typename: "CvrdGroupLoans",
  id: string,
  grpContact: string,
  loaneeID: string,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountRepaid: number,
  description?: string | null,
  advRegNu: string,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCvrdGroupLoansInput = {
  id: string,
  grpContact?: string | null,
  loaneeID?: string | null,
  repaymentPeriod?: number | null,
  amountGiven?: number | null,
  amountExpectedBack?: number | null,
  amountRepaid?: number | null,
  description?: string | null,
  advRegNu?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteCvrdGroupLoansInput = {
  id: string,
};

export type CreateNonCvrdGroupLoansInput = {
  id?: string | null,
  grpContact: string,
  loaneeID: string,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountRepaid: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelNonCvrdGroupLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  loaneeID?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelNonCvrdGroupLoansConditionInput | null > | null,
  or?: Array< ModelNonCvrdGroupLoansConditionInput | null > | null,
  not?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type NonCvrdGroupLoans = {
  __typename: "NonCvrdGroupLoans",
  id: string,
  grpContact: string,
  loaneeID: string,
  repaymentPeriod: number,
  amountGiven: number,
  amountExpectedBack: number,
  amountRepaid: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNonCvrdGroupLoansInput = {
  id: string,
  grpContact?: string | null,
  loaneeID?: string | null,
  repaymentPeriod?: number | null,
  amountGiven?: number | null,
  amountExpectedBack?: number | null,
  amountRepaid?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteNonCvrdGroupLoansInput = {
  id: string,
};

export type CreateGroupNonLoansInput = {
  id?: string | null,
  grpContact: string,
  recipientId: string,
  amountSent: number,
  description?: string | null,
  status: Status,
  owner: string,
};

export type ModelGroupNonLoansConditionInput = {
  grpContact?: ModelStringInput | null,
  recipientId?: ModelStringInput | null,
  amountSent?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGroupNonLoansConditionInput | null > | null,
  or?: Array< ModelGroupNonLoansConditionInput | null > | null,
  not?: ModelGroupNonLoansConditionInput | null,
};

export type GroupNonLoans = {
  __typename: "GroupNonLoans",
  id: string,
  grpContact: string,
  recipientId: string,
  amountSent: number,
  description?: string | null,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupNonLoansInput = {
  id: string,
  grpContact?: string | null,
  recipientId?: string | null,
  amountSent?: number | null,
  description?: string | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGroupNonLoansInput = {
  id: string,
};

export type CreateGrpMembersContributionInput = {
  id?: string | null,
  memberId: string,
  grpContact: string,
  contriAmount: number,
  status: Status,
  owner: string,
};

export type ModelGrpMembersContributionConditionInput = {
  memberId?: ModelStringInput | null,
  grpContact?: ModelStringInput | null,
  contriAmount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelGrpMembersContributionConditionInput | null > | null,
  or?: Array< ModelGrpMembersContributionConditionInput | null > | null,
  not?: ModelGrpMembersContributionConditionInput | null,
};

export type GrpMembersContribution = {
  __typename: "GrpMembersContribution",
  id: string,
  memberId: string,
  grpContact: string,
  contriAmount: number,
  status: Status,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGrpMembersContributionInput = {
  id: string,
  memberId?: string | null,
  grpContact?: string | null,
  contriAmount?: number | null,
  status?: Status | null,
  owner?: string | null,
};

export type DeleteGrpMembersContributionInput = {
  id: string,
};

export type ModelSMAccountFilterInput = {
  nationalid?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  awsemail?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  loanAcceptanceCode?: ModelStringInput | null,
  ttlDpstSM?: ModelFloatInput | null,
  TtlWthdrwnSM?: ModelFloatInput | null,
  TtlActvLonsTmsLnrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLneeChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLneeChmNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsByrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtSllrNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtByrNonCov?: ModelFloatInput | null,
  ttlNonLonsRecSM?: ModelFloatInput | null,
  ttlNonLonsSentSM?: ModelFloatInput | null,
  MaxTymsBL?: ModelFloatInput | null,
  loanStatus?: ModelStatusInput | null,
  acStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  loanLimit?: ModelFloatInput | null,
  nonLonLimit?: ModelFloatInput | null,
  withdrawalLimit?: ModelFloatInput | null,
  depositLimit?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSMAccountFilterInput | null > | null,
  or?: Array< ModelSMAccountFilterInput | null > | null,
  not?: ModelSMAccountFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSMAccountConnection = {
  __typename: "ModelSMAccountConnection",
  items?:  Array<SMAccount | null > | null,
  nextToken?: string | null,
};

export type ModelSMLoansCoveredFilterInput = {
  id?: ModelIDInput | null,
  loaneeid?: ModelStringInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  advregnu?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSMLoansCoveredFilterInput | null > | null,
  or?: Array< ModelSMLoansCoveredFilterInput | null > | null,
  not?: ModelSMLoansCoveredFilterInput | null,
};

export type ModelSMLoansCoveredConnection = {
  __typename: "ModelSMLoansCoveredConnection",
  items?:  Array<SMLoansCovered | null > | null,
  nextToken?: string | null,
};

export type ModelSMLoansNonCoveredFilterInput = {
  id?: ModelIDInput | null,
  loaneeid?: ModelIDInput | null,
  loanerId?: ModelStringInput | null,
  amountgiven?: ModelFloatInput | null,
  amountexpected?: ModelFloatInput | null,
  amountrepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSMLoansNonCoveredFilterInput | null > | null,
  or?: Array< ModelSMLoansNonCoveredFilterInput | null > | null,
  not?: ModelSMLoansNonCoveredFilterInput | null,
};

export type ModelSMLoansNonCoveredConnection = {
  __typename: "ModelSMLoansNonCoveredConnection",
  items?:  Array<SMLoansNonCovered | null > | null,
  nextToken?: string | null,
};

export type ModelNonLoansFilterInput = {
  id?: ModelIDInput | null,
  senderID?: ModelStringInput | null,
  recId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNonLoansFilterInput | null > | null,
  or?: Array< ModelNonLoansFilterInput | null > | null,
  not?: ModelNonLoansFilterInput | null,
};

export type ModelNonLoansConnection = {
  __typename: "ModelNonLoansConnection",
  items?:  Array<NonLoans | null > | null,
  nextToken?: string | null,
};

export type ModelAgentFilterInput = {
  phonecontact?: ModelIDInput | null,
  nationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ttlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sagentregno?: ModelStringInput | null,
  TtlFltIn?: ModelFloatInput | null,
  TtlFltOut?: ModelFloatInput | null,
  floatBal?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAgentFilterInput | null > | null,
  or?: Array< ModelAgentFilterInput | null > | null,
  not?: ModelAgentFilterInput | null,
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection",
  items?:  Array<Agent | null > | null,
  nextToken?: string | null,
};

export type ModelFloatPurchaseFilterInput = {
  id?: ModelIDInput | null,
  agentphone?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  transactId?: ModelStringInput | null,
  bankAdminID?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFloatPurchaseFilterInput | null > | null,
  or?: Array< ModelFloatPurchaseFilterInput | null > | null,
  not?: ModelFloatPurchaseFilterInput | null,
};

export type ModelFloatPurchaseConnection = {
  __typename: "ModelFloatPurchaseConnection",
  items?:  Array<FloatPurchase | null > | null,
  nextToken?: string | null,
};

export type ModelFloatAddFilterInput = {
  id?: ModelIDInput | null,
  withdrawerid?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  agentPhonecontact?: ModelStringInput | null,
  sagentId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFloatAddFilterInput | null > | null,
  or?: Array< ModelFloatAddFilterInput | null > | null,
  not?: ModelFloatAddFilterInput | null,
};

export type ModelFloatAddConnection = {
  __typename: "ModelFloatAddConnection",
  items?:  Array<FloatAdd | null > | null,
  nextToken?: string | null,
};

export type ModelFloatReductionFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  depositerid?: ModelStringInput | null,
  agContact?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelFloatReductionFilterInput | null > | null,
  or?: Array< ModelFloatReductionFilterInput | null > | null,
  not?: ModelFloatReductionFilterInput | null,
};

export type ModelFloatReductionConnection = {
  __typename: "ModelFloatReductionConnection",
  items?:  Array<FloatReduction | null > | null,
  nextToken?: string | null,
};

export type ModelAgentWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  agentPhone?: ModelStringInput | null,
  bankAdminId?: ModelStringInput | null,
  Amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAgentWithdrawalsFilterInput | null > | null,
  or?: Array< ModelAgentWithdrawalsFilterInput | null > | null,
  not?: ModelAgentWithdrawalsFilterInput | null,
};

export type ModelAgentWithdrawalsConnection = {
  __typename: "ModelAgentWithdrawalsConnection",
  items?:  Array<AgentWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelSAgentFilterInput = {
  id?: ModelIDInput | null,
  saNationalid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  pw?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  actvMFNdog?: ModelFloatInput | null,
  InctvMFNdog?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  saBalance?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSAgentFilterInput | null > | null,
  or?: Array< ModelSAgentFilterInput | null > | null,
  not?: ModelSAgentFilterInput | null,
};

export type ModelSAgentConnection = {
  __typename: "ModelSAgentConnection",
  items?:  Array<SAgent | null > | null,
  nextToken?: string | null,
};

export type ModelSAgentWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  saId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  bankAdmnId?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSAgentWithdrawalsFilterInput | null > | null,
  or?: Array< ModelSAgentWithdrawalsFilterInput | null > | null,
  not?: ModelSAgentWithdrawalsFilterInput | null,
};

export type ModelSAgentWithdrawalsConnection = {
  __typename: "ModelSAgentWithdrawalsConnection",
  items?:  Array<SAgentWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelBankAdminFilterInput = {
  nationalid?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  pw?: ModelStringInput | null,
  BankAdmBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBankAdminFilterInput | null > | null,
  or?: Array< ModelBankAdminFilterInput | null > | null,
  not?: ModelBankAdminFilterInput | null,
};

export type ModelBankAdminConnection = {
  __typename: "ModelBankAdminConnection",
  items?:  Array<BankAdmin | null > | null,
  nextToken?: string | null,
};

export type ModelBankAdmWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  bankAdmNatId?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBankAdmWithdrawalsFilterInput | null > | null,
  or?: Array< ModelBankAdmWithdrawalsFilterInput | null > | null,
  not?: ModelBankAdmWithdrawalsFilterInput | null,
};

export type ModelBankAdmWithdrawalsConnection = {
  __typename: "ModelBankAdmWithdrawalsConnection",
  items?:  Array<BankAdmWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelAdvocateFilterInput = {
  advregnu?: ModelIDInput | null,
  nationalid?: ModelStringInput | null,
  pwd?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phonecontact?: ModelStringInput | null,
  TtlEarnings?: ModelFloatInput | null,
  advBal?: ModelFloatInput | null,
  email?: ModelStringInput | null,
  officeLoc?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAdvocateFilterInput | null > | null,
  or?: Array< ModelAdvocateFilterInput | null > | null,
  not?: ModelAdvocateFilterInput | null,
};

export type ModelAdvocateConnection = {
  __typename: "ModelAdvocateConnection",
  items?:  Array<Advocate | null > | null,
  nextToken?: string | null,
};

export type ModelAdvocateWithdrawalsFilterInput = {
  id?: ModelIDInput | null,
  bankAdmnId?: ModelStringInput | null,
  advregnu?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAdvocateWithdrawalsFilterInput | null > | null,
  or?: Array< ModelAdvocateWithdrawalsFilterInput | null > | null,
  not?: ModelAdvocateWithdrawalsFilterInput | null,
};

export type ModelAdvocateWithdrawalsConnection = {
  __typename: "ModelAdvocateWithdrawalsConnection",
  items?:  Array<AdvocateWithdrawals | null > | null,
  nextToken?: string | null,
};

export type ModelCompanyFilterInput = {
  AdminId?: ModelStringInput | null,
  phoneContact?: ModelStringInput | null,
  companyEmail?: ModelStringInput | null,
  termsNconditions?: ModelStringInput | null,
  alert?: ModelStringInput | null,
  about?: ModelStringInput | null,
  policy?: ModelStringInput | null,
  privacy?: ModelStringInput | null,
  recom?: ModelStringInput | null,
  pw1?: ModelStringInput | null,
  pw2?: ModelStringInput | null,
  agentwithdrawalFee?: ModelFloatInput | null,
  agentCom?: ModelFloatInput | null,
  sagentCom?: ModelFloatInput | null,
  companyCom?: ModelFloatInput | null,
  AdvCom?: ModelFloatInput | null,
  bankAdminCom?: ModelFloatInput | null,
  sawithdrawalFee?: ModelFloatInput | null,
  advuserwithdrawalFee?: ModelFloatInput | null,
  bankAdmuserwithdrawalFee?: ModelFloatInput | null,
  userLoanTransferFee?: ModelFloatInput | null,
  userTransferFee?: ModelFloatInput | null,
  userClearanceFee?: ModelFloatInput | null,
  ttlNonLonssRecSM?: ModelFloatInput | null,
  ttlNonLonssSentSM?: ModelFloatInput | null,
  ttlNonLonssRecChm?: ModelFloatInput | null,
  ttlNonLonssSentChm?: ModelFloatInput | null,
  companyEarningBal?: ModelFloatInput | null,
  companyEarning?: ModelFloatInput | null,
  agentEarningBal?: ModelFloatInput | null,
  agentEarning?: ModelFloatInput | null,
  saEarningBal?: ModelFloatInput | null,
  saEarning?: ModelFloatInput | null,
  AdvEarningBal?: ModelFloatInput | null,
  AdvEarning?: ModelFloatInput | null,
  admEarningBal?: ModelFloatInput | null,
  admEarning?: ModelFloatInput | null,
  ttlUsrDep?: ModelFloatInput | null,
  ttlUserWthdrwl?: ModelFloatInput | null,
  agentFloatIn?: ModelFloatInput | null,
  agentFloatOut?: ModelFloatInput | null,
  ttlActiveUsers?: ModelFloatInput | null,
  ttlInactvUsrs?: ModelFloatInput | null,
  ttlKFNdgActv?: ModelFloatInput | null,
  ttlKFNdgInActv?: ModelFloatInput | null,
  ttlKNdgBLStts?: ModelFloatInput | null,
  ttlKFKbwActv?: ModelFloatInput | null,
  ttlKFKbwInActv?: ModelFloatInput | null,
  ttlKKbwBLStts?: ModelFloatInput | null,
  ttlKFAdvActv?: ModelFloatInput | null,
  ttlKFAdvInActv?: ModelFloatInput | null,
  ttlKAdvBLStts?: ModelFloatInput | null,
  ttlKFAdmActv?: ModelFloatInput | null,
  ttlKFAdmInActv?: ModelFloatInput | null,
  ttlKAdmBLStts?: ModelFloatInput | null,
  ttlSMLnsInAmtCov?: ModelFloatInput | null,
  ttlChmLnsInAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtCov?: ModelFloatInput | null,
  ttlSMLnsInTymsCov?: ModelFloatInput | null,
  ttlChmLnsInTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsCov?: ModelFloatInput | null,
  ttlSMLnsInAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlAmtNonCov?: ModelFloatInput | null,
  ttlSMLnsInTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInActvTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInClrdTymsNonCov?: ModelFloatInput | null,
  ttlSMLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlChmLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlSellerLnsInBlTymsNonCov?: ModelFloatInput | null,
  ttlCompTrnsfrEarningsNonCov?: ModelFloatInput | null,
  ttlCompBLClrncEarningsNonCov?: ModelFloatInput | null,
  ttlCompCovEarnings?: ModelFloatInput | null,
  maxInterestSM?: ModelFloatInput | null,
  maxInterestCredSllr?: ModelFloatInput | null,
  maxInterestGrp?: ModelFloatInput | null,
  totalLnsRecovered?: ModelFloatInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items?:  Array<Company | null > | null,
  nextToken?: string | null,
};

export type ModelCovCreditSellerFilterInput = {
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  itemSerialNumber?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  advregnu?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCovCreditSellerFilterInput | null > | null,
  or?: Array< ModelCovCreditSellerFilterInput | null > | null,
  not?: ModelCovCreditSellerFilterInput | null,
};

export type ModelCovCreditSellerConnection = {
  __typename: "ModelCovCreditSellerConnection",
  items?:  Array<CovCreditSeller | null > | null,
  nextToken?: string | null,
};

export type ModelNonCovCreditSellerFilterInput = {
  id?: ModelIDInput | null,
  itemName?: ModelStringInput | null,
  itemSerialNumber?: ModelStringInput | null,
  buyerContact?: ModelStringInput | null,
  sellerContact?: ModelStringInput | null,
  buyerID?: ModelStringInput | null,
  sellerID?: ModelStringInput | null,
  amountSold?: ModelFloatInput | null,
  amountexpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  repaymentPeriod?: ModelIntInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNonCovCreditSellerFilterInput | null > | null,
  or?: Array< ModelNonCovCreditSellerFilterInput | null > | null,
  not?: ModelNonCovCreditSellerFilterInput | null,
};

export type ModelNonCovCreditSellerConnection = {
  __typename: "ModelNonCovCreditSellerConnection",
  items?:  Array<NonCovCreditSeller | null > | null,
  nextToken?: string | null,
};

export type ModelGroupFilterInput = {
  grpContact?: ModelIDInput | null,
  signitoryContact?: ModelStringInput | null,
  SignitoryNatid?: ModelStringInput | null,
  signitoryName?: ModelStringInput | null,
  grpName?: ModelStringInput | null,
  signitoryPW?: ModelStringInput | null,
  grpEmail?: ModelStringInput | null,
  grpBal?: ModelFloatInput | null,
  ttlGrpMembers?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  ttlNonLonsRecChm?: ModelFloatInput | null,
  ttlNonLonsSentChm?: ModelFloatInput | null,
  ttlDpst?: ModelFloatInput | null,
  ttlWthdrwn?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmCov?: ModelFloatInput | null,
  TtlActvLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlActvLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlBLLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsTmsLnrChmNonCov?: ModelFloatInput | null,
  TtlClrdLonsAmtLnrChmNonCov?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items?:  Array<Group | null > | null,
  nextToken?: string | null,
};

export type ModelGrpMembersFilterInput = {
  id?: ModelIDInput | null,
  groupContact?: ModelStringInput | null,
  memberContact?: ModelStringInput | null,
  memberNatId?: ModelStringInput | null,
  acBal?: ModelFloatInput | null,
  AcStatus?: ModelStatusInput | null,
  loanStatus?: ModelStatusInput | null,
  blStatus?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGrpMembersFilterInput | null > | null,
  or?: Array< ModelGrpMembersFilterInput | null > | null,
  not?: ModelGrpMembersFilterInput | null,
};

export type ModelGrpMembersConnection = {
  __typename: "ModelGrpMembersConnection",
  items?:  Array<GrpMembers | null > | null,
  nextToken?: string | null,
};

export type ModelCvrdGroupLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  loaneeID?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  advRegNu?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCvrdGroupLoansFilterInput | null > | null,
  or?: Array< ModelCvrdGroupLoansFilterInput | null > | null,
  not?: ModelCvrdGroupLoansFilterInput | null,
};

export type ModelCvrdGroupLoansConnection = {
  __typename: "ModelCvrdGroupLoansConnection",
  items?:  Array<CvrdGroupLoans | null > | null,
  nextToken?: string | null,
};

export type ModelNonCvrdGroupLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  loaneeID?: ModelStringInput | null,
  repaymentPeriod?: ModelIntInput | null,
  amountGiven?: ModelFloatInput | null,
  amountExpectedBack?: ModelFloatInput | null,
  amountRepaid?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNonCvrdGroupLoansFilterInput | null > | null,
  or?: Array< ModelNonCvrdGroupLoansFilterInput | null > | null,
  not?: ModelNonCvrdGroupLoansFilterInput | null,
};

export type ModelNonCvrdGroupLoansConnection = {
  __typename: "ModelNonCvrdGroupLoansConnection",
  items?:  Array<NonCvrdGroupLoans | null > | null,
  nextToken?: string | null,
};

export type ModelGroupNonLoansFilterInput = {
  id?: ModelIDInput | null,
  grpContact?: ModelStringInput | null,
  recipientId?: ModelStringInput | null,
  amountSent?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGroupNonLoansFilterInput | null > | null,
  or?: Array< ModelGroupNonLoansFilterInput | null > | null,
  not?: ModelGroupNonLoansFilterInput | null,
};

export type ModelGroupNonLoansConnection = {
  __typename: "ModelGroupNonLoansConnection",
  items?:  Array<GroupNonLoans | null > | null,
  nextToken?: string | null,
};

export type ModelGrpMembersContributionFilterInput = {
  id?: ModelIDInput | null,
  memberId?: ModelStringInput | null,
  grpContact?: ModelStringInput | null,
  contriAmount?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelGrpMembersContributionFilterInput | null > | null,
  or?: Array< ModelGrpMembersContributionFilterInput | null > | null,
  not?: ModelGrpMembersContributionFilterInput | null,
};

export type ModelGrpMembersContributionConnection = {
  __typename: "ModelGrpMembersContributionConnection",
  items?:  Array<GrpMembersContribution | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyConditionInput = {
  eq?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  le?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  lt?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  ge?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  gt?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
  between?: Array< ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null > | null,
  beginsWith?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput | null,
};

export type ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyInput = {
  loaneeid?: string | null,
  status?: Status | null,
};

export type ModelSMLoansCoveredSearchAdvLoanerCompositeKeyConditionInput = {
  eq?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null,
  le?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null,
  lt?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null,
  ge?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null,
  gt?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null,
  between?: Array< ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null > | null,
  beginsWith?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput | null,
};

export type ModelSMLoansCoveredSearchAdvLoanerCompositeKeyInput = {
  loanerId?: string | null,
  loaneeid?: string | null,
};

export type ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyConditionInput = {
  eq?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null,
  le?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null,
  lt?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null,
  ge?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null,
  gt?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null,
  between?: Array< ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null > | null,
  beginsWith?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput | null,
};

export type ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyInput = {
  loaneeid?: string | null,
  status?: Status | null,
};

export type ModelCovCreditSellerSearchAdvCredSllrCompositeKeyConditionInput = {
  eq?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  le?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  lt?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  ge?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  gt?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
  between?: Array< ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null > | null,
  beginsWith?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput | null,
};

export type ModelCovCreditSellerSearchAdvCredSllrCompositeKeyInput = {
  sellerContact?: string | null,
  buyerContact?: string | null,
};

export type ModelCvrdGroupLoansSearchAdvGrpCompositeKeyConditionInput = {
  eq?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null,
  le?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null,
  lt?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null,
  ge?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null,
  gt?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null,
  between?: Array< ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null > | null,
  beginsWith?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput | null,
};

export type ModelCvrdGroupLoansSearchAdvGrpCompositeKeyInput = {
  grpContact?: string | null,
  loaneeID?: string | null,
};

export type CreateSMAccountMutationVariables = {
  input: CreateSMAccountInput,
  condition?: ModelSMAccountConditionInput | null,
};

export type CreateSMAccountMutation = {
  createSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMAccountMutationVariables = {
  input: UpdateSMAccountInput,
  condition?: ModelSMAccountConditionInput | null,
};

export type UpdateSMAccountMutation = {
  updateSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMAccountMutationVariables = {
  input: DeleteSMAccountInput,
  condition?: ModelSMAccountConditionInput | null,
};

export type DeleteSMAccountMutation = {
  deleteSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSMLoansCoveredMutationVariables = {
  input: CreateSMLoansCoveredInput,
  condition?: ModelSMLoansCoveredConditionInput | null,
};

export type CreateSMLoansCoveredMutation = {
  createSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMLoansCoveredMutationVariables = {
  input: UpdateSMLoansCoveredInput,
  condition?: ModelSMLoansCoveredConditionInput | null,
};

export type UpdateSMLoansCoveredMutation = {
  updateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMLoansCoveredMutationVariables = {
  input: DeleteSMLoansCoveredInput,
  condition?: ModelSMLoansCoveredConditionInput | null,
};

export type DeleteSMLoansCoveredMutation = {
  deleteSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSMLoansNonCoveredMutationVariables = {
  input: CreateSMLoansNonCoveredInput,
  condition?: ModelSMLoansNonCoveredConditionInput | null,
};

export type CreateSMLoansNonCoveredMutation = {
  createSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSMLoansNonCoveredMutationVariables = {
  input: UpdateSMLoansNonCoveredInput,
  condition?: ModelSMLoansNonCoveredConditionInput | null,
};

export type UpdateSMLoansNonCoveredMutation = {
  updateSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSMLoansNonCoveredMutationVariables = {
  input: DeleteSMLoansNonCoveredInput,
  condition?: ModelSMLoansNonCoveredConditionInput | null,
};

export type DeleteSMLoansNonCoveredMutation = {
  deleteSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNonLoansMutationVariables = {
  input: CreateNonLoansInput,
  condition?: ModelNonLoansConditionInput | null,
};

export type CreateNonLoansMutation = {
  createNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNonLoansMutationVariables = {
  input: UpdateNonLoansInput,
  condition?: ModelNonLoansConditionInput | null,
};

export type UpdateNonLoansMutation = {
  updateNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNonLoansMutationVariables = {
  input: DeleteNonLoansInput,
  condition?: ModelNonLoansConditionInput | null,
};

export type DeleteNonLoansMutation = {
  deleteNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAgentMutationVariables = {
  input: CreateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type CreateAgentMutation = {
  createAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgentMutationVariables = {
  input: UpdateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type UpdateAgentMutation = {
  updateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgentMutationVariables = {
  input: DeleteAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type DeleteAgentMutation = {
  deleteAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFloatPurchaseMutationVariables = {
  input: CreateFloatPurchaseInput,
  condition?: ModelFloatPurchaseConditionInput | null,
};

export type CreateFloatPurchaseMutation = {
  createFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFloatPurchaseMutationVariables = {
  input: UpdateFloatPurchaseInput,
  condition?: ModelFloatPurchaseConditionInput | null,
};

export type UpdateFloatPurchaseMutation = {
  updateFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFloatPurchaseMutationVariables = {
  input: DeleteFloatPurchaseInput,
  condition?: ModelFloatPurchaseConditionInput | null,
};

export type DeleteFloatPurchaseMutation = {
  deleteFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFloatAddMutationVariables = {
  input: CreateFloatAddInput,
  condition?: ModelFloatAddConditionInput | null,
};

export type CreateFloatAddMutation = {
  createFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFloatAddMutationVariables = {
  input: UpdateFloatAddInput,
  condition?: ModelFloatAddConditionInput | null,
};

export type UpdateFloatAddMutation = {
  updateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFloatAddMutationVariables = {
  input: DeleteFloatAddInput,
  condition?: ModelFloatAddConditionInput | null,
};

export type DeleteFloatAddMutation = {
  deleteFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFloatReductionMutationVariables = {
  input: CreateFloatReductionInput,
  condition?: ModelFloatReductionConditionInput | null,
};

export type CreateFloatReductionMutation = {
  createFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFloatReductionMutationVariables = {
  input: UpdateFloatReductionInput,
  condition?: ModelFloatReductionConditionInput | null,
};

export type UpdateFloatReductionMutation = {
  updateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFloatReductionMutationVariables = {
  input: DeleteFloatReductionInput,
  condition?: ModelFloatReductionConditionInput | null,
};

export type DeleteFloatReductionMutation = {
  deleteFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAgentWithdrawalsMutationVariables = {
  input: CreateAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type CreateAgentWithdrawalsMutation = {
  createAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgentWithdrawalsMutationVariables = {
  input: UpdateAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type UpdateAgentWithdrawalsMutation = {
  updateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgentWithdrawalsMutationVariables = {
  input: DeleteAgentWithdrawalsInput,
  condition?: ModelAgentWithdrawalsConditionInput | null,
};

export type DeleteAgentWithdrawalsMutation = {
  deleteAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSAgentMutationVariables = {
  input: CreateSAgentInput,
  condition?: ModelSAgentConditionInput | null,
};

export type CreateSAgentMutation = {
  createSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSAgentMutationVariables = {
  input: UpdateSAgentInput,
  condition?: ModelSAgentConditionInput | null,
};

export type UpdateSAgentMutation = {
  updateSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSAgentMutationVariables = {
  input: DeleteSAgentInput,
  condition?: ModelSAgentConditionInput | null,
};

export type DeleteSAgentMutation = {
  deleteSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSAgentWithdrawalsMutationVariables = {
  input: CreateSAgentWithdrawalsInput,
  condition?: ModelSAgentWithdrawalsConditionInput | null,
};

export type CreateSAgentWithdrawalsMutation = {
  createSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSAgentWithdrawalsMutationVariables = {
  input: UpdateSAgentWithdrawalsInput,
  condition?: ModelSAgentWithdrawalsConditionInput | null,
};

export type UpdateSAgentWithdrawalsMutation = {
  updateSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSAgentWithdrawalsMutationVariables = {
  input: DeleteSAgentWithdrawalsInput,
  condition?: ModelSAgentWithdrawalsConditionInput | null,
};

export type DeleteSAgentWithdrawalsMutation = {
  deleteSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBankAdminMutationVariables = {
  input: CreateBankAdminInput,
  condition?: ModelBankAdminConditionInput | null,
};

export type CreateBankAdminMutation = {
  createBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBankAdminMutationVariables = {
  input: UpdateBankAdminInput,
  condition?: ModelBankAdminConditionInput | null,
};

export type UpdateBankAdminMutation = {
  updateBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBankAdminMutationVariables = {
  input: DeleteBankAdminInput,
  condition?: ModelBankAdminConditionInput | null,
};

export type DeleteBankAdminMutation = {
  deleteBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBankAdmWithdrawalsMutationVariables = {
  input: CreateBankAdmWithdrawalsInput,
  condition?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type CreateBankAdmWithdrawalsMutation = {
  createBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBankAdmWithdrawalsMutationVariables = {
  input: UpdateBankAdmWithdrawalsInput,
  condition?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type UpdateBankAdmWithdrawalsMutation = {
  updateBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBankAdmWithdrawalsMutationVariables = {
  input: DeleteBankAdmWithdrawalsInput,
  condition?: ModelBankAdmWithdrawalsConditionInput | null,
};

export type DeleteBankAdmWithdrawalsMutation = {
  deleteBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdvocateMutationVariables = {
  input: CreateAdvocateInput,
  condition?: ModelAdvocateConditionInput | null,
};

export type CreateAdvocateMutation = {
  createAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdvocateMutationVariables = {
  input: UpdateAdvocateInput,
  condition?: ModelAdvocateConditionInput | null,
};

export type UpdateAdvocateMutation = {
  updateAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdvocateMutationVariables = {
  input: DeleteAdvocateInput,
  condition?: ModelAdvocateConditionInput | null,
};

export type DeleteAdvocateMutation = {
  deleteAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdvocateWithdrawalsMutationVariables = {
  input: CreateAdvocateWithdrawalsInput,
  condition?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type CreateAdvocateWithdrawalsMutation = {
  createAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdvocateWithdrawalsMutationVariables = {
  input: UpdateAdvocateWithdrawalsInput,
  condition?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type UpdateAdvocateWithdrawalsMutation = {
  updateAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdvocateWithdrawalsMutationVariables = {
  input: DeleteAdvocateWithdrawalsInput,
  condition?: ModelAdvocateWithdrawalsConditionInput | null,
};

export type DeleteAdvocateWithdrawalsMutation = {
  deleteAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCovCreditSellerMutationVariables = {
  input: CreateCovCreditSellerInput,
  condition?: ModelCovCreditSellerConditionInput | null,
};

export type CreateCovCreditSellerMutation = {
  createCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCovCreditSellerMutationVariables = {
  input: UpdateCovCreditSellerInput,
  condition?: ModelCovCreditSellerConditionInput | null,
};

export type UpdateCovCreditSellerMutation = {
  updateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCovCreditSellerMutationVariables = {
  input: DeleteCovCreditSellerInput,
  condition?: ModelCovCreditSellerConditionInput | null,
};

export type DeleteCovCreditSellerMutation = {
  deleteCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNonCovCreditSellerMutationVariables = {
  input: CreateNonCovCreditSellerInput,
  condition?: ModelNonCovCreditSellerConditionInput | null,
};

export type CreateNonCovCreditSellerMutation = {
  createNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNonCovCreditSellerMutationVariables = {
  input: UpdateNonCovCreditSellerInput,
  condition?: ModelNonCovCreditSellerConditionInput | null,
};

export type UpdateNonCovCreditSellerMutation = {
  updateNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNonCovCreditSellerMutationVariables = {
  input: DeleteNonCovCreditSellerInput,
  condition?: ModelNonCovCreditSellerConditionInput | null,
};

export type DeleteNonCovCreditSellerMutation = {
  deleteNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGrpMembersMutationVariables = {
  input: CreateGrpMembersInput,
  condition?: ModelGrpMembersConditionInput | null,
};

export type CreateGrpMembersMutation = {
  createGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGrpMembersMutationVariables = {
  input: UpdateGrpMembersInput,
  condition?: ModelGrpMembersConditionInput | null,
};

export type UpdateGrpMembersMutation = {
  updateGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGrpMembersMutationVariables = {
  input: DeleteGrpMembersInput,
  condition?: ModelGrpMembersConditionInput | null,
};

export type DeleteGrpMembersMutation = {
  deleteGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCvrdGroupLoansMutationVariables = {
  input: CreateCvrdGroupLoansInput,
  condition?: ModelCvrdGroupLoansConditionInput | null,
};

export type CreateCvrdGroupLoansMutation = {
  createCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCvrdGroupLoansMutationVariables = {
  input: UpdateCvrdGroupLoansInput,
  condition?: ModelCvrdGroupLoansConditionInput | null,
};

export type UpdateCvrdGroupLoansMutation = {
  updateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCvrdGroupLoansMutationVariables = {
  input: DeleteCvrdGroupLoansInput,
  condition?: ModelCvrdGroupLoansConditionInput | null,
};

export type DeleteCvrdGroupLoansMutation = {
  deleteCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNonCvrdGroupLoansMutationVariables = {
  input: CreateNonCvrdGroupLoansInput,
  condition?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type CreateNonCvrdGroupLoansMutation = {
  createNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNonCvrdGroupLoansMutationVariables = {
  input: UpdateNonCvrdGroupLoansInput,
  condition?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type UpdateNonCvrdGroupLoansMutation = {
  updateNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNonCvrdGroupLoansMutationVariables = {
  input: DeleteNonCvrdGroupLoansInput,
  condition?: ModelNonCvrdGroupLoansConditionInput | null,
};

export type DeleteNonCvrdGroupLoansMutation = {
  deleteNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupNonLoansMutationVariables = {
  input: CreateGroupNonLoansInput,
  condition?: ModelGroupNonLoansConditionInput | null,
};

export type CreateGroupNonLoansMutation = {
  createGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupNonLoansMutationVariables = {
  input: UpdateGroupNonLoansInput,
  condition?: ModelGroupNonLoansConditionInput | null,
};

export type UpdateGroupNonLoansMutation = {
  updateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupNonLoansMutationVariables = {
  input: DeleteGroupNonLoansInput,
  condition?: ModelGroupNonLoansConditionInput | null,
};

export type DeleteGroupNonLoansMutation = {
  deleteGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGrpMembersContributionMutationVariables = {
  input: CreateGrpMembersContributionInput,
  condition?: ModelGrpMembersContributionConditionInput | null,
};

export type CreateGrpMembersContributionMutation = {
  createGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGrpMembersContributionMutationVariables = {
  input: UpdateGrpMembersContributionInput,
  condition?: ModelGrpMembersContributionConditionInput | null,
};

export type UpdateGrpMembersContributionMutation = {
  updateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGrpMembersContributionMutationVariables = {
  input: DeleteGrpMembersContributionInput,
  condition?: ModelGrpMembersContributionConditionInput | null,
};

export type DeleteGrpMembersContributionMutation = {
  deleteGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSMAccountQueryVariables = {
  nationalid: string,
};

export type GetSMAccountQuery = {
  getSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMAccountsQueryVariables = {
  nationalid?: string | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSMAccountsQuery = {
  listSMAccounts?:  {
    __typename: "ModelSMAccountConnection",
    items?:  Array< {
      __typename: "SMAccount",
      nationalid: string,
      name: string,
      phonecontact: string,
      awsemail: string,
      balance: number,
      pw: string,
      loanAcceptanceCode: string,
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      TtlActvLonsTmsLnrCov: number,
      TtlActvLonsTmsLneeCov: number,
      TtlActvLonsAmtLnrCov: number,
      TtlActvLonsAmtLneeCov: number,
      TtlBLLonsTmsLnrCov: number,
      TtlBLLonsTmsLneeCov: number,
      TtlBLLonsAmtLnrCov: number,
      TtlBLLonsAmtLneeCov: number,
      TtlClrdLonsTmsLnrCov: number,
      TtlClrdLonsTmsLneeCov: number,
      TtlClrdLonsAmtLnrCov: number,
      TtlClrdLonsAmtLneeCov: number,
      TtlActvLonsTmsLneeChmCov: number,
      TtlActvLonsAmtLneeChmCov: number,
      TtlBLLonsTmsLneeChmCov: number,
      TtlBLLonsAmtLneeChmCov: number,
      TtlClrdLonsTmsLneeChmCov: number,
      TtlClrdLonsAmtLneeChmCov: number,
      TtlActvLonsTmsSllrCov: number,
      TtlActvLonsTmsByrCov: number,
      TtlActvLonsAmtSllrCov: number,
      TtlActvLonsAmtByrCov: number,
      TtlBLLonsTmsSllrCov: number,
      TtlBLLonsTmsByrCov: number,
      TtlBLLonsAmtSllrCov: number,
      TtlBLLonsAmtByrCov: number,
      TtlClrdLonsTmsSllrCov: number,
      TtlClrdLonsTmsByrCov: number,
      TtlClrdLonsAmtSllrCov: number,
      TtlClrdLonsAmtByrCov: number,
      TtlActvLonsTmsLnrNonCov: number,
      TtlActvLonsTmsLneeNonCov: number,
      TtlActvLonsAmtLnrNonCov: number,
      TtlActvLonsAmtLneeNonCov: number,
      TtlBLLonsTmsLnrNonCov: number,
      TtlBLLonsTmsLneeNonCov: number,
      TtlBLLonsAmtLnrNonCov: number,
      TtlBLLonsAmtLneeNonCov: number,
      TtlClrdLonsTmsLnrNonCov: number,
      TtlClrdLonsTmsLneeNonCov: number,
      TtlClrdLonsAmtLnrNonCov: number,
      TtlClrdLonsAmtLneeNonCov: number,
      TtlActvLonsTmsLneeChmNonCov: number,
      TtlActvLonsAmtLneeChmNonCov: number,
      TtlBLLonsTmsLneeChmNonCov: number,
      TtlBLLonsAmtLneeChmNonCov: number,
      TtlClrdLonsTmsLneeChmNonCov: number,
      TtlClrdLonsAmtLneeChmNonCov: number,
      TtlActvLonsTmsSllrNonCov: number,
      TtlActvLonsTmsByrNonCov: number,
      TtlActvLonsAmtSllrNonCov: number,
      TtlActvLonsAmtByrNonCov: number,
      TtlBLLonsTmsSllrNonCov: number,
      TtlBLLonsTmsByrNonCov: number,
      TtlBLLonsAmtSllrNonCov: number,
      TtlBLLonsAmtByrNonCov: number,
      TtlClrdLonsTmsSllrNonCov: number,
      TtlClrdLonsTmsByrNonCov: number,
      TtlClrdLonsAmtSllrNonCov: number,
      TtlClrdLonsAmtByrNonCov: number,
      ttlNonLonsRecSM: number,
      ttlNonLonsSentSM: number,
      MaxTymsBL: number,
      loanStatus: Status,
      acStatus: Status,
      blStatus: Status,
      loanLimit: number,
      nonLonLimit: number,
      withdrawalLimit: number,
      depositLimit: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSMLoansCoveredQueryVariables = {
  id: string,
};

export type GetSMLoansCoveredQuery = {
  getSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMLoansCoveredsQueryVariables = {
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSMLoansCoveredsQuery = {
  listSMLoansCovereds?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSMLoansNonCoveredQueryVariables = {
  id: string,
};

export type GetSMLoansNonCoveredQuery = {
  getSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSMLoansNonCoveredsQueryVariables = {
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSMLoansNonCoveredsQuery = {
  listSMLoansNonCovereds?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNonLoansQueryVariables = {
  id: string,
};

export type GetNonLoansQuery = {
  getNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNonLoanssQueryVariables = {
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonLoanssQuery = {
  listNonLoanss?:  {
    __typename: "ModelNonLoansConnection",
    items?:  Array< {
      __typename: "NonLoans",
      id: string,
      senderID: string,
      recId: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAgentQueryVariables = {
  phonecontact: string,
};

export type GetAgentQuery = {
  getAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgentsQueryVariables = {
  phonecontact?: string | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAgentsQuery = {
  listAgents?:  {
    __typename: "ModelAgentConnection",
    items?:  Array< {
      __typename: "Agent",
      phonecontact: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFloatPurchaseQueryVariables = {
  id: string,
};

export type GetFloatPurchaseQuery = {
  getFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloatPurchasesQueryVariables = {
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloatPurchasesQuery = {
  listFloatPurchases?:  {
    __typename: "ModelFloatPurchaseConnection",
    items?:  Array< {
      __typename: "FloatPurchase",
      id?: string | null,
      agentphone: string,
      amount: number,
      transactId: string,
      bankAdminID: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFloatAddQueryVariables = {
  id: string,
};

export type GetFloatAddQuery = {
  getFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloatAddsQueryVariables = {
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloatAddsQuery = {
  listFloatAdds?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFloatReductionQueryVariables = {
  id: string,
};

export type GetFloatReductionQuery = {
  getFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFloatReductionsQueryVariables = {
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloatReductionsQuery = {
  listFloatReductions?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      agContact: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAgentWithdrawalsQueryVariables = {
  id: string,
};

export type GetAgentWithdrawalsQuery = {
  getAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgentWithdrawalssQueryVariables = {
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgentWithdrawalssQuery = {
  listAgentWithdrawalss?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      id: string,
      agentPhone: string,
      bankAdminId: string,
      Amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSAgentQueryVariables = {
  id: string,
};

export type GetSAgentQuery = {
  getSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSAgentsQueryVariables = {
  filter?: ModelSAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSAgentsQuery = {
  listSAgents?:  {
    __typename: "ModelSAgentConnection",
    items?:  Array< {
      __typename: "SAgent",
      id: string,
      saNationalid: string,
      name: string,
      phonecontact: string,
      pw: string,
      TtlEarnings: number,
      actvMFNdog: number,
      InctvMFNdog: number,
      email: string,
      saBalance: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSAgentWithdrawalsQueryVariables = {
  id: string,
};

export type GetSAgentWithdrawalsQuery = {
  getSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSAgentWithdrawalssQueryVariables = {
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSAgentWithdrawalssQuery = {
  listSAgentWithdrawalss?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      saId: string,
      amount: number,
      bankAdmnId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBankAdminQueryVariables = {
  nationalid: string,
};

export type GetBankAdminQuery = {
  getBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBankAdminsQueryVariables = {
  nationalid?: string | null,
  filter?: ModelBankAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBankAdminsQuery = {
  listBankAdmins?:  {
    __typename: "ModelBankAdminConnection",
    items?:  Array< {
      __typename: "BankAdmin",
      nationalid: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      pw: string,
      BankAdmBal: number,
      email: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBankAdmWithdrawalsQueryVariables = {
  id: string,
};

export type GetBankAdmWithdrawalsQuery = {
  getBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBankAdmWithdrawalssQueryVariables = {
  filter?: ModelBankAdmWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBankAdmWithdrawalssQuery = {
  listBankAdmWithdrawalss?:  {
    __typename: "ModelBankAdmWithdrawalsConnection",
    items?:  Array< {
      __typename: "BankAdmWithdrawals",
      id: string,
      bankAdmNatId: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdvocateQueryVariables = {
  advregnu: string,
};

export type GetAdvocateQuery = {
  getAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdvocatesQueryVariables = {
  advregnu?: string | null,
  filter?: ModelAdvocateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAdvocatesQuery = {
  listAdvocates?:  {
    __typename: "ModelAdvocateConnection",
    items?:  Array< {
      __typename: "Advocate",
      advregnu: string,
      nationalid: string,
      pwd: string,
      name: string,
      phonecontact: string,
      TtlEarnings: number,
      advBal: number,
      email: string,
      officeLoc: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdvocateWithdrawalsQueryVariables = {
  id: string,
};

export type GetAdvocateWithdrawalsQuery = {
  getAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdvocateWithdrawalssQueryVariables = {
  filter?: ModelAdvocateWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdvocateWithdrawalssQuery = {
  listAdvocateWithdrawalss?:  {
    __typename: "ModelAdvocateWithdrawalsConnection",
    items?:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      bankAdmnId: string,
      advregnu: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  AdminId: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompanysQueryVariables = {
  AdminId?: string | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompanysQuery = {
  listCompanys?:  {
    __typename: "ModelCompanyConnection",
    items?:  Array< {
      __typename: "Company",
      AdminId: string,
      phoneContact: string,
      companyEmail: string,
      termsNconditions: string,
      alert: string,
      about: string,
      policy: string,
      privacy: string,
      recom: string,
      pw1: string,
      pw2: string,
      agentwithdrawalFee: number,
      agentCom: number,
      sagentCom: number,
      companyCom: number,
      AdvCom: number,
      bankAdminCom: number,
      sawithdrawalFee: number,
      advuserwithdrawalFee: number,
      bankAdmuserwithdrawalFee: number,
      userLoanTransferFee: number,
      userTransferFee: number,
      userClearanceFee: number,
      ttlNonLonssRecSM: number,
      ttlNonLonssSentSM: number,
      ttlNonLonssRecChm: number,
      ttlNonLonssSentChm: number,
      companyEarningBal: number,
      companyEarning: number,
      agentEarningBal: number,
      agentEarning: number,
      saEarningBal: number,
      saEarning: number,
      AdvEarningBal: number,
      AdvEarning: number,
      admEarningBal: number,
      admEarning: number,
      ttlUsrDep: number,
      ttlUserWthdrwl?: number | null,
      agentFloatIn: number,
      agentFloatOut: number,
      ttlActiveUsers: number,
      ttlInactvUsrs: number,
      ttlKFNdgActv: number,
      ttlKFNdgInActv: number,
      ttlKNdgBLStts: number,
      ttlKFKbwActv: number,
      ttlKFKbwInActv: number,
      ttlKKbwBLStts: number,
      ttlKFAdvActv: number,
      ttlKFAdvInActv: number,
      ttlKAdvBLStts: number,
      ttlKFAdmActv: number,
      ttlKFAdmInActv: number,
      ttlKAdmBLStts: number,
      ttlSMLnsInAmtCov: number,
      ttlChmLnsInAmtCov: number,
      ttlSellerLnsInAmtCov: number,
      ttlSMLnsInActvAmtCov: number,
      ttlChmLnsInActvAmtCov: number,
      ttlSellerLnsInActvAmtCov: number,
      ttlSMLnsInClrdAmtCov: number,
      ttlChmLnsInClrdAmtCov: number,
      ttlSellerLnsInClrdAmtCov: number,
      ttlSMLnsInBlAmtCov: number,
      ttlChmLnsInBlAmtCov: number,
      ttlSellerLnsInBlAmtCov: number,
      ttlSMLnsInTymsCov: number,
      ttlChmLnsInTymsCov: number,
      ttlSellerLnsInTymsCov: number,
      ttlSMLnsInActvTymsCov: number,
      ttlChmLnsInActvTymsCov: number,
      ttlSellerLnsInActvTymsCov: number,
      ttlSMLnsInClrdTymsCov: number,
      ttlChmLnsInClrdTymsCov: number,
      ttlSellerLnsInClrdTymsCov: number,
      ttlSMLnsInBlTymsCov: number,
      ttlChmLnsInBlTymsCov: number,
      ttlSellerLnsInBlTymsCov: number,
      ttlCompTrnsfrEarningsCov: number,
      ttlCompBLClrncEarningsCov: number,
      ttlSMLnsInAmtNonCov: number,
      ttlChmLnsInAmtNonCov: number,
      ttlSellerLnsInAmtNonCov: number,
      ttlSMLnsInActvAmtNonCov: number,
      ttlChmLnsInActvAmtNonCov: number,
      ttlSellerLnsInActvAmtNonCov: number,
      ttlSMLnsInClrdAmtNonCov: number,
      ttlChmLnsInClrdAmtNonCov: number,
      ttlSellerLnsInClrdAmtNonCov: number,
      ttlSMLnsInBlAmtNonCov: number,
      ttlChmLnsInBlAmtNonCov: number,
      ttlSellerLnsInBlAmtNonCov: number,
      ttlSMLnsInTymsNonCov: number,
      ttlChmLnsInTymsNonCov: number,
      ttlSellerLnsInTymsNonCov: number,
      ttlSMLnsInActvTymsNonCov: number,
      ttlChmLnsInActvTymsNonCov: number,
      ttlSellerLnsInActvTymsNonCov: number,
      ttlSMLnsInClrdTymsNonCov: number,
      ttlChmLnsInClrdTymsNonCov: number,
      ttlSellerLnsInClrdTymsNonCov: number,
      ttlSMLnsInBlTymsNonCov: number,
      ttlChmLnsInBlTymsNonCov: number,
      ttlSellerLnsInBlTymsNonCov: number,
      ttlCompTrnsfrEarningsNonCov: number,
      ttlCompBLClrncEarningsNonCov: number,
      ttlCompCovEarnings: number,
      maxInterestSM: number,
      maxInterestCredSllr: number,
      maxInterestGrp: number,
      totalLnsRecovered: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCovCreditSellerQueryVariables = {
  id: string,
};

export type GetCovCreditSellerQuery = {
  getCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCovCreditSellersQueryVariables = {
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCovCreditSellersQuery = {
  listCovCreditSellers?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNonCovCreditSellerQueryVariables = {
  id: string,
};

export type GetNonCovCreditSellerQuery = {
  getNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNonCovCreditSellersQueryVariables = {
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonCovCreditSellersQuery = {
  listNonCovCreditSellers?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items?:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  grpContact: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  grpContact?: string | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      grpContact: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      description?: string | null,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm: number,
      ttlDpst: number,
      ttlWthdrwn: number,
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGrpMembersQueryVariables = {
  id: string,
};

export type GetGrpMembersQuery = {
  getGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGrpMemberssQueryVariables = {
  filter?: ModelGrpMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGrpMemberssQuery = {
  listGrpMemberss?:  {
    __typename: "ModelGrpMembersConnection",
    items?:  Array< {
      __typename: "GrpMembers",
      id: string,
      groupContact: string,
      memberContact: string,
      memberNatId: string,
      acBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCvrdGroupLoansQueryVariables = {
  id: string,
};

export type GetCvrdGroupLoansQuery = {
  getCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCvrdGroupLoanssQueryVariables = {
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCvrdGroupLoanssQuery = {
  listCvrdGroupLoanss?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNonCvrdGroupLoansQueryVariables = {
  id: string,
};

export type GetNonCvrdGroupLoansQuery = {
  getNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNonCvrdGroupLoanssQueryVariables = {
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNonCvrdGroupLoanssQuery = {
  listNonCvrdGroupLoanss?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGroupNonLoansQueryVariables = {
  id: string,
};

export type GetGroupNonLoansQuery = {
  getGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupNonLoanssQueryVariables = {
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupNonLoanssQuery = {
  listGroupNonLoanss?:  {
    __typename: "ModelGroupNonLoansConnection",
    items?:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientId: string,
      amountSent: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGrpMembersContributionQueryVariables = {
  id: string,
};

export type GetGrpMembersContributionQuery = {
  getGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGrpMembersContributionsQueryVariables = {
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGrpMembersContributionsQuery = {
  listGrpMembersContributions?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberId: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckUserrrBalanceQueryVariables = {
  phonecontact?: string | null,
  pw?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckUserrrBalanceQuery = {
  checkUserrrBalance?:  {
    __typename: "ModelSMAccountConnection",
    items?:  Array< {
      __typename: "SMAccount",
      nationalid: string,
      name: string,
      phonecontact: string,
      awsemail: string,
      balance: number,
      pw: string,
      loanAcceptanceCode: string,
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      TtlActvLonsTmsLnrCov: number,
      TtlActvLonsTmsLneeCov: number,
      TtlActvLonsAmtLnrCov: number,
      TtlActvLonsAmtLneeCov: number,
      TtlBLLonsTmsLnrCov: number,
      TtlBLLonsTmsLneeCov: number,
      TtlBLLonsAmtLnrCov: number,
      TtlBLLonsAmtLneeCov: number,
      TtlClrdLonsTmsLnrCov: number,
      TtlClrdLonsTmsLneeCov: number,
      TtlClrdLonsAmtLnrCov: number,
      TtlClrdLonsAmtLneeCov: number,
      TtlActvLonsTmsLneeChmCov: number,
      TtlActvLonsAmtLneeChmCov: number,
      TtlBLLonsTmsLneeChmCov: number,
      TtlBLLonsAmtLneeChmCov: number,
      TtlClrdLonsTmsLneeChmCov: number,
      TtlClrdLonsAmtLneeChmCov: number,
      TtlActvLonsTmsSllrCov: number,
      TtlActvLonsTmsByrCov: number,
      TtlActvLonsAmtSllrCov: number,
      TtlActvLonsAmtByrCov: number,
      TtlBLLonsTmsSllrCov: number,
      TtlBLLonsTmsByrCov: number,
      TtlBLLonsAmtSllrCov: number,
      TtlBLLonsAmtByrCov: number,
      TtlClrdLonsTmsSllrCov: number,
      TtlClrdLonsTmsByrCov: number,
      TtlClrdLonsAmtSllrCov: number,
      TtlClrdLonsAmtByrCov: number,
      TtlActvLonsTmsLnrNonCov: number,
      TtlActvLonsTmsLneeNonCov: number,
      TtlActvLonsAmtLnrNonCov: number,
      TtlActvLonsAmtLneeNonCov: number,
      TtlBLLonsTmsLnrNonCov: number,
      TtlBLLonsTmsLneeNonCov: number,
      TtlBLLonsAmtLnrNonCov: number,
      TtlBLLonsAmtLneeNonCov: number,
      TtlClrdLonsTmsLnrNonCov: number,
      TtlClrdLonsTmsLneeNonCov: number,
      TtlClrdLonsAmtLnrNonCov: number,
      TtlClrdLonsAmtLneeNonCov: number,
      TtlActvLonsTmsLneeChmNonCov: number,
      TtlActvLonsAmtLneeChmNonCov: number,
      TtlBLLonsTmsLneeChmNonCov: number,
      TtlBLLonsAmtLneeChmNonCov: number,
      TtlClrdLonsTmsLneeChmNonCov: number,
      TtlClrdLonsAmtLneeChmNonCov: number,
      TtlActvLonsTmsSllrNonCov: number,
      TtlActvLonsTmsByrNonCov: number,
      TtlActvLonsAmtSllrNonCov: number,
      TtlActvLonsAmtByrNonCov: number,
      TtlBLLonsTmsSllrNonCov: number,
      TtlBLLonsTmsByrNonCov: number,
      TtlBLLonsAmtSllrNonCov: number,
      TtlBLLonsAmtByrNonCov: number,
      TtlClrdLonsTmsSllrNonCov: number,
      TtlClrdLonsTmsByrNonCov: number,
      TtlClrdLonsAmtSllrNonCov: number,
      TtlClrdLonsAmtByrNonCov: number,
      ttlNonLonsRecSM: number,
      ttlNonLonsSentSM: number,
      MaxTymsBL: number,
      loanStatus: Status,
      acStatus: Status,
      blStatus: Status,
      loanLimit: number,
      nonLonLimit: number,
      withdrawalLimit: number,
      depositLimit: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AccessingPersonalAcQueryVariables = {
  name?: string | null,
  phonecontact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccessingPersonalAcQuery = {
  AccessingPersonalAc?:  {
    __typename: "ModelSMAccountConnection",
    items?:  Array< {
      __typename: "SMAccount",
      nationalid: string,
      name: string,
      phonecontact: string,
      awsemail: string,
      balance: number,
      pw: string,
      loanAcceptanceCode: string,
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      TtlActvLonsTmsLnrCov: number,
      TtlActvLonsTmsLneeCov: number,
      TtlActvLonsAmtLnrCov: number,
      TtlActvLonsAmtLneeCov: number,
      TtlBLLonsTmsLnrCov: number,
      TtlBLLonsTmsLneeCov: number,
      TtlBLLonsAmtLnrCov: number,
      TtlBLLonsAmtLneeCov: number,
      TtlClrdLonsTmsLnrCov: number,
      TtlClrdLonsTmsLneeCov: number,
      TtlClrdLonsAmtLnrCov: number,
      TtlClrdLonsAmtLneeCov: number,
      TtlActvLonsTmsLneeChmCov: number,
      TtlActvLonsAmtLneeChmCov: number,
      TtlBLLonsTmsLneeChmCov: number,
      TtlBLLonsAmtLneeChmCov: number,
      TtlClrdLonsTmsLneeChmCov: number,
      TtlClrdLonsAmtLneeChmCov: number,
      TtlActvLonsTmsSllrCov: number,
      TtlActvLonsTmsByrCov: number,
      TtlActvLonsAmtSllrCov: number,
      TtlActvLonsAmtByrCov: number,
      TtlBLLonsTmsSllrCov: number,
      TtlBLLonsTmsByrCov: number,
      TtlBLLonsAmtSllrCov: number,
      TtlBLLonsAmtByrCov: number,
      TtlClrdLonsTmsSllrCov: number,
      TtlClrdLonsTmsByrCov: number,
      TtlClrdLonsAmtSllrCov: number,
      TtlClrdLonsAmtByrCov: number,
      TtlActvLonsTmsLnrNonCov: number,
      TtlActvLonsTmsLneeNonCov: number,
      TtlActvLonsAmtLnrNonCov: number,
      TtlActvLonsAmtLneeNonCov: number,
      TtlBLLonsTmsLnrNonCov: number,
      TtlBLLonsTmsLneeNonCov: number,
      TtlBLLonsAmtLnrNonCov: number,
      TtlBLLonsAmtLneeNonCov: number,
      TtlClrdLonsTmsLnrNonCov: number,
      TtlClrdLonsTmsLneeNonCov: number,
      TtlClrdLonsAmtLnrNonCov: number,
      TtlClrdLonsAmtLneeNonCov: number,
      TtlActvLonsTmsLneeChmNonCov: number,
      TtlActvLonsAmtLneeChmNonCov: number,
      TtlBLLonsTmsLneeChmNonCov: number,
      TtlBLLonsAmtLneeChmNonCov: number,
      TtlClrdLonsTmsLneeChmNonCov: number,
      TtlClrdLonsAmtLneeChmNonCov: number,
      TtlActvLonsTmsSllrNonCov: number,
      TtlActvLonsTmsByrNonCov: number,
      TtlActvLonsAmtSllrNonCov: number,
      TtlActvLonsAmtByrNonCov: number,
      TtlBLLonsTmsSllrNonCov: number,
      TtlBLLonsTmsByrNonCov: number,
      TtlBLLonsAmtSllrNonCov: number,
      TtlBLLonsAmtByrNonCov: number,
      TtlClrdLonsTmsSllrNonCov: number,
      TtlClrdLonsTmsByrNonCov: number,
      TtlClrdLonsAmtSllrNonCov: number,
      TtlClrdLonsAmtByrNonCov: number,
      ttlNonLonsRecSM: number,
      ttlNonLonsSentSM: number,
      MaxTymsBL: number,
      loanStatus: Status,
      acStatus: Status,
      blStatus: Status,
      loanLimit: number,
      nonLonLimit: number,
      withdrawalLimit: number,
      depositLimit: number,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyDetorsQueryVariables = {
  loanerId?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyDetorsQuery = {
  checkMyDetors?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyLendersQueryVariables = {
  loaneeid?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyLendersQuery = {
  checkMyLenders?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ConfrmMyLoaneeeeeQueryVariables = {
  loanerId?: string | null,
  loaneeidStatus?: ModelSMLoansCoveredConfirmMyLoaneeCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConfrmMyLoaneeeeeQuery = {
  confrmMyLoaneeeee?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNLnarQueryVariables = {
  advregnu?: string | null,
  loanerId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNLnarQuery = {
  checkbyAdvNLnar?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNLnarsQueryVariables = {
  advregnu?: string | null,
  loanerIdLoaneeid?: ModelSMLoansCoveredSearchAdvLoanerCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNLnarsQuery = {
  checkbyAdvNLnars?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ChckbyAdvNLneeQueryVariables = {
  advregnu?: string | null,
  loaneeid?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChckbyAdvNLneeQuery = {
  chckbyAdvNLnee?:  {
    __typename: "ModelSMLoansCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      advregnu: string,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyDetorssQueryVariables = {
  loanerId?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyDetorssQuery = {
  checkMyDetorss?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyLenderssQueryVariables = {
  loaneeid?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyLenderssQuery = {
  checkMyLenderss?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ConfrmMyLoaneeeeesQueryVariables = {
  loanerId?: string | null,
  loaneeidStatus?: ModelSMLoansNonCoveredConfirmMyLoaneesCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSMLoansNonCoveredFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConfrmMyLoaneeeeesQuery = {
  confrmMyLoaneeeees?:  {
    __typename: "ModelSMLoansNonCoveredConnection",
    items?:  Array< {
      __typename: "SMLoansNonCovered",
      id: string,
      loaneeid: string,
      loanerId: string,
      amountgiven: number,
      amountexpected: number,
      amountrepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckNonLonsbySenderQueryVariables = {
  senderID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckNonLonsbySenderQuery = {
  checkNonLonsbySender?:  {
    __typename: "ModelNonLoansConnection",
    items?:  Array< {
      __typename: "NonLoans",
      id: string,
      senderID: string,
      recId: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckReceivedNonLnsQueryVariables = {
  recId?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckReceivedNonLnsQuery = {
  checkReceivedNonLns?:  {
    __typename: "ModelNonLoansConnection",
    items?:  Array< {
      __typename: "NonLoans",
      id: string,
      senderID: string,
      recId: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckBySenderRecieverQueryVariables = {
  senderID?: string | null,
  recId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckBySenderRecieverQuery = {
  checkBySenderReciever?:  {
    __typename: "ModelNonLoansConnection",
    items?:  Array< {
      __typename: "NonLoans",
      id: string,
      senderID: string,
      recId: string,
      amount: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UpdtAgentBalbyUserQueryVariables = {
  name?: string | null,
  pw?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UpdtAgentBalbyUserQuery = {
  updtAgentBalbyUser?:  {
    __typename: "ModelAgentConnection",
    items?:  Array< {
      __typename: "Agent",
      phonecontact: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchMyAgentsQueryVariables = {
  sagentregno?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchMyAgentsQuery = {
  searchMyAgents?:  {
    __typename: "ModelAgentConnection",
    items?:  Array< {
      __typename: "Agent",
      phonecontact: string,
      nationalid: string,
      name: string,
      ttlEarnings: number,
      pw: string,
      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstAgentFltPrchasssQueryVariables = {
  agentphone?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstAgentFltPrchasssQuery = {
  lstAgentFltPrchasss?:  {
    __typename: "ModelFloatPurchaseConnection",
    items?:  Array< {
      __typename: "FloatPurchase",
      id?: string | null,
      agentphone: string,
      amount: number,
      transactId: string,
      bankAdminID: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstBankAdmTransaaaaccttionsQueryVariables = {
  bankAdminID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstBankAdmTransaaaaccttionsQuery = {
  lstBankAdmTransaaaaccttions?:  {
    __typename: "ModelFloatPurchaseConnection",
    items?:  Array< {
      __typename: "FloatPurchase",
      id?: string | null,
      agentphone: string,
      amount: number,
      transactId: string,
      bankAdminID: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CreateWythdrawalsQueryVariables = {
  agentPhonecontact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreateWythdrawalsQuery = {
  createWythdrawals?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CreateWythdrawalsssQueryVariables = {
  withdrawerid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreateWythdrawalsssQuery = {
  createWythdrawalsss?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReadSAWithdrwlsQueryVariables = {
  sagentId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatAddFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReadSAWithdrwlsQuery = {
  readSAWithdrwls?:  {
    __typename: "ModelFloatAddConnection",
    items?:  Array< {
      __typename: "FloatAdd",
      id: string,
      withdrawerid: string,
      amount: number,
      agentPhonecontact: string,
      sagentId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CreatFltDeducQueryVariables = {
  agContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CreatFltDeducQuery = {
  creatFltDeduc?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      agContact: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReeeadAmtDpstdQueryVariables = {
  depositerid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFloatReductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReeeadAmtDpstdQuery = {
  reeeadAmtDpstd?:  {
    __typename: "ModelFloatReductionConnection",
    items?:  Array< {
      __typename: "FloatReduction",
      id: string,
      amount: number,
      depositerid: string,
      agContact: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstAgentWithdrowalsQueryVariables = {
  agentPhone?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstAgentWithdrowalsQuery = {
  lstAgentWithdrowals?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      id: string,
      agentPhone: string,
      bankAdminId: string,
      Amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstBankAdmTransactiooonnnsQueryVariables = {
  bankAdminId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstBankAdmTransactiooonnnsQuery = {
  lstBankAdmTransactiooonnns?:  {
    __typename: "ModelAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "AgentWithdrawals",
      id: string,
      agentPhone: string,
      bankAdminId: string,
      Amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckingSAQueryVariables = {
  saNationalid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckingSAQuery = {
  CheckingSA?:  {
    __typename: "ModelSAgentConnection",
    items?:  Array< {
      __typename: "SAgent",
      id: string,
      saNationalid: string,
      name: string,
      phonecontact: string,
      pw: string,
      TtlEarnings: number,
      actvMFNdog: number,
      InctvMFNdog: number,
      email: string,
      saBalance: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstSAWithdrllsQueryVariables = {
  saId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstSAWithdrllsQuery = {
  lstSAWithdrlls?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      saId: string,
      amount: number,
      bankAdmnId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LstBankAdmTranssactionsQueryVariables = {
  bankAdmnId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSAgentWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LstBankAdmTranssactionsQuery = {
  lstBankAdmTranssactions?:  {
    __typename: "ModelSAgentWithdrawalsConnection",
    items?:  Array< {
      __typename: "SAgentWithdrawals",
      id: string,
      saId: string,
      amount: number,
      bankAdmnId: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckBankAdmWithdrawalsQueryVariables = {
  bankAdmNatId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBankAdmWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckBankAdmWithdrawalsQuery = {
  checkBankAdmWithdrawals?:  {
    __typename: "ModelBankAdmWithdrawalsConnection",
    items?:  Array< {
      __typename: "BankAdmWithdrawals",
      id: string,
      bankAdmNatId: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAdvocateWithdrawalsssQueryVariables = {
  advregnu?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvocateWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAdvocateWithdrawalsssQuery = {
  checkAdvocateWithdrawalsss?:  {
    __typename: "ModelAdvocateWithdrawalsConnection",
    items?:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      bankAdmnId: string,
      advregnu: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAdvocateWithdrawalsssAdminQueryVariables = {
  bankAdmnId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAdvocateWithdrawalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAdvocateWithdrawalsssAdminQuery = {
  checkAdvocateWithdrawalsssAdmin?:  {
    __typename: "ModelAdvocateWithdrawalsConnection",
    items?:  Array< {
      __typename: "AdvocateWithdrawals",
      id: string,
      bankAdmnId: string,
      advregnu: string,
      amount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyComppwQueryVariables = {
  pw1?: string | null,
  pw2?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyComppwQuery = {
  checkbyComppw?:  {
    __typename: "ModelCompanyConnection",
    items?:  Array< {
      __typename: "Company",
      AdminId: string,
      phoneContact: string,
      companyEmail: string,
      termsNconditions: string,
      alert: string,
      about: string,
      policy: string,
      privacy: string,
      recom: string,
      pw1: string,
      pw2: string,
      agentwithdrawalFee: number,
      agentCom: number,
      sagentCom: number,
      companyCom: number,
      AdvCom: number,
      bankAdminCom: number,
      sawithdrawalFee: number,
      advuserwithdrawalFee: number,
      bankAdmuserwithdrawalFee: number,
      userLoanTransferFee: number,
      userTransferFee: number,
      userClearanceFee: number,
      ttlNonLonssRecSM: number,
      ttlNonLonssSentSM: number,
      ttlNonLonssRecChm: number,
      ttlNonLonssSentChm: number,
      companyEarningBal: number,
      companyEarning: number,
      agentEarningBal: number,
      agentEarning: number,
      saEarningBal: number,
      saEarning: number,
      AdvEarningBal: number,
      AdvEarning: number,
      admEarningBal: number,
      admEarning: number,
      ttlUsrDep: number,
      ttlUserWthdrwl?: number | null,
      agentFloatIn: number,
      agentFloatOut: number,
      ttlActiveUsers: number,
      ttlInactvUsrs: number,
      ttlKFNdgActv: number,
      ttlKFNdgInActv: number,
      ttlKNdgBLStts: number,
      ttlKFKbwActv: number,
      ttlKFKbwInActv: number,
      ttlKKbwBLStts: number,
      ttlKFAdvActv: number,
      ttlKFAdvInActv: number,
      ttlKAdvBLStts: number,
      ttlKFAdmActv: number,
      ttlKFAdmInActv: number,
      ttlKAdmBLStts: number,
      ttlSMLnsInAmtCov: number,
      ttlChmLnsInAmtCov: number,
      ttlSellerLnsInAmtCov: number,
      ttlSMLnsInActvAmtCov: number,
      ttlChmLnsInActvAmtCov: number,
      ttlSellerLnsInActvAmtCov: number,
      ttlSMLnsInClrdAmtCov: number,
      ttlChmLnsInClrdAmtCov: number,
      ttlSellerLnsInClrdAmtCov: number,
      ttlSMLnsInBlAmtCov: number,
      ttlChmLnsInBlAmtCov: number,
      ttlSellerLnsInBlAmtCov: number,
      ttlSMLnsInTymsCov: number,
      ttlChmLnsInTymsCov: number,
      ttlSellerLnsInTymsCov: number,
      ttlSMLnsInActvTymsCov: number,
      ttlChmLnsInActvTymsCov: number,
      ttlSellerLnsInActvTymsCov: number,
      ttlSMLnsInClrdTymsCov: number,
      ttlChmLnsInClrdTymsCov: number,
      ttlSellerLnsInClrdTymsCov: number,
      ttlSMLnsInBlTymsCov: number,
      ttlChmLnsInBlTymsCov: number,
      ttlSellerLnsInBlTymsCov: number,
      ttlCompTrnsfrEarningsCov: number,
      ttlCompBLClrncEarningsCov: number,
      ttlSMLnsInAmtNonCov: number,
      ttlChmLnsInAmtNonCov: number,
      ttlSellerLnsInAmtNonCov: number,
      ttlSMLnsInActvAmtNonCov: number,
      ttlChmLnsInActvAmtNonCov: number,
      ttlSellerLnsInActvAmtNonCov: number,
      ttlSMLnsInClrdAmtNonCov: number,
      ttlChmLnsInClrdAmtNonCov: number,
      ttlSellerLnsInClrdAmtNonCov: number,
      ttlSMLnsInBlAmtNonCov: number,
      ttlChmLnsInBlAmtNonCov: number,
      ttlSellerLnsInBlAmtNonCov: number,
      ttlSMLnsInTymsNonCov: number,
      ttlChmLnsInTymsNonCov: number,
      ttlSellerLnsInTymsNonCov: number,
      ttlSMLnsInActvTymsNonCov: number,
      ttlChmLnsInActvTymsNonCov: number,
      ttlSellerLnsInActvTymsNonCov: number,
      ttlSMLnsInClrdTymsNonCov: number,
      ttlChmLnsInClrdTymsNonCov: number,
      ttlSellerLnsInClrdTymsNonCov: number,
      ttlSMLnsInBlTymsNonCov: number,
      ttlChmLnsInBlTymsNonCov: number,
      ttlSellerLnsInBlTymsNonCov: number,
      ttlCompTrnsfrEarningsNonCov: number,
      ttlCompBLClrncEarningsNonCov: number,
      ttlCompCovEarnings: number,
      maxInterestSM: number,
      maxInterestCredSllr: number,
      maxInterestGrp: number,
      totalLnsRecovered: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyNonCovrrrrrrrrdSalesQueryVariables = {
  sellerID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyNonCovrrrrrrrrdSalesQuery = {
  checkMyNonCovrrrrrrrrdSales?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMysalessDebtsQueryVariables = {
  buyerID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMysalessDebtsQuery = {
  checkMysalessDebts?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNCredddSsellerQueryVariables = {
  advregnu?: string | null,
  sellerContactBuyerContact?: ModelCovCreditSellerSearchAdvCredSllrCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNCredddSsellerQuery = {
  checkbyAdvNCredddSseller?:  {
    __typename: "ModelCovCreditSellerConnection",
    items?:  Array< {
      __typename: "CovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      advregnu: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMyNonCovrrrrrrrrdSalessQueryVariables = {
  sellerID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMyNonCovrrrrrrrrdSalessQuery = {
  checkMyNonCovrrrrrrrrdSaless?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items?:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMysalessDebtssQueryVariables = {
  buyerID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMysalessDebtssQuery = {
  checkMysalessDebtss?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items?:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNCredddSsellersQueryVariables = {
  sellerContact?: string | null,
  buyerContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCovCreditSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNCredddSsellersQuery = {
  checkbyAdvNCredddSsellers?:  {
    __typename: "ModelNonCovCreditSellerConnection",
    items?:  Array< {
      __typename: "NonCovCreditSeller",
      id: string,
      itemName: string,
      itemSerialNumber?: string | null,
      buyerContact: string,
      sellerContact: string,
      buyerID: string,
      sellerID: string,
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckGrpsICrtdQueryVariables = {
  SignitoryNatid?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckGrpsICrtdQuery = {
  checkGrpsICrtd?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      grpContact: string,
      signitoryContact: string,
      SignitoryNatid: string,
      signitoryName: string,
      grpName: string,
      signitoryPW: string,
      grpEmail: string,
      grpBal: number,
      ttlGrpMembers: number,
      description?: string | null,
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm: number,
      ttlDpst: number,
      ttlWthdrwn: number,
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMygroupMembersQueryVariables = {
  groupContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMygroupMembersQuery = {
  checkMygroupMembers?:  {
    __typename: "ModelGrpMembersConnection",
    items?:  Array< {
      __typename: "GrpMembers",
      id: string,
      groupContact: string,
      memberContact: string,
      memberNatId: string,
      acBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMygrpsQueryVariables = {
  memberNatId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMygrpsQuery = {
  checkMygrps?:  {
    __typename: "ModelGrpMembersConnection",
    items?:  Array< {
      __typename: "GrpMembers",
      id: string,
      groupContact: string,
      memberContact: string,
      memberNatId: string,
      acBal: number,
      AcStatus: Status,
      loanStatus: Status,
      blStatus: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeeckGrpCovrdLonDfltsQueryVariables = {
  grpContact?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeeckGrpCovrdLonDfltsQuery = {
  cheeeeckGrpCovrdLonDflts?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UpdatAmaounntrepaidQueryVariables = {
  loaneeID?: string | null,
  grpContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UpdatAmaounntrepaidQuery = {
  updatAmaounntrepaid?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ClearloaneriiiiifongoingQueryVariables = {
  loaneeID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClearloaneriiiiifongoingQuery = {
  clearloaneriiiiifongoing?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNGrrrppQueryVariables = {
  advRegNu?: string | null,
  grpContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNGrrrppQuery = {
  checkbyAdvNGrrrpp?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNGrrrppNLonieQueryVariables = {
  advRegNu?: string | null,
  grpContactLoaneeID?: ModelCvrdGroupLoansSearchAdvGrpCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNGrrrppNLonieQuery = {
  checkbyAdvNGrrrppNLonie?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckbyAdvNLoaneeeeeeiQueryVariables = {
  advRegNu?: string | null,
  loaneeID?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckbyAdvNLoaneeeeeeiQuery = {
  checkbyAdvNLoaneeeeeei?:  {
    __typename: "ModelCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "CvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      advRegNu: string,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeeckGrpCovrdLonDfltssQueryVariables = {
  grpContact?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeeckGrpCovrdLonDfltssQuery = {
  cheeeeckGrpCovrdLonDfltss?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type UpdatAmaounntrepaidsQueryVariables = {
  loaneeID?: string | null,
  grpContact?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UpdatAmaounntrepaidsQuery = {
  updatAmaounntrepaids?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ClearloaneriiiiifongoingsQueryVariables = {
  loaneeID?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNonCvrdGroupLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClearloaneriiiiifongoingsQuery = {
  clearloaneriiiiifongoings?:  {
    __typename: "ModelNonCvrdGroupLoansConnection",
    items?:  Array< {
      __typename: "NonCvrdGroupLoans",
      id: string,
      grpContact: string,
      loaneeID: string,
      repaymentPeriod: number,
      amountGiven: number,
      amountExpectedBack: number,
      amountRepaid: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeckGrpMemberNonLoanseeQueryVariables = {
  recipientId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeckGrpMemberNonLoanseeQuery = {
  cheeeckGrpMemberNonLoansee?:  {
    __typename: "ModelGroupNonLoansConnection",
    items?:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientId: string,
      amountSent: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheeeckGrpNonLoanseQueryVariables = {
  grpContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupNonLoansFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheeeckGrpNonLoanseQuery = {
  cheeeckGrpNonLoanse?:  {
    __typename: "ModelGroupNonLoansConnection",
    items?:  Array< {
      __typename: "GroupNonLoans",
      id: string,
      grpContact: string,
      recipientId: string,
      amountSent: number,
      description?: string | null,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAllMyGrpsContriQueryVariables = {
  memberId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAllMyGrpsContriQuery = {
  checkAllMyGrpsContri?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberId: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckAllGrpContributorssssQueryVariables = {
  grpContact?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckAllGrpContributorssssQuery = {
  checkAllGrpContributorssss?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberId: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CheckMmbrContrInAGrppQueryVariables = {
  grpContact?: string | null,
  memberId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrpMembersContributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckMmbrContrInAGrppQuery = {
  checkMmbrContrInAGrpp?:  {
    __typename: "ModelGrpMembersContributionConnection",
    items?:  Array< {
      __typename: "GrpMembersContribution",
      id: string,
      memberId: string,
      grpContact: string,
      contriAmount: number,
      status: Status,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSMAccountSubscription = {
  onCreateSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMAccountSubscription = {
  onUpdateSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMAccountSubscription = {
  onDeleteSMAccount?:  {
    __typename: "SMAccount",
    nationalid: string,
    name: string,
    phonecontact: string,
    awsemail: string,
    balance: number,
    pw: string,
    loanAcceptanceCode: string,
    ttlDpstSM: number,
    TtlWthdrwnSM: number,
    TtlActvLonsTmsLnrCov: number,
    TtlActvLonsTmsLneeCov: number,
    TtlActvLonsAmtLnrCov: number,
    TtlActvLonsAmtLneeCov: number,
    TtlBLLonsTmsLnrCov: number,
    TtlBLLonsTmsLneeCov: number,
    TtlBLLonsAmtLnrCov: number,
    TtlBLLonsAmtLneeCov: number,
    TtlClrdLonsTmsLnrCov: number,
    TtlClrdLonsTmsLneeCov: number,
    TtlClrdLonsAmtLnrCov: number,
    TtlClrdLonsAmtLneeCov: number,
    TtlActvLonsTmsLneeChmCov: number,
    TtlActvLonsAmtLneeChmCov: number,
    TtlBLLonsTmsLneeChmCov: number,
    TtlBLLonsAmtLneeChmCov: number,
    TtlClrdLonsTmsLneeChmCov: number,
    TtlClrdLonsAmtLneeChmCov: number,
    TtlActvLonsTmsSllrCov: number,
    TtlActvLonsTmsByrCov: number,
    TtlActvLonsAmtSllrCov: number,
    TtlActvLonsAmtByrCov: number,
    TtlBLLonsTmsSllrCov: number,
    TtlBLLonsTmsByrCov: number,
    TtlBLLonsAmtSllrCov: number,
    TtlBLLonsAmtByrCov: number,
    TtlClrdLonsTmsSllrCov: number,
    TtlClrdLonsTmsByrCov: number,
    TtlClrdLonsAmtSllrCov: number,
    TtlClrdLonsAmtByrCov: number,
    TtlActvLonsTmsLnrNonCov: number,
    TtlActvLonsTmsLneeNonCov: number,
    TtlActvLonsAmtLnrNonCov: number,
    TtlActvLonsAmtLneeNonCov: number,
    TtlBLLonsTmsLnrNonCov: number,
    TtlBLLonsTmsLneeNonCov: number,
    TtlBLLonsAmtLnrNonCov: number,
    TtlBLLonsAmtLneeNonCov: number,
    TtlClrdLonsTmsLnrNonCov: number,
    TtlClrdLonsTmsLneeNonCov: number,
    TtlClrdLonsAmtLnrNonCov: number,
    TtlClrdLonsAmtLneeNonCov: number,
    TtlActvLonsTmsLneeChmNonCov: number,
    TtlActvLonsAmtLneeChmNonCov: number,
    TtlBLLonsTmsLneeChmNonCov: number,
    TtlBLLonsAmtLneeChmNonCov: number,
    TtlClrdLonsTmsLneeChmNonCov: number,
    TtlClrdLonsAmtLneeChmNonCov: number,
    TtlActvLonsTmsSllrNonCov: number,
    TtlActvLonsTmsByrNonCov: number,
    TtlActvLonsAmtSllrNonCov: number,
    TtlActvLonsAmtByrNonCov: number,
    TtlBLLonsTmsSllrNonCov: number,
    TtlBLLonsTmsByrNonCov: number,
    TtlBLLonsAmtSllrNonCov: number,
    TtlBLLonsAmtByrNonCov: number,
    TtlClrdLonsTmsSllrNonCov: number,
    TtlClrdLonsTmsByrNonCov: number,
    TtlClrdLonsAmtSllrNonCov: number,
    TtlClrdLonsAmtByrNonCov: number,
    ttlNonLonsRecSM: number,
    ttlNonLonsSentSM: number,
    MaxTymsBL: number,
    loanStatus: Status,
    acStatus: Status,
    blStatus: Status,
    loanLimit: number,
    nonLonLimit: number,
    withdrawalLimit: number,
    depositLimit: number,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSMLoansCoveredSubscription = {
  onCreateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMLoansCoveredSubscription = {
  onUpdateSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMLoansCoveredSubscription = {
  onDeleteSMLoansCovered?:  {
    __typename: "SMLoansCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    advregnu: string,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSMLoansNonCoveredSubscription = {
  onCreateSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSMLoansNonCoveredSubscription = {
  onUpdateSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSMLoansNonCoveredSubscription = {
  onDeleteSMLoansNonCovered?:  {
    __typename: "SMLoansNonCovered",
    id: string,
    loaneeid: string,
    loanerId: string,
    amountgiven: number,
    amountexpected: number,
    amountrepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNonLoansSubscription = {
  onCreateNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNonLoansSubscription = {
  onUpdateNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNonLoansSubscription = {
  onDeleteNonLoans?:  {
    __typename: "NonLoans",
    id: string,
    senderID: string,
    recId: string,
    amount: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgentSubscription = {
  onCreateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentSubscription = {
  onUpdateAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentSubscription = {
  onDeleteAgent?:  {
    __typename: "Agent",
    phonecontact: string,
    nationalid: string,
    name: string,
    ttlEarnings: number,
    pw: string,
    email: string,
    sagentregno: string,
    TtlFltIn: number,
    TtlFltOut: number,
    floatBal: number,
    latitude: number,
    longitude: number,
    agentEarningBal: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatPurchaseSubscription = {
  onCreateFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatPurchaseSubscription = {
  onUpdateFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatPurchaseSubscription = {
  onDeleteFloatPurchase?:  {
    __typename: "FloatPurchase",
    id?: string | null,
    agentphone: string,
    amount: number,
    transactId: string,
    bankAdminID: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatAddSubscription = {
  onCreateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloatAddSubscription = {
  onUpdateFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloatAddSubscription = {
  onDeleteFloatAdd?:  {
    __typename: "FloatAdd",
    id: string,
    withdrawerid: string,
    amount: number,
    agentPhonecontact: string,
    sagentId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFloatReductionSubscription = {
  onCreateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFloatReductionSubscription = {
  onUpdateFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFloatReductionSubscription = {
  onDeleteFloatReduction?:  {
    __typename: "FloatReduction",
    id: string,
    amount: number,
    depositerid: string,
    agContact: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAgentWithdrawalsSubscription = {
  onCreateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentWithdrawalsSubscription = {
  onUpdateAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentWithdrawalsSubscription = {
  onDeleteAgentWithdrawals?:  {
    __typename: "AgentWithdrawals",
    id: string,
    agentPhone: string,
    bankAdminId: string,
    Amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSAgentSubscription = {
  onCreateSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSAgentSubscription = {
  onUpdateSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSAgentSubscription = {
  onDeleteSAgent?:  {
    __typename: "SAgent",
    id: string,
    saNationalid: string,
    name: string,
    phonecontact: string,
    pw: string,
    TtlEarnings: number,
    actvMFNdog: number,
    InctvMFNdog: number,
    email: string,
    saBalance: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSAgentWithdrawalsSubscription = {
  onCreateSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSAgentWithdrawalsSubscription = {
  onUpdateSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSAgentWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSAgentWithdrawalsSubscription = {
  onDeleteSAgentWithdrawals?:  {
    __typename: "SAgentWithdrawals",
    id: string,
    saId: string,
    amount: number,
    bankAdmnId: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBankAdminSubscription = {
  onCreateBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBankAdminSubscription = {
  onUpdateBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBankAdminSubscription = {
  onDeleteBankAdmin?:  {
    __typename: "BankAdmin",
    nationalid: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    pw: string,
    BankAdmBal: number,
    email: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBankAdmWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBankAdmWithdrawalsSubscription = {
  onCreateBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBankAdmWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBankAdmWithdrawalsSubscription = {
  onUpdateBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBankAdmWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBankAdmWithdrawalsSubscription = {
  onDeleteBankAdmWithdrawals?:  {
    __typename: "BankAdmWithdrawals",
    id: string,
    bankAdmNatId: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvocateSubscription = {
  onCreateAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvocateSubscription = {
  onUpdateAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvocateSubscription = {
  onDeleteAdvocate?:  {
    __typename: "Advocate",
    advregnu: string,
    nationalid: string,
    pwd: string,
    name: string,
    phonecontact: string,
    TtlEarnings: number,
    advBal: number,
    email: string,
    officeLoc: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdvocateWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAdvocateWithdrawalsSubscription = {
  onCreateAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdvocateWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAdvocateWithdrawalsSubscription = {
  onUpdateAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdvocateWithdrawalsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAdvocateWithdrawalsSubscription = {
  onDeleteAdvocateWithdrawals?:  {
    __typename: "AdvocateWithdrawals",
    id: string,
    bankAdmnId: string,
    advregnu: string,
    amount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    AdminId: string,
    phoneContact: string,
    companyEmail: string,
    termsNconditions: string,
    alert: string,
    about: string,
    policy: string,
    privacy: string,
    recom: string,
    pw1: string,
    pw2: string,
    agentwithdrawalFee: number,
    agentCom: number,
    sagentCom: number,
    companyCom: number,
    AdvCom: number,
    bankAdminCom: number,
    sawithdrawalFee: number,
    advuserwithdrawalFee: number,
    bankAdmuserwithdrawalFee: number,
    userLoanTransferFee: number,
    userTransferFee: number,
    userClearanceFee: number,
    ttlNonLonssRecSM: number,
    ttlNonLonssSentSM: number,
    ttlNonLonssRecChm: number,
    ttlNonLonssSentChm: number,
    companyEarningBal: number,
    companyEarning: number,
    agentEarningBal: number,
    agentEarning: number,
    saEarningBal: number,
    saEarning: number,
    AdvEarningBal: number,
    AdvEarning: number,
    admEarningBal: number,
    admEarning: number,
    ttlUsrDep: number,
    ttlUserWthdrwl?: number | null,
    agentFloatIn: number,
    agentFloatOut: number,
    ttlActiveUsers: number,
    ttlInactvUsrs: number,
    ttlKFNdgActv: number,
    ttlKFNdgInActv: number,
    ttlKNdgBLStts: number,
    ttlKFKbwActv: number,
    ttlKFKbwInActv: number,
    ttlKKbwBLStts: number,
    ttlKFAdvActv: number,
    ttlKFAdvInActv: number,
    ttlKAdvBLStts: number,
    ttlKFAdmActv: number,
    ttlKFAdmInActv: number,
    ttlKAdmBLStts: number,
    ttlSMLnsInAmtCov: number,
    ttlChmLnsInAmtCov: number,
    ttlSellerLnsInAmtCov: number,
    ttlSMLnsInActvAmtCov: number,
    ttlChmLnsInActvAmtCov: number,
    ttlSellerLnsInActvAmtCov: number,
    ttlSMLnsInClrdAmtCov: number,
    ttlChmLnsInClrdAmtCov: number,
    ttlSellerLnsInClrdAmtCov: number,
    ttlSMLnsInBlAmtCov: number,
    ttlChmLnsInBlAmtCov: number,
    ttlSellerLnsInBlAmtCov: number,
    ttlSMLnsInTymsCov: number,
    ttlChmLnsInTymsCov: number,
    ttlSellerLnsInTymsCov: number,
    ttlSMLnsInActvTymsCov: number,
    ttlChmLnsInActvTymsCov: number,
    ttlSellerLnsInActvTymsCov: number,
    ttlSMLnsInClrdTymsCov: number,
    ttlChmLnsInClrdTymsCov: number,
    ttlSellerLnsInClrdTymsCov: number,
    ttlSMLnsInBlTymsCov: number,
    ttlChmLnsInBlTymsCov: number,
    ttlSellerLnsInBlTymsCov: number,
    ttlCompTrnsfrEarningsCov: number,
    ttlCompBLClrncEarningsCov: number,
    ttlSMLnsInAmtNonCov: number,
    ttlChmLnsInAmtNonCov: number,
    ttlSellerLnsInAmtNonCov: number,
    ttlSMLnsInActvAmtNonCov: number,
    ttlChmLnsInActvAmtNonCov: number,
    ttlSellerLnsInActvAmtNonCov: number,
    ttlSMLnsInClrdAmtNonCov: number,
    ttlChmLnsInClrdAmtNonCov: number,
    ttlSellerLnsInClrdAmtNonCov: number,
    ttlSMLnsInBlAmtNonCov: number,
    ttlChmLnsInBlAmtNonCov: number,
    ttlSellerLnsInBlAmtNonCov: number,
    ttlSMLnsInTymsNonCov: number,
    ttlChmLnsInTymsNonCov: number,
    ttlSellerLnsInTymsNonCov: number,
    ttlSMLnsInActvTymsNonCov: number,
    ttlChmLnsInActvTymsNonCov: number,
    ttlSellerLnsInActvTymsNonCov: number,
    ttlSMLnsInClrdTymsNonCov: number,
    ttlChmLnsInClrdTymsNonCov: number,
    ttlSellerLnsInClrdTymsNonCov: number,
    ttlSMLnsInBlTymsNonCov: number,
    ttlChmLnsInBlTymsNonCov: number,
    ttlSellerLnsInBlTymsNonCov: number,
    ttlCompTrnsfrEarningsNonCov: number,
    ttlCompBLClrncEarningsNonCov: number,
    ttlCompCovEarnings: number,
    maxInterestSM: number,
    maxInterestCredSllr: number,
    maxInterestGrp: number,
    totalLnsRecovered: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCovCreditSellerSubscription = {
  onCreateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCovCreditSellerSubscription = {
  onUpdateCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCovCreditSellerSubscription = {
  onDeleteCovCreditSeller?:  {
    __typename: "CovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    advregnu: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNonCovCreditSellerSubscription = {
  onCreateNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNonCovCreditSellerSubscription = {
  onUpdateNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNonCovCreditSellerSubscription = {
  onDeleteNonCovCreditSeller?:  {
    __typename: "NonCovCreditSeller",
    id: string,
    itemName: string,
    itemSerialNumber?: string | null,
    buyerContact: string,
    sellerContact: string,
    buyerID: string,
    sellerID: string,
    amountSold: number,
    amountexpectedBack: number,
    amountRepaid: number,
    repaymentPeriod: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    grpContact: string,
    signitoryContact: string,
    SignitoryNatid: string,
    signitoryName: string,
    grpName: string,
    signitoryPW: string,
    grpEmail: string,
    grpBal: number,
    ttlGrpMembers: number,
    description?: string | null,
    ttlNonLonsRecChm: number,
    ttlNonLonsSentChm: number,
    ttlDpst: number,
    ttlWthdrwn: number,
    TtlActvLonsTmsLnrChmCov: number,
    TtlActvLonsAmtLnrChmCov: number,
    TtlBLLonsTmsLnrChmCov: number,
    TtlBLLonsAmtLnrChmCov: number,
    TtlClrdLonsTmsLnrChmCov: number,
    TtlClrdLonsAmtLnrChmCov: number,
    TtlActvLonsTmsLnrChmNonCov: number,
    TtlActvLonsAmtLnrChmNonCov: number,
    TtlBLLonsTmsLnrChmNonCov: number,
    TtlBLLonsAmtLnrChmNonCov: number,
    TtlClrdLonsTmsLnrChmNonCov: number,
    TtlClrdLonsAmtLnrChmNonCov: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGrpMembersSubscription = {
  onCreateGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGrpMembersSubscription = {
  onUpdateGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGrpMembersSubscription = {
  onDeleteGrpMembers?:  {
    __typename: "GrpMembers",
    id: string,
    groupContact: string,
    memberContact: string,
    memberNatId: string,
    acBal: number,
    AcStatus: Status,
    loanStatus: Status,
    blStatus: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCvrdGroupLoansSubscription = {
  onCreateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCvrdGroupLoansSubscription = {
  onUpdateCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCvrdGroupLoansSubscription = {
  onDeleteCvrdGroupLoans?:  {
    __typename: "CvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    advRegNu: string,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNonCvrdGroupLoansSubscription = {
  onCreateNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNonCvrdGroupLoansSubscription = {
  onUpdateNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNonCvrdGroupLoansSubscription = {
  onDeleteNonCvrdGroupLoans?:  {
    __typename: "NonCvrdGroupLoans",
    id: string,
    grpContact: string,
    loaneeID: string,
    repaymentPeriod: number,
    amountGiven: number,
    amountExpectedBack: number,
    amountRepaid: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupNonLoansSubscription = {
  onCreateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupNonLoansSubscription = {
  onUpdateGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupNonLoansSubscription = {
  onDeleteGroupNonLoans?:  {
    __typename: "GroupNonLoans",
    id: string,
    grpContact: string,
    recipientId: string,
    amountSent: number,
    description?: string | null,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGrpMembersContributionSubscription = {
  onCreateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGrpMembersContributionSubscription = {
  onUpdateGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGrpMembersContributionSubscription = {
  onDeleteGrpMembersContribution?:  {
    __typename: "GrpMembersContribution",
    id: string,
    memberId: string,
    grpContact: string,
    contriAmount: number,
    status: Status,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
