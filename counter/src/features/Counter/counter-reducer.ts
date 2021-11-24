
type InitialStateType = {

}

type ActionType = {}

const initialState={

}

export const counterReducer = (state:InitialStateType = initialState, action:ActionType):InitialStateType => {
    // @ts-ignore
    switch (action.type){
        default:
            return state
    }
}

