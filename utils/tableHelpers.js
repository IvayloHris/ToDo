async function getSimpleTableData(page, selector = "table tbody") {
    const data = await page.evaluate((sel) => {
      const tbody = document.querySelector(sel);
      const rows = tbody.querySelectorAll("tr");
      const simpleTableData = [];
  
      for (const row of rows) {
        // Get the second cell for the "#" (position)
        const positionCell = row.querySelector("td:nth-child(2)");
        const position = positionCell ? positionCell.innerText.trim() : null;
  
        // Get the third cell for the "Name"
        const nameCell = row.querySelector("td:nth-child(3)");
        const name = nameCell ? nameCell.innerText.trim() : null;
  
        // If both position and name exist, add them to the array
        if (position && name) {
          simpleTableData.push([position, name]);
        }
      }
  
      return simpleTableData;
    }, selector);
  
    return data;
  }
  
  module.exports = { getSimpleTableData };