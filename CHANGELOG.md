# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup with React and Node.js, including Docker environment and build tasks for VSCode.
- Documentation files: `README.md` for project overview, `CHANGELOG.md` for tracking changes, and `requirements.txt` for Python dependencies.
- {prompt:Bot} logo header bar and main content window with fade-to-white effect at the bottom edge.
- Animated sidebar menu with FontAwesome icons for navigation (home, chat, history, profile, settings).
- Hooks for API data fetching and streaming chat responses.
- Chat window with user and AI-styled chat bubbles, supporting markdown rendering into HTML and React components.
- Integration with a local LLM server for streaming responses and conversation history retrieval.
- Chat input box with animated send and edit buttons, responsive opacity, and dynamic state-based behavior.
- Cancel button for chat generation, functional on both client and server sides.
- Model selection menu with logos for various models (Claude, Mistral, DeepSeek, Qwen, Llama, Phi, Gemma).
- Server selection menu with fields for protocol, server, and port configuration.
- Styled chat intro displaying the selected model or indicating no model selection.
- Dynamic chat clear button that appears when chat history is present.
- On-the-fly system prompt modification during chat sessions.
- Loading spinner for chat generation and model selection.
- Server and model selections persisted across sessions using local storage.
- Error handling for failure to load a list of models.
- Dark mode toggle functionality, allowing users to switch between light and dark themes.