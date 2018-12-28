import React, { createContext, useReducer } from 'react'
import PT from 'prop-types'

export const AppContext = createContext()
export const AppConsumer = AppContext.Consumer

const initialState = {
  friends: [],
  // currentPersonId: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FRIENDS':
      return { ...state, friends: action.payload }
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.payload] }
    case 'REMOVE_FRIEND':
      return { ...state, friends: state.friends.filter((friend) => friend.id !== action.payload) }
    case 'UPDATE_FRIEND':
      return {
        ...state,
        friends: state.friends.map(
          (friend) => (friend.id === action.payload.id ? action.payload : friend),
        ),
      }
    case 'REMOVE_EMPTY_FRIENDS':
      return { ...state, friends: state.friends.filter((friend) => !!friend.name.trim()) }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export const setFriends = (friends) => ({ type: 'SET_FRIENDS', payload: friends })
export const addFriend = (friend) => ({ type: 'ADD_FRIEND', payload: friend })
export const removeFriend = (friendId) => ({ type: 'REMOVE_FRIEND', payload: friendId })
export const updateFriend = (updatedFriend) => ({ type: 'UPDATE_FRIEND', payload: updatedFriend })
export const removeEmptyFriends = () => ({ type: 'REMOVE_EMPTY_FRIENDS' })
export const reset = () => ({ type: 'RESET' })

export function AppProvider({ children }) {
  const value = useReducer(reducer, initialState)

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PT.node.isRequired,
}
