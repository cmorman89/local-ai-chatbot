# { prompt: {Bot} } ChatBot UI

[![prompt:BOT](docs/images/cta.png)](https://cmorman89.github.io/local-ai-chatbot)

## Overview:

{ prompt: {Bot} } is a React-based web application that provides a user interface for interacting with a local LLM (Large Language Model) server using LM Studio as the backend. Built with a modern and highly-interactive UI, it allows a user to easily ask questions and review chat history like most chat interfaces. However, prompt:Bot gets its name from the ability to modify the system prompt on-the-fly, along with the user prompt. This gives more flexibility and control over the conversation, allowing the user to experiment with and fine-tune the model's responses.

### Try it yourself [here](https://cmorman89.github.io/local-ai-chatbot)!

## Features:

- Interact with a local LLM server (e.g., LM Studio)
- User and AI-styled chat bubbles with dynamic markdown rendering
- Conversational/contextual chat history
- Select a different model to load and use
- Select custom server endpoint
- Modify the system prompt on-the-fly
- Dark mode toggle for light/dark theme

## Screenshots:

### Chat Interface:

| ![Chat Window](docs/images/chat/chat-new.png) |  ![Chat with formatted reply](docs/images/chat/chat-resp.png)  |
| :-------------------------------------------: | :------------------------------------------------------------: |
|               _New chat prompt_               | _Chat with dynamic markdown rendering. Using `gemma-3-12b-it`_ |
|   ![Chat Window](docs/images/ui/light.png)    |     ![Chat with formatted reply](docs/images/ui/dark.png)      |
|                 _Light mode_                  |                          _Dark mode_                           |

---

### Styled Model Cards

|    ![Llama chat intro](docs/images/model-cards/llama.png)    |     ![Phi chat intro](docs/images/model-cards/phi.png)     |
| :----------------------------------------------------------: | :--------------------------------------------------------: |
|                      _Llama chat intro_                      |                      _Phi chat intro_                      |
|    ![Gemma chat intro](docs/images/model-cards/gemma.png)    | ![Mistral chat intro](docs/images/model-cards/mistral.png) |
|                      _Gemma chat intro_                      |                    _Mistral chat intro_                    |
| ![DeepSeek chat intro](docs/images/model-cards/deepseek.png) |    ![Qwen chat intro](docs/images/model-cards/qwen.png)    |
|                    _DeepSeek chat intro_                     |                     _Qwen chat intro_                      |
|   ![Claude chat intro](docs/images/model-cards/claude.png)   |    ![Groq chat intro](docs/images/model-cards/groq.png)    |
|                     _Claude chat intro_                      |                     _Groq chat intro_                      |
|   ![Unknown chat intro](docs/images/model-cards/other.png)   | ![Loading model card](docs/images/model-cards/loading.png) |

### Menus

|   ![Model Menu](docs/images/menus/model-list.png)    | ![System prompt menu](docs/images/menus/system-prompt.png) |
| :--------------------------------------------------: | :--------------------------------------------------------: |
|                _Model selection menu_                |                    _System prompt menu_                    |
| ![Connection Menu](docs/images/menus/connection.png) |                                                            |
|                  _Connection menu_                   |                                                            |
