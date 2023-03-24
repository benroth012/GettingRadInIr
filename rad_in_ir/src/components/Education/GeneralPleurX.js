import general_pleurx1 from './EducationPhotos/general_pleurx1.png';
import general_pleurx2 from './EducationPhotos/general_pleurx2.png';

export const GeneralPleurX = () => (
    <div className="Education">
        <h1><b>PleurX Drainage Catheter</b></h1>
        <hr/>
        <p>
            Your doctor has recommended that a PleurX drainage catheter be
            placed in your chest. The catheter can be used to drain extra fluid from
            around your lungs. Talk with your doctor or nurse about any questions or
            concerns you may have about the catheter.
        </p>
        <p>
            <img src={general_pleurx1} style={{float: `right`, height: `300px`}}/>
            <h4><b>Your Pleural Space</b></h4>
            The <b>pleura</b> are thin layers of tissue that cover your lungs. A small space
            between the chest wall and your lungs is called the <b>pleural space.</b>
            Normally this space is filled with a small amount of fluid. If too much fluid
            builds up in the pleural space, it can make you feel short of breath.
        </p>
        <p>
            <h4><b>How to Prepare for Your Procedure</b></h4>
            Follow these instructions to prepare for your PleurX catheter placement:
            <ul>
                <li>Tell your doctor if you take any of the following:</li>
                <ul>
                    <li>Aspirin or any products that contain aspirin</li>
                    <li>Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) such as Advil, Aleve, Motrin, Naprosyn or
                        Ibuprofen
                    </li>
                    <li>Blood thinners such as Coumadin, Plavix, Lovenox, Pradaxa, Xarelto, Eliquis or Heparin</li>
                    <li>Medicine for diabetes</li>
                    <li>Any medicine you are taking to treat cancer</li>
                </ul>
                <li><b>Call your doctor if you become ill within two days of your
                    procedure.</b> This would include a fever, cold, flu, or sore throat
                    symptoms.
                </li>
                <li>Do not eat solid foods after midnight the night before your procedure.</li>
                <li>You may drink clear liquids up to <b>1 hour</b> before your procedure including:</li>
                <ul>
                    <li>Water</li>
                    <li>Apple or cranberry juice</li>
                    <li>Coffee or tea without milk</li>
                    <li>Jell-O</li>
                </ul>
            </ul>
        </p>
        <p>
            <h4><b>The Day of Your Procedure</b></h4>
            Your procedure will be done in the <b>Bronchoscopy Lab on the 8th floor of
            Doan Hall.</b> The procedure takes 30 to 60 minutes. After your procedure,
            you will go to the recovery area. You may stay in the recovery area for
            up to 4 hours after the procedure.
            <br/>
            On the morning of your procedure:
            <ul>
                <li>You may shower, but do not use any cream or lotions.</li>
                <li>Take <b>only</b> the medicines your doctor has told you to take before the procedure.</li>
                <li>Wear your glasses instead of contact lenses. If you do not have
                    glasses, bring a container for your contact lenses.
                </li>
                <li>Leave all valuables and jewelry at home.</li>
                <li>Bring only the money you need (e.g., for a newspaper or parking).</li>
                <li>If you are on oxygen at home, bring an extra tank of oxygen with you for the ride home.</li>
            </ul>
        </p>
        <p>
            <h4><b>During the Procedure</b></h4>
            <ul>
                <img src={general_pleurx2} style={{float: `right`, height: `400px`}}/>
                <li>An intravenous (IV) line may be put into a vein in your arm to give you
                    medicine to help you feel drowsy and control pain. You will not be
                    asleep during the procedure.
                </li>
                <li>If you have fluid around only one lung, the catheter will be placed
                    on that side of your chest. If you have fluid around both lungs, your
                    doctor will choose the best side for the catheter.
                </li>
                <li>The doctor will clean the site with an antiseptic product.
                    The site is numbed with a shot of numbing medicine.
                </li>
                <li>The catheter is put through a small incision (cut) in the skin and then
                    moved into the pleural space. One end of the catheter will stay inside your
                    chest and the other end will be outside your body.
                </li>
                <li>The catheter line has many holes to let the fluid
                    drain. It also has a one-way valve that lets the fluid
                    to come out, but does not allow air to go into the catheter.
                </li>
                <li>When the procedure is done, a cap will be placed on the end of
                    the catheter and the site will be covered with a dressing.
                </li>
            </ul>
        </p>
        <p>
            <h4><b>After Your Procedure</b></h4>
            <ul>
                <li><b>Do not</b> lift, push or pull more than 10 pounds for 14 days after your
                    catheter is placed.
                </li>
                <li>You may take a shower or sponge bathe with the catheter in place.
                    Each time you shower or sponge bathe cover your catheter dressing
                    to protect it from getting wet. Use a waterproof cover such as Saran
                    Wrap or a heavy piece of plastic, such as gallon size Ziplock bag.
                    Tape the waterproof cover over the dressing. Use paper tape as that
                    will not loosen if water hits it.
                </li>
            </ul>
        </p>
        <p>
            <h4><b>When to Call the Doctor</b></h4>
            <b>Call your doctor right away if you have any of the following:</b>
            <ul>
                <li>A fever of 100.4º Fahrenheit (38° degrees Celsius) or higher</li>
                <li>Shortness of breath or chest pain</li>
                <li>Redness, swelling, tenderness or warmth around where the catheter exits your skin</li>
                <li>Fluid leaks where the tube exits your skin</li>
                <li>Catheter line falls out of your chest</li>
            </ul>
        </p>
        <p>
            Reprinted with permission, Copyright 2020, Patient Education, The Ohio State University Comprehensive Cancer
            Center – Arthur G. James Cancer Hospital & Richard J. Solove Research Institute, Columbus, Ohio. All rights
            reserved.
        </p>
    </div>
)