# College Selector Interface

## Overview

The College Selector Interface is a React-based web application that allows users to search and select a college from a dropdown. Once a college is selected, its logo and name are displayed on the dashboard. The application uses Material-UI components for a polished user interface and Axios for data fetching.

## Features

- **Searchable Dropdown**: Utilize Material-UI's Autocomplete for a smooth search experience.
- **College Data**: Fetch and display college names from the [Hipo University Domains List API](https://github.com/Hipo/university-domains-list).
- **College Logos**: Display college logos by fetching images using methods from [GitHub Issue #79](https://github.com/Hipo/university-domains-list/issues/79).
- **Performance**: Efficient handling of large datasets with loading states and debounce search inputs.

## Technologies Used

- **Framework**: React
- **UI Library**: Material-UI
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Setup and Installation

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

```bash
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios
```

### Running the Development Server
```bash
npm run dev
```
 ### Build for Production
 ```bash
 npm run build
 ```

 ## Project Structure
 ```
 src/
├── App.jsx
├── CollegeSelector.jsx
├── CollegeDashboard.jsx
├── main.jsx
├── index.css
└── App.css
```

### `src/App.jsx`

Main application component. Manages the state of the selected college and renders the `CollegeSelector` and `CollegeDashboard` components.

### `src/CollegeSelector.jsx`

Component that renders a searchable dropdown using Material-UI's Autocomplete. Fetches college data from the API and allows the user to select a college.

### `src/CollegeDashboard.jsx`

Component that displays the selected college's name and logo. Fetches the college logo based on the selected college's domain.

### `src/main.jsx`

Entry point for the React application. It sets up the Material-UI theme and renders the `App` component.

### `src/index.css` and `src/App.css`

CSS files for basic styling.

