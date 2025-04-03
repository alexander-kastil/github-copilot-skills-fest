# Base image with .NET 9
FROM mcr.microsoft.com/devcontainers/dotnet:9.0

# Build arguments and environment variables
ENV TZ=UTC
ENV NODE_VERSION=20.12.2

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Install Angular CLI 19
RUN npm install -g @angular/cli@19

# Install SQLite for database operations
RUN apt-get update \
    && apt-get install -y sqlite3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install GitHub CLI for repository operations
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install -y gh \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /workspace

# Configure workspace permissions
RUN mkdir -p /workspace/src/fitness-api/obj \
    && chmod -R 777 /workspace

# Configure timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Verify installations
RUN echo "Installed versions:" \
    && dotnet --version \
    && node --version \
    && npm --version \
    && ng version \
    && sqlite3 --version \
    && gh --version