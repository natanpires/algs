export interface PatientData {
  patientId: string;
  visitDate: string;
  paid?: boolean;
  treatmentCodes?: number[];
}

export function serialize(patientData: PatientData[]): string {
  let oldPatient = '';
  return patientData
    .sort((a, b) => {
      if (a.patientId === b.patientId) {
        return +new Date(a.visitDate) - +new Date(b.visitDate);
      }
      if (a.patientId < b.patientId) { return -1; }
      if (a.patientId > b.patientId) { return 1; }
      return 0;
    })
    .reduce((acc, cur) => {
      const nextPatient = serializePatient(cur, oldPatient === cur.patientId);
      oldPatient = cur.patientId;
      if (acc && nextPatient) {
        return `${acc}\n${nextPatient}`;
      }
      return acc + nextPatient
    }, '');
}

function serializePatient(patientData: PatientData, patientId: boolean): string {
  const paid = patientData.paid ? "Y" : "N";
  const codes = typeof patientData.treatmentCodes === 'undefined'
    ? ''
    : patientData.treatmentCodes?.join(",");

  return patientId 
    ? `+${patientData.visitDate}|${paid}|${codes}`
    : `>${patientData.patientId}\n+${patientData.visitDate}|${paid}|${codes}`;
}

function getMatches(text: string, regex: RegExp) {
  return [...text.matchAll(regex)].map(a => a.index);
}

export function deserialize(patientString: string): PatientData[] {
  const matches = getMatches(patientString, /[>]/gi)
  const patientsArray: string[] = [];
  matches
    .forEach(
      (stringIdx, i) => {
        const patient = patientString.substring(stringIdx || 0, matches[i + 1]);

        if (getMatches(patient, /[+]/gi).length > 1) {
          const patientDates = patient.split('+');
          const multipleData = patientDates.slice(1).map((date) => '>' + patientDates[0].substr(1,8) + '\n+' + date);
          patientsArray.push(...multipleData);
        } else {
          patientsArray.push(patient)
        }
      }
    );
  return patientsArray.map(deserializePatient);
}

function deserializePatient(patientString: string): PatientData {
  const lines = patientString.split("\n");
  const segments = lines[1].split("|");
  
  return {
    patientId: lines[0].substr(1),
    visitDate: segments[0].substr(1),
    paid: segments[1] === "Y",
    treatmentCodes: segments[2] && segments[2].split(",")?.map(Number) || []
  };
}
