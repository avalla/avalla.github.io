import { saveAs } from 'file-saver';

export function savePDF() {
  saveAs('/resume.pdf', `andrea-valla-software-architect-product-engineer-${new Date().getFullYear()}.pdf`);
}
