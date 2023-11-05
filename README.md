# DnD_GT

The **DnD_GT** is a React application that allows users to create a gallery of images with drag-and-drop (DnD) functionality. Users can arrange and organize images within the gallery by simply dragging and dropping them to their desired positions. This gallery is built with React, Tailwind CSS, and Vite.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the **DnD_GT**, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/DnD-Image-Gallery.git
   ```

2. Navigate to the project directory:

   ```shell
   cd DnD_GT
   ```

3. Install the project dependencies using npm:

   ```shell
   npm install
   ```

4. Run the development server:

   ```shell
   npm run dev
   ```

5. Open your web browser and access the development server at [http://localhost:3000](http://localhost:3000).

## Usage

The **DnD_GT** provides a simple and intuitive way to organize and rearrange a collection of images. Users can perform the following actions:

- Drag and drop images to change their order.
- Customize the gallery as needed.
- Add, remove, or edit images within the gallery.
- Enjoy a responsive design that works on various devices.

You can customize and extend the gallery to suit your specific use case or project.

## Folder Structure

The project directory is organized as follows:

```
DnD_GT/
├── .eslintrc.cjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── images/
│   │   ├── image-1.webp
│   │   ├── image-2.webp
│   │   └── ... (other images)
│   └── index.html
├── README.md
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Controls/
│   │   │   ├── GridFunctionality.jsx
│   │   │   ├── MainFunctionality.jsx
│   │   │   └── SortFunctionality.jsx
│   │   ├── footer.jsx
│   │   ├── Resources/
│   │   │   ├── Image.jsx
│   │   │   └── Images.json
│   │   ├── Sections/
│   │   │   ├── Checkbox.jsx
│   │   │   ├── GridSection.jsx
│   │   │   └── TopSection.jsx
│   │   └── __tests/
│   │       ├── GridFunctionality.test.js
│   │       └── SortFunctionality.test.js
│   ├── index.css
│   └── index.jsx
├── tailwind.config.js
└── vite.config.js
```

- `public/`: Contains the image assets and the main `index.html` file.
- `src/`: Contains the source code of the React application, including components and configuration files.
- `components/`: Houses the React components used in the application.
- `__tests/`: Contains test files for components.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vite.config.js`: Configuration file for Vite development server.

## Features

- Drag-and-drop functionality for reordering images.
- Responsive design for various devices.
- Customizable and extendable codebase.
- Support for adding, removing, or editing images.

## Contributing

If you would like to contribute to the **DnD_GT**, please follow these guidelines:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your branch on GitHub.
5. Submit a pull request to the main repository.

Please ensure your code adheres to the coding standards and includes appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.