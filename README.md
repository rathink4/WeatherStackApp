# Weather Stack App

A simple weather app to display your location's current weather.

# Tech Stack
- Backend : Django
- Frontend : React

# Project Setup Guide
===================

This guide will walk you through setting up the Django backend & Vite + React frontend

1\. Vite + React Frontend Setup
-------------------------------

### Prerequisites

-   Node.js installed (version 20.17.0 used)
-   npm or yarn installed

### Steps:

1.  Navigate to the frontend folder where your `package.json` file is located.

    `cd path/to/your/vite-react/frontend`

2.  Install the required dependencies.

    ```
    # Using npm
    npm install

    # Using yarn
    yarn install

    ```

3.  Run the Vite development server.

    ```
    # Using npm
    npm run dev

    # Using yarn
    yarn dev
    ```

4.  The development server should now be running on `http://localhost:5173` (or as specified by Vite).

* * * * *

2\. Django Backend Setup
------------------------

### Prerequisites

-   Python installed (version 3.12.6 used)
-   Pip installed

### Option 1: Using a Virtual Environment

1.  Navigate to the backend folder where your `requirements.txt` file is located.

    `cd path/to/your/django/backend`

2.  Set up and activate a virtual environment (optional but recommended).

    ```python
    # Create a virtual environment (on Windows)
    python -m venv venv

    # Create a virtual environment (on macOS/Linux)
    python3 -m venv venv

    # Activate the virtual environment (on Windows)
    venv\Scripts\activate

    # Activate the virtual environment (on macOS/Linux)
    source venv/bin/activate
    ```

3.  Install dependencies from `requirements.txt`.

    `pip install -r requirements.txt`

4.  Run migrations to set up the database schema.


    `python manage.py makemigration`
    `python manage.py migrate`

5.  Start the Django development server.

    `python manage.py runserver`

### Option 2: Installing Packages Globally

If you prefer to install packages globally without using a virtual environment, follow these steps:

1.  Navigate to the backend folder where your `requirements.txt` file is located.

    `cd path/to/your/django/backend`

2.  Install dependencies globally.

    `pip install -r requirements.txt`

3.  Run migrations to set up the database schema.

    `python manage.py makemigration`
    `python manage.py migrate`

4.  Start the Django development server.

    `python manage.py runserver`

* * * * *

### Notes:

-   Ensure that if you are running the Django app using a virtual environment, activate the virtual env before running the backend application.
-   Ensure backend code is running along with the frontend code.

This guide should help you set up and run the project on any machine.