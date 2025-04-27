# MadameX

A comprehensive web application for encryption, decryption, and cryptanalysis.

## Overview

MadameX is an interactive cryptography toolkit that allows users to encrypt and decrypt messages using various algorithms, as well as perform cryptanalysis to break encrypted messages without the original key. Named after Agnes Meyer Driscoll (known as "Madame X"), a pioneering American cryptanalyst who worked for the U.S. Navy from 1918-1949.

## Features

- **User-friendly interface**: Clean, intuitive UI built with React and Material UI with a responsive design that works on desktop and mobile devices
- **Multiple encryption algorithms**:
  - **Classical ciphers**: 
    - **Shift (Caesar)**: Simple substitution cipher with adjustable shift value
    - **Affine**: Linear transformation using two keys (a, b) where a is coprime to 26
    - **Substitution**: Full customizable alphabet substitution mapping
    - **Hill**: Matrix-based encryption using linear algebra concepts
    - **Permutation**: Transposition cipher rearranging text based on key ordering
    - **Vigenère**: Polyalphabetic substitution using a keyword
  - **Modern ciphers**: 
    - **AES**: Industry-standard symmetric encryption with multiple operation modes (ECB, CBC, OFB, CFB, CTR)
    - **Triple DES (3DES)**: Block cipher applying DES algorithm three times
    - **Simplified DES (S-DES)**: Teaching version of DES with smaller blocks
    - **Gamma Pentagonal**: Advanced stream cipher with visual representation
  - **Public key cryptography**: 
    - **RSA**: Widely-used asymmetric algorithm based on factoring problem
    - **Rabin**: Cryptosystem with security directly tied to factorization
    - **ElGamal (over Zp)**: Discrete logarithm-based asymmetric encryption
    - **ElGamal (ECC 25519)**: Elliptic curve version offering high security with smaller keys
- **Comprehensive toolset**:
  - **Encryption capabilities**: Convert plaintext to ciphertext using various parameters and keys
  - **Decryption capabilities**: Recover original messages from encrypted data
  - **Cryptanalysis tools**: Frequency analysis, pattern recognition, and statistical methods to break ciphers
  - **Visual demonstrations**: Interactive visualizations for algorithms like Gamma Pentagonal
  - **Attack simulations**: Test the security of various encryption methods
- **Educational resources**: Detailed information sections explaining the mathematical principles, historical context, strengths, and weaknesses of each algorithm

## What You Can Encrypt/Decrypt

MadameX supports encryption and decryption of:

- **Text**: 
  - Plaintext messages of any length
  - Case-insensitive alphabetic characters (A-Z, a-z)
  - Special handling for spaces and non-alphabetic characters depending on the algorithm
  - Support for various languages in certain ciphers

- **Numbers**: 
  - Numeric data for algorithms like RSA, Rabin, and ElGamal
  - Various encoding formats including decimal, binary, and hexadecimal

- **Images**: 
  - Image encryption for algorithms like AES, Triple DES
  - Support for common image formats including JPEG and PNG
  - Visual representation of encryption effects on image data

- **Custom data**: 
  - Ability to implement custom encryption schemes
  - Support for block sizes and key lengths appropriate to each algorithm
  - Configurable parameters for advanced users

## Cryptanalysis Capabilities

MadameX includes powerful tools for breaking ciphers:

- **Frequency analysis**: Letter, bigram, trigram, and n-gram frequency counting
- **Known-plaintext attacks**: Decrypt ciphers when portions of plaintext are known
- **Brute force methods**: Automated testing of all possible keys for certain ciphers
- **Statistical methods**: Apply mathematical techniques to identify patterns
- **Specialized attacks**: Algorithm-specific techniques like Kasiski examination for Vigenère

## Project Structure

The project consists of:

- **Frontend**: 
  - React-based web application with Material UI components
  - Modular design with separate components for each algorithm
  - Responsive layout adapting to different screen sizes
  - Client-side processing for lighter encryption tasks

- **Backend**: 
  - FastAPI server handling computationally intensive operations
  - Python implementation of cryptographic algorithms
  - Image processing capabilities using PIL and other libraries
  - Optimized for performance with complex cryptographic operations

- **API**: 
  - Communication between frontend and backend via RESTful endpoints
  - Secure data exchange formats
  - Stateless operation for reliability

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/juanlara18/MadameX.git
   cd MadameX
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

4. In a separate terminal, start the backend server:
   ```
   cd back
   python main.py
   ```

5. Access the application at `http://localhost:3000`

## Usage

1. Select an encryption algorithm from the navigation menu on the left
2. Choose the operation mode (Info, Encrypt/Decrypt, or Attack)
3. For encryption/decryption:
   - Enter the required parameters (keys, shift values, matrices, etc.)
   - Input the text or upload the file you want to process
   - Click the appropriate button to execute the operation
   - Copy or download the results
4. For cryptanalysis:
   - Input the ciphertext you want to analyze
   - Select attack parameters if available
   - Review the potential decryption results ranked by likelihood
   - Select the most probable solution

## Practical Applications

MadameX can be used for:

- **Education**: Learning cryptographic concepts and algorithms
- **Security testing**: Evaluating the strength of different encryption methods
- **Research**: Experimenting with cryptanalysis techniques
- **Data protection**: Encrypting sensitive information
- **Communication**: Secure message exchange using selected algorithms

## Technologies Used

- **Frontend**: 
  - React 18.x for component-based UI
  - Material UI 5.x for design components
  - JavaScript ES6+ for client-side logic
  - MathJax for mathematical notation

- **Backend**: 
  - Python 3.x for server-side processing
  - FastAPI for high-performance API endpoints
  - Pillow (PIL) for image processing
  - Cryptographic libraries including PyCryptodome

- **Mathematics**: 
  - Linear algebra for matrix operations
  - Modular arithmetic for various encryption algorithms
  - Number theory for public key cryptography
  - Statistical methods for cryptanalysis

## Live Demo

Check out the live version at: [https://juanlara18.github.io/MadameX/](https://juanlara18.github.io/MadameX/)

## Contributing

Contributions are welcome! If you'd like to improve the project, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

We're particularly interested in:
- Adding new encryption algorithms
- Improving cryptanalysis methods
- Enhancing the user interface
- Optimizing performance
- Adding support for additional data types

## License

This project is available under open-source terms.

## Acknowledgments

- Named after Agnes Meyer Driscoll, a pioneering cryptanalyst for the U.S. Navy
- Developed as an educational tool for learning cryptographic concepts
- Inspired by the rich history of cryptography from ancient ciphers to modern encryption
- Thanks to all contributors who have helped improve this project
