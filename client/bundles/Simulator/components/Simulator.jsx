import React from 'react';
import $ from 'jquery';

export default class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.last_value,
      fullName: this.props.full_name,
      code: this.props.code
    };
  }

  handleFormSelect() {
    const code = this.state.code;
    const $options = $('.form__select option');

    $('.form__select option[selected]').removeAttr('selected');

    $options.each(function() {
      if ($(this).val() == code) {
        $(this).attr('selected', 'selected');
      }
    });
  }

  componentDidMount() {
    this.handleFormSelect();
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

          <form action='/simulate' method='post' className='form'>
            <select className='form__select' name='code'>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
            </select>

            <input className='form__buttom' type='submit'/>
          </form>
        </div>
      </div>
    );
  }
}
