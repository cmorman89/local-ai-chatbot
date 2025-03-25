import { useState, useEffect } from "react";

const useModelParser = (modelId) => {
  const [model, setModel] = useState({
    modelId: modelId,
    paramCount: null,
    arch: "other",
  });

  useEffect(() => {
    const parseModelTitle = (modelId) => {
      const patterns = {
        paramCount: /([0-9]+)b/,
        arch: /(gemma|llama|grok|mistral|mathstral|phi|claude|deepseek|qwen)/,
      };

      const parts = modelId.split("_");
      let parsedModel = { modelId, paramCount: null, arch: "other" };

      for (const part of parts) {
        for (const key in patterns) {
          const match = part.match(patterns[key]);
          if (match) {
            parsedModel[key] = match[1];
          }
        }
      }

      setModel(parsedModel);
    };

    parseModelTitle(modelId);
  }, [modelId]);

  return model;
};

export default useModelParser;
