let myData = [
    {
        name: "samara",
        job: "منظفة",
        image: "https://i.ibb.co/xj6wgNn/1.jpg",
    },

    {
        name: "fjdfkg",
        job: "gkldf",
        image: "https://i.ibb.co/xj6wgNn/1.jpg",
    },

];



























// Get the container element where you want to append the data
const container = document.querySelector(".data");

// Iterate over the myData array
myData.forEach((dataItem, index) => {
    // Create a new div element for each data item
    const div = document.createElement("div");

    // Set the inner HTML of the div with the data from the current data item
    div.innerHTML = `
        <p>name${index}: ${dataItem.name}</p>
        <p>job ${index}: ${dataItem.job}</p>
        <p>image ${index} ${dataItem.image}</p>
    `;

    // Append the div to the container
    container.appendChild(div);
});