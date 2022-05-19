import {UserType} from "../HW8";

export type ActionType = {type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => a.name > b.name ? 1 : -1 )
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(f => f.age >= action.payload)
        }
        default: return state
    }
}