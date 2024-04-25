
import resumePdf from '/src/assets/resume.pdf'


export default function Resume() {
  return (
    <>
      <div>
        <iframe className='' src={resumePdf} width="100%" height="600px"></iframe>
      </div>
    </>
  );
}
