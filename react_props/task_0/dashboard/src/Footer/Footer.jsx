import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils'

function Footer() {
    const currentYear = getCurrentYear()
    const footerCopy = getFooterCopy(false)

    return (
        <>
        <div className="App-footer">
            <p>Copyright {currentYear} {footerCopy}</p>
        </div>
        </>
    )
}

export default Footer