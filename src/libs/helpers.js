import { saveAs } from "file-saver"

export function savePDF() {
  saveAs(
    "/avalla-resume-2021.pdf",
    `avalla-resume-${new Date().getFullYear()}.pdf`
  )
}
