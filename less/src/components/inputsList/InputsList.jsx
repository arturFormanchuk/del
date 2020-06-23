import React from 'react';
import './InputsList.css'
import {InputText} from 'primereact/inputtext';
import {MultiSelect} from 'primereact/multiselect';
import { Button } from 'primereact/button';

export const InputsList = () => {
  const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
  ];
  return (
    <div className="card d-flex">
      <h3>Edit subscription plan</h3>
      <span className="p-float-label margin-bot-25">
        <InputText id="namePlan" className="padding-b-25px"/>
        <label htmlFor="namePlan">Name of the plan</label>
      </span>
      <span className="p-float-label margin-bot-25">
        <InputText id="subscription1"/>
        <label htmlFor="subscription1">subscription1</label>
      </span>
      <span className="p-float-label margin-bot-25">
        <InputText id="subscription2"/>
        <label htmlFor="subscription2">subscription2</label>
      </span>
      <span className="margin-bot-25">
        <MultiSelect options={citySelectItems}/>
      </span>
      <span>
      <Button label="Save" className="paddingBtn"/>
      </span>
    </div>
  );

}

