#!/usr/bin/env node

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import pkg from "fs-extra";
import readline from "readline";
import fs from "fs";
import { exec } from "child_process";
import chalk from "chalk";

const { existsSync, copy } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  rl.question(chalk.blue("Enter your project name: "), async (projectName) => {
    const targetPath = projectName || "my-vite-project"; 
    const templateDir = resolve(__dirname, "react-v1");

    console.log(chalk.green(`Creating a new project in ${targetPath}...`));

    if (existsSync(targetPath)) {
      console.error(chalk.red("Directory already exists. Please choose a different name."));
      process.exit(1);
    }

    try {
      await copy(templateDir, targetPath);
      console.log(chalk.green("Project files copied!"));

      // Create .gitignore file
      const gitignoreContent = `
node_modules
pnpm-lock.yaml
package-lock.json
yarn.lock
`.trim();

      fs.writeFileSync(resolve(targetPath, '.gitignore'), gitignoreContent);
      console.log(chalk.green(".gitignore file created!"));

      // Initialize a new Git repository
      exec(`git init`, { cwd: targetPath }, (err) => {
        if (err) {
          console.error(chalk.red("Error initializing git repository:"), err);
          process.exit(1);
        }

        console.log(chalk.green("Git repository initialized!"));

        process.chdir(targetPath);

        console.log(chalk.green("Project setup complete!"));
        console.log(chalk.yellow(`To start your project, run:
          cd ${targetPath}
          npm install
          npm run dev`));
      });
    } catch (err) {
      console.error(chalk.red("Error creating project:"), err);
      process.exit(1);
    }

    rl.close();
  });
}

init();
