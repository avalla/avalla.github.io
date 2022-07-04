import { saveAs } from "file-saver"

export function savePDF() {
  saveAs(
    "/avalla-resume.pdf",
    `avalla-resume-${new Date().getFullYear()}.pdf`
  )
}
