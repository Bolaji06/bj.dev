export function experienceFormData(formData: FormData) {
  return {
    title: formData.get("title"),
    company: formData.get("company"),
    role: formData.get("role"),
    description: formData.get("description"),
    startDate: new Date(formData.get("startDate") as string).toISOString(),
    endDate: new Date(formData.get("endDate") as string).toISOString(),
  };
}

export function projectFormData(formData: FormData) {
  return {
    title: formData.get("title"),
    description: formData.get("description"),
    url: formData.get("projectUrl"),
    thumbnail: formData.get("thumbnail"),
    githubUrl: formData.get("githubUrl"),
    stacks: new Array(formData.get("stacks")),
    about: formData.get("about"),
  };
}
