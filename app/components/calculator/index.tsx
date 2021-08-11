import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Results from '../results'

interface Biga {
  flower: string
  watter: string
  yeast: string
}

interface Dough {
  watter: string
  salt: string
  yeast: string
}

export interface Calculation {
  biga: Biga
  dough: Dough
}

const Calculator = () => {
  const [number, setNumber] = useState(4)
  const [weight, setWeight] = useState(270)
  const [data, setData] = useState<Calculation | null>(null)

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setNumber(isNaN(value) ? 0 : value)
    setData(null)
  }

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setWeight(isNaN(value) ? 0 : value)
    setData(null)
  }

  const calculate = () => {
    const flower = weight * number * 0.52
    const result = {
      biga: {
        flower: flower.toFixed(2),
        watter: (flower * 0.45).toFixed(2),
        yeast: (flower * 0.003).toFixed(2),
      },
      dough: {
        watter: (flower * 0.2).toFixed(2),
        salt: (flower * 0.03).toFixed(2),
        yeast: (flower * 0.001).toFixed(2),
      },
    }
    setData(result)
  }

  return (
    <>
      <h1>Pizza calculator</h1>
      <div className='form-line'>
        <TextField
          variant='outlined'
          type='number'
          label='Number of pizzas'
          value={number}
          onChange={handleNumber}
        />
      </div>
      <div className='form-line'>
        <TextField
          variant='outlined'
          type='number'
          label='Dough weight'
          value={weight}
          onChange={handleWeight}
        />
      </div>
      <div className='form-line'>
        <Button variant='contained' color='primary' onClick={calculate}>
          Calculate
        </Button>
      </div>
      <Results data={data} />
    </>
  )
}

export default Calculator
