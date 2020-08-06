import React, { TextareaHTMLAttributes }from 'react';

import './styles.css';

interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<Textarea> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={ name }>{ label }</label>
      <textarea id={ name } {...rest}/>
    </div>
  );
}

export default Textarea;