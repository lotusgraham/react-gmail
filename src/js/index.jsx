var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// var CONTACTS = {
//     0: {
//         id: 0,
//         name: 'Sarah Hughes',
//         phoneNumber: '01234 567890'
//     },
//     1: {
//         id: 1,
//         name: 'Tim Taylor',
//         phoneNumber: '02345 678901'
//     },
//     2: {
//         id: 2,
//         name: 'Sam Smith',
//         phoneNumber: '03456 789012'
//     }
// };
//
// var Contact = function(props) {
//     return (
//         <div>
//             <strong>
//                 {props.name}
//             </strong>
//             &nbsp;
//             {props.phoneNumber}
//         </div>
//     );
// };
//
// var ContactList = function(props) {
//     var contacts = Object.keys(props.contacts).map(function(contactId, index) {
//         var contact = props.contacts[contactId];
//         return (
//             <li key={index}>
//                 <Contact id={contact.id} name={contact.name}
//                          phoneNumber={contact.phoneNumber} />
//             </li>
//         );
//     });
//     return (
//         <ul>
//             {contacts}
//         </ul>
//     );
// };
//
//
// var ContactListContainer = function() {
//     return <ContactList contacts={CONTACTS} />;
// };
//
//
// var App = function(props) {
//     return (
//         <div>
//             <h1>
//                 Contacts Applications
//             </h1>
//             <div>
//                 {props.children}
//             </div>
//         </div>
//     );
// };
//
// var ContactContainer = function(props) {
//     var contact = CONTACTS[Number(props.params.contactId)];
//     return <Contact id={contact.id} name={contact.name}
//                     phoneNumber={contact.phoneNumber} />;
// };
//
// var routes = (
//     <Router history={hashHistory}>
//         <Route path="/contacts" component={App}>
//             <IndexRoute component={ContactListContainer} />
//             <Route path=":contactId" component={ContactContainer} />
//         </Route>
//     </Router>
// );

var EMAILS = {
    inbox: {
        0: {
            id: 0,
            from: "billg@microsoft.com",
            to: "TeamWoz@Woz.org",
            title: "Possible work opportunity",
            content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
        },
        1: {
            id: 1,
            from: "zuck@facebook.com",
            to: "TeamWoz@Woz.org",
            title: "Do you know PHP?",
            content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
        }
    },
    spam: {
        0: {
            id: 0,
            from: "ChEaPFl1ghTZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "WaNt CHEEp FlitZ",
            content: "Theyre CheEp"
        },
        1: {
            id: 1,
            from: "NiKEAIRJordanZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "JorDanz For SAle",
            content: "Theyre REELY CheEp"
        }
    }
}

var Nav = function(props) {
  return <nav>
            <button type="button" onClick={props.click}>Inbox</button>
            <button type="button" onClick={props.click}>Spam</button>
          </nav>
}

var App = function(props) {
  return <div>
          <Nav />
          {props.children}
        </div>
}

var Inbox = function(props) {
  var mails = [];
  for (var prop in EMAILS.inbox) {
    mails.push(EMAILS.inbox[prop].content)
  };
  var result = mails.map(function(mail, index) {
    return <h4 key={index}>{mail}</h4>
  });
  return <div>{result}</div>
}

var Spam = function(props) {
  var spams = [];
  for (var prop in EMAILS.spam) {
    spams.push(EMAILS.spam[prop].content)
  };
  var result = spams.map(function(spam, index) {
    return <h4 key={index}>{spam}</h4>
  });
  return <div>{result}</div>
}

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/*<IndexRoute component={Nav} />*/}
          <Route path="/inbox" component={Inbox}>
            {/*<IndexRoute component={Inbox} />*/}
          </Route>
          <Route path="/spam" component={Spam}>
            {/*<IndexRoute component={Spam} />*/}
          </Route>
        </Route>
            {/*<Route path="/:emailId" component={ContactContainer} />*/}
            {/*<Route path="/:contactId" component={ContactContainer} />*/}
    </Router>
);



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
