// SET TEXT FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})


// SORT BY DATE
export const sortByDate = () => ({
    type: "SORT_BY_DATE"
})


// SORT BY AMOUNT
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})


// SORT_REVERSE
export const sortReverse = () => ({
    type: 'SORT_REVERSE',
  })


// SET START DATE
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})


// SET END DATE
export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})


// CLEAR ALL FILTERS
export const showAll = (clear) => ({
    type: "CLEAR_FILTERS",

})


// SET_MIN_AMOUNT
export const setMinAmount = minAmount => ({
    type: 'SET_MIN_AMOUNT',
    minAmount,
})
  

// SET_MAX_AMOUNT
export const setMaxAmount = maxAmount => ({
    type: 'SET_MAX_AMOUNT',
    maxAmount,
})
  