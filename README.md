# Telemetry Payload with LoRaWan and HeyIot for Asgard@SpacePole
Cpp tool to allow a payload to reach airborne mode 1g (up to 50,000m - 164,000ft) ensuring constant telemetry signals and automatic post on a google sheet.
It uses an integration on google apps script and HeyIot for sending data. Credit for this is given to beegee-tokio (bernd.giesecke@rakwireless.com) for his repo Wisblock API v-2. If you have any doubts, please contact me (mariano.j.borrero@gmail.com)
<img width="1839" height="691" alt="image" src="https://github.com/user-attachments/assets/63e1cbfc-2b32-4ecb-91aa-a8687d90ba74" />
The HeyIot console processing data.

Why did we do this project?

This project was created to better understand how real-world LoRaWAN telemetry systems operate beyond simple isolated examples. While many tutorials explain individual components, we wanted to build and document a complete workflow involving telemetry payload encoding, ChirpStack integration, and cloud visualization through HeyIot.

Our goal was not only to make the system work, but also to learn how devices, gateways, network servers, and dashboards interact inside a real LoRaWAN infrastructure.

During development, we faced challenges involving payload decoding, communication reliability, platform interoperability, and high-altitude telemetry transmission. Through continuous testing and debugging, we eventually managed to enable airborne 1G mode and maintain telemetry communication during flights exceeding 30,000 meters in altitude.

This repository is open source because we believe practical experimentation and accessible documentation are some of the best ways to learn embedded systems and IoT technologies. We hope this project can help other students, makers, and developers better understand LoRaWAN telemetry workflows and encourage further experimentation within the open-source community.

There is a video on the repo on how to use the HeyIot Console, although im not very skilled at video editing.

We did this for the Asgard@SpacePole launch experiment (https://www.facebook.com/groups/153214554744003/). It was a mind-bending experience. My thanks to Erik de Schrijver for coordinating it all! We received not only the chance to deploy our payloads, but to learn how a scientist's life is from people who actually are so.
Wonderful experience, and even better thanks to my incredible colleagues!

<img width="1906" height="843" alt="image" src="https://github.com/user-attachments/assets/4919f53d-13a4-48a0-98ac-622e87a14878" />
The trajectory our payload went through while providing live data represented on Google Earth

<img width="648" height="611" alt="image" src="https://github.com/user-attachments/assets/d43ee427-2057-409f-87a0-53ea348f372a" />

This is our payload.

Link to the official, shared google earth file: https://earth.google.com/web/@51.03485204,3.9858575,9.3073728a,141273.48611511d,35y,43.86148354h,60.65201582t,-0r/data=CgRCAggBMikKJwolCiExaDhtdmx1QWF4NzFrUW91cER5OUxkYUhoSDdEU2dEVnIgAToDCgEwQgIIAEoHCM2w0zUQAQ?authuser=0

What did we learn?

One of the most important lessons we learned throughout this project was that real engineering rarely works perfectly on the first attempt. Many parts of the system required repeated testing, debugging, and redesign before achieving stable telemetry communication.

We also gained a much deeper understanding of how LoRaWAN infrastructure operates as a complete ecosystem rather than as isolated components. Working with payload encoding, ChirpStack integration, cloud dashboards, and telemetry visualization helped us understand how devices, gateways, and servers communicate in real-world conditions.

Another important aspect of the project was learning how critical documentation and open-source collaboration are within technical communities. Reading repositories, analyzing examples, and studying existing implementations allowed us to solve problems that initially seemed beyond our level of experience.

The project also strengthened our ability to work collaboratively under technical constraints. Dividing tasks, troubleshooting issues together, and testing different approaches taught us the importance of communication and teamwork in engineering projects.

Finally, adapting the system for high-altitude operation and successfully maintaining telemetry communication above 30,000 meters showed us how experimentation and persistence can transform theoretical knowledge into practical results.
