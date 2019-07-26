import React from 'react';
import Form from './Form';

export default class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.last_value,
      fullName: this.props.full_name,
      code: this.props.code
    };
  }

  render() {
    return (
      <div className='simulator'>
        <div className='simulator__header'>
          <div className='tab tab--left tab--active'>Moeda em espécie</div>
          <div className='tab tab--right'>Cartão pré-pago</div>
        </div>

        <div className='simulator__body'>
          <div className='simulator__title'>
            {this.state.fullName}
            <span className='simulator__title--value'>R$ {this.state.value}</span>
          </div>

          <Form code={this.state.code}/>
        </div>
      </div>
    );
  }
}
