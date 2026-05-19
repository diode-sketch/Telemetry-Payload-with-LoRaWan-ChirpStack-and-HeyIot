const SHEET_NAME = "Hoja1";

function doPost(e) {
  try {

    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`La hoja ${SHEET_NAME} no existe`);
    }

    const data = JSON.parse(e.postData.contents);

    Logger.log(JSON.stringify(data));

    // ChirpStack / TTN compatible
    const payload =
      data.decoded_payload ||
      data.object ||
      data.uplink_message?.decoded_payload ||
      {};

    const gps =
      payload.gps ||
      payload.gps_10 ||
      {};

    const fila = [

      new Date(data.time || Date.now()),

      payload.temperature_3 ||
      payload.temperature_7 ||
      "",

      payload.humidity_2 ||
      payload.humidity_6 ||
      "",

      payload.barometer_8 || "",

      gps.latitude || "",
      gps.longitude || "",
      gps.altitude || "",

      payload.voltage_1 || "",

      payload.analog_in_9 || ""

    ];

    sheet.appendRow(fila);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          status: "success"
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {

    Logger.log(err);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          status: "error",
          message: err.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        time: "2026-05-19T10:00:00Z",
        object: {
          temperature_3: 22.5,
          humidity_2: 55,
          barometer_8: 1013.2,
          gps_10: {
            latitude: 40.41,
            longitude: -3.70,
            altitude: 650
          }
        }
      })
    }
  };
  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}