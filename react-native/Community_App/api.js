var api = {
  getData() {
    var url = `http://swapi.co/api/people/`;
    return fetch(url).then((response) => response.json())
      // .then((responseJson) => {
      //   return responseJson.results;
      //   console.log(responseJson.results)
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  }
}

module.exports = api;