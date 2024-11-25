export function transformFormData(formData: FormData) {
  return {
    title: formData.get("title"),
    company: formData.get("company"),
    role: formData.get("role"),
    description: formData.get("description"),
    startDate: new Date(formData.get("startDate") as string).toISOString(),
    endDate: new Date(formData.get("endDate") as string).toISOString(),
  };
}
