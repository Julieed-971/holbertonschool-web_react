import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils'

function Footer({isIndex = false}) {
    const currentYear = getCurrentYear()
    const footerCopy = getFooterCopy(isIndex)

    return (
        <>
        <div className="App-footer">
            <p>Copyright {currentYear} - {footerCopy}</p>
        </div>
        </>
    )
}

export default Footer