FROM mcr.microsoft.com/devcontainers/python:3.10

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install latest Node.js (using n)
RUN curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | bash - && \
    n latest && \
    apt-get install -y nodejs

# Set up work directory
WORKDIR /workspace

# Expose backend & frontend ports
EXPOSE 5000 5173 5174
