# Fuse Web Compiler

## Project Overview

This project is a website that runs a custom compiler within a Docker environment. It allows users to compile code through a web interface. Refer to the [Compiler Repo](https://github.com/RiverDave/InterfuseLang) for more information

## Demo

<video width="600" controls>
  <source src="media/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Prerequisites

- Docker
- node
- npm

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/fuse-project.git
   cd fuse-project
   ```

2. **Build and run the Docker container:**
   ```sh
   docker build -t  fuse .
   docker run fuse
   ```

## Usage

1. **Access the website:**
   Open your web browser and navigate to `http://localhost:your_port`.

2. **Compile code:**
   Use the web interface to input your code and run the compiler.

## Technologies

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)

Deployed in a containerized environment using Docker through Google Cloud.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
