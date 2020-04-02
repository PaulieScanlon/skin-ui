import { gql } from "apollo-boost"

export const GET_THEMES_BY_USER = gql`
  query GetThemesByUserQuery($user_id: String!) {
    getThemesByUser(user_id: $user_id) {
      ref
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_is_private
      theme_object
    }
  }
`

export const GET_ALL_THEMES = gql`
  query GetAllThemesQuery($theme_is_private: Boolean!) {
    getAllThemes(theme_is_private: $theme_is_private) {
      ref
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_is_private
      theme_object
    }
  }
`

export const GET_THEME_BY_ID = gql`
  query GetThemeByIdQuery($theme_id: String!) {
    getThemeById(theme_id: $theme_id) {
      ref
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_is_private
      theme_object
    }
  }
`

export const DELETE_THEME_BY_ID = gql`
  mutation DeleteThemeByIdMutation($theme_id: String!) {
    deleteThemeById(theme_id: $theme_id) {
      ref
    }
  }
`

export const UPDATE_THEME_BY_ID = gql`
  mutation UpdateThemeByIdMutation(
    $theme_id: String!
    $theme_name: String!
    $theme_description: String!
    $theme_style: String!
    $theme_object: String!
  ) {
    updateThemeById(
      theme_id: $theme_id
      theme_name: $theme_name
      theme_description: $theme_description
      theme_style: $theme_style
      theme_object: $theme_object
    ) {
      ref
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_object
    }
  }
`

export const FORK_THEME_WITH_ID = gql`
  mutation ForkThemeWithIdMutation(
    $user_id: String!
    $theme_author: String!
    $theme_name: String!
    $theme_description: String!
    $theme_style: String!
    $theme_object: String!
  ) {
    forkThemeWithId(
      user_id: $user_id
      theme_author: $theme_author
      theme_name: $theme_name
      theme_description: $theme_description
      theme_style: $theme_style
      theme_object: $theme_object
    ) {
      ref
      user_id
      theme_author
      theme_name
      theme_description
      theme_style
      theme_object
    }
  }
`
