import { IExperience, IProject, IUser } from "@/definition/definition";
import { addBugBusterSchema, adminAuthSchema } from "@/definition/validation";


/**
 * Experience formData payload
 * @param {FormData} formData payload
 * @returns {IExperience} Experience data
 */
export function experienceFormData(formData: FormData): IExperience {
  return {
    title: formData.get("title")?.toString() || "",
    company: formData.get("company")?.toString() || "",
    role: formData.get("role")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    startDate: new Date(formData.get("startDate") as string).toISOString(),
    endDate: new Date(formData.get("endDate") as string).toISOString(),
  };
}

/**
 * Project FormData payload
 * @param {FormData} formData
 * @returns {IProject}
 */
export function projectFormData(formData: FormData): IProject {
  return {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    url: formData.get("projectUrl")?.toString() || "",
    thumbnail: formData.get("thumbnail")?.toString() || "",
    githubUrl: formData.get("githubUrl")?.toString() || "",
    stacks: [formData.get("stacks")?.toString() || ""],
    about: formData.get("about")?.toString() || "",
  };
}

/**
 * User FormData payload
 * @param formData - FormData values
 * @returns {IUser}
 */
export function userFormData(formData: FormData): IUser {
  return {
    name: formData.get("name")?.toString() || "",
    bio: formData.get("bio")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    photo: formData.get("photo")?.toString() || "",
    links: [formData.get("links")?.toString() || ""],
  };
}

export function loginFormData(formData: FormData){

  const parseSchema = adminAuthSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parseSchema.success) {
    const validateFormInput = parseSchema.error.errors.map((issues) => {
      return {
        message: issues.message,
        path: issues.path,
      };
    });
    return validateFormInput[0];
  }
  return parseSchema;
}

export function addBugBusterFormData(formData: FormData){

  const parseBugBuster = addBugBusterSchema.safeParse({
    title: formData.get("title"),
    backstory: formData.get("backstory"),
    tags: new Array(formData.get("tags")),
    solution: formData.get("solution")
  });

  if(!parseBugBuster.success){
    return parseBugBuster.error.errors.map((issues) => {
      return {
        path: issues.path,
        message: issues.message
      }
    })
  }
  return parseBugBuster.data;
}
