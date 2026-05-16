# Hintro Frontend Developer Dashboard

This project is a clean, responsive, and pixel-perfect dashboard built for the **Hintro Frontend Developer Internship** assignment. It demonstrates best practices in React development, API integration, and responsive UI design following Figma specifications.

## 🚀 Live Demo
- **Persona Selector**: Upon loading, choose between **New User (u1)** or **Active User (u2)** to see the dynamic empty/populated states as required.

## 🛠️ Tech Stack
- **Framework**: [React.js](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Integration**: [Axios](https://axios-http.com/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)
- **Persistence**: `LocalStorage` (for user sessions and feedback history)

## ✨ Key Features
- **Dynamic User States**: Support for both `u1` (empty state) and `u2` (active user with data) via `x-user-id` API headers.
- **Aggregated Data Fetching**: A custom service aggregates Profile, Dashboard (subscription), Stats, and Call History into a single source of truth.
- **Pixel-Perfect UI**: Strictly followed Figma design tokens, including typography (Inter), spacing, and exact color palettes.
- **Subscription Tracker**: Live progress bar in the sidebar reflecting actual usage from the `/api/auth/dashboard` endpoint.
- **Feedback Module**: A complete system to submit feedback (stored in `localStorage`) and view submission history.
- **Responsive Layout**: Seamless experience across Mobile (drawer navigation) and Desktop views.
- **Performance**: Zero React attribute warnings and optimized render cycles.

## 📋 Implementation Details & Conventions
- **Global CSS Theme**: Instead of hardcoding colors, we utilized **CSS Variables** defined in `:root` and integrated them with Tailwind's theme system for consistent styling.
- **Time Formatting**: The API provides durations in seconds; the dashboard dynamically formats these into human-readable `Xm Ysec` strings as per the required design convention.
- **API Strategy**: Used a centralized API service with interceptors to handle the `x-user-id` switching logic without bloating components.

## 🛠️ Setup & Run Instructions

1. **Clone the repository**:
   ```bash
   git clone <your-repo-link>
   cd hintro-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Assumptions
- The design assumes a standard 1440px desktop width; responsive adjustments were made for smaller screens.
- Profile photos default to a colorful placeholder if the API doesn't provide a specific URL.
- LocalStorage is cleared upon logout to simulate a clean session for the next persona selection.

---
Made with ❤️ by [MH Nahid](https://github.com/nahid-hasann)
© 2025 Hintro Dashboard Assignment.
