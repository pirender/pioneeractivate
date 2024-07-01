"use server";

export default async function phraseAction(phrase: string) {
  // Get the data off the form

  //    Send to our api route
  const res = await fetch("http://localhost:3000/api/phrase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phrase }),
  });

  const json = await res.json();
  console.log('json', json);

  // Redirect to login if success
  if (res.ok) {
    return json.message;
  } else {
    return json.error;
  }
}
