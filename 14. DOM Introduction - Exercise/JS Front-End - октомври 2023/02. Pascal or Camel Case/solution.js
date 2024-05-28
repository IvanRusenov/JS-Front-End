function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value; 
  let result = document.getElementById("result");
  let resultStr = "";

  text.toLowerCase().split(" ").forEach(word => {
    let firstChar = word.charAt(0);
    resultStr += word.replace(word.charAt(0) , firstChar.toUpperCase());
  });

  if (namingConvention === "Pascal Case"){
  

  } else if (namingConvention === "Camel Case") {

    resultStr = resultStr.replace(resultStr.charAt(0), resultStr.charAt(0).toLowerCase());

  } else {
    resultStr = "Error!";
  }

  result.textContent = resultStr;
}