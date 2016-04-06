import fetch from 'isomorphic-fetch';
import md5 from 'md5';

class ApiService {
  constructor() {
    this.marverlApiUrl = 'http://gateway.marvel.com:80/v1/public/';
    this.marvelApiKey = 'f6cea6ba549662b8ae53f72cb59835d9';
    this.marvelApiPrivateKey = '98f6eaf7cdf45f76b8f33251e4b57195c937a68e';
  }

  getCharacterList() {
    let timestamp = new Date().getTime();
    let hash = md5(timestamp + this.marvelApiPrivateKey + this.marvelApiKey);
    return fetch(this.marverlApiUrl + 'characters?limit=100&apikey=' +
      this.marvelApiKey + '&ts=' + timestamp + '&hash=' + hash)
      .then((data) => {
        return data.json();
      })
      .then((result) => result.data.results);
  }

  getCharacter(id) {
    let timestamp = new Date().getTime();
    let hash = md5(timestamp + this.marvelApiPrivateKey + this.marvelApiKey);
    return fetch(this.marverlApiUrl + 'characters/' + id + '?apikey=' +
      this.marvelApiKey + '&ts=' + timestamp + '&hash=' + hash)
      .then((data) => {
        return data.json();
      })
      .then((result) => result.data.results[0]);
  }
}

let apiServiceInstance = new ApiService();
export default apiServiceInstance;
