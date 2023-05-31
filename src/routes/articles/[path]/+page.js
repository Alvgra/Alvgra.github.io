
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../../../lib/articles/${params.path}.svx`);

  const { title, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
  };
};
