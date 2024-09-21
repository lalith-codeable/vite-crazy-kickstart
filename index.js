#!/usr/bin/env node

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import pkg from "fs-extra";
import readline from "readline";

const { existsSync, copy } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  rl.question("Enter your project name: ", async (projectName) => {
    const targetPath = projectName || "my-vite-project"; 
    const templateDir = resolve(__dirname, "react-v1");

    console.log(`Creating a new project in ${targetPath}...`);

    if (existsSync(targetPath)) {
      console.error("Directory already exists. Please choose a different name.");
      process.exit(1);
    }

    try {
      await copy(templateDir, targetPath);
      console.log("Project files copied!");

      process.chdir(targetPath);

      console.log("Project setup complete!");
      console.log(`To start your project, run:
        cd ${targetPath}
        npm install
        npm run dev`);
    } catch (err) {
      console.error("Error creating project:", err);
      process.exit(1);
    }

    rl.close();
  });
}

init();
