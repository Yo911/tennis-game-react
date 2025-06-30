
export async function launchGame(gamePoints) {


  const params = new URLSearchParams({ gamePoints });
      console.log(`http://localhost:8080/api/tennis/game?${params.toString()}`);
  const res = await fetch(`http://localhost:8080/api/tennis/game?${params.toString()}`);
      console.log(res);
  const data = await res.json();

  return data;
}
