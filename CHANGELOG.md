# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Basic project structure with React and Node.js setup, Docker environment and project build tasks for VSCode.
- `README.md` file with project overview, `CHANGELOG.md` file for tracking changes, `requirements.txt` for Python dependencies.
- {prompt:Bot} logo header bar.
- Main content window that fades content to white before the bottom screen edge.
- Animated menu sidebar with FontAwesome icons for home, chat, history, profile, and settings (UI only).
- Hooks for fetching data from API and fetching streaming chat response from API.
- Chat window with user and AI-styled chat bubbles.
- Connect to local LLM server and to get a streaming response and single conversation history.
- Response renders markdown into HTML and React components for a dynamic chat experience.
- Chat input box with animated send and edit system prompt buttons, responsive opacity.
- Chat input buttons dynamically change based on the current state of the chat.
- Button to cancel chat generation on client- and server-side.
- Model selection menu with logos (Claude, Mistral, DeepSeek, Qwen, Llama, Phi, Grok, Gemma)
- Server selection menu with http/https, server, and port input fields.
