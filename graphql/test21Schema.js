const { gql } = require('apollo-server');

const typeDefs = gql`
  type Credit_Union {
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Report: [Premium_Report]
    Premium_Adjustment: [Premium_Adjustment]
    Single_Premium_Certificate_Return: [Single_Premium_Certificate_Return]
  }
  
  type Premium_Report {
    # Add fields for Premium_Report when defined
  }
  
  type Premium_Adjustment {
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }
  
  type Single_Premium_Certificate_Return {
    # Add fields for Single_Premium_Certificate_Return when defined
  }

  input PremiumAdjustmentInput {
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Query {
    getCreditUnion(Contract_Number: String!): Credit_Union
  }

  type Mutation {
    addPremiumAdjustment(contractNumber: String!, input: PremiumAdjustmentInput!): Premium_Adjustment
  }
`;

export default typeDefs;