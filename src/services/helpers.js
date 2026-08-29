import { saveAs } from 'file-saver';

export function savePDF() {
  saveAs('/resume.pdf', `andrea-valla-staff-product-engineer-${new Date().getFullYear()}.pdf`);
}
