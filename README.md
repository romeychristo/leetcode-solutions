# LeetCode Solutions

This repository contains my solutions to various LeetCode problems implemented in Python and JavaScript/TypeScript.

## Development Setup

### Prerequisites

- Python 3.8+
- Node.js (for JavaScript/TypeScript solutions)

### Python Development Environment

1. **Install development dependencies:**

   ```bash
   pip install -r requirements-dev.txt
   ```

2. **VS Code Extensions (Recommended):**

   - Python (ms-python.python)
   - Pylance (ms-python.vscode-pylance)
   - Black Formatter (ms-python.black-formatter)
   - isort (ms-python.isort)
   - Ruff (charliermarsh.ruff)

3. **Code Formatting:**
   - Code is automatically formatted using Black
   - Imports are organized using isort
   - Linting is done with Ruff
   - Configuration is in `pyproject.toml`

### Manual Formatting

```bash
# Format code with Black
python -m black .

# Organize imports with isort
python -m isort .

# Lint with Ruff
python -m ruff check .
```

## Project Structure

```
├── problem-name/
│   ├── index.html      # Visual test interface
│   ├── index.js        # JavaScript solution
│   └── index.ts        # TypeScript solution
├── ProblemName.py      # Python solution
├── pyproject.toml      # Python tool configuration
└── requirements-dev.txt # Development dependencies
```

## Usage

Each problem solution can be run independently. Python files contain the solution class, and the TypeScript/JavaScript versions include interactive HTML demos.
