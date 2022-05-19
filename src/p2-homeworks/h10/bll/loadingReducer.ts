
export type loadingType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingType): typeof initState=> { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean):loadingType => ({ type: 'CHANGE_LOADING', isLoading}) // fix any