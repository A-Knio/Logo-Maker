# Logo-Maker

## Overview

This SVG Logo Maker is a command-line application designed to facilitate the creation of customizable SVG logo files. It allows users to input text, choose shapes, and specify colors, resulting in a tailored logo in SVG format.

## Acceptance Criteria

1. **Text Input:**
   - Users can input up to three characters when prompted for text.

2. **Text Color Input:**
   - Options include specifying text color using a color keyword or a hexadecimal number.

3. **Shape Selection:**
   - Users are presented with a selection of shapes: circle, triangle, and square.

4. **Shape Color Input:**
   - Similar to text color input, users can specify the color of the chosen shape.

5. **SVG File Creation:**
   - Upon providing input for all prompts, an SVG file named `logo.svg` is generated.
   - A message "Generated logo.svg" is displayed in the command line interface.

6. **Display in Browser:**
   - Opening `logo.svg` in a web browser reveals a 300x200 pixel image reflecting the provided criteria.

## Usage Instructions

1. **Setup:**
   - Clone the repository and open it in a suitable source code editor (e.g., Visual Studio Code).
   - Access the integrated terminal and navigate to `index.js`.
   - Execute the command `node index.js` to initiate the command-line interface.

2. **Input Process:**
   - Sequentially respond to the npm inquirer questions presented in the command line interface.
   - Provide input for each question to proceed through the process.

3. **File Generation:**
   - After completing all prompts, a file named "logo.svg" is generated.
   - Optionally, the user may rename the file as desired.

4. **Customization:**
   - Modify the prompted questions within `index.js` as necessary to better fit specific requirements.

5. **Further Adaptation:**
   - Utilize the SVG Logo Maker as a foundation, with permission to alter files for creating an optimized "logo.svg" file.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This application utilizes [npm inquirer](https://www.npmjs.com/package/inquirer) for interactive command-line prompts.

