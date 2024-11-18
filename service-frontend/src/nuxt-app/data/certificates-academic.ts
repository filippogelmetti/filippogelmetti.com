// Define the shape of an academic certificate
export interface AcademicCertificate {
  degree: string;
  specialization: string;
  institution: string;
  thesis: string;
}

// Initialize the dataset
export const academicCertificates: AcademicCertificate[] = [
  {
    degree: "Master degree in computer science",
    specialization: "Image Processing",
    institution: "Università di Milano Bicocca",
    thesis:
      "Image processing techniques applied to an OCR system. Prof. Raimondo Schettini – cor. Alberto Roli",
  },
  {
    degree: "Bachelor degree in computer science",
    specialization: "System Development",
    institution: "Università di Milano Bicocca",
    thesis:
      "Symbolic execution of object-oriented languages in presence of aliasing. Prof. Mauro Pezzè – cor. Giovanni Denaro",
  },
];
