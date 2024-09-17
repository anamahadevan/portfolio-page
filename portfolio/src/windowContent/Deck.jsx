import './WindowContent.css'
import deckPdf from '/src/assets/deck.pdf'


export default function Deck() {
  return (
    <>
      <div className='window-container'>
        <iframe className='' src={deckPdf} width="100%" height="600px"></iframe>
      </div>
    </>
  );
}

