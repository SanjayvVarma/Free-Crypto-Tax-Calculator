const INCOME_RANGES = [
    {
        id: 1,
        range: "$0 - $18,200",
        taxRate: "0%",
        TaxPercentage: 0,
    },
    {
        id: 2,
        range: "$18,201 - $45,000",
        taxRate: "Nil + 19% of excess over $18,200",
        TaxPercentage: 0.19,
    },
    {
        id: 3,
        range: "$45,001 - $120,000",
        taxRate: "$5,092 + 32.5% of excess over $45,000",
        TaxPercentage: 0.325,
    },
    {
        id: 4,
        range: "$120,001 - $180,000",
        taxRate: "$29,467 + 37% of excess over $120,000",
        TaxPercentage: 0.37,
    },
    {
        id: 5,
        range: "$180,001+",
        taxRate: "$51,667 + 45% of excess over $180,000",
        TaxPercentage: 0.45,
    },
];

export default INCOME_RANGES