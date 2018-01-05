/* Controller for Job pages */
const request = require('request');
const api = require('./apiOptions');

/* GET job page. */
const job = function (req, res) {
  // res.render([template to use], [js object containing date]);
  res.render('job', { 
    title: 'Suite D - Job 123456',
    job: {
      number: '123456',
      description: 'Some crappy labels',
      customer: 'Customer #1'
    },
    items: [{
      number: '100456',
      description: 'Top Shelf SUPs',
    },{
      number: '120400',
      description: 'Goat Sleeve',
    },{
      number: '123999',
      description: 'Hacked Up label',
    }]
  });
};

/* GET job creation page */
const addJob = function (req, res) {
  res.render('addJob', {
    title: 'New Job',
    pageHeader: {
      title: 'Add a New Job',
      actioncall: 'Enter details to create a new Job for Customer ' + req.params.customerNumber,
    }
  });
};

/* POST job creation page data, adding job to database */
const doAddJob = function (req, res) {
  /*
  const customerid = req.params.customerNumber;
  const path = `/api/locations/${locationid}/reviews`;
  const postdata = {
    author: req.body.name,
    rating: parseInt(req.body.rating, 10),
    reviewText: req.body.review
  };
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'POST',
    json : postdata
  };
  request(
    requestOptions,
    (err, response, body) => {
      if (response.statusCode === 201) {
      res.redirect(`/location/${locationid}`);
      } else {
      _showError(req, res, response.statusCode);
      }
    }
  );
  
  
  */
};

module.exports = {
  job,
  addJob,
  doAddJob
};