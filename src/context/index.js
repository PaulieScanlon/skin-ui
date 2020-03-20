import React, { createContext, useReducer } from "react"

// import defaultThemeObject from "../utils/defaultThemeObject"

import {
  MARKDOWN,
  COMPONENTS,
  UPDATE_DEFAULT_THEME_OBJECT,
  SET_IS_USER_LOGGED_IN,
  SET_IS_NAV_OPEN,
  SET_FULL_SCREEN,
  SET_IS_SOURCE_VISIBLE,
  SET_FILTER_CHILDREN,
  SET_IS_EDITOR_WIDTH_COLLAPSED,
  SET_IS_EDITOR_HEIGHT_COLLAPSED,
  SET_IS_SETTINGS_OPEN,
  SET_IS_USER_OWNER,
  SET_DATABASE_THEME_BY_ID,
} from "../utils/const"

const initialState = {
  // defaultThemeObject: defaultThemeObject,
  defaultThemeObject: {},
  databaseThemeById: {},
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
  isSettingsOpen: false,
  isUserOwner: false,
}

const reducer = (state, actions) => {
  switch (actions.type) {
    case UPDATE_DEFAULT_THEME_OBJECT:
      return { ...state, defaultThemeObject: actions.defaultThemeObject }

    case SET_IS_USER_LOGGED_IN:
      return { ...state, user: actions.user }

    case SET_IS_NAV_OPEN:
      return { ...state, isNavOpen: actions.isNavOpen }

    case SET_FULL_SCREEN:
      return { ...state, isFullScreen: !actions.isFullScreen }

    case SET_IS_SOURCE_VISIBLE:
      return { ...state, isSourceVisible: !actions.isSourceVisible }

    case SET_FILTER_CHILDREN:
      return {
        ...state,
        filterChildren: {
          ...state.filterChildren,
          [actions.filterChildren]: !state.filterChildren[
            actions.filterChildren
          ],
        },
      }
    case SET_IS_EDITOR_WIDTH_COLLAPSED:
      return {
        ...state,
        isEditorWidthCollapsed: !actions.isEditorWidthCollapsed,
      }

    case SET_IS_EDITOR_HEIGHT_COLLAPSED:
      return {
        ...state,
        isEditorHeightCollapsed: !actions.isEditorHeightCollapsed,
      }

    case SET_IS_SETTINGS_OPEN:
      return { ...state, isSettingsOpen: !actions.isSettingsOpen }

    case SET_IS_USER_OWNER:
      return { ...state, isUserOwner: actions.isUserOwner }

    case SET_DATABASE_THEME_BY_ID:
      return { ...state, databaseThemeById: actions.databaseThemeById }

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
