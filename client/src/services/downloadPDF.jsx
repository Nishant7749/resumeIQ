import jsPDF from 'jspdf'

export const downloadPDF = (report)=> {

    const pdf = new jsPDF()

    pdf.setFontSize(22)
    pdf.text("Resume Analysis Report", 20, 20)

    pdf.setFontSize(14)
    pdf.text(`Candidate: ${report.Analysis.candidate}`, 20, 35)

     pdf.setFontSize(14)
    pdf.text(`Summary: ${report.Analysis.summary}`, 20, 35)

     pdf.setFontSize(14)
    pdf.text(`Skills: ${report.Analysis.skills}`, 20, 35)

     pdf.setFontSize(14)
    pdf.text(`missingSections: ${report.Analysis.missingSections.join(',')}`, 20, 35)

     pdf.setFontSize(14)
    pdf.text(`keywordAnalysis: ${report.Analysis.keywordAnalysis}`, 20, 35)

     pdf.setFontSize(14)
    pdf.text(`Suggestions: ${report.Analysis.suggestions}`, 20, 35)

    pdf.save("resume_report.pdf")
    
}