import { useState } from "react";

const useLoadModel = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadModel = async (modelName) => {
    setLoading(true);
    setResponse(null);

    try {
      const response = await fetch(`${url}/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: modelName,
          messages: "Hello world",
          max_tokens: 1,
          stream: false,
        }),
      });
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, loadModel };
};

export default useLoadModel;
