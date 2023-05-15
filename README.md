# Terribly Tiny Tales Assignment

"Hosted link :  https://6462956799431e0b16dbb948--thunderous-wisp-44c308.netlify.app/  "

This is a React component that fetches data from a, processes it, and displays it in a bar chart using the
Recharts library. It also provides an option to export the data as a CSV file.

The component uses the useState hook to manage state variables. The histogramData state variable holds an 
array of objects representing the top 20 words and their frequencies. The submit state variable is used to 
disable the submit button while the data is being fetched. The isSubmitted state variable is used to conditionally
render the chart and export button.

The fetchData function is an asynchronous function that fetches data from the specified URL using the axios library. 
It then processes the data by splitting it into words, counting the frequency of each word, sorting the words by
frequency, selecting the top 20 words, and creating an array of objects representing the words and their frequencies.
This array is then set as the value of the histogramData state variable.

The exportData function creates a CSV file from the histogramData array and downloads it to the user's device.

The render function conditionally renders the submit button and the chart based on the state variables. If the
histogramData array is not empty, it renders the chart and the export button. The chart is created using the 
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, and Legend components from the Recharts library. The data for 
the chart is passed as a prop to the BarChart component. The export button calls the exportData function when clicked.

Components Of the Code :

1. React and axios imports:
   - The code imports React and useState from the 'react' package to create a React component and manage state.
   - Axios is imported to handle HTTP requests.

2. Recharts imports:
   - The code imports various components from the 'recharts' library, which provides charting capabilities for React applications.
   - `BarChart`, `Bar`, `XAxis`, `YAxis`, `CartesianGrid`, `Tooltip`, and `Legend` are imported to create a bar chart.

3. CSS import:
   - The code imports a CSS file named 'index.css'. It is likely responsible for styling the component.

4. App component:
   - The `App` component is a functional component that represents the main component of the application.
   - It uses the `useState` hook to define and manage three state variables: `histogramData`, `submit`, and `isSubmitted`.
   - `histogramData` is initialized as an empty array and will store the data for the histogram.
   - `submit` is a boolean state variable used to indicate whether the data is being fetched or not.
   - `isSubmitted` is a boolean state variable used to indicate whether the data has been successfully fetched and processed.

5. fetchData function:
   - `fetchData` is an asynchronous function defined within the `App` component.
   - It sets the `submit` state variable to `true` to indicate that data is being fetched.
   - It uses `axios` to make an HTTP GET request to the specified URL ('https://www.terriblytinytales.com/test.txt') and fetches the response data.
   - The text data is split into individual words using a regular expression.
   - The function then counts the frequency of each word by iterating through the words array and populating a `freMap` object.
   - The `freMap` object is converted into an array using `Object.entries`, sorted in descending order of frequency, and sliced to retrieve the top 20 words.
   - The top 20 words are transformed into an array of objects with the structure `{ word, frequency }` and stored in the `histogramData` state variable.
   - Finally, the `submit` and `isSubmitted` state variables are updated accordingly.

6. exportData function:
   - `exportData` is a function responsible for exporting the histogramData as a CSV file.
   - It maps each object in `histogramData` to a string in the format "word,frequency" and joins them with newline characters to create the CSV data.
   - A Blob object is created with the CSV data and assigned the type 'text/csv;charset=utf-8;'.
   - A URL is generated for the Blob object using `URL.createObjectURL`.
   - A link element is created programmatically, its `href` and `download` attributes are set, and it is appended to the document body.
   - The link is clicked programmatically using `link.click()`, triggering the file download.
   - Finally, the link element is removed from the document body.

7. Rendered JSX:
   - The `App` component returns JSX elements that define the structure of the user interface.
   - Conditional rendering is used to display different content based on the `isSubmitted` and `histogramData` states.
   - If `isSubmitted` is false, a submit button is rendered, allowing the user to trigger the `fetchData` function. The button is disabled when `submit` is true.
   - If `histogramData` contains data, a bar chart is rendered using the BarChart`, `CartesianGrid`, `XAxis


Libraries and plugins used in the code

1. React: 
   - React is a JavaScript library for building user interfaces.
   - It is used to create the main component and manage the component's state.

2. axios:
   - Axios is a popular JavaScript library used for making HTTP requests from the browser.
   - It is used in this code to fetch the data from the specified URL.

3. recharts:
   - Recharts is a charting library for React applications that provides a set of composable charting components.
   - It is used in this code to create a bar chart visualization.
   - The specific components imported from recharts and used in the code are:
     - `BarChart`: Represents the container for the bar chart.
     - `Bar`: Represents a bar within the bar chart.
     - `XAxis`: Represents the x-axis of the bar chart.
     - `YAxis`: Represents the y-axis of the bar chart.
     - `CartesianGrid`: Represents the grid lines of the bar chart.
     - `Tooltip`: Represents a tooltip for displaying data on hover.
     - `Legend`: Represents a legend for the chart.

4. './index.css':
   - This is a local CSS file imported using a relative path.
   - It is used to style the components rendered in the code.

These libraries and plugins provide the necessary tools and components to create a React application with data fetching 
capabilities and the ability to visualize data in the form of a bar chart.
