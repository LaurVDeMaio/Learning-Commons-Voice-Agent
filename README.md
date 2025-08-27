
# Character Agent Application for the Pace University Learning Commons

## Prerequisites

- Node.js 18 or higher

## Project Structure

The application has two main parts:

- **server**: Manages communication with Inworld's LLM, STT, and TTS services.

- **client**: Provides the user interface for interacting with the AI agent.

## API Key Setup

To get your API key, follow these steps:

- Log in to your Inworld Studio account.

- Go to the "Integrations" page on the left-hand side.

- Under the "API Keys" section, click "+Generate new key".

- Copy the Basic (Base64) authorization signature.

Copy `server/.env-sample` to a new file `server/.env` and fill all required variables. Some variables are optional and can be commented out to use the default.

### Install Dependencies and run the application

Install dependencies for both server and client:

```bash
# Install server dependencies
cd server
npm install

# Start the server
npm start
```

The server will start on port 4000.

```bash
# Install client dependencies
cd ../client
yarn install
yarn start
```

The client will run on port 3000 and should automatically open in your default browser. If port 3000 is already in use, the next available port will be used.

## Using the Application

1. Configure the agent on the UI:

   - Enter your name.

   - Set the agent's name.

   - Provide a description for the agent.

   - Define the agent's motivation.

2. Click "Start" to begin the conversation.

3. Interact with the agent:

   - Type text in the input field and press Enter or click the send button.

   - Click the microphone icon to use voice input. You need to click the microphone icon again to stop the recording. Then you will receive a response from the agent.

   - Click the copy icon to copy the conversation to the clipboard.

## Troubleshooting

- If you have connection issues, make sure both the server (on port 4000) and client are running.

- The server application requires the Inworld Runtime. Remember to install it from the provided package or a local link. The client does not need this framework.

- Verify your API key is valid and correctly configured in the .env file.

- For voice input issues, confirm your browser has microphone permissions.
