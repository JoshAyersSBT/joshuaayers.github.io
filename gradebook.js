// TODO: Fetch data from the PostgreSQL database
function fetchGradeData() {
    // This Function will querry the postgreSQL database and return grade data 
    console.log("Fetching grade data...");
    return [];
  }
  function populateGradebook(data) {
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data: ",data);
    const data = fetchGradeData();
  }
  
  // Am i actually to remove this?
  // TODO: REMOVE THIS
  // Call the stubs to domonstrate the workflow
  const gradebook = fetchGradeData();
  populateGradebook();
  // END REMOVE