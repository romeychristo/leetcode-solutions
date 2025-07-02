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

2. **VS Code Extensions (Required):**

   - Python (ms-python.python)
   - Pylance (ms-python.vscode-pylance)
   - Ruff (charliermarsh.ruff)

3. **Code Formatting & Linting:**
   - **Ruff** handles everything: formatting, linting, and import sorting
   - Configuration is in `pyproject.toml`
   - Compatible with Black formatting style

### Manual Commands

```bash
# Format code with Ruff (replaces Black)
python -m ruff format .

# Lint and auto-fix issues with Ruff (replaces isort + pylint)
python -m ruff check --fix .

# Just check for issues without fixing
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
