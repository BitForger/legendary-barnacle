/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_user_pinnedItems_nodes_Gist {}

export interface GetProjects_user_pinnedItems_nodes_Repository_owner {
  /**
   * The username used to login.
   */
  login: string;
  id: string;
}

export interface GetProjects_user_pinnedItems_nodes_Repository_languages_nodes {
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface GetProjects_user_pinnedItems_nodes_Repository_languages {
  /**
   * A list of nodes.
   */
  nodes: (GetProjects_user_pinnedItems_nodes_Repository_languages_nodes | null)[] | null;
}

export interface GetProjects_user_pinnedItems_nodes_Repository {
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Identifies if the repository is private or internal.
   */
  isPrivate: boolean;
  /**
   * Indicates if the repository is unmaintained.
   */
  isArchived: boolean;
  /**
   * Identifies if the repository is a fork.
   */
  isFork: boolean;
  /**
   * The User owner of the repository.
   */
  owner: GetProjects_user_pinnedItems_nodes_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: GetProjects_user_pinnedItems_nodes_Repository_languages | null;
}

export type GetProjects_user_pinnedItems_nodes = GetProjects_user_pinnedItems_nodes_Gist | GetProjects_user_pinnedItems_nodes_Repository;

export interface GetProjects_user_pinnedItems {
  /**
   * A list of nodes.
   */
  nodes: (GetProjects_user_pinnedItems_nodes | null)[] | null;
}

export interface GetProjects_user_repositories_nodes_owner {
  /**
   * The username used to login.
   */
  login: string;
  id: string;
}

export interface GetProjects_user_repositories_nodes_languages_nodes {
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface GetProjects_user_repositories_nodes_languages {
  /**
   * A list of nodes.
   */
  nodes: (GetProjects_user_repositories_nodes_languages_nodes | null)[] | null;
}

export interface GetProjects_user_repositories_nodes {
  id: string;
  /**
   * Indicates if the repository has been locked or not.
   */
  isLocked: boolean;
  /**
   * Indicates if the repository is unmaintained.
   */
  isArchived: boolean;
  /**
   * Identifies if the repository is a fork.
   */
  isFork: boolean;
  /**
   * Identifies if the repository is a template that can be used to generate new repositories.
   */
  isTemplate: boolean;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The User owner of the repository.
   */
  owner: GetProjects_user_repositories_nodes_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: GetProjects_user_repositories_nodes_languages | null;
}

export interface GetProjects_user_repositories {
  /**
   * A list of nodes.
   */
  nodes: (GetProjects_user_repositories_nodes | null)[] | null;
}

export interface GetProjects_user {
  id: string;
  /**
   * A list of repositories and gists this profile owner has pinned to their profile
   */
  pinnedItems: GetProjects_user_pinnedItems;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetProjects_user_repositories;
}

export interface GetProjects {
  /**
   * Lookup a user by login.
   */
  user: GetProjects_user | null;
}
