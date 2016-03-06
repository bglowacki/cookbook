export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function toggleNavigation(actualState) {
  return {
    type: TOGGLE_NAVIGATION,
    open: !actualState
  }
}