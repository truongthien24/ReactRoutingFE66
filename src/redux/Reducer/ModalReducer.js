import React from 'react'
import Login from '../../Pages/Login/Login'

const stateDefault = {
    Component: Login,
}

export const ModalReducer = (state = stateDefault, action) => {
    switch(action.type) {

        case 'OPEN_MODAL': {
            state.Component = action.Component
            return {...state}
        }
        default: return state
    }
}