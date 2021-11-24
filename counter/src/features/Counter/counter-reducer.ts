export enum oddOrEvenNumber {
    oddNumber = 1,
    evenNumber = 2,
}

type InitialStateType = {
    value: number
    startValue: number
    oddOrEven: oddOrEvenNumber
}

type ActionType =
    | ReturnType<typeof resetCount>
    | ReturnType<typeof incrementCount>
    | ReturnType<typeof decrementCount>
    | ReturnType<typeof setOddOrEven>

const initialState: InitialStateType = {
    value: 0,
    startValue: 0,
    oddOrEven: oddOrEvenNumber.evenNumber,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "RESET-COUNT":
            return {
                ...state,
                value: state.startValue
            }
        case "INCREMENT-COUNT":
            return {
                ...state,
                value: state.value + 1
            }
        case "DECREMENT-COUNT":
            return {
                ...state,
                value: state.value - 1
            }
        case "SET-ODD-OR-EVEN":
            return {
                ...state,
                oddOrEven: action.value
            }
        default:
            return state
    }
}


export const resetCount = () => ({type: "RESET-COUNT"} as const)
export const incrementCount = () => ({type: "INCREMENT-COUNT"} as const)
export const decrementCount = () => ({type: "DECREMENT-COUNT"} as const)
export const setOddOrEven = (value:oddOrEvenNumber) => ({type: "SET-ODD-OR-EVEN", value} as const)


