var chocBar = {Name: "Dairy Milk Oreo", Portion: "15g", Energy: "83kcal", Fat: "5.2g", Saturates: "2.9g", Sugars: "7.3g", Salt: "0.06g"}

var chocJSON = JSON.stringify(chocBar);

var chocObj = JSON.parse('{"Name": "Dairy Milk Oreo", "Portion": "15g", "Energy": "83kcal", "Fat": "5.2g", "Saturates": "2.9g", "Sugars": "7.3g", "Salt": "0.06g"}');

alert("Chocolate bar: " + chocObj.Name +  
      "\nPortion: " + chocObj.Portion + 
      "\nEnergy: " + chocObj.Energy +
      "\nFat: " + chocObj.Fat +
      "\nSaturates: " + chocObj.Saturates +
      "\nSugars: " + chocObj.Sugars +
      "\nSalt: " + chocObj.Salt);