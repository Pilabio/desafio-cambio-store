import React from 'react';

export default class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.last_value,
      fullName: this.props.full_name
    }
  }

  render() {
    return (
      <div className='simulator'>
        <div className='simulator__header'>
          <div className='tab tab--left tab--active'>Moeda em espécie</div>
          <div className='tab tab--right'>Cartão pré-pago</div>
        </div>

        <div className='simulator__body'>
          <div className='title'>
            {this.state.fullName}
            <span className='title--value'>{this.state.value}</span>
          </div>

          <form action='/coins' method='post' className='form'>
            <select className='form__select'>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
            </select>

            <select className='form__select'>
            </select>

            <input className='form__buttom' type='submit'/>
          </form>
        </div>
      </div>
    );
  }
}
