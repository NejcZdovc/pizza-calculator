import { Calculation } from '../calculator'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

interface Props {
  data: Calculation | null
}

const Results = (props: Props) => {
  if (!props.data) {
    return null
  }

  return (
    <>
      <h2>Biga</h2>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Ingredient</b>
              </TableCell>
              <TableCell align='right'>
                <b>Amount</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                Flower
              </TableCell>
              <TableCell align='right'>{props.data.biga.flower} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Ice Watter
              </TableCell>
              <TableCell align='right'>{props.data.biga.watter} ml</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Dry Yeast
              </TableCell>
              <TableCell align='right'>{props.data.biga.yeast} g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <h2>Dough</h2>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Ingredient</b>
              </TableCell>
              <TableCell align='right'>
                <b>Amount</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                Ice Watter
              </TableCell>
              <TableCell align='right'>{props.data.dough.watter} ml</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Salt
              </TableCell>
              <TableCell align='right'>{props.data.dough.salt} g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Dry Yeast
              </TableCell>
              <TableCell align='right'>{props.data.dough.yeast} g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Results
