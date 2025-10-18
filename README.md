Product Management SPA
A modern single-page application for operations users to browse, filter, and manage products. Built with React, featuring pagination, advanced filtering, and responsive design. which has the following features

Product Listing with pagination (10 items per page)
Advanced Filtering by product name. brand, and category
Search by product name
Sorting by creation date (newest/oldest)
Product Details view with comprehensive information
Responsive Design for mobile and desktop
Accessible UI with keyboard navigation and semantic HTML
Error & Loading States functionality
Authentication Mock with token-based route protection
Product Analytics with trend charts by brand

Tech Stack

Frontend Framework: React 18+ with Hooks
Routing: React Router v6
Data Fetching & Caching: React Query (TanStack Query)
Styling: Tailwind CSS
Charts: Recharts
Form Validation: Zod
Testing: Vitest + React Testing Library
Build Tool: next.js
Language: TypeScript

Installation:

git clone https://github.com/Donchido98/SPA-product-management.git
cd SPA-product-management

# Install dependencies
npm install

# Start development server
npm run dev

Testing:

The project includes a test suite with React Testing Library.

# Run tests
npm run test

Accessibility 

Keyboard navigation (Tab, Shift+Tab, Enter, Escape)
Focus indicators visible on all interactive elements
Semantic HTML (main, nav, section, table, form)
ARIA labels on buttons and form controls
Form error messages linked with aria-describedby
Images have alt text
Color not sole indicator (uses icons + text)
Contrast ratio meets WCAG AA standard
Mobile responsive (tested on 320px–1920px)
Touch targets min 44×44px

# login in
Enter any details to logina and access the dashboard

things i would have done with more time
1. Implement real API endpoint using RESTful API with either Node.js or Laravel. 
2. Instead of using mock data, all products will be coming from the database. 
3. Implementing real life scenario of deleting a product or adding a product instead of using local storage, using database. 
4. Implementing secure authentication, real authentication. 
5. Implementing a payment gateway, add to cart functionality, delivery tracking systems, and many more.