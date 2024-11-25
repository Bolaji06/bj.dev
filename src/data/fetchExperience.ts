const API = process.env.BASE_API_ENDPOINT;

export async function getExperiences() {
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            tags: ["experience"]
        }
    }
  try {
    const response = await fetch(`${API}/experience`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return "Something went wrong "+ error.message; 
    }
  }
}

export async function getExperience(title: string){
  const options = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch(`${API}/experience/${title}`, options);
    const data = response.json();

    return data;

  }catch(error){
    if(error instanceof Error){
      return "Something went " + error.message;
    }
  }
}
