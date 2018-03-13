import React from 'react';
import {connect} from 'react-redux';
import replaceAll from '../utils/replaceAll';
import {setLanguage} from '../actions/lang';


export const Footer = ({dictionary, locale}) => (
  <footer className="footer">
    <h4 className="footer__message"
      dangerouslySetInnerHTML={{
        __html: replaceAll(dictionary.footerMessage, {
          "{p1}": `<a target="_blank" href="https://github.com/andrewjmead">Andrew Mead</a>`,
          "{p2}": `<a target="_blank" href="https://www.udemy.com/react-2nd-edition/">${dictionary.footerMessageCourse}</a>`,
          "{p3}": `<a target="_blank" href="https://github.com/Jucesr/"> Julio Ojeda</a>`
        })
      }}>
    </h4>
  </footer>
);

const mapStateToProps = (state) => ({
  locale: state.lang.locale,
  dictionary: state.lang.dictionary
});


export default connect(mapStateToProps)( Footer);



// export const Footer = () => (
//   <footer className="footer">
//     <h4 className="footer__message">
//     <p><a target="_blank" href="https://github.com/andrewjmead">Andrew Mead</a></p>
//     <p><a target="_blank" href="https://github.com/leandromeshapp/"> Leandro Almeida</a></p>
//     </h4>
//   </footer>
// );


// export default Footer;
