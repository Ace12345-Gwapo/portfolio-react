// Footer copyright text comes from the portfolio data file.

import { portfolio } from '../data/portfolio'

function Footer() {
  return <footer>{portfolio.footer.text}</footer>
}

export default Footer
