const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Srikar%20Empati&g=srikarnarayanempati&x=srikarempati01&l=srikarempati&i=https%3A%2F%2Fi.postimg.cc%2FHnRrXBmw%2Fsrikar.jpg&p=https%3A%2F%2Fsrikarempati.vercel.app%2F&z=0e416";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
