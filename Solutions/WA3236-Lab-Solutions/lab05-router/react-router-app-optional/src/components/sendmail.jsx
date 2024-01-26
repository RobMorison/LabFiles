import React from 'react';
import { useSearchParams } from 'react-router-dom'

function SendMail() {
    const [searchParams, setSearchParams] = useSearchParams();
    return (<div className='page pageContent' >
      Name: {searchParams.get('name')}<br />
      Email: {searchParams.get('email')}
    </div>);
  }

export default SendMail;