# Asgard@SpacePole: High-Altitude LoRaWAN Telemetry

This project provides the firmware and architecture for an airborne LoRaWAN telemetry payload, successfully tested up to 50,000m (164,000ft).

##  The Mission
Developed for the **Asgard@SpacePole** launch, this system was designed to move beyond isolated IoT tutorials, creating a full end-to-end workflow:
- **Payload Encoding:** Custom C++ logic.
- **Network:** ChirpStack LoRaWAN infrastructure.
- **Cloud:** Real-time data ingestion via HeyIot and Google Sheets.

##  Tech Stack
| Component | Technology |
| :--- | :--- |
| **Firmware** | C++ (WisBlock API v2 by beegee-tokio) |
| **Network** | LoRaWAN / ChirpStack |
| **Backend** | HeyIot |
| **Data Logging** | Google Apps Script + Sheets |

##  Flight Data
Our payload successfully tracked a trajectory visualized on Google Earth:
[Link to Google Earth File](https://earth.google.com/web/@51.03485204,3.9858575,9.3073728a,141273.48611511d,35y,43.86148354h,60.65201582t,-0r/data=CgRCAggBMikKJwolCiExaDhtdmx1QWF4NzFrUW91cER5OUxkYUhoSDdEU2dEVnIgAToDCgEwQgIIAEoHCM2w0zUQAQ?authuser=0)

##  Getting Started
1. **Hardware:** Built on the RAKWireless WisBlock.
2. **Firmware:** Utilize the provided C++ code.
3. **Integration:** Connect your ChirpStack instance to HeyIot to push data to your Google Sheet integration.

##  Acknowledgments
- **Credit:** Bernd Giesecke (WisBlock API v2).
- **Coordination:** Erik de Schrijver (Asgard@SpacePole).
- **Contact:** [mariano.j.borrero@gmail.com](mailto:mariano.j.borrero@gmail.com)

---
*Created for the Asgard@SpacePole mission. Open source, experimental, and built for the stratosphere.*
