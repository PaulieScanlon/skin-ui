import React, { createContext, useReducer } from "react"

import { MARKDOWN, COMPONENTS } from "../utils/const"

const initialState = {
  user: null,
  isNavOpen: false,
  isFullScreen: false,
  isSourceVisible: false,
  filterChildren: {
    [MARKDOWN]: true,
    [COMPONENTS]: true,
  },
  isEditorWidthCollapsed: false,
  isEditorHeightCollapsed: true,
}

const reducer = (state, actions) => {
  switch (actions.type) {
    case "setIsUserLoggedIn":
      return { ...state, user: actions.user }

    case "setIsNavOpen":
      return { ...state, isNavOpen: actions.isNavOpen }

    case "setIsFullScreen":
      return { ...state, isFullScreen: !actions.isFullScreen }

    case "setIsSourceVisible":
      return { ...state, isSourceVisible: !actions.isSourceVisible }

    case "setFilterChildren":
      return {
        ...state,
        filterChildren: {
          ...state.filterChildren,
          [actions.filterChildren]: !state.filterChildren[
            actions.filterChildren
          ],
        },
      }
    case "setIsEditorWidthCollapsed":
      return {
        ...state,
        isEditorWidthCollapsed: !actions.isEditorWidthCollapsed,
      }

    case "setIsEditorHeightCollapsed":
      return {
        ...state,
        isEditorHeightCollapsed: !actions.isEditorHeightCollapsed,
      }

    default:
      return
  }
}

export const SkinContext = createContext(initialState)

export const SkinContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SkinContext.Provider value={{ state, dispatch }}>
      {children}
    </SkinContext.Provider>
  )
}
