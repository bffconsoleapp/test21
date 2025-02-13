```graphql
codegen-start
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
codegen-end
```

```javascript
codegen-start-resolver
const sampleData = {
  Credit_Unions: [
    {
      Contract_Number: "CU0001",
      Credit_Union_Name: "First Credit Union",
      Premium_Adjustment: [
        {
          Product_Name: "Product A",
          Report_Period: "2023-Q1",
          Status: "Completed",
          Last_Update: "2023-03-31",
          Period_Ending: "2023-03-31",
          Adjustment_Type_to_the_Credit_Union: "Type A",
          Comment: "Adjustment processed",
          Total_Borrower_Fees_: 300.0,
          CU_Retail_Rate: 1.5,
          Protected_Loan_Amount: 10000.0,
          Pay_Rate: 0.02,
          Premium_Due: 150.0,
          Total_Amount: 315.0,
        },
      ],
    },
  ],
};

const resolvers = {
  Query: {
    getCreditUnion: (_, { Contract_Number }) => {
      return sampleData.Credit_Unions.find(
        (cu) => cu.Contract_Number === Contract_Number
      );
    },
  },
  Mutation: {
    addPremiumAdjustment: (_, { contractNumber, input }) => {
      const creditUnion = sampleData.Credit_Unions.find(
        (cu) => cu.Contract_Number === contractNumber
      );

      if (creditUnion) {
        creditUnion.Premium_Adjustment.push(input);
        return input;
      }

      throw new Error("Credit Union not found");
    },
  },
};

export default resolvers;
codegen-end-resolver
```