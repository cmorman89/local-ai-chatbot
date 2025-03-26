import { useState, useEffect } from "react";
import {
  Gemma,
  Meta,
  Mistral,
  Microsoft,
  Grok,
  DeepSeek,
  Claude,
  Qwen,
} from "@lobehub/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";

const useModelParser = (modelId) => {
  const [model, setModel] = useState({
    modelId,
    paramCount: null,
    arch: "other",
    Icon: () => <FontAwesomeIcon icon={faHexagonNodes} />,
    IconCombined: () => (
      <span className="text-gray-400">
        <FontAwesomeIcon icon={faHexagonNodes} />
        Other
      </span>
    ),
  });

  useEffect(() => {
    const parseModelId = (modelId) => {
      const patterns = {
        paramCount: /([0-9]+)b/,
        arch: /(gemma|llama|mistral|mathstral|phi|claude|deepseek|qwen)/,
      };

      const icons = {
        gemma: <Gemma.Color />,
        llama: <Meta.Color />,
        mistral: <Mistral.Color />,
        mathstral: <Mistral.Color />,
        phi: <Microsoft.Color />,
        claude: <Claude.Color />,
        deepseek: <DeepSeek.Color />,
        qwen: <Qwen.Color />,
      };

      const iconsCombined = {
        gemma: <Gemma.Combine type="color" />,
        llama: <Meta.Combine type="color" />,
        mistral: <Mistral.Combine type="color" />,
        mathstral: <Mistral.Combine type="color" />,
        phi: <Microsoft.Combine type="color" />,
        claude: <Claude.Combine type="color" />,
        deepseek: <DeepSeek.Combine type="color" />,
        qwen: <Qwen.Combine type="color" />,
      };

      const parts = modelId.split("_");
      let parsedModel = {
        modelId,
        paramCount: null,
        arch: "other",
        Icon: () => <FontAwesomeIcon icon={faHexagonNodes} />,
        IconCombined: () => (
          <span className="text-gray-400">
            <FontAwesomeIcon icon={faHexagonNodes} className="mr-1" />
            Other
          </span>
        ),
      };

      for (const part of parts) {
        for (const key in patterns) {
          const match = part.match(patterns[key]);
          if (match) {
            parsedModel[key] = match[1];
          }
        }
      }

      if (icons[parsedModel.arch]) {
        parsedModel.Icon = () => icons[parsedModel.arch];
      }
      if (iconsCombined[parsedModel.arch]) {
        parsedModel.IconCombined = () => iconsCombined[parsedModel.arch];
      }

      setModel(parsedModel);
    };

    parseModelId(modelId);
  }, [modelId]);

  return model;
};

export default useModelParser;
