function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //test 5,9,11: sort
      //test8: check if new workers added
      let textAreaValue = document.querySelector("textarea").value;
      if (textAreaValue) {

         let input = JSON.parse(textAreaValue);
         let restaurants = [];

         input.forEach(element => {

            let [name, workers] = element.split(" - ");

            let restaurant = {
               name,
               workers,
               bestSalary: 0,
               avgSalary: 0.0
            };

            let isRestaurantExist = false;

            restaurants.forEach((r) => {
               if (r.name === name) {
                  r.workers = r.workers.concat(workers.split(", "));
                  isRestaurantExist = true;
               }
            });

            restaurant.workers = workers.split(", ");

            if (!isRestaurantExist) {
               restaurants.push(restaurant);
            }

         });

         restaurants.forEach((r) => {
            r.bestSalary = findBestSalary(r.workers);
            r.avgSalary = calculateAvgSalary(r.workers);
         });

         let bestRestaurant = findBestRestaurant(restaurants);

         let bestRestaurantOutput = document.querySelector("#bestRestaurant p");
         bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${bestRestaurant.bestSalary}`;

         let bestRestaurantWorkers = document.querySelector("#workers p");
         bestRestaurantWorkers.textContent = workersOutput(bestRestaurant.workers);

      };


      function workersOutput(workers) {

         let workersOutput = "";
         let nameSalaryArr = [];

         workers.forEach((w) => {
            nameSalaryArr.push(w.split(" "));
         })

         nameSalaryArr.sort((f, s) => s[1] - f[1]);

         nameSalaryArr.forEach((w) => {
            let [name, salary] = w;
            workersOutput += `Name: ${name} With Salary: ${salary} `;
         })

         return workersOutput;
      }

      function findBestSalary(workers) {
         let bestSalary = 0;
         workers.forEach((w) => {
            let [_, salary] = w.split(" ");
            bestSalary = Math.max(bestSalary, Number(salary));
         });

         return bestSalary.toFixed(2);
      }


      function calculateAvgSalary(workers) {
         let sum = 0;
         workers.forEach((w) => {
            let [_, salary] = w.split(" ");
            sum += Number(salary);
         });
         let avgSalary = sum / workers.length;
         return avgSalary.toFixed(2);
      }

      function findBestRestaurant(restaurants) {

         let bestRestaurant;
         let hiegestAvgSalary = 0;

         restaurants.forEach((r) => {
            if (Number(r.avgSalary) > Number(hiegestAvgSalary)) {
               bestRestaurant = r;
               hiegestAvgSalary = r.avgSalary;
            }
         });

         return bestRestaurant;
      }

   }
}