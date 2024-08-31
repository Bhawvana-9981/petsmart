Project Overview:


I created web application called "Bhawvana Pet Services" using React and Tailwind CSS. The app will allow users to:

--Select a pet (e.g., Dog, Cat, Bird).
Fill out a form about the pet's service.
-View a summary of the service with final charges.
-Restart the process if desired.
Key Components and Pages
AnimalSelection.js

Purpose: Show a list of animal cards.
How It Works: When a user clicks on an animal card, it navigates to the service form page for that animal.
Background Image: Set using inline CSS with a real image URL.
ServiceFormPage.js:

Purpose: Display a form for users to enter details about the service for the selected animal.
How It Works: Uses React Router to get the animal's name from the URL and display the form.
Form Submission: On submitting the form, the data is sent to the summary page.
ServiceSummaryPage.js:

Purpose: Show a summary of the service with the final charges.
How It Works: Receives the data from the form and displays it.
Restart: Includes a "Start Again" button to go back to the animal selection page.
Styling
Tailwind CSS: Used for styling components and pages. It provides utility classes for layout, spacing, typography, and more.
Background Image: Set using inline styles or Tailwind classes with a URL to the image. Images are placed in the public folder of the React project and referenced relative to the root.
Routing
App.js: Sets up routes to navigate between different pages:
/ for the Animal Selection page.
/service-form/:animalName for the Service Form page.
/service-summary for the Service Summary page.
Step-by-Step Workflow:

Animal Selection: Users see animal cards. Clicking a card takes them to the service form for that animal.

Service Form: Users fill out the form with details about the service. When submitted, data is sent to the summary page.

Service Summary: Shows the details of the service and the charges. Users can click "Start Again" to restart the process.

Implementation Details:
Images: Store background images in the public directory and reference them with a relative URL in your components.
Routing: Use react-router-dom for navigating between pages.
Styling: Tailwind CSS classes and inline styles to ensure the layout and design are as desired.
By following these steps,  I have a functional and well-styled pet service application with routing.


Initial Page:
 <img width="1761" alt="Screenshot 2024-08-30 at 23 34 50" src="https://github.com/user-attachments/assets/c0388e8d-006b-484c-996d-60dd4ad8e8a3"> 

 Services Page:
<img width="1792" alt="Screenshot 2024-08-30 at 23 34 22" src="https://github.com/user-attachments/assets/0d340eb7-ba8d-47aa-a88d-ec2ee9c0437c"> 

Service form:
<img width="1601" alt="Screenshot 2024-08-30 at 23 35 09" src="https://github.com/user-attachments/assets/8f61aca4-5ac5-496d-b442-fbc001ffa946">

Service Summary Page:
<img width="1684" alt="Screenshot 2024-08-30 at 23 35 16" src="https://github.com/user-attachments/assets/71d592ab-9362-4d48-8974-e281b760ec90">



