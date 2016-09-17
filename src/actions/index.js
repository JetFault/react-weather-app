export function setPageTitle(title) {
  return {
    type: 'SET_PAGE_TITLE',
    title: title
  };
}

export function activateEditPage(isActive) {
  return {
    type: 'ACTIVATE_EDIT_PAGE',
    isActive
  };
}

export function toggleNavDrawer() {
  return {
    type: 'TOGGLE_NAV_DRAWER'
  };
}

/* Helper to fetchData from URL */
export function fetchData(url) {
  return fetch(url)
  .then(response =>
    response.json().then(json => ({ json, response }))
  )
  .then(({ json, response }) => { 
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  });
}
