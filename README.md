
# Burger Queen Angular Project

## Project Overview
Burger Queen is a simple Angular project built using HTML, CSS, and Bootstrap. The application features three screens: **Login**, **Dashboard**, and **Add to Cart**.

---

## Features

### 1. Login Screen
- **Credentials**: 
  - Username: `admin`
  - Password: `1234`
- Provides access to the dashboard upon successful login.

### 2. Dashboard
- **Header**:
  - Displays the logged-in username and profile image.
  - Shows the cart item count dynamically.
  - Includes a logout button.
- **Burger List**:
  - Displays burger images with their price and description.
  - Users can add items to the cart.

### 3. Add to Cart
- Displays selected items in the cart.
- Allows removing items from the cart.
- Provides a "Place Order" button:
  - On confirmation, logs the selected items in the console.

---

## Technologies Used
- **Angular**
- **HTML**
- **CSS**
- **Bootstrap**

---

## How to Run
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```
5. Open the application in your browser at `http://localhost:4200`.

---

## Screenshots
Include relevant screenshots of the Login, Dashboard, and Add to Cart screens (optional).

---

## Future Enhancements
- Add user authentication via API.
- Implement backend for order processing and data persistence.
- Enhance UI/UX with advanced styling and animations.

---

## License
This project is licensed under the MIT License.
