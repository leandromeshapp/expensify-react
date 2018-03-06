import moment from "moment"


export default [{
    id: "1",
    description: "Gum",
    note: "With sugar",
    amount: 100,
    createdAt: 0
}, {
    id: "2",
    description: "Rent",
    note: "Without sugar",
    amount: 200,
    createdAt: moment(0).subtract(4, "days").valueOf()
}, {
    id: "3",
    description: "Credit Card",
    note: "With chocolat",
    amount: 300,
    createdAt: moment(0).add(4, "days").valueOf()
}]