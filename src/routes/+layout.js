
/** @type {import('./$types').LayoutLoad} */
export const load = async (layout) => {
  console.log(layout)
  console.log(layout.url.toJSON())
	return { pathname: layout.url.pathname, searchParams: layout.url.searchParams };
};
