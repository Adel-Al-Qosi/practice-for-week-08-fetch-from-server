export function getAllDogs() {
  // Your code here
  const url = "/dogs";
  const headers = { "Content-Type": "text/html" };
  const body = new URLSearchParams({
    key: "value",
  });
  const options = {
    method: "GET",
    headers: headers,
    body: body,
  };

  return fetch(
    url,
    new URLSearchParams({
      method: "GET",
      headers: headers,
    })
  );
}

export function getDogNumberTwo() {
  // Your code here

  return fetch(
    "/dogs/2",
    new URLSearchParams({
      method: "GET",
      headers: { "Content-Type": "text/html" },
    })
  );
}

export function postNewDog() {
  // Your code here
  return fetch(
    "/dogs/new",
    new URLSearchParams({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
  );
}

export function postNewDogV2(name, age) {
  const url = "/dogs";
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = new URLSearchParams({
    name: name,
    age: age,
  });
  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };
  return fetch(url, options);
}

export function deleteDog(id) {
  const url = `/dogs/${id}/delete`;
  const headers = { "AUTH": "ckyut5wau0000jyv5bsrud90y", };
  // const body = new URLSearchParams({
  //   id: id
  // });
  const options = {
    method: "POST",
    headers: headers,
    //body: body,
  };
  return fetch(url, options);
}
