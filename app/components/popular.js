var React = require('react');
var SelectLanguage = require('./SelectLanguage');

class Popular extends React.Component {
  // Initial State for our component
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    // We need to ensure that the this keyword in updateLanguage
    // method always binds to our component instance
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  // Method to set the state of our component
  // Note that the this keyword is undefined in this instance
  // We need to bind it to our component using the bind as above 
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    return (
      <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
      />
    )
  }
}

module.exports = Popular;




  // render() {
  // var languages = ['All', 'Javascript', 'Python', 'Ruby', 'Java'];
  //   // console.log(this);
  //   // Here this keyword refers to the Popular component instance
  //   return (
  //       <ul className='languages'>
  //         {languages.map(function(lang) {
  //           // Inside this anyomo function this keyword is undefined unless it
  //           // is bind to our state using a second argument to function
  //           // Also during onClick event the null to bind specifies that
  //           // we have already binded it to our component instance 
  //           // lang simply refers to the function argument 
  //           return(
  //             <li
  //               style={lang === this.state.selectedLanguage ? {color: "#d0021b"} : null} 
  //               onClick={this.updateLanguage.bind(null, lang)}
  //               key={lang}>
  //               {lang}
  //             </li>
  //           )
  //         }, this)}
  //       </ul>      
  //   )
  // }


  // render() {
  //   var languages = ['All', 'Javascript', 'Python', 'Ruby', 'Java'];
  //   return (
  //     <div>
  //       <p>Selected Language: {this.state.selectedLanguage}</p>
  //       <ul className='languages'>
  //       // We can use ES6 syntax for arrow functions 
  //       // So we do not need to pass this keyword as an argument for correct binding
  //       // And inside the arrow functions this keyword means same as that outside 
  //         {languages.map((lang) => {
  //           return(
  //             <li
  //               style={lang === this.state.selectedLanguage ? {color: "#d0021b"} : null} 
  //               onClick={this.updateLanguage.bind(null, lang)}
  //               key={lang}>
  //               {lang}
  //             </li>
  //           )
  //         })}
  //       </ul>      
  //     </div>
  //   )
  // }