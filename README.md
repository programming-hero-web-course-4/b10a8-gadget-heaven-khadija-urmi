# Live Website

# Project Name: Gadget Dashboard

## Live Website

## Overview

Gadget Dashboard is a web application designed to help users explore and manage their favorite gadgets. The dashboard provides an interactive interface where users can switch between their Cart and Wishlist, view gadget statistics, and experience a visually appealing and responsive layout.

## Features

1. **Cart and Wishlist Management**: Users can seamlessly switch between viewing items in their cart and wishlist.
2. **Responsive and Interactive Dashboard**: The website adapts to different screen sizes and provides an engaging experience with clickable tabs and components.
3. **Statistics Visualization**: The dashboard features a statistics section that shows product details with price and rating visualizations.
4. **Dynamic Header and Tabs**: The header displays a title and subtitle, and tabs within the header allow users to toggle between cart and wishlist.
5. **Data Persistence**: The application saves cart and wishlist data in local storage, allowing users to maintain their selections across sessions.

## React Fundamental Concepts Used

This project uses several core React concepts to create a smooth and efficient user experience:

- **Components**: The app is built with reusable components like `Header`, `Cart`, `WishList`, and `Statistics`.
- **State Management**: `useState` is used to manage local state within components, such as the active tab selection.
- **Props**: Props are used to pass data and functions between components, enabling modular and organized code.
- **Conditional Rendering**: The app conditionally renders components (e.g., Cart or Wishlist) based on the selected tab.
- **useNavigation**:
 This hook is used for navigation handling, making it easier to navigate programmatically within the application, such as redirecting users to specific pages after an action.
- **useLoaderData**: This hook is used to load data asynchronously when the component mounts. For example, data for the Statistics chart is fetched and displayed using useLoaderData.

-**useParams**: This hook allows the app to access route parameters. It is helpful for dynamic routing, enabling the application to fetch specific item details based on unique identifiers passed in the URL.

- **React Helmet**: The react-helmet-async library is used to manage the document head, enabling dynamic page titles for different sections like "Dashboard," "Cart," and "Wish List."

## Data Handling and Management

The project uses **Local Storage** to persist data, allowing users to retain their cart and wishlist items across sessions. This approach makes the app user-friendly, as users can return to the website and find their previous selections intact.

In addition, **Context API** can be used in future expansions to manage global state, making data management across components even more efficient.








## Technologies Used

- **React**: Front-end library for building the user interface.
- **React Router**: For managing routing within the application.
- **Recharts**: Library used for creating the statistics charts.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **Local Storage**: Used to store cart and wishlist data persistently.

