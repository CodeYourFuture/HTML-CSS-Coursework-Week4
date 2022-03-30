import React from 'react';
import { faq } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../css/faq.scss';
import { Faq as FaqT } from '../types';

type FaqState = {
  FAQs: FaqT[]
};

export class Faq extends React.Component {
  state: FaqState = {
    FAQs: faq,
  };

  toggleAnswer = (i:number):void => {
    const tempFaq = this.state.FAQs;
    tempFaq[i].toggle = !tempFaq[i].toggle;
    this.setState({ FAQs: tempFaq });
  };

  render() {
    return (
        <main>
            <h2>F A Q</h2>
            <span className="underline">_</span>
            <p>Frequently Asked Questions</p>
            <div className='faq-container'>
                {this.state.FAQs.map((question, i:number) =>
                    <div className='single-question' key={i}>
                        <div className='question' onClick={()=>this.toggleAnswer(i)}>
                            <p><FontAwesomeIcon icon={question.toggle ? faAngleDown : faAngleRight}/>{question.q}</p>
                        </div>
                        <div className={`answer ${question.toggle ? 'open' : ''}`} >
                            <p>{question.a}</p>
                        </div>
                    </div>)}
        
            </div>
        </main>
    );
  }
}

export default Faq;