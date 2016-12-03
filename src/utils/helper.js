import axios from 'axios';

function getJson() {
  let address = `https://raw.githubusercontent.com/xixilide/demoData/master/pack_blog.json?${Math.random()}`;
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function getMd(add) {
  let address = `https://raw.githubusercontent.com/xixilide/demoData/master/blog/${add}.md`;
  return axios.get(address)
    .then( (res) => (
      { getMd:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function getText() {
  let address = `https://raw.githubusercontent.com/xixilide/demoData/master/text.json`;
  return axios.get(address)
    .then( (res) => (
      { getText:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function getT(arr) {
  let address = `https://raw.githubusercontent.com/xixilide/demoData/master/textblog/${arr}.md`;
  return axios.get(address)
    .then( (res) => (
      { getT:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

export { getJson,getMd,getText,getT};
