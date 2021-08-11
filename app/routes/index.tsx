import type { MetaFunction } from 'remix'
import Calculator from '../components/calculator'

export let meta: MetaFunction = () => {
  return {
    title: 'Pizza Calculator',
    description: 'Simple calculator to get perfect dough',
  }
}

export default function Index() {
  return <Calculator />
}
