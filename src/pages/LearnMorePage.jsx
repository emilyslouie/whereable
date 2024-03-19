import Navbar from "../components/Navbar/Navbar";
import TableOfContents from "../components/TableOfContents/TableOfContents";
import "./pages.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import UserScenario from "../assets/user-scenario.png";
import Users from "../assets/users.png";
import SoundToData from "../assets/sound-to-data.png";
import SoundSignificance from "../assets/sound-significance.png";
import CrossCorrelation from "../assets/cross-correlation.png";
import Belt1 from "../assets/belt1.jpg";
import Morph from "../assets/morph.png";
import Cdm from "../assets/cdm.png";

function LearnMorePage() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>What is WHEREable?</h1>
        <p>
          WHEREable is a two-piece, wearable device that detects loud sounds
          from the environment, and tells you the direction that it came from.
        </p>
        <h1 className="subtitle">Looking for a one pager?</h1>
        <a
          className="link-button"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View our symposium poster
        </a>
      </div>
      <div className="content">
        <div className="content-text">
          <h2 id="users">Who is WHEREable made for?</h2>
          <p>
            WHEREable is for individuals who may struggle to determine where a
            sound originated from. This particularly affects individuals with
            varying degrees of hearing loss. Similar to how the brain uses two
            eyes to perceive depth, the brain uses two ears to determine where a
            sound is coming from by comparing how long it takes for the sound to
            reach each ear. This can impact road safety because individuals with
            hearing loss may be unable to quickly determine the location of a
            nearby car or emergency vehicle using a siren.
          </p>
          <img src={UserScenario} />
          <h3 id="hearing-aids">Wait… why don’t hearing aids work?</h3>
          <p>
            Many individuals with hearing loss do not benefit from traditional
            hearing aids or other forms of amplification. For example,
            unilateral cochlear implant recipients must have surgery to get an
            implant on the other ear. Members of the Deaf Community often choose
            not to use hearing aids or cochlear implants. People with complex or
            mixed hearing loss receive limited benefit from traditional
            amplification.
          </p>
          <img src={Users} />
          <h2 id="state-of-the-art">What solutions already exist?</h2>
          <p>
            Our target users currently do not use any technology for sound
            localization or situational awareness purposes beyond traditional
            hearing aids and cochlear implants. Instead, individuals frequently
            rely on:
          </p>
          <p>
            1. Visual hyper-vigilance – tiring, and unable to fully compensate
            for the loss of sound localization abilities
          </p>
          <p>2. Relying on other people – common, but limits independence</p>
          <p>
            Tools like sound recognition on iOS exist, but they struggle with
            low accuracy, do not indicate direction, and are often unhelpful for
            those with some hearing. Solutions to determine the direction and
            sources of sound are available and well established, but they are
            geared towards the construction industry, for large-scale
            site-measurement and monitoring purposes.
          </p>
          <p>
            Also, many solutions exclusively take the approach of addressing
            hearing loss by trying to restore hearing. However, many in the Deaf
            Community do not consider hearing loss a disability, and as
            mentioned earlier, may choose not to use hearing aids or cochlear
            implants.
          </p>
          <h2 id="specs">Key Specifications</h2>
          <p>
            After conducting research and interviewing individuals with
            professional or lived experience with hearing loss at the Biomedical
            Stakeholder Cafe, we determined that there was a need for a wearable
            device that detects the direction of sound and communicates it to
            the user. Speed, accuracy, and portability were identified as key
            requirements.
          </p>

          <h3 id="sis">Situation Impact Statement</h3>
          {/* make this a block quote */}
          <p>
            Design a portable, wearable device to be used by people with hearing
            loss who struggle with localizing sound direction in their daily
            life. This device also needs to be accurate, and in general help
            improve safety, particularly in the scope of pedestrian hazards.
          </p>
          <h2 id="overall-system">Overall System</h2>
          <p>WHEREable can be broken up into 3 main parts:</p>
          <p>
            1. Sound Reception – We receive the sound from the environment and
            turn it into something that we can analyze
          </p>
          <p>
            2. Signals Processing – We process the data and calculate which
            direction it came from
          </p>
          <p>
            3. User Interface – We tell the user what direction the sound came
            from
          </p>
          <h2 id="iteration1">Iteration 1 - Proving it Works</h2>
          <h3 id="sr1">Sound Reception</h3>
          <p>
            During this iteration, we used a sun hat that had 4 microphones
            equidistant from each other on 4 sides of the hat – front, back,
            left, and right. The microphones used were Comica CVM-V02O eXternal
            Line Return (XLR) Microphones with an omnidirectional polar pattern
            for use between 100Hz-12KHz and sensitivity of -35dBV ± 3dbV. We
            also used a 4-channel mixer and Focusrite Audio Interface which
            takes the 4 microphone signal inputs and performs 44.1KHz, 24-bit
            simultaneous A to D conversion.
          </p>
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why did we layout the microphones like this?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The microphones are positioned in a square and arranged
                  laterally with a microphone on the front, back, left and right
                  positions relative to the user’s head. While sounds travel in
                  3 dimensions, we assume that pedestrian and outdoor safety
                  will be on ground level therefore vertical (up-down)
                  directionality is much less important to the user than lateral
                  (front-back, left-right) directionality. Therefore, the
                  microphone array is arranged to best capture the signal delay
                  between lateral directions.
                </p>
                <p>
                  When deciding on a distance between microphones, we considered
                  both the spatial aliasing and quantization of signal delay. To
                  avoid spatial aliasing of a sound signal, the distance between
                  microphones must be less than half the wavelength of the
                  frequency to be measured which implies a distance of 19 cm to
                  avoid spatial aliasing for most traffic noises. However, most
                  real world sounds, including emergency vehicle sirens, are
                  more complex with amplitude or frequency modulation at lower
                  frequencies that will not be impacted by spatial aliasing at
                  larger distances between microphones, so 19cm is not a strict
                  maximum.
                </p>
                <p>
                  The microphones also need to be far enough apart to have a
                  recognizable signal delay by the signal processing code. From
                  testing, we found that having the microphones positioned as
                  far apart as one’s ears is enough to get a consistent signal
                  delay.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does sound transform to digital data?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The goal of the signal transformation system is to transform
                  sound to a digital, computer-readable signal. The system,
                  shown below in Figure 2, takes a sound signal input, passes
                  through a microphone transducer, applies a voltage gain, and
                  finally undergoes an analog-to-digital (A to D) conversion to
                  output a discrete-time digital signal that is readable by the
                  signal processing code.
                </p>
                <img src={SoundToData} />
                <p>
                  The sample rate and bit depth of A to D conversion determines
                  how accurately the digital signal represents the original
                  analog signal. Higher sample rates and bit depths result in
                  more accurate data, however, it results in increased costs and
                  weight of the hardware, as well as time computational costs of
                  using more data. Following the Nyquist theorem, our design
                  must have at least twice the sample rate of the frequency of
                  signals we want to measure. The microphone sensitivity and
                  voltage gain should be chosen to use as much of the available
                  bit depth thereby reducing quantization error, while ensuring
                  bit availability without clipping sound intensities up to
                  120dB sound pressure level (SPL) which is approximately the
                  human intensity threshold for pain.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 id="sp1">Signals Processing</h3>
          <h4>Sound Significance</h4>
          <p>
            Determining when to alert the users of a sound’s direction involves
            the concept of sound significance such that sounds can be classified
            into two categories: 1) an event of interest, and 2) ambient noise.
            From a high level point of view, an event of interest is defined by
            an emergency-like sound with the characteristic that it has a
            significantly higher relative power value compared to the previous
            state. Relating to concepts from signals theory, a threshold that is
            too low could result in alerting the user too often and cause alarm
            fatigue. On the other hand, a threshold that is too high could
            result in missing significant sounds and failing to alert the user
            of important events.
          </p>
          <img src={SoundSignificance} />
          <p>
            Through some initial testing, it was identified that this worked
            well at determining events of interest in quiet environments.
            However, in loud and noisy environments, the increase in power is
            smaller relative to the base level of noise. As a result, a variable
            threshold for loud and quiet situations needs to be explored.
          </p>
          <h4>Signals Processing</h4>
          <p>
            Initially, we identified three possible options for our choice of
            programming language: Python, MATLAB, or C/C++. MATLAB and C/C++
            would enable us to speed up performance and make code more compact,
            however our team is unfamiliar with working with these languages.
            Thus, we chose to use Python despite it having a slower performance
            because we can start with a higher-level language and then move to a
            lower-level language later if needed.
          </p>
          <p>
            To determine which direction the sound came from, we use the concept
            of cross-correlation. Cross-correlation is a signals processing
            concept that measures the similarity between two signals as a
            function of their offset or “lag”. This information can then be used
            to determine the time delay between the same signal arriving at two
            sensors.
          </p>
          <img src={CrossCorrelation} />
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why do we need 4 microphones?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We conducted testing with just two microphones using a single
                  cross-correlation to determine if this would be sufficient. We
                  found that it resulted in a “cone of confusion” effect where
                  we could not distinguish between sounds originating from
                  directly in front of or directly behind the microphone array.
                  We decided to move to using four microphones for better sound
                  resolution to meet our requirement. It is also possible that 3
                  microphones can be used instead to reduce overall power draw
                  while getting a similar accuracy with our algorithm. We will
                  test this in the next iteration.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 id="ui1">User Interface</h3>
          <p>
            Based on the user requirements, reaction time, and comfort were
            prioritized. As a result, we created a prototype of a belt with 8
            coin vibration motors that align with 8 directions. When a direction
            is identified, a signal is sent to the Arduino Uno to turn on a
            specific motor to provide the user haptic feedback in that
            direction.
          </p>
          <img src={Belt1} />
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What about other form factors?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The functions of the device that needed to be selected are the
                  wearable medium and the communication method. Options were
                  brainstormed and ranked from best (green) to worst (red) based
                  on prototype feasibility, wearable weight, comfort, and
                  potential reaction time from the user in a morphological
                  chart.
                </p>
                <img src={Morph} />
                <p>
                  The best solutions were combined in various ways and analyzed
                  further in a computational decision matrix. This method
                  ensures that the chosen design adequately fulfills the most
                  important requirements. In this case, the lowest score
                  indicates the best outcome. Given the results, the best option
                  is to prototype a bracelet that provides haptic alerts in the
                  direction of the sound while the second best option is
                  prototyping a haptic belt. We chose to first pursue
                  prototyping the haptic belt instead of the haptic bracelet
                  because the bracelet is a downsized version of the belt, and
                  we wanted to verify the concept of using haptic feedback
                  before scaling it down.
                </p>
                <img src={Cdm} />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <TableOfContents />
      </div>
    </>
  );
}

export default LearnMorePage;
