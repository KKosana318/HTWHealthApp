// replace these values with those generated in your TokBox Account
var apiKey = "46856174";
var sessionId = "1_MX40Njg1NjE3NH5-MTU5NTU2MDY5NjU5Mn53TjJCQmRrbi9SNXVTVXNZY2N0WmtjbXR-fg";
var token = "T1==cGFydG5lcl9pZD00Njg1NjE3NCZzaWc9NmRlNjg1YzA4ZDMwZWJiYTQwOWY4NjBhYzlhYWJkYjNmOTQyMTIyMTpzZXNzaW9uX2lkPTFfTVg0ME5qZzFOakUzTkg1LU1UVTVOVFUyTURZNU5qVTVNbjUzVGpKQ1FtUnJiaTlTTlhWVFZYTlpZMk4wV210amJYUi1mZyZjcmVhdGVfdGltZT0xNTk1NTYwNzI4Jm5vbmNlPTAuOTY1OTg5MTY4NTE4MDcwOCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk1NTY0MzI3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
opentok.createSession(function(err, session) {
  if (err) return console.log(err);

  // save the sessionId
  db.save('session', session.sessionId, done);
});

// The session will the OpenTok Media Router:
opentok.createSession({mediaMode:"routed"}, function(err, session) {
  if (err) return console.log(err);

  // save the sessionId
  db.save('session', session.sessionId, done);
});

// A Session with a location hint
opentok.createSession({location:'12.34.56.78'}, function(err, session) {
  if (err) return console.log(err);

  // save the sessionId
  db.save('session', session.sessionId, done);
});

// A Session with an automatic archiving
opentok.createSession({mediaMode:'routed', archiveMode:'always'}, function(err, session) {
  if (err) return console.log(err);

  // save the sessionId
  db.save('session', session.sessionId, done);
});
