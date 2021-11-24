type InitialStateType = {
    value: number
}

type ActionType =
    |ReturnType<typeof resetCount>
    |ReturnType<typeof incrementCount>
    |ReturnType<typeof decrementCount>

const initialState = {
    value: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "RESET-COUNT":
            return {
                ...state,
                value: 0
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
        default:
            return state
    }
}


export const resetCount = () => ({type: "RESET-COUNT"} as const)
export const incrementCount = () => ({type: "INCREMENT-COUNT"} as const)
export const decrementCount = () => ({type: "DECREMENT-COUNT"} as const)


