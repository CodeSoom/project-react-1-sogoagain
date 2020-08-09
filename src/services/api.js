export async function fetchIdea() {
  const url = `${process.env.API_SERVER_ORIGIN}/api/idea`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postItem(item) {
  const url = `${process.env.API_SERVER_ORIGIN}/api/ideas/items`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
}
