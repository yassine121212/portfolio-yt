import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }
  
    const data = await res.json();


    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
  } catch (error) {
    console.error("Error fetching pageInfo:", error);
    // Handle the error gracefully, e.g., by providing default data or rethrowing it
    throw error; // Rethrow the error to propagate it up the call stack
  }
};
