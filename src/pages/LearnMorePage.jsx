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
import EndToEnd1 from "../assets/end-to-end.png";
import SoundReception from "../assets/sound-reception.png";
import SoundReception2 from "../assets/sound-reception-diagram.png";
import DetermineAngle from "../assets/determine-angle.png";
import LaptopToZero from "../assets/laptop-to-zero.png";
import ZeroToFive from "../assets/zero-to-five.png";
import Belt48 from "../assets/belt-4-8.png";
import BeltArmband from "../assets/belt-armband.png";
import Armband from "../assets/armband.jpeg";
import EndToEnd2 from "../assets/end-to-end2.png";

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
          href="poster.pdf"
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
          <blockquote>
            Design a portable, wearable device to be used by people with hearing
            loss who struggle with localizing sound direction in their daily
            life. This device also needs to be accurate, and in general help
            improve safety, particularly in the scope of pedestrian hazards.
          </blockquote>
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
          <p>
            If a signal was first received by microphone “B” and then was
            received by microphone “A” with a delay, then we can conclude that
            the sound source must be closer to microphone “B”. Following this
            logic, we conduct a cross-correlation between the “left” and “right”
            microphones, and another between the “front” and “right”
            microphones, and use the delays to classify direction.
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
          <h3 id="end-to-end1">Combining the pieces</h3>
          <p>
            At the end of iteration 1, we were able to demonstrate a fully
            functioning system where we could receive sound, correctly process
            the direction it came from, and communicate that to the user.
            However, the setup was not at all practical for use due to the
            series of mixers and laptops in between the microphones and the
            belt. There is no way someone is going to want to lug the mixers and
            laptop around with them in a backpack… back to the drawing boards
            for us!
          </p>
          <img src={EndToEnd1} />
          <h2 id="iteration2">Iteration 2 - Making it Practical</h2>
          <h3 id="sr2">Sound Reception</h3>
          <img src={SoundReception} />
          <p>
            The bulkiness and cost of our equipment is not feasible for a
            portable and wearable prototype. Therefore we need microphones that
            have preamplification built in and can be run directly from a
            microcontroller and not a bulky XLR port. This led us to prebuilt
            sound sensors, that would act as a microphone, but able to be
            connected to and powered from a microcontroller. We chose the LM386
            Sound Sensor, which has adjustable sensitivity, can be powered with
            the 3.3V or 5V provided by most microcontrollers, and provides a
            real time analog voltage output corresponding to the sound.
          </p>
          <p>
            The compact sound sensor provides analog data, but it is not
            computer readable. We need analog to digital conversion to use the
            data. We chose the MCP3004 analog to digital converter (ADC). It
            provides 10 bit digital conversion and can supply up to 200kHz
            sampling rate from continuous to discrete time. The MCP3004 has 4
            channels to convert all 4 microphones, and also uses serial
            peripheral interface (SPI) serial communication to send the data to
            a microcontroller, much faster than inter-integrated circuit (I2C)
            serial communication. While a chip that uses integrated inter-IC
            sound (I2S) may be easier to process quickly for a microcontroller,
            for sound, most chips only have 2 channels to support stereo audio,
            and the ones that provide 4 are much more difficult to prototype
            with.
          </p>

          <img src={SoundReception2} />
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Why a hat?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ideally a user would be able to mount microphones on different
                  possible articles of clothing on the head, just that the data
                  still maps to the direction the user is facing, while sounds
                  from the ground or in the way of a user. We built mock
                  prototypes of a hat versus sunglasses to help determine how
                  users would react to the different options. While the glasses
                  provided some additional benefits, especially if equipment
                  could be mounted on glasses users already wear everyday, the
                  better ability to conceal the microphones, the better
                  distribution of weight, and more symmetrical positioning
                  confirmed that a hat is the best form factor for sound
                  reception prototype, however microphones on glasses may be a
                  future option to develop.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Tell me more about sampling rates
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  From our testing of iteration 1 we had sound data from our 4
                  microphone array. We used that to help us understand what bit
                  depth and sample rate specifications we need, by downsampling
                  to lower sampling rates and further quantizing the data to
                  lower bit depths, and using that adjusted data we simulated
                  how different data would perform with our signals processing
                  algorithms.
                </p>
                <p>We tested the following:</p>
                <p>- Bit depths (8, 10, 12, 16)</p>
                <p>- Sample rates (100Hz, 1KHz, 10kHz, 44.1kHz)</p>
                <p>
                  Upon testing the data we determined that bit depths between
                  8-16 bits had no conclusive impact. However, lower sampling
                  rates resulted in higher error, however with a noisy
                  relationship. This means that having at least 8 bit depth is
                  likely sufficient, while maintaining higher sampling rates is
                  beneficial.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 id="sp2">Signals Processing</h3>
          <p>
            In the previous iteration, we were using two cross-correlations to
            estimate the delay between a sound signal arriving at different
            microphones. We compared the delay (in samples) to a threshold, and
            used it to classify sound into “front” or “back”, and “left” or
            “right”. In our second iteration, our goal was to reduce the
            reliance on an experimentally-determined threshold and instead
            estimate the sound wave&apos;s angle of arrival. This would allow us
            to numerically evaluate the accuracy of our prototype as and compare
            the performance impact of different sampling rates, number of
            microphones, and algorithms by comparing the Root Mean Square Error
            (RMSE).
          </p>
          <p>
            As shown in the diagram below, we can multiply the delay from our
            cross-correlations by the speed of sound to find the extra distance
            that the sound wave travelled to reach the furthest microphone
            (&Delta;d). We know the distance between the microphones (d{" "}
            <sub>m</sub>), so we can use the sine identity to determine the
            angle of arrival (&Theta;). We then repeat this process for
            different pairs of microphones to generate multiple estimates, then
            take the median estimate to reduce the impact of outliers. Using
            this, we can compare the estimated angle to the actual angle of
            arrival for various test cases and calculate the RMSE to evaluate
            accuracy.
          </p>
          <img src={DetermineAngle} />
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How did we choose the best algorithm?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We compared the performance of 7 algorithms that used
                  different numbers of microphones as well as different methods
                  of reducing multiple estimates to one final estimate. Using 20
                  test files (5 audio files played from a speaker in 4 different
                  directions relative to the prototype) we found that the
                  angle-estimation algorithms consistently performed better than
                  our initial delay-based classification method. Additionally,
                  all of the 4-microphone algorithms were more accurate than the
                  3-microphone algorithms by an average difference in RMSE of 10
                  degrees. We selected the best-performing 4-microphone
                  algorithm to continue optimizing and improving.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 id="integration">Integration</h3>
          <p>
            To move to an embedded design and a compact form factor,
            microcontrollers were explored to replace the signals processing
            code running on a computer. With the consideration that the
            microcontroller will need to host the code, it was important that
            there was support for signals processing libraries such as Scipy to
            maintain high performance in cross correlations.
          </p>
          <p>
            After some memory profiling, it turned out we could go as small as a
            Raspberry Pi Zero, which is the smallest Pi in the market with a
            memory of 512 MB. The code was adapted to run on it including moving
            to smaller microphones connected to an external A to D chip, which
            then connected to the Pi to transmit analog readings as sound sensor
            data. Additionally, it involved setting up a virtual environment and
            learning about various things in the embedded world to get
            functional code working in an integrated environment.
          </p>
          <img src={LaptopToZero} />
          <p>
            A challenge with the Pi migration was that we needed to consider a
            speed vs compact size factor trade off and we realized the
            processing power is not sufficient. With the Raspberry Pi, we could
            no longer have synchronous sound readings and signals processing,
            thus while signal processing was occurring on the data, no sound
            reading was being collected.
          </p>
          <p>
            As a next step, the Raspberry Pi 5 was used with a much higher
            processing power compared to the Raspberry Pi Zero. After setting up
            the Pi and figuring out some setup changes, the same migration code
            performed significantly better on the Pi 5. As we also had access to
            GPIO pins that allow us to output digital signals, another
            realization was that we could directly power and control the motors
            from the Raspberry Pi instead of having to do serial communication
            to another microcontroller (Flora), which would then control the
            motors.
          </p>
          <img src={ZeroToFive} />
          <p>
            The overall embedded design now eliminates the need for a laptop by
            replacing it with the Raspberry Pi 5 to host the signals processing,
            a user interface with motors attached to interact with users, and a
            hat to host the microphones.
          </p>
          <h3 id="ui2">User Interface</h3>
          <p>
            Having completed some testing in our first iteration, we decided to
            move away from the leather belt and to a fabric belt to better
            accommodate people of different body types. This meant that we used
            conductive thread as the connections between the microcontroller and
            the coin vibration motors. Also, through multiple rounds of testing,
            we decided to reduce the number of directions that we classify for
            the user to 4 to prioritize reaction speed rather than granularity.
          </p>
          {/* put photo of belt here */}
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Reducing the bulkiness of the belt
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In the first iteration of the belt, we used a Arduino Uno as
                  the microcontroller. However, this is relatively bulky and
                  does not enable to run our signals processing code in Python.
                  Initially, we switched to an Adafruit Flora which could be
                  sewn into the fabric belt design. This resulted in a
                  significant drop in weight and could be communicated serially
                  to by the Raspberry Pi. However, we found that the
                  communication speed was subpar which led us to directly
                  integrate the motors with the Raspberry Pi itself given that
                  it has enough I/O pins.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How many directions is enough?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Through the Biomedical Stakeholder Cafe, we learned that users
                  would like granularity so that they are sure to look in the
                  correct direction when alerted. However, one of the key
                  requirements of our product was speed. We need to see if there
                  is a tradeoff in speed and accuracy if we give the user more
                  potential directions. We tested a belt with 4 motors for 4
                  directions, and 8 motors for 8 directions. We wrote a Python
                  script that ran a number of different test cases that would
                  activate the motor for the specified direction. The
                  participant&rsquo;s reaction time was recorded, as well as the
                  direction that they thought was specified. The following are
                  the results:
                </p>
                <img src={Belt48} />
                <p>
                  Participants also mentioned that they liked having all 8
                  directions, but noticed that it would take a bit longer to
                  figure out than with only 4 directions. Thus, since we are
                  prioritizing reaction time, we chose to only implement 4
                  directions in the final solution.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What about an armband?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  While testing the 4 motors for 4 directions, and 8 motors for
                  8 directions, we also tested an armband with 4 directions.
                  This is because users had mentioned they wanted a smaller form
                  factor. The armband used an Adafruit Flora.
                </p>
                <img src={Armband} />
                <p>
                  Below are the results from that testing compared to a belt
                  with 4 motors:
                </p>
                <img src={BeltArmband} />
                <p>
                  Users thought that the belt was easier to interpret compared
                  to the armband. This is because the armband takes longer to
                  get used to and map the directions given the arm has pronation
                  and supination motions that do not directly map forward to the
                  front as easily as the belt. In addition, it was evident that
                  while the belt was easier to interpret, the armband had fewer
                  fit issues across the users we tested with. The armband was
                  able to fit snugly on all of the participants, while the belt
                  was both too small on some participants, as well as too large
                  on others. However, due to the issues with mapping directions,
                  we decided to proceed with using the belt as our final form
                  factor.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h2 id="overall">The Current State of WHEREable</h2>
          <p>
            After iteration 2, we are at the state where we can put together all
            the parts into a fully-functioning system. WHEREable consists of a
            hat with 4 sound sensors wired up to an A to D chip which is
            connected to a Raspberry Pi 5 and wired to 4 coin vibration motors
            on a fabric belt.
          </p>
          <img src={EndToEnd2} />
          <p>
            Powered by a 5V 3A phone battery, the product can last up to 8 hours
            while on. The overall cost to manufacture it is $230 which is 3.5
            times cheaper than the cost of traditional hearing aids. Also, the
            overall time it takes from a sound to a user determining the
            direction of sound is 2.3 seconds.
          </p>
        </div>
        <TableOfContents />
      </div>
    </>
  );
}

export default LearnMorePage;
