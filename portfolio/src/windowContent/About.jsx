import './WindowContent.css'

export default function About() {

    return (
        <>
         <div className="about-container">
          <div className="tablist">
            <li id="selected-tab"><a>Profile</a></li>
            <li><a>Stats</a></li>
            <li><a>SNS</a></li>
            <li><a>Help</a></li>
            <li><a>Credits</a></li>
          </div>

         <div className="about-back">
            <div className="window-body">
                <p> 
                    <img className='profile-pic' src="https://i.imgur.com/8SQa02q.png"/> 
                    <br /> <strong>name:</strong> ana mahadevan <br />
                    <strong>pronouns:</strong> they/she <br />
                </p>
            </div>
            {/* /

            <div class="window-body">
   

     </p>
    </div>
            
            
            // */}

         </div>

          {/* //
          
          <article class="window" style="height:200px" id="panel-1" role="tabpanel">
  <div id="London" class="tabcontent">
    <div class="window-body">
    <p> <img src="https://i.imgur.com/8SQa02q.png" style="width:auto;height:100px;border:2px inset #ffddec"> 
    <br> <strong>system:</strong> <mark> decoden98 </mark>
    <br> <strong>name:</strong> coco, dulce
    <br> <strong>age:</strong> 17 (02.14.06)
    <br> <strong> ethnicity:</strong> black british 
    <br> <strong>sexuality:</strong> lesbian
    <br> <strong>pronouns:</strong> she/they
     </p>
    </div>
    
    <div id="userdata">
    
    <ul class="tree-view" style="width:100px;height:160px"><div class="scroll2">
    <li><strong> <a style="font-family:kiwi;font-size:14px;color:#ffbcd9;text-shadow: 1px 0px #ff70ae, -1px 0px #ff70ae, 0px 1px #ff70ae, 0px -1px #ff70ae, 0 0;"> Welcome </a></strong></li>
    I am dulce, the unique digi-gal assigned to this pc! <br><br> Things may be confusing as this product is still in the earlier stages of development. Therefore, it is my job to aid you. <br><br> Feedback, queries and msgs are to be sent in the chatbox below. <br><br> For the best experience, please view <mark>decoden</mark> on chrome: it is not built with mobile layouts in mind. <br><br> <i> Thank you for purchasing, I hope you enjoy your experience on the latest <mark> <strong> decoden. </strong></mark></i>
    </div>
    </ul>

    </div>
    </div>
  
</article>
          
          
          // */}



         </div>
        </>
    )
}