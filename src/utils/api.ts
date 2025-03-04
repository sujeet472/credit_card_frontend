const API_URL = "http://localhost:3000/api/v1";

export const apiRequest = async (endpoint: string, method = "GET", body?: any) => {
  const token = localStorage.getItem("token");

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Attach JWT token in Authorization header
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}/${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  return data;
};
