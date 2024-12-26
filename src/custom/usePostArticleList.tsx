import { useState, useEffect } from "react";

type Article = {
  User: string;
  Title: string;
  Time: string;
  Contents: string;
  Num: number;
};

type Input = {
  title: string;
  content: string;
  category: number;
  author: string;
  endsAt: string;
};

const usePostArticleList = ({
  title,
  content,
  category,
  author,
  endsAt,
}: Input) => {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url =
    "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/articles";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token", // Replace with a valid token or dynamic source
          },
          body: JSON.stringify({
            title: title,
            content: content,
            category: category,
            author: author,
            endsAt: endsAt,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: Article[] = await response.json(); // Type assertion for clarity
        setData(result);
      } catch (error) {
        setError("요청 실패!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  console.log(data, loading, error);

  return;
};

export default usePostArticleList;
