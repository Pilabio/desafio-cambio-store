import React from 'react';
import $ from 'jquery';
import dolar from 'images/ic_dolar_24px.png'
import pinDrop from 'images/ic_pin_drop_24px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.last_value,
      fullName: this.props.full_name,
      code: this.props.code
    };
  }

  handleOptionSelected() {
    const code = this.state.code;
    const $options = $('.form__select option');

    $('.form__select option[selected]').removeAttr('selected');

    $options.each(function() {
      if ($(this).val() == code) {
        $(this).attr('selected', 'selected');
      }
    });
  }

  handleSelect() {
    $('.form__select--coin').on('change', function() {
      $('.form').submit();
    });
  }

  componentDidMount() {
    this.handleOptionSelected();
    this.handleSelect();
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

          <form action='/simulate' method='post' className='form'>
            <div className='form__select-box'>
              <div className='select-box__icon'>
                <img src={pinDrop} id='pin-drop'/>
              </div>
              <select className='form__select form__select--state' name='state'>
                <option value='RJ'>Rio de Janeiro</option>
              </select>
              <FontAwesomeIcon icon={faSearch}/>
            </div>

            <div className='form__select-box'>
              <div className='select-box__icon'>
                <img src={dolar} id='dolar'/>
              </div>
              <select className='form__select form__select--coin' name='code'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
              </select>
            </div>

            <button className='form__buttom' type='button'>
              Comparar casas de câmbio
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// <input className='form__buttom' type='submit'/>
