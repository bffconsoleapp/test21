const resolvers = {
    Query: {
        getCreditUnion: (_, { contractNumber }) =>
            sampleData.creditUnions.find(cu => cu.Contract_Number === contractNumber),
        getAllCreditUnions: () => sampleData.creditUnions
    },
    Mutation: {
        addCreditUnion: (_, { input }) => {
            const newCreditUnion = {
                ...input,
                Premium_Reports: [],
                Premium_Adjustments: [],
                Single_Premium_Certificate_Returns: []
            };
            sampleData.creditUnions.push(newCreditUnion);
            return newCreditUnion;
        },
        addPremiumReport: (_, { contractNumber, input }) => {
            const creditUnion = sampleData.creditUnions.find(
                cu => cu.Contract_Number === contractNumber
            );
            if (!creditUnion) {
                throw new Error("Credit Union not found.");
            }
            const newPremiumReport = { ...input, id: uuidv4() };
            creditUnion.Premium_Reports.push(newPremiumReport);
            return newPremiumReport;
        }
    }
};

export default resolvers;
