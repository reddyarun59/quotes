# Quote App

A simple quote sharing application built with Next.js, Tailwind CSS, and the Shadcn UI component library.

## Features

- User authentication with username and OTP
- Uploading images and creating quotes
- Displaying a paginated list of quotes
- Overlaying quote text on images
- Showing username and creation timestamp for each quote

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Shadcn UI: A set of accessible and customizable components for building high-quality, accessible React apps.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/reddyarun59/quote.git
   ```

2. **Install dependencies**:

   ```bash
   cd quote
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env.local` file in the root directory of the project.
   - Add the necessary environment variables, such as API endpoints and authentication credentials.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

1. **Login Page**:

   - Allows users to log in with a unique username and OTP.
   - For test purpose use username - sandy, OTP - 1234
   - Includes input fields for username and OTP, and a submit button.
   - Provides visual feedback for successful or failed login attempts.

2. **Quote List Page**:

   - Displays a paginated list of quotes fetched from the API.
   - Includes a floating action button for creating new quotes.
   - Each quote card displays the image from the `mediaUrl` with overlaid text.
   - Shows the username and creation timestamp below the image.
   - Implements pagination controls to navigate through quotes.

3. **Quote Creation Page**:
   - Allows users to create new quotes.
   - Includes a text area for entering the quote text.
   - Provides an image upload option to select a local file.
   - Includes a submit button to send the quote creation request.
   - Displays feedback upon successful quote creation.

## License

This project is licensed under the [MIT License](LICENSE).
