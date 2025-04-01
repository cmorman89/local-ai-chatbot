import { useState, useEffect } from "react";
import {
  Gemma,
  Meta,
  Mistral,
  Microsoft,
  DeepSeek,
  Claude,
  Qwen,
  Groq,
} from "@lobehub/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHexagonNodes,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const useModelParser = (modelId) => {
  const size = 56;
  const [model, setModel] = useState({
    modelId,
    paramCount: null,
    arch: "other",
    Icon: () => <FontAwesomeIcon icon={faHexagonNodes} />,
    IconMono: () => <FontAwesomeIcon icon={faHexagonNodes} />,
    IconCombined: () => (
      <span className="text-gray-400">
        <FontAwesomeIcon icon={faHexagonNodes} className="mr-1" />
        Other
      </span>
    ),
    IconCombinedLg: () => (
      <span className="text-gray-400 text-4xl">
        <FontAwesomeIcon icon={faHexagonNodes} className="mr-2" />
        Other
      </span>
    ),
    IconCombinedMonoLg: () => (
      <span className="text-gray-400 text-4xl">
        <FontAwesomeIcon icon={faHexagonNodes} className="mr-2" />
        Other
      </span>
    ),
    color: "#DCDCDC",
  });

  useEffect(() => {
    const parseModelId = (modelId) => {
      const patterns = {
        paramCount: /([0-9]+)b/,
        arch: /(gemma|llama|groq|mistral|mathstral|phi|claude|deepseek|qwen)/,
      };

      const icons = {
        gemma: <Gemma.Color />,
        groq: <Groq />,
        llama: <Meta.Color />,
        mistral: <Mistral.Color />,
        mathstral: <Mistral.Color />,
        phi: <Microsoft.Color />,
        claude: <Claude.Color />,
        deepseek: <DeepSeek.Color />,
        qwen: <Qwen.Color />,
      };

      const iconsMono = {
        gemma: <Gemma />,
        groq: <Groq />,
        llama: <Meta />,
        mistral: <Mistral />,
        mathstral: <Mistral />,
        phi: <Microsoft />,
        claude: <Claude.Color />,
        deepseek: <DeepSeek.Color />,
        qwen: <Qwen />,
      };

      const iconsCombined = {
        gemma: <Gemma.Combine type="color" />,
        groq: <Groq.Combine type="color" />,
        llama: <Meta.Combine type="color" />,
        mistral: <Mistral.Combine type="color" />,
        mathstral: <Mistral.Combine type="color" />,
        phi: <Microsoft.Combine type="color" />,
        claude: <Claude.Combine type="color" />,
        deepseek: <DeepSeek.Combine type="color" />,
        qwen: <Qwen.Combine type="color" />,
      };

      const iconsCombinedLg = {
        gemma: <Gemma.Combine type="color" size={size} />,
        groq: <Groq.Combine type="color" size={size} />,
        llama: <Meta.Combine type="color" size={size} />,
        mistral: <Mistral.Combine type="color" size={size} />,
        mathstral: <Mistral.Combine type="color" size={size} />,
        phi: <Microsoft.Combine type="color" size={size} />,
        claude: <Claude.Combine type="color" size={size} />,
        deepseek: <DeepSeek.Combine type="color" size={size} />,
        qwen: <Qwen.Combine type="color" size={size} />,
      };

      const iconsCombinedMonoLg = {
        gemma: <Gemma.Combine size={size} />,
        groq: <Groq.Combine size={size} />,
        llama: <Meta.Combine size={size} />,
        mistral: <Mistral.Combine size={size} />,
        mathstral: <Mistral.Combine size={size} />,
        phi: <Microsoft.Combine size={size} />,
        claude: <Claude.Combine size={size} />,
        deepseek: <DeepSeek.Combine size={size} />,
        qwen: <Qwen.Combine size={size} />,
      };

      const color = {
        gemma: Gemma.colorPrimary,
        groq: Groq.colorPrimary,
        llama: Meta.colorPrimary,
        mistral: Mistral.colorPrimary,
        mathstral: Mistral.colorPrimary,
        phi: Microsoft.colorPrimary,
        claude: Claude.colorPrimary,
        deepseek: DeepSeek.colorPrimary,
        qwen: Qwen.colorPrimary,
      };

      const parts = modelId.split("_");
      let parsedModel = {
        modelId,
        paramCount: null,
        arch: "other",
        Icon: () => <FontAwesomeIcon icon={faHexagonNodes} />,
        IconMono: () => <FontAwesomeIcon icon={faHexagonNodes} />,
        IconCombined: () => (
          <span className="text-gray-400">
            <FontAwesomeIcon icon={faHexagonNodes} className="mr-1" />
            Other
          </span>
        ),
        IconCombinedLg: () => (
          <span className="text-gray-400 text-4xl">
            <FontAwesomeIcon icon={faHexagonNodes} className="mr-2" />
            Other
          </span>
        ),
        IconCombinedMonoLg: () => (
          <span className="text-gray-400 text-4xl">
            <FontAwesomeIcon icon={faHexagonNodes} className="mr-2" />
            Other
          </span>
        ),
        color: "#DCDCDC",
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
      if (iconsMono[parsedModel.arch]) {
        parsedModel.IconMono = () => iconsMono[parsedModel.arch];
      }
      if (iconsCombined[parsedModel.arch]) {
        parsedModel.IconCombined = () => iconsCombined[parsedModel.arch];
      }
      if (iconsCombinedLg[parsedModel.arch]) {
        parsedModel.IconCombinedLg = () => iconsCombinedLg[parsedModel.arch];
      }
      if (iconsCombinedMonoLg[parsedModel.arch]) {
        parsedModel.IconCombinedMonoLg = () =>
          iconsCombinedMonoLg[parsedModel.arch];
      }
      if (color[parsedModel.arch]) {
        parsedModel.color = color[parsedModel.arch];
      }

      setModel(parsedModel);
    };
    if (modelId) {
      parseModelId(modelId);
    } else {
      setModel({
        modelId: "No Model Selected",
        paramCount: null,
        arch: "none",
        Icon: () => <FontAwesomeIcon icon={faHexagonNodes} />,
        IconMono: () => <FontAwesomeIcon icon={faHexagonNodes} />,
        IconCombined: () => (
          <span className="text-red-700">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="mr-1 text-red-500"
            />
            None
          </span>
        ),
        IconCombinedLg: () => (
          <span className="text-red-600 text-4xl">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="mr-2 text-red-500"
            />
            No Model
          </span>
        ),
        IconCombinedMonoLg: () => (
          <span className="text-red-600 text-4xl">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="mr-2 text-red-500"
            />
            No Model
          </span>
        ),
        color: "#550000",
      });
    }
  }, [modelId]);

  return model;
};

export default useModelParser;
