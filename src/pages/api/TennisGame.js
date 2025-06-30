
export async function launchGame(gamePoints) {


  const params = new URLSearchParams({ gamePoints });
  const res = await fetch(`http://localhost:8080/api/tennis/game?${params.toString()}`);
  const data = await res.json();

  return data;
}
