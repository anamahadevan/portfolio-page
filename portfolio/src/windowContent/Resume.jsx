import './WindowContent.css'
import resumePdf from '/src/assets/resume.pdf'


export default function Resume() {
  return (
    <>
      <div className='window-container'>
        <iframe className='' src={resumePdf} width="100%" height="600px"></iframe>
      </div>
    </>
  );
}
