import React from 'react';
import $ from 'jquery';
import dolar from 'images/ic_dolar_24px.png'
import pinDrop from 'images/ic_pin_drop_24px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import States from '../helpers/States'

export default class Form extends React.Component {
  handleOptionSelected() {
    const code = this.props.code;
    const $options = $('.form__select option');

    $('.form__select option[selected]').removeAttr('selected');

    $options.each(function() {
      if ($(this).val() == code) {
        $(this).attr('selected', 'selected');
      }
    });
  }

  handleCoinSelect() {
    $('.form__select--coin').on('change', function() {
      $('.form').submit();
    });
  }

  handleStateSelect() {
    const states = States.getStates();

    return Object.keys(states).map((key, index) => {
      return (
        <option value={states[key]} key={index}>{key}</option>
      );
    });
  }

  componentDidMount() {
    this.handleOptionSelected();
    this.handleCoinSelect();
  }

  render() {
    const statesOptions = this.handleStateSelect();

    return (
      <form action='/simulate' method='post' className='form'>
        <div className='form__select-box'>
          <div className='select-box__icon'>
            <img src={pinDrop} id='pin-drop'/>
          </div>
          <select className='form__select form__select--state' name='state'>
            {statesOptions}
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
    );
  }
}
